// starter code commented out

// import React from "react";
// import PokemonCard from "./PokemonCard";
// import { Card } from "semantic-ui-react";

// function PokemonCollection({ pokemon }) {
//   const cards = pokemon.map((poke) => (
//     <PokemonCard key={poke.id} pokemon={poke} />
//   ));

//   return <Card.Group itemsPerRow={6}>{cards}</Card.Group>;
// }

// export default PokemonCollection;

import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
  const cards = pokemons.map(pokemon => (
    <PokemonCard key={pokemon.id} pokemon={pokemon} />
    ));

  return (
    <Card.Group itemsPerRow={6}>
      {cards}
    </Card.Group>
  );
}

export default PokemonCollection;