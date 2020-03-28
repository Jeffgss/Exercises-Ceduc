// Faça um programa que receba 10 números, em seguida imprima na tela a soma dos números positivos e a quantidade de números negativos.

let count = 0;
let sum = 0;
let negative = 0;

while (count < 10) {
  let num = Number(prompt("Digite um número"));

  if (num > 0) {
    sum += num;
  } else {
    negative++;
  }
  count++;
}
alert(`A soma dos positivos é: ${sum}.`);
console.log(`A soma dos positivos é: ${sum}.`);

alert(`A quantidade de negativos é: ${negative}.`);
console.log(`A quantidade de negativos é: ${negative}.`);