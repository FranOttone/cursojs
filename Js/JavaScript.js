$(function(){
var autos;
  $.getJSON("Marcas.json",function(result){
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
