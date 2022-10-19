// started code commented out

// import React, { useEffect, useState } from "react";
// import PokemonCollection from "./PokemonCollection";
// import PokemonForm from "./PokemonForm";
// import Search from "./Search";
// import { Container } from "semantic-ui-react";

// function PokemonPage() {
//   const [pokemon, setPokemon] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:3001/pokemon")
//       .then((r) => r.json())
//       .then(setPokemon);
//   }, []);

//   function handleAddPokemon(newPokemon) {
//     setPokemon([...pokemon, newPokemon]);
//   }

//   const pokemonsToDisplay = pokemon.filter((poke) =>
//     poke.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Container>
//       <h1>Pokemon Searcher</h1>
//       <br />
//       <PokemonForm onAddPokemon={handleAddPokemon} />
//       <br />
//       <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
//       <br />
//       <PokemonCollection pokemon={pokemonsToDisplay} />
//     </Container>
//   );
// }

// export default PokemonPage;


import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [searchInput, setSearchInout] = useState('');

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(r => r.json())
      .then(setPokemons)
  }, []);

  function onAddPokemon(newPokemon) {
    setPokemons([...pokemons, newPokemon])
  }
 
  const pokemonToDisplay = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchInput.toLowerCase()));


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={onAddPokemon}/>
      <br />
      <Search searchInput={searchInput} setSearchInout={setSearchInout} />
      <br />
      <PokemonCollection pokemons={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
