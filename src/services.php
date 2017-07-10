<?php
header("Access-Control-Allow-Origin: *");
$data=array(
"name"=>"pradeep",
"age"=>"26"
	);
print_r(json_decode($_REQUEST));
echo json_encode($data);
?>