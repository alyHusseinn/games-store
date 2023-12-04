// fetch all games fetch them :) first and store them somewhere
// in the root we display 10 games in slider
// so we want to func getSomeGames() and when we load using loader we get them and display them someway.

// when click on any game in the slider --> redirect to /games/:gameId
// se we want a func getGame() 
// getGame(), have two status 
// 1. we load the page in a normal way and then redirect to /games/:gameId
// 2. we enter the that url, so we want to check if that we fetch the games or not

// we have a button that ---> redirects us to /games
// we need func getAllGames() which returns all the games
// we have two status
// 1. we load the page in a normal way and then redirect to /games
// 2. we enter the that url, so we want to check if that we fetch the games or not

// we need 
// 1. function to Fetch the games and store it in a global variable
// 2. functions to getWhatWeWant from that global variable

import axios from "axios";
const API_URL = 'https://api.rawg.io/api/games?key=7e178da7d4cf4fdf8b011cc21741f090';

export type GameType = {
    id: number,
    name: string,
    background_image: string,
    // platforms: Array<{platform: {id:number, name:string}}>,
    genres: Array<{ id: string, name: string, image_background: string }>,
    short_screenshots: Array<{ image: string }>,
}

let GamesData: Array<GameType> = [];

// const Headers = { mode: 'cors', headers: { "access-control-allow-origin": "https://localhost:5173" } };

async function fetchGamesData() {
    try {
        const res = await fetch(API_URL,{mode: 'cors'});
        const response = await res.json();

        console.log(response.results);
        return response.results;
    } catch (err) {
        throw Error;
        console.log(err);
    }



    // await fetch('https://api.rawg.io/api/games?key=7e178da7d4cf4fdf8b011cc21741f090',{mode: 'cors'})
    //     .then(res => {
    //         if (!res.ok) {
    //             console.error(res.statusText);
    //             throw new Error(res.statusText);
    //         }
    //         return res.json();
    //     })
    //     .then((res) => {
    //         GamesData = res.results;
    //         console.log(GamesData);
    //     })
    // .catch((err) => console.error(err));
}

async function getAllGames(): Promise<Array<GameType>> {
    if (GamesData.length == 0) {
        GamesData = await fetchGamesData();
    }
    return GamesData;
}

async function getGame(id: number): Promise<GameType> {
    if (GamesData.length == 0) {
        GamesData = await fetchGamesData();
    }
    return GamesData.find(g => g.id == id) as GameType;
}

export { getAllGames, getGame }
