<?php

$login_arr = array();
$users = array();


if(isset($_POST['Username'])){
	$login_arr['username'] = $_POST['Username'];
}
if(isset($_POST['Password'])){
	$login_arr['password'] = $_POST['Password'];
}

//var_dump($login_arr);

$file = file("./users.txt");
$i = 0;

foreach ($file as $line) {
	$tmp = explode("\t", trim($line));
	$users[$i]['username'] = $tmp[0];
	$users[$i++]['password'] = $tmp[1];
}

if(in_array($login_arr, $users))
{
	$data = "success";
}
else
{
	$data =  "falied";
}
echo $data;
?>