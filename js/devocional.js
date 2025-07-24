const devocionais = [
  {
    titulo: "O chamado de Maria Madalena",
    texto: "Jesus chamou Maria pelo nome, libertando-a de sua dor e dando-lhe nova identidade. Assim como ela, todos podemos ser restaurados pelo amor de Cristo.",
    temporada: "Temporada 1, Episódio 1",
    referencia: "Lucas 8:1-3"
  },
  {
    titulo: "O chamado de Mateus",
    texto: "Mateus era um cobrador de impostos rejeitado. Jesus o escolheu sem exigir mudanças prévias, mostrando que o amor vem antes da transformação.",
    temporada: "Temporada 1, Episódio 7",
    referencia: "Mateus 9:9-13"
  },
  {
    titulo: "O milagre em Caná",
    texto: "Nas bodas de Caná, Jesus transformou água em vinho, mostrando que Ele se importa com detalhes e nos oferece alegria verdadeira em qualquer fase.",
    temporada: "Temporada 1, Episódio 5",
    referencia: "João 2:1-11"
  },
  {
    titulo: "Jesus e Nicodemos",
    texto: "Um líder religioso buscou Jesus à noite. Nicodemos ouviu sobre o novo nascimento espiritual — algo que todos precisamos experimentar pela fé.",
    temporada: "Temporada 1, Episódio 8",
    referencia: "João 3:1-21"
  },
  {
    titulo: "A cura do paralítico",
    texto: "Jesus cura o paralítico e perdoa seus pecados, demonstrando que a maior cura que recebemos vem da restauração interior e da reconciliação com Deus.",
    temporada: "Temporada 2, Episódio 4",
    referencia: "Marcos 2:1-12"
  },
  {
    titulo: "A mulher samaritana no poço",
    texto: "Uma mulher desprezada encontra Jesus, que lhe oferece a 'água viva'. Ao revelar sua verdade, Ele traz libertação e dignidade à sua história.",
    temporada: "Temporada 1, Episódio 8",
    referencia: "João 4:1-26"
  },
  {
    titulo: "A missão do Sermão do Monte",
    texto: "Jesus proclama as bem-aventuranças e ensina sobre o Reino de Deus. Somos convidados a viver com humildade, misericórdia e justiça.",
    temporada: "Temporada 2, Episódio 8",
    referencia: "Mateus 5:1-12"
  },
  {
    titulo: "A libertação de Simão",
    texto: "Simão estava afundado em dívidas e desespero. Jesus interveio em sua vida e o chamou para um propósito maior.",
    temporada: "Temporada 1, Episódio 4",
    referencia: "Lucas 5:1-11"
  },
  {
    titulo: "A fé da mulher do fluxo de sangue",
    texto: "Mesmo sem permissão, ela tocou em Jesus com fé — e foi curada. Isso nos mostra que fé verdadeira sempre nos aproxima dEle.",
    temporada: "Temporada 3, Episódio 5",
    referencia: "Marcos 5:25-34"
  },
  {
    titulo: "A dor de Maria, mãe de Jesus",
    texto: "Maria vê seu filho sofrer, mas confia. Mesmo na dor, ela se mantém firme na missão de Jesus — exemplo de fé e entrega total.",
    temporada: "Temporada 3, Episódio 2",
    referencia: "Lucas 2:33-35"
  },
  {
    titulo: "Jesus cura o homem com mão ressequida",
    texto: "Jesus cura no sábado para mostrar que a compaixão está acima das regras. Ele nos convida a colocar o amor no centro de tudo.",
    temporada: "Temporada 3, Episódio 3",
    referencia: "Marcos 3:1-6"
  },
  {
    titulo: "João Batista na prisão",
    texto: "Mesmo sendo primo de Jesus, João enfrentou dúvidas e prisões. Sua vida nos lembra que fé verdadeira continua mesmo sem respostas.",
    temporada: "Temporada 2, Episódio 5",
    referencia: "Mateus 11:2-6"
  }
];

const container = document.getElementById("devocionais");

devocionais.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2>${item.titulo}</h2>
    <p>${item.texto}</p>
    <p class="temporada">${item.temporada}</p>
    <p class="referencia"><strong>Leia em:</strong> ${item.referencia}</p>
  `;
  container.appendChild(card);
});
