$(document).ready(function(){
	$('#url').keyup(function(e){ if (e.keyCode == 13)  search(); });
	$('.buscar').click(function(){ search(); });

	$('.result img, .dl').click(function(){
		window.open('php/downloadPhoto.php?url_img=' + $('.result img').prop('src'), '_blank');
	});
});

function search () {
	if (isValidUrl($('#url').val(), 1, 0)) {
		$.ajax({
			type: 'post',
			url:  'php/getHtml.php',
			dataType: 'json',
			data: { url:$('#url').val() },
			beforeSend: function(){
				$('.result').hide().children('img').prop('src', '');
				$('.alert').hide();
			  	$('.loading').removeClass('hide');
			},
			success: function(data){
				if (data['photo'].indexOf('https') > -1) {
					$('.alert').hide();
					$('.loading').addClass('hide');
					$('.header').animate({ 'margin-top': '63px' }, 300, function() { 
						$('.result header').html(data['username']).next().prop('src', data['photo']).parent().show();
						$('html, body').animate({ scrollTop: $('.result').offset().top }, 0);
						animate('.result', 'zoomInUp');
					});
				} else 
					showError();
			},
		   error: function() { showError(); }
			,timeout: 10000
		});
	} else 
		showError();
}

function showError() {
	$('.result').hide();
	$('.alert').fadeIn();
	$('.loading').addClass('hide');
	$('.header').animate({ 'margin-top': '20%' }, 300);
	animate('#url, .buscar', 'shake')
	setTimeout(function() { $('.alert').fadeOut() }, 5000);
}

function animate(el, x) {
	$(el)
		.removeClass(x + ' animated')
		.addClass(x + ' animated')
		.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
			function(){ $(el).removeClass(x + ' animated'); });
}

/**
 * Tiene que recibir:
 *  - la url a revisar
 *  - indicar si es obligatorio [1|0]. Si es obligatorio, devuelve
 *    false si la url esta vacia
 *  - indicar si validamos que la direccion pueda ser de un servidor
 *    ftp [1|0]
 * Devuelve True o False
 */
function isValidUrl(url,obligatory,ftp) {
    // Si no se especifica el paramatro "obligatory", interpretamos
    // que no es obligatorio
    if(obligatory==undefined)
        obligatory=0;
    // Si no se especifica el parametro "ftp", interpretamos que la
    // direccion no puede ser una direccion a un servidor ftp
    if(ftp==undefined)
        ftp=0;
 
    if(url=="" && obligatory==0)
        return true;
 
    if(ftp)
        var pattern = /^(http|https|ftp)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;
    else
        var pattern = /^(http|https)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;
 
    if(url.match(pattern))
        return true;
    else
        return false;
}