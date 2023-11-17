// Opções de lanche
const menu = [
  "Hamburguer",
  "Pizza",
  "Hot Dog",
  "Sanduíche de frango"
];

// Sorteio de uma opção aleatória
const opcaoEscolhida = menu[Math.floor(Math.random() * menu.length)];

// Mensagem de atendimento
const mensagemAtendimento = `Obrigado por escolher a nossa lanchonete! Sua opção escolhida foi: ${opcaoEscolhida}.`;

// Exibir a mensagem
console.log(mensagemAtendimento);