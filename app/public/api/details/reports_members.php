<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT first_name, last_name, radio_number, station_num, email FROM Person';
$vars = [];


$stmt = $db->prepare($sql);
$stmt->execute($vars);

$memberList = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($memberList, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
