$(document).ready(function(){
	$('#url').keyup(function(event){
		if (event.keyCode == 13) {
			$.ajax({
				type: 'post',
				url:  'php/getHtml.php',
				data: { url:$('#url').val() },
				beforeSend: function(){
					$('.aimg').fadeOut();
					$('.alert').addClass('hide');
				  	$('#loader').removeClass('hide');
				},
				success: function(data){
					if(data.indexOf('https') > -1){
						$('.alert, #loader').addClass('hide');
						$('.header').animate({ 'margin-top': '0px' }, 300, function() { 
							$('#img').attr('src', data).parent().fadeIn('slow'); 
						});
					}else{
						$('.aimg').fadeOut();
						$('.alert').removeClass('hide');
				  		$('#loader').addClass('hide');
						$('.header').animate({ 'margin-top': '20%' }, 300, function() { });
					}
				}
			});
		}
	});

	$('#img').click(function(){
		window.open('php/downloadPhoto.php?url_img=' + $('#img').attr('src'), '_blank');
	});
});