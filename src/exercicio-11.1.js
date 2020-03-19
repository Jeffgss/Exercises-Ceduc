/*11- Construa um programa que lê uma opção conforme abaixo (usar switch/case) e o salário atual do funcionário, calcula e exibe o novo salário:
A = aumento de 8% no salário;
B = aumento de 11% no salário;
C = aumento fixo no salário (de R$ 350,00 se o salário atual
for até R$ 1000 e de R$ 200,00 se o salário atual for maior que R$ 1000).
*/

const salary = Number(prompt("Digite o salário atual"));
let choice = prompt("A = aumento de 8% no salário; \nB = aumento de 11% no salário; \nC = aumento fixo no salário (de R$ 350,00 se o salário atual for até R$ 1000 e de R$ 200,00 se o salário atual for maior que R$ 1000).").toLocaleUpperCase();

function converting(){
    choice = choice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    return choice;
}

if (choice === "A") {
    choice = salary + salary * 0.08;
    console.log(`Novo salário: ${converting()}`);
    alert(`Novo salário: ${converting()}`);
} else if (choice === "B") {
    choice = salary + salary * 0.11;
    console.log(`Novo salário: ${converting()}`);
    alert(`Novo salário: ${converting()}`);
} else if (choice === "C") {
    if (salary <= 1000) {
        choice = salary + 350;
        console.log(`Novo salário: ${converting()}`);
        alert(`Novo salário: ${converting()}`);
    } else {
        choice = salary + 200;
        console.log(`Novo salário: ${converting()}`);
        alert(`Novo salário: ${converting()}`);
    }
} else {
    console.log("Opção inválida.");
    alert("Opção inválida.");
}