<?php
$errors = array();
$info =  array();

if(isset($_POST['username']))
	$info['username'] = $_POST['username'];
$info['address'] = $_POST['address'];
//$info['dep'] = $_POST['dep'];
$info['phone'] = $_POST['phone'];
$info['liuyan'] = $_POST['liuyan'];

echo $_POST['username'];

if(empty($_POST['username']) && (!(isset($_POST['username']))))
{
	$error = "Name is required";
}

if(!empty($errors))
{
	$data = "false";
}
else
{
	$data = "true";
}


$json = json_encode($info, JSON_UNESCAPED_UNICODE);

file_put_contents('info.txt', $json, FILE_APPEND);

echo $data;

?>