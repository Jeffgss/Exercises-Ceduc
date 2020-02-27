// 10- Faça um programa que solicite o nome, sexo e idade de uma pessoa. Se a pessoa for do sexo feminino e tiver menos de 25 anos, imprimir o nome e a mensagem: ACEITA. Caso contrário, imprimir o nome, a idade e a mensagem: NÃO ACEITA. (Considere f ou F para o sexo feminino).

let name = prompt("Informe seu nome");
let gender = prompt("Informe seu sexo (M ou F)").toUpperCase();
let age = prompt("Informe sua idade");

if (gender === "F" && age < 25) {
	alert(`${name}. ACEITA.`);
	console.log(`${name}. ACEITA.`);
} else {
	alert(`${name}, ${age} anos. NÃO ACEITA.`)
}