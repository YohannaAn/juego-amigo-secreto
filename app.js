// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const ingresoNombres = document.querySelector('#amigo');
const listaAmigos = document.querySelector('#listaAmigos');
const amigoSorteado = document.getElementById('resultado');

// Expresión regular: solo letras y espacios
const regexNombreValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

// AGREGAR AMIGO
function agregarAmigo() {
    const nombre = ingresoNombres.value.trim();

    // Validación: nombre vacío
    if (nombre === "") {
        alert("Por favor, ingresa el nombre de un amigo.");
        return;
    }

    // Validación: longitud mínima
    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return;
    }

    // Validación: caracteres especiales
    if (!regexNombreValido.test(nombre)) {
        alert("El nombre no debe contener números ni caracteres especiales como @, #, %, etc.");
        return;
    }

    // Validación: duplicado
    if (amigos.includes(nombre)) {
        alert("Ese amigo ya fue agregado.");
        return;
    }

    // Validación: máximo de amigos
    if (amigos.length >= 20) {
        alert("Ya has agregado el máximo de 20 amigos.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    ingresoNombres.value = "";
}

// ACTUALIZAR LISTA
function actualizarLista() {
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        const liAmigo = document.createElement("li");
        liAmigo.textContent = amigo;
        listaAmigos.appendChild(liAmigo);
    });
    amigoSorteado.innerHTML = "";
}

// SORTEAR AMIGO
function sortearAmigo() {
    // Validación: mínimo de amigos
    if (amigos.length < 3) {
        alert("Debes agregar al menos 3 amigos para hacer el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    const liSorteado = document.createElement('li');
    liSorteado.textContent = `El amigo secreto es ${amigoSecreto}`;
    amigoSorteado.appendChild(liSorteado);

    listaAmigos.innerHTML = "";
    amigos = [];
}

// REINICIAR JUEGO
function reiniciarJuego() {
    amigos = [];
    ingresoNombres.value = "";
    listaAmigos.innerHTML = "";
    amigoSorteado.innerHTML = "";
    alert("Juego reiniciado.");
}
