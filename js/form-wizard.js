$(document).ready(function(){
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    
    $(".next").click(function(){

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        
        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        
        //show the next fieldset
        next_fs.show(); 
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;
    
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({'opacity': opacity});
            }, 
            duration: 600
        });
    });
    
    $(".previous").click(function(){
        
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();
        
        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
        
        //show the previous fieldset
        previous_fs.show();
    
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;
    
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({'opacity': opacity});
            }, 
            duration: 600
        });
    });
    
    $('.radio-group .radio').click(function(){
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
    });
    
    $(".submit").click(function(){
        return false;
    })


       // inicializar el plugin de validación
  $('#msform').validate({
    // configuración de las reglas de validación para cada campo
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    },
    rules: {
      email: {
        required: true,
        email: true
      },
      name: {
        required: true,
        minlength: 3
      },
      tel: {
        required: true,
        number: true
      },
      select: {
        required: true
      },
      date: {
        required: true,
        date: true
      },
      cant: {
        required: true,
        number: true
      },
      price: {
        required: true,
        number: true
      }
    },
    // mensajes de error para cada regla de validación
    messages: {
      email: {
        required: "Por favor ingrese un email válido.",
        email: "Por favor ingrese un email válido."
      },
      name: {
        required: "Por favor ingrese su nombre y apellido.",
        minlength: "El nombre debe contener al menos 3 caracteres."
      },
      tel: {
        required: "Por favor ingrese un número de teléfono válido.",
        number: "Por favor ingrese un número de teléfono válido."
      },
      select: {
        required: "Por favor seleccione un tipo de evento."
      },
      date: {
        required: "Por favor ingrese una fecha para el evento.",
        date: "Por favor ingrese una fecha válida."
      },
      cant: {
        required: "Por favor ingrese la cantidad de invitados.",
        number: "Por favor ingrese un número válido."
      },
      price: {
        required: "Por favor ingrese un presupuesto.",
        number: "Por favor ingrese un número válido."
      }
    },

    highlight: function(element) {
        $(element).addClass('error');
    },
    unhighlight: function(element) {
        $(element).removeClass('error');
    }
    // función para enviar el formulario si la validación es exitosa
  });

  // agregar un controlador de eventos al botón "Siguiente"
  $('.next').click(function() {
    // validar el formulario actual
    if ($('#msform').validate()) {
        
        
    }
  });

        
    });