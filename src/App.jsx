import imageRM from './img/rick-morty.png';
import './App.css'
import { useState } from 'react';
import Characters from './components/characters';

function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character'),
          charApi = await api.json();
    
    setCharacters(charApi.results);
    // console.log(charApi);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>) : (
          <>
            <img src={imageRM} alt="Rick & Morty" className='img-home'/>
            <button className='btn-search' onClick={reqApi}>Buscar Personajes</button>
          </>
        )}        
      </header>
    </div>
  );
}

export default App