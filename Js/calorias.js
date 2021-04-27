$(function(){
    

$('button#calcular').click(function (e) { 
        e.preventDefault();
        var años=Id('años').value;
    var peso=Id('kg').value;
    var altura=Id('altura').value;
    var caracteristicas=(años,peso,altura)
    var caloriasDiarias;
    var sexo=[]
    if($('#hombre:checked').val()){
        sexo="Hombre"

    }
    else{
        sexo="Mujer"
    }
    var CARACTERISTICAS=[sexo,"Peso: "+peso+" Kg","Altura: "+altura+" Cm","Edad: "+años]
    CARACTERISTICAS=JSON.stringify(CARACTERISTICAS)
const url="https://jsonplaceholder.typicode.com/posts"
$.post(url, CARACTERISTICAS,
    function (respuesta, estado) {
        if(estado=="success"){
            console.log(peso)
        }
    },
    
);
    
    function Id(id){return document.getElementById(id)}
    
        
    
    var tmbMujer=665+(9.6*peso)+(1.8*altura)-(4.7*años);
    var tmbHombre=66+(13.7*peso)+(5*altura)-(6.8*años);
    
    
    var hombreSedentario=(Id('hombre').checked&&Id('sedentario').checked);
    var hombreMedio=(Id('hombre').checked&& Id('medianamente').checked);
    var hombreActivo=(Id('hombre').checked&& Id('activo').checked);
    var mujerSedentario=(Id('mujer').checked&& Id('sedentario').checked);
    var mujerMedio=(Id('mujer').checked&& Id('medianamente').checked);
    var mujerActivo=(Id('mujer').checked&& Id('activo').checked);
    
    
    function generarDiv(){
        $('.grid').removeClass("requerido");
        $('.grid1').removeClass("requerido");
        $('.grid2').removeClass("requerido");
        $('.append2').remove()
        $('.append').remove()
        $('body').append(`<div class="append">
            <div class="calorias">
            <h2>Perder peso</h2>
                <div>
                    <p>Calorías recomendadas</p>
                    <p class="kcal"> ${Math.round(caloriasDiarias-300)} a ${Math.round(caloriasDiarias-100)} kcal</p>
                    <p>Este consumo diario de calorías te permitirá perder 0,5-1 kg por semana de una forma sana y sostenible.</p>
                </div>
            </div>
            <div class="calorias">
            <h2>Mantener peso</h2>
                <div>
                    <p>Calorías recomendadas</p>
                    <p class="kcal"> ${Math.round(caloriasDiarias-100)} a ${Math.round(caloriasDiarias)} kcal</p>
                    <p>Este consumo diario de calorías te permitirá mantener tu peso actual.</p>
                </div>
            </div>
            <div class="calorias">
            <h2>Aumentar peso</h2>
                <div>
                    <p>Calorías recomendadas</p>
                    <p class="kcal"> ${Math.round(caloriasDiarias+100)} a ${Math.round(caloriasDiarias+200)} kcal</p>
                    <p>Este consumo diario de calorías te permitirá ganar 0,5-1 kg por semana de una forma sana y sostenible.</p>
                </div>
            </div>
        </div>`)
    }

        if(caracteristicas!=="" && hombreSedentario ){
            caloriasDiarias=tmbHombre*1.200
            generarDiv()
        }

            else if(caracteristicas!=="" && hombreMedio ){
                caloriasDiarias=tmbHombre*1.550
                generarDiv()
            }

            else if(caracteristicas!=="" && hombreActivo){
                caloriasDiarias=tmbHombre*1.725
                generarDiv()
            }

        else if(caracteristicas!=="" && mujerSedentario)
            {
            caloriasDiarias=tmbMujer*1.200
            generarDiv()
            }

            else if(caracteristicas!=="" && mujerMedio){
                caloriasDiarias=tmbMujer*1.550
                generarDiv()
            }

            else if(caracteristicas!=="" && mujerActivo){
                caloriasDiarias=tmbMujer*1.725
                generarDiv()
            }
        else  {
            $('.append2').remove()
            $('.grid').addClass("requerido");
            $('.grid1').addClass("requerido");
            $('.grid2').addClass("requerido");
            $('.contenedor').append('<div class="append2">*Completa todos los campos*</div>')
        }
    })
});
