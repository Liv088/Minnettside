//oppgave i teknologiforståelse. TODO list og Stein saks papir

document.getElementById("addTaskButton").addEventListener("click", addTask);

function addTask() {
    let task = document.getElementById("taskInput").value;
    // Legger ikke til task om input er tomt 
    if (task.trim() !== "") {
        let listItem = document.createElement("li");
        listItem.textContent = task;

        // Adder slette knapp for hver av dem
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.onclick = function() {
            listItem.remove();
        };

        listItem.appendChild(deleteButton);
        document.getElementById("taskList").appendChild(listItem);

        // Clear input etter å ha addet task
        document.getElementById("taskInput").value = "";
    }
}

// Add ability til å trykke Enter for å adde task
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});


//stein saks papir
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const choices = ['stein', 'saks', 'papir'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let resultText = '';

  if (playerChoice === computerChoice) {
    resultText = `Uavgjort! Du valgte ${playerChoice} og datamaskinen valgte ${computerChoice}.`;
  } else if (
    (playerChoice === 'stein' && computerChoice === 'saks') ||
    (playerChoice === 'saks' && computerChoice === 'papir') ||
    (playerChoice === 'papir' && computerChoice === 'stein')
  ) {
    resultText = `Du vant! ${playerChoice} slår ${computerChoice}.`;
    playerScore++;
  } else {
    resultText = `Du tapte! ${computerChoice} slår ${playerChoice}.`;
    computerScore++;
  }

  document.getElementById('result').textContent = resultText;
  document.getElementById('score').textContent = `Stillingen: Du ${playerScore} - ${computerScore} Datamaskinen`;
}
