import React, { useEffect, useState } from 'react'
import Poke from './Poke'
import './Pokemon.css'

export default function Pokemon() {

    const [pokemons, setPokemons] = useState([])
    const [loadPokemons, setLoadPokemons] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    const getAllPokemons = async () =>{
        const res = await fetch(loadPokemons)
        const data = await res.json()
        setLoadPokemons(data.next)

        function createPokemon(result){
            result.forEach(async (pokemon)=>{
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()
                setPokemons(currentList=> [...currentList, data])
            })
        }
        createPokemon(data.results)
    }

    useEffect(()=>{
        getAllPokemons()
    }, [])

    return (
        <div className="Pokemon">
            {
                pokemons.map(pokemon=>(
                    <Poke 
                        key={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.other.dream_world.front_default}
                        hp={pokemon.stats[0].base_stat}
                        attack={pokemon.stats[1].base_stat}
                        defense={pokemon.stats[2].base_stat}
                        speed={pokemon.stats[5].base_stat}
                        type1={pokemon.types[0].type.name}
                        ability={pokemon.abilities[0].ability.name}
                    />
                ))
            }
            <button className="LoadMore" onClick={()=> getAllPokemons()}>Load More</button>
        </div>
    )
}
