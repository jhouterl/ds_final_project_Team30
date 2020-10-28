<?php



require 'common.php';

 //Step 0; Validate data

 $db = DbConnection::getConnection();



$stmt = $db->prepare(

 'INSERT INTO Certifications

 (certification_name, certification_agency, default_expiration_period)

 VALUES (?, ?, ?)'

 );





 $stmt->execute([

 $_POST['certification_name'],

 $_POST['certification_agency'],

 $_POST['default_expiration_period']

 ]);



$pk = $db->lastInsertId();

 //Step 4: Output

 header('HTTP/1.1 303 See other');

 header('Location: ../certifications/?certification_id='. $pk);
