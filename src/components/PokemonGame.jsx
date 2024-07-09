import axios from 'axios';
import React, { useEffect, useState } from 'react';

function PokemonGame({ pokemonName, url }) {

    const [dataPokemon, setDataPokemon] = useState({ health: 0, foto: '' });

    useEffect(() => {
        async function fetchData() {
            try {
                const resp = await axios.get(url);
                const pokemonData = {
                    health: resp.data.base_experience,
                    foto: resp.data.sprites.front_default
                };
                setDataPokemon(pokemonData);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [url, dataPokemon]);

    return (
        <div>
            <h2>{pokemonName}</h2>
            <div className='img-wrapper'>
                <img src={dataPokemon.foto} className="card-img-top" alt={pokemonName} />
            </div>
            <div>
                <h3>Punti Vita</h3>
                <p>{dataPokemon.health}</p>
            </div>
        </div>
    )
}

export default PokemonGame
