<?php
	$content = file_get_contents($_POST['url']) or die('Not Found');

	$data = explode('"', str_replace(array(" ", "\n", "\r"), "", $content));

	$username = array_values(array_filter($data, function ($el) { return strpos($el, '@'); }))[0];
	$username = explode('@', $username)[1];
	$username = substr($username, 0, strpos($username, ')'));
	$photo = array_values(array_filter($data, function ($el) { return strpos($el, 'scontent'); }))[0];

	echo json_encode(array('username' => $username, 'photo' => $photo));
?>
