import React from 'react'

let Pokemon = (props) => {
  return (
    <div style={({ display: "inline-block", "width": "200px", "height": "200px", border: "2px solid grey", margin: "5px" })}>
      <h3>{props.data.pokemonName}</h3>
      <h4>{props.data.pokemonInfo}</h4>
      <img style={({ "width": "100px" })} src={props.data.pokemonImage} alt={props.data.pokemonInfo} />
    </div>
  )
}

export default Pokemon
