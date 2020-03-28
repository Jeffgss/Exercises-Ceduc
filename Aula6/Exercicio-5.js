/* 5- O custo ao consumidor de um carro novo é a soma do custo de fábrica com a porcentagem do distribuidor e com os impostos, ambos aplicados ao custo de fábrica. Sabe-se que as porcentagens são as mesmas que estão na tabela a seguir. Faça um programa que receba o custo de fábrica de um carro e mostre o custo ao consumidor. Use os valores da tabela a seguir:
Custo de fábrica:                       % ao distribuidor:       % dos impostos:
• Até R$ 28.000,00                            5                      Isento
• Entre R$ 28.000,01 e R$ 45.000,00           10                     15
• Acima de R$ 45.000,00                       15                     20
*/

let factory = Number(prompt("Digite o valor do custo de fábrica do carro"));
const upTo28000 = 5/100 ;
const upTo45000 = 25/100;
const above4500 = 35/100;

if (factory <= 28000.00){
    factory += factory * upTo28000;
    alert(`Custo: ${factory.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
    console.log(`Custo: ${factory.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
} else if (factory >= 28000.01 && factory <= 45000.00) {
    factory += factory * upTo4500000;
    alert(`Custo: ${factory.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
    console.log(`Custo: ${factory.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
} else {
    factory += factory * above450000;
    alert(`Custo: ${factory.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
    console.log(`Custo: ${factory.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
}