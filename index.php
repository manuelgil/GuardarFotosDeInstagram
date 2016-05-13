<html>
	<head>
		<meta charset="UTF-8">
		<link rel="Shortcut Icon" type="image/x-icon" href="img/favicon.ico">
		<link rel="stylesheet" href="css/lib/font-awesome.min.css">
		<link rel="stylesheet" href="css/lib/bootstrap.min.css">
		<link rel="stylesheet" href="css/lib/animate.min.css">
		<link rel="stylesheet" href="css/stylesheet.min.css">
		<title>Descargar fotos de Instagram</title>
	</head>
	<body>
		<div class="container">
			<div class="row header">
				<div class="col-md-3"></div>
				<div class="col-md-6 flipInX animated">
					<a href="https://www.instagram.com" class="logo" target="_blank">Instagram</a>
					<div class="input-group ">
						<input type="text" id="url" placeholder="https://www.instagram.com/x/xxXxxXxx" autofocus>
						<span class="input-group-addon buscar"><span class="fa fa-search"></span></span>
					</div>
		    		<hr>
				</div>
			</div>

		    <div class="row">
			    <div class="col-md-3"></div>
			    <div class="col-md-6">
			    	<div class="loading hide">BUSCANDO...</div>
			    	<div class="loading loading-rotation hide"></div>
				    		
			    	<article class="result">
			    		<header></header>
			    		<img>
			    		<i class="fa fa-download dl"></i>
			    	</article>
				
					<div class="alert alert-danger" role="alert">
						<span class="fa fa-warning"></span>&nbsp; ¡Este enlace no es válido! O no posee conexión a internet...
					</div>
			    </div>
			
		    </div>
		</div>

	    <footer class="text-center">
	    	DESARROLLADO POR: &nbsp;<a href="https://github.com/myei/dl-instagram-photos" target="_blank" class="social"><i class="fa fa-github"></i> myei</a>
	    </footer>

		<script src="js/lib/jquery-2.2.3.min.js"></script>
		<script src="js/lib/bootstrap.min.js"></script>
		<script src="js/script.min.js"></script>
	</body>
</html>