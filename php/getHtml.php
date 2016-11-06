<?php 
	$content = file_get_contents($_POST['url']) or die('Not Found');

	$data = explode('"', str_replace(array(" ", "\n", "\r"), "", $content));
	echo json_encode(array('username' => explode('@', $data[161])[1], 'photo' => $data[175]));
?>