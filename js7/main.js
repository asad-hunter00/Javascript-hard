let songs = [
    {
        id: 1,
        title: "Fading light",
        artist: "Step by Step",
        liked: true
    },
    {
        id: 2,
        title: "Hot",
        artist: "Inna",
        liked: false
    },
    {
        id: 3,
        title: "Goth",
        artist: "Sidewalks",
        liked: false
    },
    {
        id: 4,
        title: "Skyfall",
        artist: "Adele",
        liked: true
    }
];

let nextId = 5;

function addSong(title, artist) {
    if (title.trim() === "" || artist.trim() === "") {
        return null;
    }

    const song = {
        id: nextId++,
        title,
        artist,
        liked: false,
    };

    songs.push(song);
    return song;
}

function deleteSong(id) {
    songs = songs.filter(item => item.id !== id);
    return songs;
}

function editSong(id, newTitle, newArtist) {
    if (newTitle.trim() === "" || newArtist.trim() === "") {
        return
    }

    songs = songs.map(item => {
        if (item.id === id) {
            return {
                ...item,
                title: newTitle,
                artist: newArtist
            };
        } else {
            return item;
        }
    });

    return songs
    

}

function toggleLike(id) {
    songs = songs.map(item => {
        if (item.id === id) {
            return {
                ...item, liked: !item.liked
            };
        } else {
            return item;
        }
    });

    return songs
}

function searchSongs(title) {
    return songs.filter(item => item.title.toLowerCase().includes(title.toLowerCase()))
}

function filterById(status) {
    if (status.toLowerCase() === "all") {
        return songs
    } else if (status.toLowerCase() === "liked") {
        return songs.filter(item => item.liked)
    } else if (status.toLowerCase() === "unliked") {
        return songs.filter(item => !item.liked)
    }
}


function getStats() {
    total = songs.length

    const liked = songs.filter(item => item.liked === true).length
    const unliked = songs.filter(item => item.liked === false).length

    return {
        total,
        liked,
        unliked
    }
}

console.log(songs);


console.log(addSong("Songs", "artist"));
console.log(addSong("Skyfall", "Adele"));
console.log(addSong("Goth", "Sidewalks"));
console.log(addSong("Juno", "Blindheart"));
console.log(addSong("DOORS LIGHT FUNK", "DJ VTTT77"));
console.log(addSong("Indilla Enigma", "Kamro"));
console.log(addSong("pulsebreaker", "Zertal"));
console.log(addSong("Inna", "Hot"));



console.log(toggleLike(1));
console.log(toggleLike(2));
console.log(toggleLike(3));



console.log(editSong(1, "New music", "Marks"));



console.log(searchSongs("hot"));


console.log(filterById("liked"));

console.log(deleteSong(2));


console.log(getStats());







