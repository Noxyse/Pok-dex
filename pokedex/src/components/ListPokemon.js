import React, { useState, useEffect } from "react";
import Card from "./Card.js";
export default function ListPokemon(props) {
    const [pokemonList, setPokemonList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/data.json").then((data) => {
            data.json().then((pokemons) => {
                setPokemonList(pokemons)
            })
        })
    })
    return (
        <div id="list_conmponent_pokemon">
            {pokemonList.map((pokemon, key) => {
                return (
                    <div>
                        <Card key={key} pokemon={pokemon} />
                    </div>
                )
            })}
        </div>
    )
}
