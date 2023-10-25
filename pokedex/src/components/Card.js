import React, { useState } from "react";
export default function Card(props){
    const [pokemonData] = useState(props.pokemon);
    return (
        <div>
            <p>{pokemonData.Name}</p>
            <p>{pokemonData.Type}</p>
            <p>{pokemonData.ID}</p>
            <img src={pokemonData.img} alt={"image du pokemon " + pokemonData.Name} />
        </div>
    )
}