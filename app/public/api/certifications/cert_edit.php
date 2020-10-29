<?php

require 'common.php';

 //Step 0; Validate data

 $db = DbConnection::getConnection();

$stmt = $db->prepare(
 'UPDATE Certifications SET certification_name=?, certification_agency=?, default_expiration_period=? WHERE certification_id = ?'
 );

 $stmt->execute(

 [

 $_POST['certification_name'],
 $_POST['certification_agency'],
 $_POST['default_expiration_period'],
 $_POST['certification_id']
 ]

 );
 //Step 4: Output

 header('HTTP/1.1 303 See other');

 //300 redirect with a git

 header('Location: ../certifications/');
