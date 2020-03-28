// Faça um programa para somar 10 notas e apresentar a média aritmética das notas na tela. Use estrutura de repetição for

let count = 0;
let sum = 0;

for (count; count < 10; count++) {
  let notes = Number(prompt("Digite a nota"));
  sum += notes;
}
const media = sum / count;

alert(`A média das notas é de ${media.toFixed(1)}.`);
console.log(`A média das notas é de ${media.toFixed(1)}.`);