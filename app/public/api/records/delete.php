<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT * FROM Person';
$vars = [];

if (isset($_GET['person_id'])) {
  // This is an example of a parameterized query
  $sql = 'SELECT * FROM Person WHERE person_id = ?';
  $vars = [ $_GET['person_id'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$memberList = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($memberList, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
