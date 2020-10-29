<?php

require 'common.php';

$db = DbConnection::getConnection();

$stmt = $db->prepare('SELECT * FROM Person_Certifications');
$stmt->execute();
$memberCertList = $stmt->fetchAll();

$json = json_encode($memberCertList, JSON_PRETTY_PRINT);


header('Content-Type: application/json');
echo $json;
