import React from "react";

const MyComponent = (props) => (
  <div>
    {props.games.map((game, index) => (
      <div key={index}>
        {game.index + 1} - {game.contestName}
      </div>
    ))};
  </div>
);

export default MyComponent;