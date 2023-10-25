import React, { useState } from "react";
export default function Card(props){
    const [pokemonData] = useState(props.pokemon);
    return (
        <div>
            <p>{pokemonData.Name}</p>
            <p>{pokemonData.Type}</p>
            <p>{pokemonData.ID}</p>
            <p>{pokemonData.img}</p>
        </div>
    )
}