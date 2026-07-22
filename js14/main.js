const form = document.querySelector("#game-form");
const gameName = document.querySelector("#game-name");
const platform = document.querySelector("#platform");
const list = document.querySelector("#game-list");
const clear = document.querySelector("#clear-btn");

let games = [];

function saveGames() {
  localStorage.setItem("games", JSON.stringify(games));
}

function loadGames() {
  const saveGame = localStorage.getItem("games");

  if (saveGame) {
    games = JSON.parse(saveGame);
  } else {
    games = [];
  }
}

function toggleCompleted(id) {
  games = games.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        completed: !item.completed,
      };
    }

    return item;
  });

  saveGames();
  render();
}

function render() {
  list.innerHTML = "";

  games.forEach((item) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed;

    const deleted = document.createElement("button")
    deleted.textContent = "Delete"

    deleted.onclick = () => { deleteGame(item.id) }

    checkbox.onclick = () => { toggleCompleted(item.id) };

    li.append(
      checkbox,
      ` ${item.name} - ${item.platform}`,
      deleted
    );

    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const newGame = {
    id: Date.now(),
    name: gameName.value,
    platform: platform.value,
    completed: false
  }

  games.push(newGame)

  saveGames()

  render()

  form.reset()
})

function deleteGame(id) {
  if (confirm("Delete ?")) {
    games = games.filter((item) => item.id !== id)

    saveGames()
    render()
  }
}

clear.onclick = () => {
  localStorage.removeItem("games")
   
  games = []

  render()
}

document.addEventListener("DOMContentLoaded", () => {
  loadGames()
  render()
})


