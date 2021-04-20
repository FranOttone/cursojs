window.onload=calPro();

function calPro(){
    function Id(id){return document.getElementById(id)}
    var peso=Id('kg').value
    var resultado=0
    
    if(Id('kg').value !=""  && Id('sedentario').checked &&( Id('hombre').checked|| Id('mujer').checked)){
            resultado=(peso*1.5)
            console.log(resultado)
            $('#creado').remove()
            $('body').append('<div id="creado" class="append">Proteínas diarias:'+' '+Math.round(resultado)+'</div>')
            $('.append2').remove()
            $('.requerido').removeClass('requerido');
            
        }
        else if(Id('kg').value !="" && Id('medianamente').checked && (Id('hombre').checked || Id('mujer').checked)){
            resultado=(peso*1.6)
            console.log(resultado)
            $('#creado').remove()
            $('body').append('<div id="creado" class="append">Proteínas diarias:'+' '+Math.round(resultado)+'</div>')
            $('.append2').remove()
            $('.requerido').removeClass('requerido');
        }
        
        else if(Id('kg').value !="" && Id('activo').checked && (Id('hombre').checked || Id('mujer').checked)){
            resultado=(peso*1.8)
            console.log(resultado)
            $('#creado').remove()
            $('body').append('<div id="creado" class="append">Proteínas diarias:'+' '+Math.round(resultado)+'</div>')
            $('.append2').remove()
            $('.requerido').removeClass('requerido');
        }
    
    else{
        $('.grid').addClass("requerido");
        $('.grid1').addClass("requerido");
        $('.grid2').addClass("requerido");
        $('.contenedor').append('<div class="append2">*Completa todos los campos*</div>')
            
       
    }
}
calPro()