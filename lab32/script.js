const questions = [
    {
        question: "Porque o apelido do Corinthians é timão?",
        answers: ["o apelido vem do formato do escudo do time, que parece o volante de um barco","o apelido vem or conta do tamanho do clube (titulos)","o apelido vem por conta do tamanho do simbolo","o apelido vem do grupo de operarios que fundaram o corinthians que se nomeavam timão"],
        correctAnswer: 0
    },
    {
        question: "Quantos anos tem o Corinthians (2024)?",
        answers: ["122","112","124","114"],
        correctAnswer: 3
    },
    {
        question: "Quantos titulos do Brasileirão o Corinthians ja ganhou até 2024?",
        answers: ["5","6","7","8"],
        correctAnswer: 2
       
    },
    {
        question: "Qual o valor da divida total do Corinthians em 2024?",
        answers: ["2.310 bilhões", "2.115 bilhões", "2.087 bilhões", "2.345 bilhões"],
        correctAnswer: 0
    },
    {
        question: "Qual o valor da folha salarial do Corinthians em 2024?",
        answers: ["R$ 20,5 milhões por mês", "R$ 23,5 milhões por mês", "R$ 21,5 milhões por mês", "R$ 22,5 milhões por mês"],
        correctAnswer: 3
    },
   
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `Você acertou ${score} de ${questions.length}`;
}



    window.onload = loadQuestions;