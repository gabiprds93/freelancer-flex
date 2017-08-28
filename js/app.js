/*
 * Archivo principal de JS
 */
var num = 6;
var mostrarImagen = document.getElementById("mostrarImagen");
var imagenes = ["cabin.png", "cake.png", "circus.png", "game.png", "safe.png", "submarine.png"];
 var divImg = document.getElementsByClassName("div-img");

for(var i = 0; i < num; i++)
{
    var img = document.getElementById("img");
    var imagen = document.getElementById("img" + i);
    imagen.name = i;
    imagen.addEventListener("click", function(event)
    {
        mostrarImagen.className = "mostrar";
        img.src = "assets/images/portfolio/" + imagenes[event.target.getAttribute('name')];
        var btnX = document.getElementById("btnX")
        btnX.addEventListener("click", function()
        {
            mostrarImagen.className = "oculto";
        });
        var btnClose = document.getElementById("btnClose")
        btnClose.addEventListener("click", function()
        {
            mostrarImagen.className = "oculto";
        });
    }); 
    imagen.onmousemove = function(event)
    {
        divImg[event.target.getAttribute('name')].style.display = "block";
    }
    imagen.onmouseout = function(event)
    {
        divImg[event.target.getAttribute('name')].style.display = "none";
    }
}