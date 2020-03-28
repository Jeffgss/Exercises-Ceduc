// No exemplo, a seguir o usuário vai digitar diversas idades e o programa vai contar quantas idades “válidas” foram digitadas. Além de calcular a média das idades. Para sair o usuário vai ter que digitar idade negativa.

let age = 1;
let countAge = 0;
let sum = 0;

while (age > 0) {
  age = Number(prompt("Digite uma idade.\nPara sair, digite uma idade negativa."));
  if (age > 0) {
    countAge++;
    sum += age;
  }
}
if (countAge != 0) {
  let media = sum / countAge;
  alert(`A média das idades é: ${Math.round(media)}.`);
  console.log(`A média das idades é: ${Math.round(media)}.`);
} else {
  alert(`Não foram digitadas idades válidas.`);
  console.log(`Não foram digitadas idades válidas.`);
}