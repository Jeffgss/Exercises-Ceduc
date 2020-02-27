// 8- a) Escreva o pseudocódigo e o programa para esse fluxograma.

const number1 = Number(prompt("Digite um número"));
const number2 = Number(prompt("Digite outro número"));

const sum = number1 + number2;

if (sum > 5 && sum <= 10) {
	let result = sum + 5;
	console.log(result);
} else {
	let result = sum - 5;
	console.log(result)
}

/* b) O que significa o operador lógico &&. Explique para que foi usado no fluxograma. Qual é a diferença do operador && e o operador ||?
&& (E) serve para indicar duas ou mais condoções, sendo necessário que TODAS sejam verdadeiras para retornar verdadeiro.
Foi usado no fluxograma para validar um valor entre 6 e 10.
Operador && (E), todas as condições devem ser verdadeiras. Operador || (OU) apenas uma condição necessita ser verdadeira.

c) Suponha que o usuário tenha entrado com os seguintes dados: num1 = 4 (quatro) e num2 = 2 (dois), qual será a saída?
11.

d) Suponha que o usuário tenha entrado com os seguintes dados: num1 = 6 (seis) e num2 = 8 (oito), qual será a saída?
9.
*/
