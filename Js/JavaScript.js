
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