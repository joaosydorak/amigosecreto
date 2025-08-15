
let amigos = [];


function adicionar() {

    

    let nome = document.getElementById('nome-amigo');
    let listaNomes = document.getElementById('lista-amigos');
    amigos.push(nome.value);
    

     if (listaNomes.textContent == ''){

        listaNomes.textContent = nome.value;

     } else {

        listaNomes.textContent = listaNomes.textContent + ' , ' + nome.value;

     }

     nome.value = '';

}

function sortear() {

    let Sorteio = document.getElementById('lista-sorteio');

  embaralhar(amigos);
    for (let i = 0; i < amigos.length; i++){

        if (i == amigos.length -1){
    Sorteio.innerHTML = Sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';

        } else {
        Sorteio.innerHTML = Sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';

}

    }
    

}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}





function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    
}