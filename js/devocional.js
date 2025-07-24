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
  },

  {
    titulo: "A cura do leproso",
    texto: "Um homem isolado pela sociedade é tocado por Jesus. Ele quebra barreiras sociais e religiosas, mostrando que ninguém está fora do alcance da graça.",
    temporada: "Temporada 1, Episódio 6",
    referencia: "Marcos 1:40-45"
  },
  {
    titulo: "A pesca milagrosa",
    texto: "Simão reluta, mas obedece à palavra de Jesus. A obediência gera milagre — e também um novo chamado para uma vida com propósito.",
    temporada: "Temporada 1, Episódio 4",
    referencia: "Lucas 5:1-11"
  },
  {
    titulo: "Jesus expulsa demônios em Gadara",
    texto: "Jesus liberta um homem possuído, restaurando sua mente e dignidade. Mesmo os lugares mais sombrios se rendem ao poder de Cristo.",
    temporada: "Temporada 3, Episódio 1",
    referencia: "Lucas 8:26-39"
  },
  {
    titulo: "Jesus cura a filha de Jairo",
    texto: "Na dor e no desespero, Jairo clama por sua filha. Jesus não só responde, mas revela que, com Ele, até a morte perde seu poder.",
    temporada: "Temporada 3, Episódio 5",
    referencia: "Marcos 5:21-43"
  },
  {
    titulo: "Jesus e o publicano Zaqueu",
    texto: "Zaqueu, odiado por todos, sobe numa árvore só para ver Jesus. Ele é visto, chamado e transformado — porque ninguém passa despercebido por Cristo.",
    temporada: "Temporada 4, Episódio 2",
    referencia: "Lucas 19:1-10"
  },
  {
    titulo: "A tempestade acalmada",
    texto: "No meio do medo e da dúvida, Jesus acalma o mar e os corações. Ele ainda acalma tempestades em nossas vidas com Sua presença.",
    temporada: "Temporada 2, Episódio 4",
    referencia: "Marcos 4:35-41"
  },
  {
    titulo: "Perdão para a mulher adúltera",
    texto: "Acusada e condenada, ela encontra em Jesus o único que poderia julgá-la — e Ele a perdoa. Somos todos convidados a essa mesma graça.",
    temporada: "Temporada 3, Episódio 8",
    referencia: "João 8:1-11"
  },
  {
    titulo: "Jesus lava os pés dos discípulos",
    texto: "Antes da cruz, Jesus se ajoelha para servir. Ele nos chama a humildade, mesmo quando temos autoridade.",
    temporada: "Temporada 4, Episódio 7",
    referencia: "João 13:1-17"
  },
  {
    titulo: "Pedro caminha sobre as águas",
    texto: "Em meio ao caos, Pedro olha para Jesus e caminha sobre o impossível. Fé é manter os olhos fixos nEle, mesmo quando tudo balança.",
    temporada: "Temporada 4, Episódio 4",
    referencia: "Mateus 14:22-33"
  },
  {
    titulo: "A viúva de Naín e seu filho",
    texto: "Jesus vê a dor da mãe e devolve-lhe o filho. Ele é aquele que restaura lares e traz vida onde tudo parecia perdido.",
    temporada: "Temporada 4, Episódio 5",
    referencia: "Lucas 7:11-17"
  },
  {
    titulo: "A parábola do bom samaritano",
    texto: "Jesus ensina que o verdadeiro amor ultrapassa fronteiras e preconceitos. Amar ao próximo é agir, mesmo quando é inconveniente.",
    temporada: "Temporada 3, Episódio 6",
    referencia: "Lucas 10:25-37"
  },
  {
    titulo: "Tomé e a dúvida",
    texto: "Mesmo entre os escolhidos, Tomé duvida. Jesus não o rejeita, mas o convida a tocar e crer. A fé pode florescer mesmo após a incerteza.",
    temporada: "Temporada 4, Episódio 8",
    referencia: "João 20:24-29"
  },
  {
    titulo: "Jesus e as crianças",
    texto: "Jesus valoriza as crianças e ensina que o Reino pertence aos que se tornam como elas: simples, confiantes e cheios de fé.",
    temporada: "Temporada 1, Episódio 3",
    referencia: "Mateus 19:13-15"
  },
  {
    titulo: "André, o discipulado silencioso",
    texto: "André não é o mais falado, mas foi ele quem levou Pedro a Jesus. Servir em silêncio pode transformar destinos.",
    temporada: "Temporada 1, Episódio 2",
    referencia: "João 1:40-42"
  },
  {
    titulo: "A missão de Jesus em Nazaré",
    texto: "Jesus volta à sua cidade natal, mas é rejeitado. Às vezes, somos incompreendidos por aqueles mais próximos — e ainda assim, seguimos firmes.",
    temporada: "Temporada 2, Episódio 2",
    referencia: "Lucas 4:16-30"
  },
  {
    titulo: "Judas Iscariotes é chamado",
    texto: "Mesmo sabendo de sua traição futura, Jesus chama Judas. Ele nos dá chances reais de caminhar com Ele, mesmo conhecendo nosso coração.",
    temporada: "Temporada 2, Episódio 8",
    referencia: "João 6:70-71"
  },
  {
    titulo: "Jesus e a mulher cananeia",
    texto: "Uma mulher estrangeira insiste em seu pedido por cura. Jesus se maravilha com sua fé e atende — fé perseverante move o céu.",
    temporada: "Temporada 4, Episódio 6",
    referencia: "Mateus 15:21-28"
  },
  {
    titulo: "Maria Madalena recaída e restaurada",
    texto: "Mesmo depois de ser liberta, Maria tem uma recaída. Mas Jesus a acolhe de volta com amor e graça. Deus não desiste de nós.",
    temporada: "Temporada 2, Episódio 6",
    referencia: "Isaías 43:1-2"
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


// Função para buscar o versículo na API
function buscarVersiculo(ref) {
  const container = document.createElement("div");
  container.className = "versiculo-biblico";
  container.innerText = "Carregando versículo...";

  fetch(`https://bible-api.com/${encodeURIComponent(ref)}`)
    .then(response => response.json())
    .then(data => {
      container.innerText = `${data.reference} (KJV): ${data.text}`;
    })
    .catch(() => {
      container.innerText = "Versículo não encontrado.";
    });

  return container;
}

// Renderiza os cards
const containerDevocional = document.getElementById("devocional-container");

devocionais.forEach(devocional => {
  const card = document.createElement("div");
  card.className = "devocional-card";

  const titulo = document.createElement("h3");
  titulo.innerText = devocional.titulo;

  const texto = document.createElement("p");
  texto.innerText = devocional.reflexao;

  const versiculo = buscarVersiculo(devocional.versiculo);

  card.appendChild(titulo);
  card.appendChild(texto);
  card.appendChild(versiculo);
  containerDevocional.appendChild(card);
});