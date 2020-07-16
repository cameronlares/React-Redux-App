import React from 'react';
import logo from './logo.svg';
import './App.css';
import JokesList from './components/JokesList';


function App() {
  return (
    <div className="App">
      <h1> Top 10 Corny Jokes of The Day</h1>
      <JokesList/>
    </div>
  );
}

export default App;
