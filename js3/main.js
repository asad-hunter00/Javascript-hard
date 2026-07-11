const playlist = ["Indilla Enigma", "Fading Light", "Revenge", "in the bleak midwinter", "School rooftop", "Snowfall", "Skins2"];


function printPlaylist(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}. ${arr[i]}`);
        
        
    }
}
printPlaylist(playlist)







function addSong(arr, title) {
    if (title.trim() === "") {
        return arr.length
    }

    arr.push(title)


    return arr.length
}

console.log(addSong(playlist, "Arcred"));
console.log(addSong(playlist, "Owner"));
console.log(addSong(playlist, " "));








function getSongAt(arr, index) {
    if (index < 0 || index >= arr.length) {
        return "not fined"
    }


    return arr[index]
}

console.log( getSongAt(playlist, 3));
console.log(getSongAt(playlist, 7));
console.log(getSongAt(playlist, playlist.length - 1));








function printEveryOther(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        console.log(arr[i]);


    }

    
}

printEveryOther(playlist)

