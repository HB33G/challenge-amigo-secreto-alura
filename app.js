let amigos = [];

function agregarTextoElemento(elemento, texto){

    let elementoHMTL = document.querySelector(elemento);
    elementoHMTL.innerHTML = texto;

}

function agregarAmigo (){

    let nombreAmigo = document.getElementById('amigo').value.trim();

   if (nombreAmigo === '' ){
    alert ('Ingresaste un espacio vacío, por favor ingresa un nombre valido');
    return;
   }

   if (amigos.includes(nombreAmigo)){
    alert(`'${nombreAmigo}' ya está en la lista.`);
    return;
   }

    amigos.push(nombreAmigo);
    limpiarCaja ();
    mostrarNombreAmigos();
    console.log(amigos);

}

function limpiarCaja (){

    document.querySelector('#amigo').value = '';

}

function mostrarNombreAmigos (){

    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){

    let etiquetaLi = document.createElement('li');
    etiquetaLi.textContent = amigos[i];

    listaAmigos.appendChild(etiquetaLi);
    }
}

function sortearAmigo(){

    if (amigos.length === 0 ) {
        alert('No hay nombres para sortear');
        return;
    }

    let amigoAleatorio = Math.floor(Math.random()*amigos.length);
    let seleccionAmigo = amigos[amigoAleatorio];

    agregarTextoElemento ('#resultado',`El azar ha hablado... ¡Y tu eres el elegido, ${seleccionAmigo} !`)

}



agregarTextoElemento('h1', '¡Amigo Secreto!')
agregarTextoElemento('h2','Digita el nombre de tus amigos');
