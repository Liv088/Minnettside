//oppgave i teknologiforståelse. TODO list

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