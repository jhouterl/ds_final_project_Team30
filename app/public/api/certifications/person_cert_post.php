<?php

require 'common.php';
$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'INSERT INTO Person_Certifications (person_id, earned_date, expiration_date)
  VALUES (?,?,?,?)'
);


$stmt->execute([
  $_POST['person_id'],
  $_POST['certification_id'],
  $_POST['earned_date'],
  $_POST['expiration_date']
]);

//Step 4: Output
header('HTTP/1.1 303 See other');
header('Location: ../certifications/');
