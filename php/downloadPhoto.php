<?php 
	header('Content-disposition: attachment; filename=f_' . rand() . rand() . '.jpg');
	header('Content-type: image/jpeg ');
	readfile($_GET['url_img']);
?>
<script>window.close();</script>