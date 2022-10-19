// starter code commented out

// import React, { useState } from "react";
// import { Card } from "semantic-ui-react";

// function PokemonCard({ pokemon }) {
//   const [showFront, setShowFront] = useState(true);

//   const { name, hp, sprites } = pokemon;

//   function handleClick() {
//     setShowFront((showFront) => !showFront);
//   }

//   return (
//     <Card>
//       <div onClick={handleClick}>
//         <div className="image">
//           <img src={showFront ? sprites.front : sprites.back} alt={name} />
//         </div>
//         <div className="content">
//           <div className="header">{name}</div>
//         </div>
//         <div className="extra content">
//           <span>
//             <i className="icon heartbeat red" />
//             {hp}
//           </span>
//         </div>
//       </div>
//     </Card>
//   );
// }

// export default PokemonCard;


import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [showFront, setShowFront] = useState(true);
  const { name, hp, sprites } = pokemon;
  
  function handleFlipCard() {
    setShowFront(showFront => !showFront)
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={handleFlipCard}>
          <img alt="oh no!" src={showFront ? sprites.front : sprites.back} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;