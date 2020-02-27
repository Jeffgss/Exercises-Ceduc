/* 6- Faça um algoritmo (pseudocódigo), em seguida um programa que leia a idade de uma pessoa e informe a sua classe eleitoral:
• não eleitor (abaixo de 16 anos);
• eleitor obrigatório (entre a faixa de 18 e menor de 65 anos);
• eleitor facultativo (de 16 até 18 anos e maior de 65 anos, inclusive).
*/

const age = Number(prompt("Informe sua idade"));

if (age < 16) {
    alert("Não eleitor");
    console.log("Não Eleitor");
} else if (age > 18 && age <= 65) {
    alert("Eleitor obrigatório");
    console.log("Eleitor obrigatório");
} else if (age === 16 || age <= 18 || age > 65) {
    alert("Eleitor facultativo");
    console.log("Eleitor facultativo");
}