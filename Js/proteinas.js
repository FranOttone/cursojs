$(function(){
    

$('#calcular').click(function(e){
    e.preventDefault()
    function Id(id){return document.getElementById(id)}
    var peso=Id('kg').value
    var resultado=0
    var sexo=[]
        if($('#hombre:checked').val()){
            sexo="Hombre"
    
        }
        else{
            sexo="Mujer"
        }
        var caracteristicas=[sexo,"Peso: "+peso+" Kg"]
        caracteristicas=JSON.stringify(caracteristicas)
    const url="https://jsonplaceholder.typicode.com/posts"
    $.post(url, caracteristicas,
        function (respuesta, estado) {
            if(estado=="success"){
                console.log(peso)
            }
        },
    );
    
    function generarDiv(){

    $('#creado').remove()
    $('body').append(`<div id="creado" class="append"><p class="txt">Proteínas diarias:</p><p class="resultado"> ${Math.round(resultado)} gr</p></div>`)
    $('.append2').remove()
    $('.requerido').removeClass('requerido');
    }

    if(peso !=""  && Id('sedentario').checked &&( Id('hombre').checked || Id('mujer').checked)){
            resultado=(peso*1.5)
            generarDiv()
        }
        else if(peso !="" && Id('medianamente').checked && (Id('hombre').checked || Id('mujer').checked)){
            resultado=(peso*1.6)
            generarDiv()
        }
        
        else if(peso !="" && Id('activo').checked && (Id('hombre').checked || Id('mujer').checked)){
            resultado=(peso*1.8)
            generarDiv()
        }
    
    else{
        $('.append2').remove()
        $('.grid').addClass("requerido");
        $('.grid1').addClass("requerido");
        $('.grid2').addClass("requerido");
        $('.contenedor').append('<div class="append2">*Completa todos los campos*</div>')
    }
});

});