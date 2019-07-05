module.exports = (persona) =>{

    return '<!DOCTYPE html> <html> <head> <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/> <meta content="width=device-width" name="viewport"/>'+
            '<style type="text/css">'+
                 
               ' .caja{font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;font-size: 18px;'+
                    'font-weight: 400;'+
                    'width: 300px;'+
                    'align-items: center;'+
                    /*'height: 460px;'+*/
                    'color: #ffffff;'+
                    'background: #889ccf;'+
                    'margin: 0 0 25px;'+
                    'overflow: hidden;'+
                    'padding: 20px;'+
                    'border-radius: 35px 0px 35px 0px;'+
                    '-moz-border-radius: 35px 0px 35px 0px;'+
                    '-webkit-border-radius: 35px 0px 35px 0px;'+
                    'border: 2px solid #5878ca;'+
                    'text-align: center;'+
                '}</style> </head>'+
        '<body>'+
            '<div class ="caja">'+
                '<h1>Bienvenid@</h1>'+
                '<h3>Haz registrado tu cuenta de correo</h3>'+
                '<br>'+
                '<h5 style="color: darkred">'+persona+'</h5>'+
                '<p style="font-size: 10px"> &copy; Derechos reservados:15401021,15401022</p>'+
            '</div>'+
        '</body>'+
    '</html>'
    }