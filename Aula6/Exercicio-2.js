/* 2- Faça um algoritmo (pseudocódigo), em seguida, um programa que receba a age de um nadador e mostre a sua categoria usando as regras abaixo:
Categoria:              age:
• infant                5 a 7
• juvenile              8 a 10
• teenager              11 a 15
• adult                 16 a 30
• Senior                Acima de 30
*/

const age = Number(prompt("Digite sua idade"));

const infant = "Categoria: Infantil";
const juvenile = "Categoria: Juvenil";
const teenager = "Categoria: Adolescente";
const adult = "Categoria: Adulto";
const senior = "Categoria: Senior";

if (age >= 5 && age <= 7) {
    alert(infant);
    console.log(infant);
} else if (age >= 8 && age <= 10) {
    alert(juvenile);
    console.log(juvenile);
} else if (age >= 11 && age <= 15) {
    alert(teenager);
    console.log(teenager);
} else if (age >= 16 && age <= 30) {
    alert(adult);
    console.log(adult);
} else {
    alert(senior);
    console.log(senior);
}