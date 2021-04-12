
$(document).ready(function () {
    
    $('input#proteinas').change(function()
    {
    const peso= $('input#proteinas').val();
            console.log(peso) 
            $('#calcular').click(() =>{
                $.post("https://jsonplaceholder.typicode.com/posts", peso, function(data, estado) {
                    var proteinas= parseInt(peso*1.7)
                    if(estado ==="success")
                      {
                        $('#contenedor').append(`<div>Cantudad de proteínas:${proteinas}gr</div>`)
                
                      }  
                    });
                });
                });
    
    
    });