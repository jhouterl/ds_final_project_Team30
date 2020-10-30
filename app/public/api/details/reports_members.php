<?php

require 'common.php';
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

$stmt = $db->prepare('SELECT person_id, first_name, last_name, radio_number, station_num, email
  FROM Person WHERE person_id=? GROUP BY radio_number, station_num');
$stmt->execute();
$memberList = $stmt->fetchAll();

$json = json_encode($memberList, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
