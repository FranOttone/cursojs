$(document).ready(function(){

    
    $('#Confirmar').click(function(){
    
        var altura=$('input#CalculadorMedida').val();
        console.log(altura)
        
        var peso=$('input#CalculadorPeso').val();
        console.log(peso)
        
        var años=$('input#CalculadorAños').val();
        console.log(años)
        
        
            var resultadoHombre= 66+(13.7*peso ) + (5*altura)-(6.75*años)
            console.log(resultadoHombre)
        
            $('#grid').append('<div>Tus calorias diarias recomnedadas son</div>'+resultadoHombre);
        }

       
    )})
