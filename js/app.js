let listaNomes = document.getElementById('lista-amigos');
let listNomesTexto = [];
let i = 0;

function adicionar(){

let nome = document.getElementById('nome-amigo').value;


listNomesTexto.push(nome);
listaNomes.textContent = `${listNomesTexto}`;


console.log(listNomesTexto);
i = i + i;

}

function sortear(){



}

function reiniciar(){

document.getElementById('lista-amigos').textContent = '';

}