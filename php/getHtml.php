<?php 
	error_reporting(0);
	$html = '';
	$file = fopen($_POST['url'], 'r') or die ('No se encontró la página.');

	while (!feof($file)) {
		$html .= fgets($file, 4096);
	} fclose ($file);
	
	echo explode('"', substr(preg_replace('[\s+]', '',$html), 1508))[123];
?>