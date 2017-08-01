<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

$formData = json_decode(file_get_contents('php://input'), true);
//print_r($formData);

$firstname=$formData['firstname']; 
$lastname=$formData['lastname']; 
$email=$formData['email']; 
$password=md5('12345');  
$addressline=$formData['address']['addressline'];  
$city=$formData['address']['city'];  
$country=$formData['address']['country'];  
$postalCode=$formData['address']['postalCode']; 
$aboutYou=$formData['aboutYou']; 


$link = mysqli_connect("localhost", "root", "", "user_auth");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Attempt insert query execution
$sql = "INSERT INTO users (firstname, lastname, username, email, password, addressline, city, country, postalCode, aboutYou) VALUES ('".$firstname."', '".$lastname."', '".$email."', '".$email."', '".$password."', '".$addressline."', '".$city."', '".$country."', '".$postalCode."', '".$aboutYou."')";
if(mysqli_query($link, $sql)){
    $message=array("status"=>"1", "mess"=>"Saved Successfully");
} else{
    //$message="ERROR: Could not able to execute $sql. " . mysqli_error($link);
	$message=array("status"=>"0", "mess"=>"ERROR: Could not able to execute $sql. " . mysqli_error($link));
}
echo json_encode(array($message));

// Close connection
mysqli_close($link);
?>