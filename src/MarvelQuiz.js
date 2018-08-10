import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';

// Display's title and basic game/test information
function Hero(){
  return(<div className="row">
  <div className="jumbotron col-10 offset-1">
<h1>Marvel Quiz </h1>
<p>Select the movie that the hero pictured below was featured in:</p>
<i>Green background == Correct</i> <br />
<i>Red background == Incorrect </i>
  </div>
  </div>
  );
}

// Calls onClick prop and passes title of movie.
function Movie({title, onClick}) {
  return (<div className="answer" onClick={()=>{onClick(title)}}>
  <h4>{title}</h4>
  </div>
  );
}

// State when correct, incorrect and unselected
// Main funnction
function Turn ({superhero ,films, highlight, onAnswerSelected}) {

function highlightToBgColor(highlight){
  const mapping= {
    'none': '',
    'correct': 'green',
    'incorrect': 'red'
  };

//Displays the current answer selection state 
  return mapping [highlight];
}

return (<div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
 <div className="col-4 offset-1">
    <img src={superhero.imageUrl} classname="superheroimage" alt="Superhero"/>
</div>
<div className="col-6">
  {films.map((title) => <Movie title={title} key={title} onClick={onAnswerSelected}/>)}
</div>
</div>);
}

// Main function 
function MarvelQuiz({turnData, highlight, onAnswerSelected}) {
    return (
      // Wraps application in bootstrap class
       <div className="container-fluid">

       
       <Hero/>
      

       <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>

       </div>
      );
}

// Packages App 
export default MarvelQuiz;
