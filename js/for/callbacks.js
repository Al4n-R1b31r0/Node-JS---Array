const nomes = ["Evaldo", "Mari", "Camis"];

/*
    nomes.forEach(function (nome) {
        console.log(nome);
    })

    nomes.forEach((nome) {
        console.log(nome);
    })
*/

function imprimeLista(nome) {
    console.log(nome);
}

nomes.forEach(imprimeLista)


