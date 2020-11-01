<?php

require 'common.php';


// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Person (first_name, last_name, gender, street_address, city, state, zipcode, phone, radio_number, station_num, position_name, email)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
);

$stmt->execute([
  $_POST['first_name'],
  $_POST['last_name'],
  $_POST['gender'],
  $_POST['street_address'],
  $_POST['city'],
  $_POST['state'],
  $_POST['zipcode'],
  $_POST['phone'],
  $_POST['radio_number'],
  $_POST['station_num'],
  $_POST['position_name'],
  $_POST['email']
]);

// If needed, get auto-generated PK from DB
 $pk = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other');
header('Location: ../records/?person_id='. $pk);
