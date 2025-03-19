// Variables
let listaDeAmigos = [];

// Funciones
const agregarAmigo = () => {
    let nombreInput = document.getElementById('amigo').value.trim().toLowerCase();

    if (listaDeAmigos.includes(nombreInput)) {
        alert('Ya agregó al amigo. Pruebe otro nombre');
        limpiarInput();
        return;
    }

    if (nombreInput === '' || !/^[a-zA-Z\s]+$/.test(nombreInput)) {
        alert('Por favor, ingrese un nombre válido');
        limpiarInput();
        return;
    }

    listaDeAmigos.push(nombreInput);
    actualizarLista();
    limpiarInput();
    limpiarResultado();
};

const actualizarLista = () => {
    const listaUl = document.getElementById('listaAmigos');
    listaUl.innerHTML = listaDeAmigos
        .map(amigo => `<li>${amigo}</li>`)
        .join('');
};

const limpiarInput = () => {
    document.getElementById('amigo').value = '';
};

const limpiarResultado = () => {
    document.getElementById('resultado').innerHTML = '';
};

const limpiarLista = () => {
    listaDeAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
};

const sortearAmigo = () => {
    if (listaDeAmigos.length === 0) {
        alert('La lista está vacía, agrega amigos antes de sortear.');
        limpiarInput();
        return;
    }

    let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];

    limpiarLista();
    limpiarResultado();

    document.getElementById('resultado').innerHTML = `<li>El amigo secreto sorteado es: ${amigoSorteado}</li>`;
};

// Evento para detectar Enter en el input
document.getElementById('amigo').addEventListener('keydown', event => {
    if (event.key === 'Enter') agregarAmigo();
});

