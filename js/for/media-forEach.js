const notas = [10, 6.5, 8, 7.5]
let somaDasNotas = 0

notas.forEach((nota, indice) => {
    somaDasNotas += nota
})

console.log(`A média é: ${somaDasNotas / notas.length}`);