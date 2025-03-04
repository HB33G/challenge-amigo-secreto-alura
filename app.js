// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombresDeAmigos = [];

function agregarTextoElemento(elemento, texto){

    let elementoHMTL = document.querySelector(elemento);
    elementoHMTL.innerHTML = texto;

}

function agregarAmigo (){

    let nombreAmigo = document.getElementById('amigo').value;
    /*
    console.log(typeof(nombreAmigo))
    console.log (nombreAmigo)
    console.log (nombreAmigo == '') 
    */


   if (nombreAmigo == '' ){
    alert ('Ingresaste un espacio vacío, por favor ingresa un nombre valido')
   }else{
    listaNombresDeAmigos.push(nombreAmigo)
    limpiarCaja ();
    
   }

   console.log (listaNombresDeAmigos)
}

function limpiarCaja (){

    document.querySelector('#amigo').value = '';

}





agregarTextoElemento('h1', '¡Amigo Secreto!')
agregarTextoElemento('h2','Digita el nombre de tus amigos');
