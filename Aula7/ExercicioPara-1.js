/* Faça um programa que repita 5 vezes, mostrando o menu de opções a seguir, e recebendo a opção do usuário e os dados necessários para executar cada operação.
Menu de opções:
1- Raiz quadrada de um número
2- Um número elevado a outro número
3- Sair
*/

for (let count = 0; count < 5; count++) {

  let choice = prompt("----Menu de opções----\n\n 1- Raiz quadrada\n 2- Potência\n 3- Sair\n\n Digite sua choice:");

  if (choice === '1') {
    let number = Number(prompt("Digite um número para ver sua raiz quadrada."));
    let squareRoot = Math.sqrt(number);
    alert(`√${number} = ${squareRoot.toFixed(2)}`);
    console.log(`√${number} = ${squareRoot.toFixed(2)}`);
  } else if (choice === '2') {
    let base = Number(prompt("Digite um número"));
    let exponent = Number(prompt(`${base} elevado a qual número?`));
    let pow = Math.pow(base, exponent);
    alert(`${base} elevado a ${exponent} = ${pow}`);
    console.log(`${base} elevado a ${exponent} = ${pow}`);
  } else if (choice === '3') {
    alert("Saindo do programa!");
    break;
  } else {
    alert("Opção inválida!\nFaça outra escolha!");
    console.log("Opção inválida!\nFaça outra escolha!");
  }
}