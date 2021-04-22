window.onload=calImc();

function calImc(){
    function Id(id){return document.getElementById(id)}
    var peso=Id('kg').value
    var alturaCm=Id('altura').value
    var alturaM=alturaCm/100
    var IMC= peso/(alturaM*alturaM)
    
   
    if((peso && alturaCm)!=0){
    $('.requerido').removeClass('requerido')
    $('.txt').remove()
    $('.grid2').removeClass('grid-display')
    $('.grid3').removeClass('grid-display')
    $('.grid2').append('<p class="txt">Tu Indice de masa corporal es: '+IMC.toFixed(1)+'Kg/m2'+'</p>')
        if(IMC<18.5){
            $('.grid2').css('background','#dedede')
            $('.txt').append('<p class="txt txt2">Peso bajo</p>')
        }
        else if(IMC>=18.5 && IMC<=24.99){$('.grid2').css('background','#65ca85')
        $('.txt').append('<p class="txt txt2">Peso normal</p>')

        }
        else if(IMC>=25 && IMC<=29.99){$('.grid2').css('background','#f5ea71')
        $('.txt').append('<p class="txt txt2">Sobrepeso</p>')

        }
        else if(IMC>=30 && IMC<=34.99){$('.grid2').css('background','#f5bf62')
        $('.txt').append('<p class="txt txt2">Obeso tipo I</p>')

        }
        else if(IMC>=35 && IMC<=39.99){$('.grid2').css('background','#fca4f4')
        $('.txt').append('<p class="txt txt2">Obeso tipo II</p>')

        }
        else if(IMC>=40 && IMC<=49.99){$('.grid2').css('background','#fcd7e3')
        $('.txt').append('<p class="txt txt2">Obeso tipo III</p>')

        }
        else if(IMC>=50){$('.grid2').css('background','#b5ddf7')
        $('.txt').append('<p class="txt txt2">Obesidad mórbida</p>')

        }
}
    else{
        
        $('.prepend').remove()
        $('.grid').addClass("requerido");
        $('.grid1').addClass("requerido");
        $('.btn').prepend('<div class="prepend">*Completa todos los campos*</div>')
    }
    

}
calImc()