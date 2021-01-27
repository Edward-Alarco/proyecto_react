$(document).ready(function(){

    var slider = $('#slider');
    var btnAnterior = $('#btnAnterior');
    var btnSiguiente = $('#btnSiguiente');

    //Se pasa el ultimo slide al 1er lugar
    $('#slider .slide:last').insertBefore('#slider .slide:first');

    //Con margin negativo se vuelve a mostrar el primer slide
    slider.css('margin-left','-100%');

    //Funcion para que el slide se mueva a la derecha
    function moverDerecha(){
        if (!slider.is(':animated')) {
            slider.animate({
                marginLeft: '-200%'
            },900, function(){
                $('#slider .slide:first').insertAfter('#slider .slide:last');
                slider.css('margin-left','-100%');
                resetIntervalo();
            });    
        }
    }

    btnSiguiente.on('click',moverDerecha);



    //Funcion para que el slide se mueva a la izquierda
    function moverIzquierda(){
        if (!slider.is(':animated')) {
            $('#slider .slide:last').insertBefore('#slider .slide:first');
            slider.css('margin-left','-200%');
            
            slider.animate({
                marginLeft: '-100%'
            },900, function(){
                resetIntervalo();
            });   
        }
    }

    btnAnterior.on('click',moverIzquierda);


    //Intervalo
    var intervalo = setInterval(moverDerecha,5000);

    function resetIntervalo(){
        clearInterval(intervalo);
        intervalo = setInterval(moverDerecha,5000);
    }

});