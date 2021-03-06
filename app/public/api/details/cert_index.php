<?php

require 'common.php';
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('SELECT * FROM Certifications');
$stmt->execute();


$memberList = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($memberList, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
