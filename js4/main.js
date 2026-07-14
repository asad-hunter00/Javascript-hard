const music = [
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
    },
    {
        id: 5,
        title: "lovesong",
        artist: "Adele",
        liked: false
    },
    {
        id: 6,
        title: "Skins",
        artist: "Krezus",
        liked: true
    },

]





// 1
function createSong(id, title, artist) {
    return {
        id: id,
        title: title,
        artist: artist,
        liked: false
    }
}


// 2
function getTitles(songs) {
    return songs.map(song => song.title)
}


// 3
function getLiked(songs) {
    return songs.filter(song => song.liked)
}


// 4
function findById(songs, id) {
    return songs.find(song => song.id === id || undefined)

   


}

// 5
function hasArtist(songs, artist) {
    return songs.some(song => song.artist === artist)
}

// 6
function toggleLike(songs, id) {
    
}

// 7
function removeSong(songs, id) {
    return songs.filter(song => song.id !== id)
}


// 8
function printSongs(songs) {
    songs.forEach(item => {
        console.log(`[♥️] ${item.title} - ${item.artist} `);
        
    });
}







console.log(music);

console.log(getTitles(music));

console.log(getLiked(music));

console.log(findById(music, 3));

console.log(hasArtist(music, "Adele"));
console.log(hasArtist(music, "Skills"));



console.log(removeSong(music, 2));


console.log(printSongs(music))




