// 1- Observe o fluxograma a seguir, reescreva-o agora na forma de pseudocódigo e em seguida, o programa.

const number1 = Number(prompt("Digite um valor"));
const number2 = Number(prompt("Digite outro valor"));
const sum = number1 + number2;

if (sum > 10) {
  console.log(`A soma dos números é: ${sum}`);
} else {
  console.log(`Os números digitados foram: ${number1} e ${number2}`);
}