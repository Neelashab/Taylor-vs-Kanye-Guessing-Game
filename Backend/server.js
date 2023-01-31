
const express = require("express");
//const { getTracks, randomLyrics } = require("./songs");
const { default: axios } = require('axios');
const { listeners } = require('process');

const API_KEY = "12021d365f1ca7a3ed786cb0e0dd6b49";
const MUSIXMATCH_AD = "https://api.musixmatch.com/ws/1.1/"

const app = express();
const PORT = 3000;



// get, request to the backend 
// post, sending info to the backend
// two paramaters, string specifiying the path and the function
// status code indicates the state of your request

// class declarations


class Album {
    constructor(album_id, album_name) {
        this.album_id = album_id
        this.album_name = album_name
    }
   tracks = [];
}




class Track {
    constructor(track_id, track_name) {
        this.track_id = track_id;
        this.track_name = track_name;
    }
}





async function getTracks (artist_id) {

    // get all albums for this artist and store list
    const url = `${MUSIXMATCH_AD}artist.albums.get?apikey=${API_KEY}&artist_id=${artist_id}`;
    console.log(url);
    const albumCall = await axios.get(`${MUSIXMATCH_AD}artist.albums.get?apikey=${API_KEY}&artist_id=${artist_id}`);
    console.log("inside get tracks- printing album call")

    console.log(albumCall.length)
    const albums = albumCall.data.message.body.album_list

    var arrayOfAlbums = []
    const numAlbums = albums.length

    // create an array of album objects for artist, each having an array of track objects
    for (let i = 0; i < numAlbums; i++) {

        var albumID = albums[i].album.album_id;
        var albumName = albums[i].album.album_name;
        arrayOfAlbums[i] = new Album(albumID, albumName);

        var trackCall = await axios.get(`${MUSIXMATCH_AD}album.tracks.get?apikey=${API_KEY}&album_id=${albumID}&f_has_lyrics=true`);
        var allTracks = trackCall.data.message.body.track_list
        
        for (let j = 0; j < allTracks.length; j++) {
            var trackID = allTracks[j].track.track_id;
            var trackName = allTracks[j].track.track_name;

            arrayOfAlbums[i].tracks[j] = new Track(trackID, trackName);
        }
    }
    return arrayOfAlbums;
}



const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min));
}


async function randomLyrics (arrayOfAlbums) {

    // arrayOfAlbums becomes an object when passed to this function, this line allows us to access its values 
    const albums = Object.values(arrayOfAlbums);

    // select random album then select a random track
    const randAlbum = albums[randomNumber(0, albums.length - 1)];

    const tracks = randAlbum.tracks;
    const randTrack = tracks[randomNumber(0, tracks.length -1)];
    const trackID = randTrack.track_id;

    // generate all lyrics for this track and select a random one
	const lyricCall = await axios.get(`${MUSIXMATCH_AD}track.lyrics.get?apikey=${API_KEY}&track_id=${trackID}}`)
    const lyrics = lyricCall.data.message.body.lyrics.lyrics_body;
	const lyricArray = lyrics.split(/\r?\n/);

	return [randTrack.track_name, lyricArray[randomNumber(0, lyricArray.length - 1)]];
} 


app.get("/", (req, res) => {
    res.status(200).send({
        message: "Welcome to the Song Guessing Challenge!"
    })

})


app.get("/randomlyric/:id", async (req, res) => {
    console.log("Random called");
    // given the artist id, return random lyric and the track its from 
    const albums = await getTracks(req.params.id);
    console.log("Albums received")
    console.log(albums)

    const randLyrics = await randomLyrics(albums);
    console.log(randLyrics);
    
    res.status(200).send ({
        lyric: randLyrics[1],
        actualTrack: randLyrics[0],
    })
})



app.listen(PORT, () => {
    console.log("app running");
})

