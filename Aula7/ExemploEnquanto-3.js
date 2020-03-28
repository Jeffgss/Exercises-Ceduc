while (true) {
  const escolha = prompt("----Menu de opções----\n\n 1- Aumento de 5%\n 2- Aumento de 10%\n 3- Sair\n\n Digite sua escolha:");
  let salario = 0;

  function converting() {
    salario = salario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    return salario;
  }

  if (escolha === '1') {
    salario = Number(prompt("Digite o salário atual"));
    salario = salario + salario * 0.05;
    alert(`Salário novo = ${converting()}`);
    console.log(`Salário novo = ${converting()}`);
  } else if (escolha === '2') {
    salario = Number(prompt("Digite o salário atual"));
    salario = salario + salario * 0.10;
    alert(`Salário novo = ${converting()}`);
    console.log(`Salário novo = ${converting()}`);
  } else if (escolha === '3') {
    alert("Saindo do programa!");
    break;
  } else {
    alert("Opção inválida!\nFaça outra escolha!");
    console.log("Opção inválida!\nFaça outra escolha!");
  }
}