document.getElementById('quizForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const answers = {
    question1: document.querySelector('input[name="question1"]:checked').value,
    question2: document.querySelector('input[name="question2"]:checked').value,
    question3: document.querySelector('input[name="question3"]:checked').value,
    question4: document.querySelector('input[name="question4"]:checked').value,
    question5: document.querySelector('input[name="question5"]:checked').value
  };

  const correctAnswers = {
    question1: 'akita',
    question2: 'nose',
    question3: 'mastiff',
    question4: '42',
    question5: 'patron'
  };

  let score = 0;

  for (let key in answers) {
    const answer = answers[key];
    const correctAnswer = correctAnswers[key];
    const questionContainer = document.querySelector(`input[name="${key}"]:checked`).parentNode;

    if (answer === correctAnswer) {
      score++;
      questionContainer.classList.add('correct');
      questionContainer.classList.remove('wrong');
    } else {
      questionContainer.classList.add('wrong');
      questionContainer.classList.remove('correct');
    }
  }

  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = `Ви відповіли правильно на ${score} з 5 питань.`;
});
