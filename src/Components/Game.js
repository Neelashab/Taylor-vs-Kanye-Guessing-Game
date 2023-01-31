
import axios from 'axios';
import React, {Component} from 'react'
import taylorSwift from './taylorswift.jpg';
import kanyeWest from './kanyewest.jpeg';

const TAYLOR_ID = "259675";
const KANYE_ID = "33091467";



class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist_id: "",
            lyric: "", 
            actualTrack: "", 
            userTrack: "",
            artistSelected: false
        };
      }


    async getRandomLyric(artist_id) {

        const apicall = `http://localhost:3000/randomlyric/${artist_id}`;
        console.log(apicall);

        const response = await axios.get(`http://localhost:3000/randomlyric/${artist_id}`);
        this.setState({
            lyric :response.data.lyric, 
            actualTrack: response.data.actualTrack});
        
            
        console.log(`Lyric received from backend. : ${response.data.lyric}, Track: ${response.data.actualTrack}`);
    }

    choseArtist(artist_id) {
         this.setState({
            artist_id: artist_id,
            artistSelected: true
        })
        console.log("chose artist called");

        return (
            <div>
            <p> Great! Now you a random lyric from the artist you chose will be presented and</p>
            <p> you will have to guess which song this lyric is from. </p> 
            <p> Good luck! </p>

            <div>
                {this.getRandomLyric(artist_id)}
                <p>What track is this lyric from: {this.state.lyric} </p>
                <input type = "text" onChange ={ (e) => {
                this.setState({userTrack: e.target.value})
                }}/>
            </div>
    </div>
    )

    }

   showLyrics (artist_id) {
        
   }


    render() {
    return (

        <div>
            <h1>Welcome to the Song Guessing Game!</h1> 
            <p> These are the rules of the game: </p>
            <p> First, you must pick whether you are Team Taylor or Team Kanye.</p>
            <p> After you pick your team, you will be presented with 5 random lyrics from your chosen artist.</p>
            <p> Your job is to guess which song each lyric is from. </p>
            <p> Good luck!</p>

            
            <div className = "team_taylor">
                <div>
                    <img className = "artist_picture"
                    src={taylorSwift} 
                    alt="Taylor Swift" />
                </div>

                <div className = "artist_button">
                    <button onClick={()=>{this.choseArtist(TAYLOR_ID); this.forceUpdate()}}> Team Taylor</button>
                </div>
                
            </div>
            

            <div className = "team_kanye">
                <div>
                    <img className = "artist_picture"
                    src={kanyeWest} 
                    alt="Kanye West"/>
                </div>
            
            <div className = "artist_button">
                <button onClick={()=>{this.choseArtist(KANYE_ID); this.forceUpdate()}}> Team Kanye</button>
            </div>
        </div>

    
            
        
    
    </div>

    );
        }
}


export default Game;
