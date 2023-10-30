const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaAlunosMedias = [alunos, medias]

function exibeNomedaLista(nomeDoAluno) {
    if (listaAlunosMedias[0].includes(nomeDoAluno)) {
        const indice = listaAlunosMedias[0].indexOf(nomeDoAluno)
        console.log(`${nomeDoAluno} está presente na lista de alunos e sua média é: ${listaAlunosMedias[1][indice]}`)
    } else {
        console.log("Não está presente na lista dos alunos");
    }
}

exibeNomedaLista('Juliana')