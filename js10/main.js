const movies = [
    {
        title: "Inception",
        genre: "Sci-Fi",
        watched: true,
        rating: 5
    },

    {
        title: "The Dark Knight",
        genre: "Action",
        watched: true,
        rating: 2
    },
    {
        title: "Stranger Things",
        genre: "Sci-Fi",
        watched: true,
        rating: 1
    },
    {
        title: "Chernobyl",
        genre: "Drama",
        watched: true,
        rating: 4
    },
    {
        title: "Parasite",
        genre: "Thriller",
        watched: false,
        rating: 3
    },
    {
        title: "Breaking Bad",
        genre: "Crime",
        watched: false,
        rating: 8
    },
    {
        title: "Friends",
        genre: "Comedy",
        watched: false,
        rating: 6
    },
    {
        title: "Spirited Away",
        genre: "Anime",
        watched: false,
        rating: 7
    }


]


const title = document.querySelector("h1")
const summary = document.querySelector("#summary")
const list = document.querySelector("#movie-list")
const recoList = document.querySelector("#recommended-list")


title.textContent = "My Favorite Movies"


let  count = 0
let notwatched = 0


for (let i = 0; i < movies.length; i++) {
    const movie = movies[i]
    const li = document.createElement("li")
    


    const texth = document.createElement("h2")
    texth.textContent = movie.title
    
    const genrep = document.createElement("p")
    genrep.textContent = `${movie.genre}`

     const ratingp = document.createElement("p")
     ratingp.textContent = `${movie.rating}`

     const status = document.createElement("span")




     if (movie.watched) {
        status.textContent = "Watched"
        count++
        li.classList.add("watched")

     } else {
        status.textContent = "Not Watched"
        notwatched++
        li.classList.add("not-watched")
     }

     li.append(texth, genrep, ratingp, status)

     list.appendChild(li)
     
}

for (let i = 0; i < movies.length; i++) {

    if (movies[i].rating >= 8) {

        const li = document.createElement("li")

        li.textContent = `${movies[i].title} - ${movies[i].rating}`

        recoList.appendChild(li)
    }
}


summary.textContent = `Total movies: ${movies.length}, Watched: ${count}, Not Wached: ${notwatched}`




