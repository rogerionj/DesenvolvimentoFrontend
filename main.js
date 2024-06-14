function somar(v1, v2) {
  console.log("Entrou na função de sintaxe básica");
  return v1 + v2;
}

const constFuncao = function (v1, v2) {
  console.log("Entrou na funcao anonima");
  return v1 + v2;
};

const constArrow = (v1, v2) => {
  console.log("Entrou na arrow function");

  let nome = window.prompt('Digite seu nome');

  console.log("O nome digitado foi : " + nome);

  return v1 + v2;
};
