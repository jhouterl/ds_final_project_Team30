<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();


$stmt = $db->prepare(
  'DELETE FROM Person WHERE person_id = ?'
);


$stmt->execute(
  [
  $_POST['person_id']
]
);


// Step 3: Convert to JSON
//$json = json_encode($memberList, JSON_PRETTY_PRINT);
// $pk = $db->lastInsertId();

//Step 4: Output
header('HTTP/1.1 303 See other');
header('Location: ../records/');
