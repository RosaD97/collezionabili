import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Card({ name, url }) {
    const [dataPokemon, setDataPokemon] = useState({ types: [], foto: '' });

    useEffect(() => {
        async function fetchData() {
            try {
                const resp = await axios.get(url);
                // console.log('pokemon', resp.data.types);
                const pokemonData = {
                    types: resp.data.types,
                    foto: resp.data.sprites.front_default
                };
                setDataPokemon(pokemonData);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [url]);

    return (
        <div className="mycard d-flex flex-column">
            {dataPokemon.foto && <img src={dataPokemon.foto} className="card-img-top" alt={name} />}
            <div>
                <h5 className="card-title">{name}</h5>
                <div className="py-3">
                    {dataPokemon.types.map((item, i) => (
                        <p key={i}>{item.type.name}</p>
                    ))}
                </div>
            </div>
            <NavLink className="btn btn-light mybtn" to={`/game/${name}`}>Scegli</NavLink>
        </div>
    );
}

export default Card;
