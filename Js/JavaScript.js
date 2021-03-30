
var marcas_json;
$(document).ready(function (){
$.ajax({
method:"GET",
url:'https://gist.githubusercontent.com/AnndresRodriguez/a4216e3f82f45fc4514dc954f967fe9a/raw/a41bf12c2e12cc5e2db88ee30b0d7d3ddaf3f6c2/models.json'
}).done(function(data){
  marcas_json=JSON.parse(data)
  var selecModelos = document.getElementById("modelos")
  $('#marcas').on('change',function(){
    console.log($('#marcas').val());
   while(selecModelos.options.length >0){
     selecModelos.options.remove(0)
   }
    if($('#marcas').val()=="1"){
    $.each(marcas_json,function(){
      for(var i=0;i<marcas_json.marcas.length;i++)
      $('<option />',
      {
        value:marcas_json.value,
        text: marcas_json.marcas[0].modelos[i],
      }).html(marcas_json.modelos).appendTo("#modelos")
    });
  }
  if($('#marcas').val()=="2"){
    $.each(marcas_json,function(){
      for(var i=0;i<marcas_json.marcas.length;i++)
      $('<option />',
      {
        value:marcas_json.value,
        text: marcas_json.marcas[1].modelos[i],
      }).html(marcas_json.modelos).appendTo("#modelos")
    });
  }
  if($('#marcas').val()=="3"){
    $.each(marcas_json,function(){
      for(var i=0;i<marcas_json.marcas.length;i++)
      $('<option />',
      {
        value:marcas_json.value,
        text: marcas_json.marcas[2].modelos[i],
      }).html(marcas_json.modelos).appendTo("#modelos")
    });
  }
  if($('#marcas').val()=="4"){
    $.each(marcas_json,function(){
      for(var i=0;i<marcas_json.marcas.length;i++)
      $('<option />',
      {
        value:marcas_json.value,
        text: marcas_json.marcas[3].modelos[i],
      }).html(marcas_json.modelos).appendTo("#modelos")
    });
  }
  if($('#marcas').val()=="5"){
    $.each(marcas_json,function(){
      for(var i=0;i<marcas_json.marcas.length;i++)
      $('<option />',
      {
        value:marcas_json.value,
        text: marcas_json.marcas[4].modelos[i],
      }).html(marcas_json.modelos).appendTo("#modelos")
    });
  }
  if($('#marcas').val()=="6"){
    $.each(marcas_json,function(){
      for(var i=0;i<marcas_json.marcas.length;i++)
      $('<option />',
      {
        value:marcas_json.value,
        text: marcas_json.marcas[5].modelos[i],
      }).html(marcas_json.modelos).appendTo("#modelos")
    });
  }
  if($('#marcas').val()=="7"){
    $.each(marcas_json,function(){
      for(var i=0;i<marcas_json.marcas.length;i++)
      $('<option />',
      {
        value:marcas_json.value,
        text: marcas_json.marcas[6].modelos[i],
      }).html(marcas_json.modelos).appendTo("#modelos")
    });
  }
  if($('#marcas').val()=="8"){
    $.each(marcas_json,function(){
      for(var i=0;i<marcas_json.marcas.length;i++)
      $('<option />',
      {
        value:marcas_json.value,
        text: marcas_json.marcas[7].modelos[i],
      }).html(marcas_json.modelos).appendTo("#modelos")
    });
  }
});
});

});
