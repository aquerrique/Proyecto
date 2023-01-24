
//Funcipon para modificar el titulo de la etiquita Experiencia
function borrar_texto() {
     document.getElementById('subtitulo').innerText = "";
     document.getElementById('experiencia_1').innerHTML = '';
    
};


//Función para refrescar la página Web
function refrescar_pagina(){
    location.reload();
}


function cambiar_texto(titulo,textouno,textodos,textotres) {

    borrar_texto();
    document.getElementById('titulo_Exp').innerText = titulo;
    document.getElementById('texto1').innerText = textouno;
    document.getElementById('texto2').innerText = textodos;
    document.getElementById('texto3').innerText = textotres;
    
};




