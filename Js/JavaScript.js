
$(document).ready(function () {
    
    $('input#kg').change(function()
    {
    const peso= $('input#kg').val();
            console.log(peso) 
            $('#calcular').click(() =>{
                $.post("https://jsonplaceholder.typicode.com/posts", peso, function(data, estado) {
                    var proteinas= parseInt(peso*1.7)
                    
                    if(estado ==="success")
                      {
                        $('body').append(`<div class="append">Cantidad de proteínas:${proteinas}gr</div>`)
                
                      }                      
                    });
                  

                });
                 
           });
    
    
    });