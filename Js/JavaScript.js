
var marcas_json;

$(document).ready(function(){
$.ajax({
method:"GET",
url:'https://raw.githubusercontent.com/FranOttone/cursojs/main/Js/Marcas.json'
}).done(function(data){
  marcas_json=JSON.parse(data)
  
  var selec_marcas= document.createElement('select');
  selec_marcas.className="selec_marcas";

  for( var i=0; i<marcas_json.marcas.length;i++){
    var option=document.createElement('option')
    option.value=i
    option.text= marcas_json.marcas[i].nombre;
    option.className='option_'+ i;
    selec_marcas.appendChild(option)
  }
  document.getElementById('selector').appendChild(selec_marcas)
})
});
var modelosFord_json;
$(document.ready(function(){
  $.ajax({
  method:"GET",
  url:''   
  }).done(function(data){
    modelos_json=JSON.parse(data)
    
    if(
      marcas_json.nombre["Ford"]
      ){
        var selec_modelo=document.createElement('select')
        selec_modelo.className="selec_modelo"

        for(var i=0; i<modelosFord_json.modelos.length;i++){
          var option=document.createElement('option')
          option.value=i
          option.text=modelosFord_json.modelos[i].name;
          option.className='option_'+ i;
          selec_modelo.appendChild(option)  
        }
        document.getElementById('selector').appendChild(selec_modelo)
      }
    })
  }))
