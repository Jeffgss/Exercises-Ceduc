// 4- A prefeitura de Contagem abriu uma linha de crédito para os funcionários estatutários. O valor máximo da prestação não poderá ultrapassar 30% do salário bruto. Fazer um algoritmo (pseudocódigo) e, em seguida, um programa que permita entrar com o salário bruto e o valor da prestação, e informar se o empréstimo pode ou não ser concedido.

const percent = 0.3
const parcel = 12;

const loan = Number(prompt("Digite o valor que deseja para o empréstimo: "));
const salary = Number(prompt("Digite o valor do salário bruto: "));

const valueInstallment = loan / parcel;
const value = salary * percent;

if (valueInstallment <= value){
    console.log(`Cliente apto para realização do empréstimo. O valor da parcela é: ${valueInstallment}`);
    alert(`Cliente apto para realização do empréstimo. O valor da parcela é: ${valueInstallment}`);
} else {
    console.log(`Cliente inapto para realização do empréstimo. O valor da parcela ultrapassa o teto permitido`);
    alert(`Cliente inapto para realização do empréstimo. O valor da parcela ultrapassa o teto permitido`);
}