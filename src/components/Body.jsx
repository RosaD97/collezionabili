import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';

function Body() {
    const [data, setData] = useState([]);


    useEffect(() => {
        async function fetchData() {
            try {
                const resp = await axios('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
                    .then((resp) => {
                        setData(resp.data.results)
                        console.log(resp.results.data.name)
                    })
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();

    }, []);




    return (
        <div className='section body py-5'>
            <div className='container'>

                        <h2 className='mb-5 mt-3'>Pokemon</h2>
                        <div className='cards d-grid'>
                      
                            {data.map((pokemon, i) => {
                                return (
                                    <div key={i}>
                                        <Card

                                            name={pokemon.name}
                                            url={pokemon.url} />
                                    </div>
                                )
                            })}
                        </div>
                

                

            </div>
        </div>
    )
}

export default Body