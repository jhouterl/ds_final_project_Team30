<?php

require 'common.php';

$db = DbConnection::getConnection();

//$stmt = $db->prepare('SELECT * FROM Person_Certifications');
//$stmt->execute();
//$memberCertList = $stmt->fetchAll();

//$json = json_encode($memberCertList, JSON_PRETTY_PRINT);

$stmt = $db->prepare (
  "SELECT * FROM Person AS p, Certifications AS c, Person_Certifications AS pc WHERE p.person_id = pc.person_id AND c.certification_id = pc.certification_id"
);

$stmt->execute();

$memberCertificate = $stmt->fetchAll();

$json = json_encode($memberCertificate, JSON_PRETTY_PRINT);


header('Content-Type: application/json');
echo $json;
