const quizData = [
    {
      question: "What is the correct syntax to print a message in the console in JavaScript?",
      a: "console.print('Hello World');",
      b: "console.log('Hello World');",
      c: "print.console('Hello World');",
      d: "console.write('Hello World');",
      correct: "b"
    },
    {
      question: "Which of the following is a correct way to declare a JavaScript variable?",
      a: "var myVar = 10;",
      b: "variable myVar = 10;",
      c: "v myVar = 10;",
      d: "const var myVar = 10;",
      correct: "a"
    },
    {
      question: "What keyword is used to define a constant in JavaScript?",
      a: "let",
      b: "var",
      c: "const",
      d: "static",
      correct: "c"
    },
    {
      question: "How can you convert a string to an integer in JavaScript?",
      a: "Number()",
      b: "parseInt()",
      c: "Integer()",
      d: "parseFloat()",
      correct: "b"
    },
    {
      question: "Which built-in method is used to remove the last element from an array?",
      a: "pop()",
      b: "shift()",
      c: "remove()",
      d: "slice()",
      correct: "a"
    }
  ];
  
  const quiz = document.getElementById('quiz');
  const submitBtn = document.getElementById('submit');
  const resultText = document.getElementById('result-text');
  const popup = document.getElementById('popup');
  const closeBtn = document.querySelector('.close');
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuiz() {
    quiz.innerHTML = `
      <h2>${quizData[currentQuestion].question}</h2>
      <label>
        <input type="radio" name="answer" value="a"> ${quizData[currentQuestion].a}
      </label>
      <label>
        <input type="radio" name="answer" value="b"> ${quizData[currentQuestion].b}
      </label>
      <label>
        <input type="radio" name="answer" value="c"> ${quizData[currentQuestion].c}
      </label>
      <label>
        <input type="radio" name="answer" value="d"> ${quizData[currentQuestion].d}
      </label>
    `;
  }
  
  function getSelectedAnswer() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selected = undefined;
    answers.forEach(answer => {
      if (answer.checked) {
        selected = answer.value;
      }
    });
    return selected;
  }
  
  function showResult() {
    const percentage = (score / quizData.length) * 100;
    resultText.innerText = `Your Score: ${percentage}%`;
    popup.style.display = 'block';  // Show popup
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelectedAnswer();
    if (answer) {
      if (answer === quizData[currentQuestion].correct) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuiz();
      } else {
        showResult();
      }
    } else {
      alert("Please select an answer!");
    }
  });
  
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';  // Hide popup on close
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';  // Close the popup if clicking outside
    }
  });
  
  loadQuiz();
  
  


