import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [sprites, setSprites] = useState(true);

  function handleClick() {
    setSprites((sprites) => !sprites);
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img
            onClick={handleClick}
            src={sprites ? pokemon.sprites.front : pokemon.sprites.back}
            alt="oh no!"
          />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
