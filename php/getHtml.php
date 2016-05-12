<?php 
	error_reporting(0);
	$html = '';
	$file = fopen($_POST['url'], 'r') or die ('No se encontró la página.');

	while (!feof($file))
		$html .= fgets($file, 4096);
	
	fclose ($file);
	
	$data = explode('"', substr(preg_replace('[\s+]', '', $html), 1508));
	echo json_encode(array('username' => explode('@', $data[109])[1], 'photo' => $data[123]));
?>