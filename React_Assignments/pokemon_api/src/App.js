import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 
import './App.css';
import { throwStatement } from '@babel/types';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() =>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=898')
    // Didn't know how to put all the pokemon. Originally had the get call for just pokemon but not all the pokemon would display. It would only go to raticate so i had to check the answer for the limit part to the get call. Learned a different use for a ternary and also found out there are more than 807 pokemon currently.
    .then((name) =>{
      setPokemon(name.data.results)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
    { pokemon.map((pokemonName, i) => (
      <ul>
        <li key="i">
          {pokemonName.name}
        </li>
      </ul>
    ))}
    </div>
  );
}

export default App;
