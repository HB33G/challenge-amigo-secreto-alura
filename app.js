let amigos = [];

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


   if (nombreAmigo === '' ){

    alert ('Ingresaste un espacio vacío, por favor ingresa un nombre valido');

   }else{

    amigos.push(nombreAmigo);
    
}
   limpiarCaja ();

   console.log (amigos)
}

function limpiarCaja (){

    document.querySelector('#amigo').value = '';

}

function mostrarNombreAmigos (){

    let nuevoNombreAmigo = document.getElementById('amigo').value;

    let nombreAmigo = document.createElement('li');
    nombreAmigo.textContent = nuevoNombreAmigo ;

    document.getElementById('listaAmigos').appendChild (nombreAmigo);
    
}




agregarTextoElemento('h1', '¡Amigo Secreto!')
agregarTextoElemento('h2','Digita el nombre de tus amigos');
