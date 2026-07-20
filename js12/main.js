const books = [
  {
    id: 1,
    title: "Odam Bo'lish Qiyin",
    author: "O'lmas Umarbekov",
    finished: false,
  },
  {
    id: 2,
    title: "Do'st ortirrish",
    author: "Deyl Karnegi",
    finished: true,
  },
  {
    id: 3,
    title: "Start-up pufagidagi millionlar",
    author: "Den Layons",
    finished: false,
  },
  {
    id: 4,
    title: "Qish odamlari",
    author: "Djennifer Makmaxon",
    finished: true,
  },
  {
    id: 5,
    title: "Atom Odatlar",
    author: "Jaymes Clear",
    finished: false,
  },
  {
    id: 6,
    title: "Kuzning Birinchi Kuni",
    author: "O'lmas Umarbekov",
    finished: true,
  },
];

const summary = document.getElementById("summary");
const form = document.getElementById("shelf");
const title = document.getElementById("title");
const author = document.getElementById("author");
const btn = document.getElementById("btn");
const message = document.getElementById("message");
const list = document.getElementById("list");

function renderFunc() {
  list.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    const li = document.createElement("li");

    const titleP = document.createElement("p");
    titleP.textContent = ` ${book.title}`;

    const authorP = document.createElement("p");
    authorP.textContent = ` ${book.author}`;

    li.append(titleP);
    li.append(authorP);

    list.appendChild(li);
  }

  input.addEventListener("change", () => {
    book.finished = !book.finished;

    renderFunc();
  });
}

renderFunc();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const addBook = {
    id: Date.now(),
    title: title.value,
    author: author.value,
  };

  books.push(addBook);
});
