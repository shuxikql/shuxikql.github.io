<?php
$data = file("./home_img.txt");
$i = 0;
$arr = array();

foreach($data as $line)
{
	$tmp = explode("\t", trim($line));
	$arr[$i]['url'] = $tmp[1];
	$arr[$i]['img'] = $tmp[2];
	$arr[$i++]['title'] = $tmp[3];
}

$json = json_encode($arr, JSON_UNESCAPED_UNICODE);
echo str_replace('\\/', '/', $json);
?>
