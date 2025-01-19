


function submitQuiz() {
  const answers = {
      q1: 'B',
      q2: 'D',
      q3: 'D',
      q4: 'A',
      q5: 'D',
      q6: 'C',
      q7: 'B',
      q8: 'D'
  };

  let score = 0;
  for (let question in answers) {
      const selected = document.querySelector(`input[name="${question}"]:checked`);
      if (selected && selected.value === answers[question]) {
          score++;
      }
  }

  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `You scored ${score} out of 8!`;
}