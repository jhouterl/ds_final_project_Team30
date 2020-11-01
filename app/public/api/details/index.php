<?php

require 'common.php';
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

$stmt = $db->prepare('SELECT p.first_name, p.last_name, c.certification_name, c.certification_agency, pc.earned_date, pc.expiration_date
  FROM Person as p, Certifications as c, Person_Certifications as pc WHERE p.person_id = pc.person_id AND c.certification_id = pc.certification_id AND pc.expiration_date < NOW()');
$stmt->execute();
$memberList = $stmt->fetchAll();

$json = json_encode($memberList, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
