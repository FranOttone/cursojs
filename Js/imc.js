$(function(){

$('#calcular').click(function(e){
    e.preventDefault()
    function Id(id){return document.getElementById(id)}
    var peso=Id('kg').value
    var alturaCm=Id('altura').value
    var alturaM=alturaCm/100
    var IMC= peso/(alturaM*alturaM)
     var carateristicas=["Peso: "+peso+" Kg","Altura: "+alturaCm+" Cm","IMC: "+IMC.toFixed(1)+"kg/m2"]
     carateristicas=JSON.stringify(carateristicas)
     const url="https://jsonplaceholder.typicode.com/posts"
    $.post(url, carateristicas,
        function (respuesta, estado) {
            if(estado=="success"){
                console.log(peso)
            }
        },
    );
   
    if((peso && alturaCm)!=0){
    $('.requerido').removeClass('requerido')
    $('.txt').remove()
    $('.grid2').removeClass('grid-display')
    $('.grid3').removeClass('grid-display')
    $('.grid2').append('<p class="txt">Tu Indice de masa corporal es: '+IMC.toFixed(1)+'Kg/m2'+'</p>')
        if(IMC<18.5){
            $('.grid2').css('border','5px solid #dedede')
            $('.txt').append('<p class="txt txt2">Peso bajo</p>')
        }
        else if(IMC>=18.5 && IMC<=24.99){$('.grid2').css('border','5px solid #65ca85')
        $('.txt').append('<p class="txt txt2">Peso normal</p>')

        }
        else if(IMC>=25 && IMC<=29.99){$('.grid2').css('border','5px solid #ffe294')
        $('.txt').append('<p class="txt txt2">Sobrepeso</p>')

        }
        else if(IMC>=30 && IMC<=34.99){$('.grid2').css('border','5px solid #f5bf62')
        $('.txt').append('<p class="txt txt2">Obeso tipo I</p>')

        }
        else if(IMC>=35 && IMC<=39.99){$('.grid2').css('border','5px solid #fca4f4')
        $('.txt').append('<p class="txt txt2">Obeso tipo II</p>')

        }
        else if(IMC>=40 && IMC<=49.99){$('.grid2').css('border','5px solid #fcd7e3')
        $('.txt').append('<p class="txt txt2">Obeso tipo III</p>')

        }
        else if(IMC>=50){$('.grid2').css('border','5px solid #b5ddf7')
        $('.txt').append('<p class="txt txt2">Obesidad mórbida</p>')

        }
}
    else{
        
        $('.prepend').remove()
        $('.grid').addClass("requerido");
        $('.grid1').addClass("requerido");
        $('.btn').prepend('<div class="prepend">*Completa todos los campos*</div>')
    }
    
});

});