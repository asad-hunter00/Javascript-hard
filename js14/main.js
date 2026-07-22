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

    checkbox.addEventListener("change", () => {
      toggleCompleted(item.id);
    });

    li.append(
      checkbox,
      ` ${item.name} - ${item.platform}`
    );

    list.appendChild(li);
  });
}