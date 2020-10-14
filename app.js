import fs from 'fs'
import open from "open";

const songsFolder = './Songs/';

let songs = []

fs.readdir('./', (err, files) => {
    files.forEach(file=>{
        let lastThree = file.substr(file.length-3)
        if (lastThree==='mp4'||lastThree==='mp3'){
            songs.push(file)
            console.log(songs,songs.length)
        }
    })

    app()
});

const playSongs = async (songName)=>{
    await open(songName)
}

function sleep(time) {
    return new Promise(resolve => {
        setTimeout(resolve,time)
    })
}

async function app() {
    while (true){
        const numberOfSongs = songs.length

        const selectedSong = Math.floor((Math.random() * numberOfSongs))

        console.log(selectedSong)

        await playSongs(songs[selectedSong]);

        const time = 300*1000;

        await sleep(time)
    }

}

//app()

