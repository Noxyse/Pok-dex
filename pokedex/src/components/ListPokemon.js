import React, { useState, useEffect } from "react";
import Card from "./Card.js"
export default function ListPokemon(props) {
    const [pokemonList, setPokemonList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/data.json").then((data) => {
            data.json().then((listPokemon) => {
                setPokemonList(listPokemon)
            })
        })
    })
    return (
        {
            pokemonList.map((pokemon, index) => (
                <Card namePokemon="Pikachu" />
            ))
        }
    )
}
