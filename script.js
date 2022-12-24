/**
 * Can hold todos data
 */
let todos = [
  { name: "Learn React", isCompleted: true },
  { name: "Learn Angular", isCompleted: false },
  { name: "Learn Node", isCompleted: false },
];

let list = document.getElementById("list");

function populateList() {
  list.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    list.innerHTML += `<li class="list-group-item" onclick="deleteTodo(${i})">${todos[i].name}</li>`;
  }
}

function addTodo() {
  const val = document.getElementById("userInput").value;
  if (val === "") {
    alert("Invalid values");
  } else {
    todos.push({ name: val, isCompleted: false });
    populateList();
    document.getElementById("userInput").value = "";
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  populateList();
}

function deleteAllTodos() {
  todos = [];
  populateList();
}

