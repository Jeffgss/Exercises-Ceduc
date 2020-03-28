// Faça um programa que receba 10 números, em seguida imprima na tela a soma dos números positivos e a quantidade de números negativos. Utilize a estrutura de repetição for.

let soma = 0;
let neg = 0;

for (let count = 0; count < 10; count++) {
  let num = Number(prompt("Digite um número"));
  if (num > 0) {
    soma = soma + num;
  } else {
    neg++;
  }
}
console.log(`A soma dos positivos é ${soma}`);
console.log(`A quantidade de negativos é ${neg}`);