   const quizData = [
      { question: "Quem é o personagem principal da série The Chosen?", options: ["Jesus", "Pedro", "João", "Judas"], answer: "Jesus" },
      { question: "Qual é o nome do apóstolo que era cobrador de impostos?", options: ["Mateus", "Tiago", "Tomé", "André"], answer: "Mateus" },
      { question: "Qual discípulo duvidava da ressurreição de Jesus?", options: ["Tomé", "João", "Judas", "Simão"], answer: "Tomé" },
      { question: "Quem era conhecido como o ‘Rocha’ entre os apóstolos?", options: ["Pedro", "Paulo", "Tiago", "André"], answer: "Pedro" },
      { question: "Qual apóstolo foi conhecido por ser um zelote?", options: ["Simão", "Mateus", "João", "Felipe"], answer: "Simão" },
      { question: "Onde Jesus realizou seu primeiro milagre na série?", options: ["Caná", "Jerusalém", "Galileia", "Betânia"], answer: "Caná" },
      { question: "Qual é o nome da mãe de Jesus apresentada na série?", options: ["Maria", "Marta", "Isabel", "Ana"], answer: "Maria" },
      { question: "Quem batizou Jesus no rio Jordão?", options: ["João Batista", "Pedro", "Paulo", "Tiago"], answer: "João Batista" },
      { question: "Qual personagem era um pescador antes de seguir Jesus?", options: ["Pedro", "Mateus", "Judas", "Tiago"], answer: "Pedro" },
      { question: "Qual discípulo traiu Jesus?", options: ["Judas Iscariotes", "Tomé", "Felipe", "Simão"], answer: "Judas Iscariotes" },
      { question: "Em qual cidade Jesus cresceu?", options: ["Nazaré", "Belém", "Jerusalém", "Caná"], answer: "Nazaré" },
      { question: "Quem cuidava da casa onde os discípulos se reuniam?", options: ["Maria Madalena", "Joana", "Marta", "Maria"], answer: "Maria Madalena" },
      { question: "Quem foi a mulher que ungiu Jesus com óleo perfumado?", options: ["Maria Madalena", "Joana", "Maria", "Marta"], answer: "Maria Madalena" },
      { question: "Qual apóstolo era irmão de Pedro?", options: ["André", "Tiago", "João", "Felipe"], answer: "André" },
      { question: "Quem foi o apóstolo mais jovem?", options: ["João", "Tiago", "Tomé", "Felipe"], answer: "João" },
      { question: "Qual profeta batizava e pregava no deserto?", options: ["João Batista", "Isaías", "Jeremias", "Elias"], answer: "João Batista" },
      { question: "Quem foi chamado por Jesus para seguir e largar suas redes?", options: ["Pedro", "Mateus", "Tiago", "Tomé"], answer: "Pedro" },
      { question: "Onde Jesus foi crucificado?", options: ["Gólgota", "Jerusalém", "Betânia", "Galileia"], answer: "Gólgota" },
      { question: "Qual discípulo escreveu o livro do Apocalipse?", options: ["João", "Pedro", "Paulo", "Tiago"], answer: "João" },
      { question: "Quem era conhecido por duvidar da ressurreição até ver Jesus?", options: ["Tomé", "Pedro", "Judas", "João"], answer: "Tomé" },
      { question: "Qual foi o presente que os Reis Magos deram a Jesus?", options: ["Ouro, incenso e mirra", "Ouro, prata e bronze", "Prata, mirra e incenso", "Ouro, prata e incenso"], answer: "Ouro, incenso e mirra" },
      { question: "Quem batizou os primeiros seguidores de Jesus?", options: ["Pedro", "João Batista", "Tiago", "Paulo"], answer: "Pedro" },
      { question: "Qual apóstolo era conhecido por ser um médico?", options: ["Lucas", "Mateus", "João", "Pedro"], answer: "Lucas" },
      { question: "Quem escreveu muitas cartas para as igrejas?", options: ["Paulo", "Pedro", "João", "Tiago"], answer: "Paulo" },
      { question: "Qual apóstolo era conhecido como ‘o publicano’?", options: ["Mateus", "Tomé", "Felipe", "André"], answer: "Mateus" },
      { question: "Quem negou Jesus três vezes antes do galo cantar?", options: ["Pedro", "João", "Judas", "Tomé"], answer: "Pedro" },
      { question: "Qual foi o local da Última Ceia?", options: ["Jerusalém", "Galileia", "Caná", "Betânia"], answer: "Jerusalém" },
      { question: "Quem foi ressuscitado por Jesus depois de estar morto quatro dias?", options: ["Lázaro", "Jairo", "Tiago", "Felipe"], answer: "Lázaro" },
      { question: "Quem era o governante romano durante a crucificação?", options: ["Pôncio Pilatos", "Herodes", "Caifás", "Nero"], answer: "Pôncio Pilatos" },
      { question: "Qual discípulo foi conhecido por sua coragem e falou no Pentecostes?", options: ["Pedro", "João", "Tiago", "Felipe"], answer: "Pedro" }
    ];

    let currentQuestion = 0;
    let score = 0;
    let wrong = 0;

    const questionEl = document.getElementById("question");
    const answersEl = document.getElementById("answers");
    const nextBtn = document.getElementById("next-btn");
    const scoreEl = document.getElementById("score");

    function loadQuestion() {
      nextBtn.disabled = true;
      scoreEl.textContent = "";
      const current = quizData[currentQuestion];
      questionEl.textContent = `${currentQuestion + 1}. ${current.question}`;
      answersEl.innerHTML = "";

      current.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => selectAnswer(button, option));
        answersEl.appendChild(button);
      });
    }

    function selectAnswer(button, selected) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    score++;
    button.style.backgroundColor = "#2ecc71"; // verde
  } else {
    wrong++;
    button.style.backgroundColor = "#e74c3c"; // vermelho
    // Marca a correta também
    Array.from(answersEl.children).forEach(btn => {
      if (btn.textContent === correct) {
        btn.style.backgroundColor = "#27ae60";
      }
    });
  }
  Array.from(answersEl.children).forEach(btn => btn.disabled = true);
  nextBtn.disabled = false;
}


    nextBtn.addEventListener("click", () => {
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        showScore();
      }
    });

    function showScore() {
      questionEl.textContent = "Quiz finalizado!";
      answersEl.innerHTML = "";
      nextBtn.style.display = "none";
      scoreEl.innerHTML = `
        Você respondeu <strong>${quizData.length}</strong> perguntas.<br>
        Acertou: <strong>${score}</strong><br>
        Errou: <strong>${wrong}</strong>
      `;
    }

    loadQuestion();