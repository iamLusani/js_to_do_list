const name = prompt("What is your name?");
let heading = document.querySelector("h1");
heading.textContent = `Hiii, ${name} ready to write some tasks!`;

let form = document.querySelector("form");
let input = document.querySelector("#inputText");
let userInput = document.querySelector("#taskList");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = input.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `
    <span>${taskText}</span>
    
  `;
    userInput.appendChild(li);
    input.value = "";
  }
});
