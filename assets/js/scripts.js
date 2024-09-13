

// Confirmar asistencia parallax
$('.parallax-asistencia').parallax({
    imageSrc: 'assets/img/confirmar-asistencia.jpg'
  
  });
  
  // Portada parallax
  $('.parallax-portada').parallax({
    imageSrc: 'assets/img/portada.jpg'
  });

  
  // Gracias parallax
  $('.parallax-gracias').parallax({
    imageSrc: 'assets/img/porg'
  });
  
  // ----------------------
  
  
  
  
  // Cuenta regresiva
  var fechaInicio = new Date().getTime();
  var fechaFin = new Date(fechaCuentaRegresiva).getTime();
  var diff = (fechaFin - fechaInicio) / 1000;
  
  
  
    // Config countdown
    $('.countdown').ClassyCountdown({
  
      theme: "black",
  
      labelsOptions: {
        style: 'font-size: 15px;font-family: \'Mulish 27px\', serif;'
      },
  
      style: {
        // textResponsive: 0.6,
        secondsElement: {
          gauge: {
            fgColor: "#F00"
          }
        },
  
        days: {
          gauge: {
            thickness: 0.01,
            fgColor: colorCirculosCuentaRegresiva
          },
          textCSS: 'color:' + colorTextoCuentaRegresiva + ';font-size: 30px !important;font-family: \'Mulish 27px\', serif;'
        },
  
  
        hours: {
          gauge: {
            thickness: 0.01,
            fgColor: colorCirculosCuentaRegresiva
          },
          textCSS: 'color:' + colorTextoCuentaRegresiva + ';font-size: 30px !important;font-family: \'Mulish 27px\', serif;'
        },
  
  
        minutes: {
          gauge: {
            thickness: 0.01,
            fgColor: colorCirculosCuentaRegresiva
          },
          textCSS: 'color:' + colorTextoCuentaRegresiva + ';font-size: 30px !important;font-family: \'Mulish 27px\', serif;'
        },
  
  
        seconds: {
          gauge: {
            thickness: 0.01,
            fgColor: colorCirculosCuentaRegresiva
          },
          textCSS: 'color:' + colorTextoCuentaRegresiva + ';font-size: 30px !important;font-family: \'Mulish 27px\', serif;'
        }
  
  
      },
  
      // Fecha finalizacion
      end: $.now() + diff,
  
      // Al finalizar
      onEndCallback: function () {
        $('.cuenta-regresiva').hide();
      }
  
    });