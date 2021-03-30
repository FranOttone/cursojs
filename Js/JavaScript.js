

var marcas_json;
$(document).ready(function (){
$.ajax({
method:"GET",
url:'https://gist.githubusercontent.com/AnndresRodriguez/a4216e3f82f45fc4514dc954f967fe9a/raw/a41bf12c2e12cc5e2db88ee30b0d7d3ddaf3f6c2/models.json'
}).done(function(data){
  marcas_json=JSON.parse(data)
  var selec_modelos=document.getElementById("modelos")
  $('#marcas').change(function(){
    console.log($('#marcas').val());

    if($('#marcas').val("1")){
    for(var i=0;i<marcas_json.marcas.lenght;i++){
  var option=document.createElement('option')
  option.value=i
  option.text=marcas_json.marcas[0].modelos[i]
  selec_modelos.appendChild(option)
  }
  }})
})
})
var marcas_json;
$(document).ready(function (){
$.ajax({
method:"GET",
url:'https://gist.githubusercontent.com/AnndresRodriguez/a4216e3f82f45fc4514dc954f967fe9a/raw/a41bf12c2e12cc5e2db88ee30b0d7d3ddaf3f6c2/models.json'
}).done(function(data){
  marcas_json=JSON.parse(data)

  var selec_marcas=document.getElementById("marcas")
  var selec_modelos=document.getElementById("modelos")
  
  
    for( var i=0; i<marcas_json.marcas.length;i++){
      var option=document.createElement('option')
      option.value=i
      option.text= marcas_json.marcas[i].nombre;
      selec_marcas.appendChild(option)
    }
if(option.value["0"]){
  
  for(var i=0; i<marcas_json.marcas.length;i++){
    var option=document.createElement('option')
    option.value=i
    option.text=marcas_json.marcas[0].modelos[i];
    selec_modelos.appendChild(option)
}
}
if(option.value["1"]){
  
  for(var i=0; i<marcas_json.marcas.length;i++){
    var option=document.createElement('option')
    option.value=i
    option.text=marcas_json.marcas[1].modelos;
    selec_modelos.appendChild(option)
}}

if(option.value["2"]){
  
  for(var i=0; i<marcas_json.marcas.length;i++){
    var option=document.createElement('option')
    option.value=i
    option.text=marcas_json.marcas[2].modelos[i];
    selec_modelos.appendChild(option)
}}

if(option.value["3"]){
  
  for(var i=0; i<marcas_json.marcas.length;i++){
    var option=document.createElement('option')
    option.value=i
    option.text=marcas_json.marcas[3].modelos[i];
    selec_modelos.appendChild(option)
}}

if(option.value["4"]){
  
  for(var i=0; i<marcas_json.marcas.length;i++){
    var option=document.createElement('option')
    option.value=i
    option.text=marcas_json.marcas[4].modelos[i];
    selec_modelos.appendChild(option)
}}

if(option.value["5"]){
  
  for(var i=0; i<marcas_json.marcas.length;i++){
    var option=document.createElement('option')
    option.value=i
    option.text=marcas_json.marcas[5].modelos[i];
    selec_modelos.appendChild(option)
}}

if(option.value["6"]){
  
  for(var i=0; i<marcas_json.marcas.length;i++){
    var option=document.createElement('option')
    option.value=i
    option.text=marcas_json.marcas[6].modelos[i];
    selec_modelos.appendChild(option)
}}

if(option.value["7"]){
  
  for(var i=0; i<marcas_json.marcas.length;i++){
    var option=document.createElement('option')
    option.value=i
    option.text=marcas_json.marcas[7].modelos[i];
    selec_modelos.appendChild(option)
}}
});
})