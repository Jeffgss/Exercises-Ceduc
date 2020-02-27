// 3- Faça um programa que solicite ao usuário o ano em que ele nasceu e verifique se o ano é Bissexto ou não e imprima uma mensagem na tela. Nota: Um ano é bissexto se for divisível por 4, mas não por 100. Um ano também é bissexto se for divisível por 400.

const year = Number(prompt("Digite o ano que você nasceu"));

const bissextile = "Ano Bissexto";
const notBissextile = "Não é Bissexto";

if ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))){
    alert(bissextile);
    console.log(bissextile);
} else {
    alert(notBissextile);
    console.log(notBissextile);
}