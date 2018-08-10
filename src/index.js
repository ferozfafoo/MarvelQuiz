import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MarvelQuiz from './MarvelQuiz';
import registerServiceWorker from './registerServiceWorker';
import {shuffle, sample} from 'underscore';


// Array of superheros, containing information of listed hero
const superheros= [
    {
        name: 'Wolverine',
        imageUrl: 'images/superhero/wolverine.jpg',
        imageSource: 'Marvel',
        films: ['X-Men']
    },
    {
        name: 'Deadpool',
        imageUrl: 'images/superhero/deadpool.jpg',
        imageSource: 'Marvel',
        films: ['Deadpool']
    },
    {
        name: 'The Increadible Hulk',
        imageUrl: 'images/superhero/hulk.jpg',
        imageSource: 'Marvel',
        films: ['The Avengers']
    },

    {
        name: 'Agent Carter',
        imageUrl: 'images/superhero/agentcarter.jpg',
        imageSource: 'Marvel',
        films: ['Captain America']
    },

];


// Chooses data in the game 
function getTurnData(superheros){
    const allFilms = superheros.reduce(function (p, c,) {
        return p.concat(c.films);
    }, []);

// Randomly selects(shuffles) films, slice takes first 4 elements of the list
    const fourRandomFilms = shuffle(allFilms).slice(0,4);
    const answer = sample(fourRandomFilms);

// Returns random films and supero
return {
    films: fourRandomFilms,
    superhero: superheros.find((superhero) => 
    superhero.films.some((title) => 
    title === answer))
 }
}

//  State of programme
const state = {
    turnData: getTurnData(superheros),
    highlight: ''
};

// Chooses background color if correct or  incorrect 
function onAnswerSelected (answer) {
 const isCorrect = state.turnData.superhero.films.some((films) => films === answer );
 state.highlight = isCorrect ? 'correct' : 'incorrect';
render();
}

// Displays state
// Sends props to MarvelQuiz function in MarvelQuiz.js
function render (){
 ReactDOM.render(<MarvelQuiz {...state} onAnswerSelected={onAnswerSelected}/>, document.getElementById('root'));
}
render();
 registerServiceWorker();
