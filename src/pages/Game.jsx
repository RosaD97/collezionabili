import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonGame from '../components/PokemonGame';

function Game() {
  const { name } = useParams();

  const [data, setData] = useState([]);
  const [pokemonScelto, setPokemonScelto] = useState(null);
  const [pokemonAvversario, setPokemonAvversario] = useState(null);
  const [starter, setStarter] = useState(true);
  const [result, setResult] = useState('VINTO');

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
        setData(resp.data.results);
        const filtered = resp.data.results.filter((item) => item.name === name);
        setPokemonScelto(filtered[0]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [data]);

  useEffect(() => {
    if (pokemonScelto && pokemonAvversario) {
      risultati();
    }
  }, [pokemonScelto, pokemonAvversario]);

  function starterTime() {
    setStarter(false);
  }

  function setPokemon() {
    const randomico = Math.floor(Math.random() * data.length);
    const pokemonFortunato = data[randomico];
    setPokemonAvversario(pokemonFortunato);
    setTimeout(starterTime, 1000);
  }

  function risultati() {
    // Qui assumiamo che i valori health siano già stati caricati
    const healthScelto = pokemonScelto?.base_experience || 0;
    const healthAvv = pokemonAvversario?.base_experience || 0;
    
    if (healthScelto > healthAvv) {
      setResult('Vinto');
    } else if (healthScelto < healthAvv) {
      setResult('Perso');
    } else {
      setResult('Pareggio');
    }
  }

  return (
    <>
      {starter ? (
        <div className='starter text-center mt-5'>
          <div className="container-starter">
            <h1 className='text-dark'>Scegli il tuo avversario!</h1>
            <div onClick={setPokemon} className="pokeball" data-bs-toggle="modal" data-bs-target="#exampleModal"></div>
            <div onClick={setPokemon} className="pokeball"></div>
            <div onClick={setPokemon} className="pokeball"></div>
          </div>
        </div>
      ) : (
        <div className='sectionGame'>
          <div className='game'>
            <div className="container d-flex justify-content-between py-4">
              {pokemonScelto && (
                <PokemonGame
                  pokemonName={name}
                  url={pokemonScelto.url} />
              )}
              {pokemonAvversario && (
                <PokemonGame
                  pokemonName={name}
                  url={pokemonAvversario.url} />
              )}
            </div>
            <div className='result'>
                <h2>{result}</h2>
              </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Game;
