import React, { useState } from "react";
export default function Card(props) {
    const [pokemonData] = useState(props.pokemon);
    return (
        <div>
            <p>{pokemonData.name.french}</p>
            <p>{pokemonData.type}</p>
            <p>{pokemonData.id}</p>
            <p>{pokemonData.base.HP}</p>
            <img src={pokemonData.img} alt={"image du pokemon " + pokemonData.Name} />
        </div>
    )
}

//fetch JSON avec les 150 premiers https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json
//remise en etat de ListPokemon avec nom, image, rendre image cliquable et atterir sur fiche pokemon