$(document).ready(function () {

    function timer() {
        $("#logos").delay(4000).fadeIn();
        $("#transition").delay(4001).fadeOut();
    }
    timer();

    function begin() {
        $('li:first-child').click(function () {
            $(this).siblings().fadeToggle('fast');


        });

        $('li:eq(1),li:eq(2),li:eq(3)').click(function () {
            event.preventDefault();
            $(this).siblings().fadeToggle('fast');

        })
    }
    begin();
 /*funcion de desabilitar button*/

    $('#trial').keyup(function () {
        event.preventDefault();

        var valor = $("#trial").val();
        console.log(valor.length);
        if (valor.length < 10 ) {
            $('#blocked').addClass('disabled');
            $('#blocked').removeClass('enabled');

        } else if (valor.length == 10 ) {
            $('#blocked').removeClass('disabled');
            $('#blocked').addClass('enabled, btn-success');

        }else{
            $('#blocked').addClass('disabled');
        }

    });

    /*codigo aleatorio de laboratoria*/

    function run_code(chars, lon) {
        code = '';
        for (x = 0; x < lon; x++) {
            rand = Math.floor(Math.random() * chars.length);
            code += chars.substr(rand, 1);
        }
        return code;
    }
    caracteres = '0123456789';
    longitud = 3;

     /* Mostrando codigo aleatorio de laboratoria y agregando enlace para la siguiente ventana*/

    $('#blocked').click(function () {
        set = run_code(caracteres, longitud);
        alert('Tu codigo LAB -' + set);
        $('#blocked').attr('href', 'verify.html');
    });



/**ventana verifique */

    $('#test1').keyup(function () {
        event.preventDefault();

        var valor = $("#trial1").val();
        console.log(valor.length);
        if (valor.length < 3) {
            $('#blocked1').addClass('disabled');
            $('#blocked1').removeClass('enabled');

        } else if (valor.length == 3) {
            $('#blocked1').removeClass('disabled');
            $('#blocked1').addClass('enabled, btn-success');
            $('#blocked1').attr('href', 'register.html');

        } else {
            $('#blocked1').addClass('disabled');
        }

    });

/**ventana regiter */

 var $email = $('#new-email');

 //asociando eventos a los inputs
 $email.on('input', function () {
     console.log(event.target.value);
     console.log($(this).val());
     var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
     console.log(PATERNEMAIL.test($(this).val()));

 });



});
