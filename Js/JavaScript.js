$(function(){
var autos;
  $.getJSON("https://raw.githubusercontent.com/FranOttone/cursojs/main/Js/Marcas.json",function(result){
    $.each(result,function(i,auto){
      autos+="<option value='"
      +auto.id+
      "'>"
      +auto.nombre+
      "</option>"; 
    });
    $('#marcas').html(autos);
  });

});
