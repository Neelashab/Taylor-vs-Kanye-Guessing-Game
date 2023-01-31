
const { default: axios } = require('axios');
const { listeners } = require('process');

const API_KEY = "12021d365f1ca7a3ed786cb0e0dd6b49";
const TAYLOR_ID = "259675";
const MUSIXMATCH_AD = "https://api.musixmatch.com/ws/1.1/"



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



export async function getTracks (artist_id) {

    const albumCall = await axios.get(`${MUSIXMATCH_AD}artist.albums.get?apikey=${API_KEY}&artist_id=${artist_id}`);
    const albums = albumCall.data.message.body.album_list

    var arrayOfAlbums = []
    const numAlbums = albums.length

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

 export async function randomLyrics (arrayOfAlbums) {

    // arrayOfAlbums becomes an object when passed to this function, this line allows us to access its values 
    const albums = Object.values(arrayOfAlbums);

    const randAlbum = albums[randomNumber(0, albums.length - 1)];

    const tracks = randAlbum.tracks;
    const randTrack = tracks[randomNumber(0, tracks.length -1)];
    const trackID = randTrack.track_id;

	const lyricCall = await axios.get(`${MUSIXMATCH_AD}track.lyrics.get?apikey=${API_KEY}&track_id=${trackID}}`)
    const lyrics = lyricCall.data.message.body.lyrics.lyrics_body;
	const lyricArray = lyrics.split(/\r?\n/)

	return [randTrack.track_name, lyricArray[randomNumber(0, lyricArray.length - 1)]];
} 


async function playGame (){
    //get user input for which ID to pass, then pass appropriate
    const albies = await getTracks(TAYLOR_ID);
    const lyric = await randomLyrics(albies);
    console.log(lyric);
}


// notes: maybe add a kanye west vs taylor swift option for creativity and funny
// You probably should add something to see that the same number is not generated twice for the random lyric? Idk 

