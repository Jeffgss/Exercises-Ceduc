// 7- Faça um algoritmo (fluxograma), em seguida, um programa que solicite a entrada de dois números, em seguida imprime na tela o quadrado do menor número e a raiz quadrada do maior número, se for possível.

const number1 = Number(prompt("Digite um número"));
const number2 = Number(prompt("Digite outro número"));

if (number1 < number2) {
	let square = Math.pow(number1, 2);
	console.log(`O menor valor digitado: ${number1}. ${number1}² = ${square}`);
} else {
	let square = Math.pow(number2, 2);
	console.log(`O menor valor digitado: ${number2}. ${number2}² = ${square}`);
}

if (number1 > number2) {
	let squareRoot = Math.sqrt(number1);
	console.log(`O maior valor digitado: ${number1}. √${number1} = ${squareRoot.toFixed(2)}`);
} else {
	let squareRoot = Math.sqrt(number2); 
	console.log(`O maior valor digitado: ${number2}. √${number2} = ${squareRoot.toFixed(2)}`);
}