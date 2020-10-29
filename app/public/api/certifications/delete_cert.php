<?php



require 'common.php';

$db = DbConnection::getConnection();





 $stmt = $db->prepare(

 'DELETE FROM Certifications WHERE certification_id = ?'

 );





 $stmt->execute(

 [

 $_POST['certification_id']

 ]

 );





//Step 4: Output

 header('HTTP/1.1 303 See other');

 header('Location: ../certifications/');
