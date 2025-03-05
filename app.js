let amigos = [];

function agregarTextoElemento(elemento, texto){

    let elementoHMTL = document.querySelector(elemento);
    elementoHMTL.innerHTML = texto;

}

function agregarAmigo (){

    let nombreAmigo = document.getElementById('amigo').value;

   if (nombreAmigo === '' ){

    alert ('Ingresaste un espacio vacío, por favor ingresa un nombre valido');

   }else{

    amigos.push(nombreAmigo);
    }

   limpiarCaja ();
   mostrarNombreAmigos();
   console.log(amigos);
}

function limpiarCaja (){

    document.querySelector('#amigo').value = '';

}

function mostrarNombreAmigos (){

    let listaAmigos = document.getElementById ('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){

    let etiquetaLi = document.createElement('li');
    etiquetaLi.textContent = amigos[i];

    listaAmigos.appendChild(etiquetaLi);
    }
}




agregarTextoElemento('h1', '¡Amigo Secreto!')
agregarTextoElemento('h2','Digita el nombre de tus amigos');
