
document.querySelector('.side-panel-toggle').addEventListener('click', () => {
  document.querySelector('.wrapper').classList.toggle('side-panel-open');
}); 


function submitQuiz() {
  const answers = {
      q1: 'B',
      q2: 'D',
      q3: 'D',
      q4: 'D',
      q5: 'D'
  };

  let score = 0;
  for (let question in answers) {
      const selected = document.querySelector(`input[name="${question}"]:checked`);
      if (selected && selected.value === answers[question]) {
          score++;
      }
  }

  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `You scored ${score} out of 5!`;
}