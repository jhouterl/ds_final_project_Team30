<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

$stmt = $db->prepare('SELECT p.first_name, p.last_name, c.certification_name, c.certification_agency, c.earned_date, mc.expDate, mc.renewDate
  FROM MEMBER as m, CERTIFICATION as c, MEMBER_CERTIFICATION as mc WHERE m.memberID = mc.memberID AND c.certificationID = mc.certificationID');
$stmt->execute();
$members = $stmt->fetchAll();

$json = json_encode($members, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
