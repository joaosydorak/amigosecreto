let listaNomes = document.getElementById('lista-amigos');
let listNomesTexto = [];


function adicionar() {

    let nome = document.getElementById('nome-amigo').value;


    listNomesTexto.push(nome);
    listaNomes.textContent = `${listNomesTexto}`;

}

function sortear() {

    let indiceSorteado = Math.floor(Math.random() * listNomesTexto.lenght);
    document.getElementById('lista-sorteio').textContent = listNomesTexto[indiceSorteado];


}

function reiniciar() {

    document.getElementById('lista-amigos').textContent = '';

}