$(document).ready(function(){

    
    $('#Confirmar').click(function(){
    
        var altura=$('input#CalculadorMedida').val();
        console.log(altura)
        
        var peso=$('input#CalculadorPeso').val();
        console.log(peso)
        
        var años=$('input#CalculadorAños').val();
        console.log(años)
        
        if($('#selector').val()="1"){
            var resultadoHombre= 66+(13.7*peso ) + (5*altura)-(6.75*años)
            console.log(resultadoHombre)}

        if($('#selector').val()="2"){
            var resultadoMujer=655+(9.6*peso)+(1.8*altura)-(4.7*años)
            console.log(resultadoMujer)
        }
        })
    })
