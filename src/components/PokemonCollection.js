import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  const pokemonCard = pokemon.map((poke) => (
    <PokemonCard key={poke.id} pokemon={poke} />
  ));

  return <Card.Group itemsPerRow={6}>{pokemonCard}</Card.Group>;
}

export default PokemonCollection;
