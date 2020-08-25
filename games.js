import React from 'react';

const Games = props => {
  const { name, background_image } = props;

  return (
    <div id="games">
      <li>
        <h1>{name}</h1>
        <img src={background_image} alt={name} />
      </li>
    </div>
  );
};

export default Games;
