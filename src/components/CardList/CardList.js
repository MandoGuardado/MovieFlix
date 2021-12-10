import React, { useState } from "react";

const CardList = (props) => {
  const [cards, setCards] = useState(props.cards);

  return (
    <div className='card-list-container'>
      <h2>{props.category}</h2>
      <ul>
        {/* {cards.map((card) => (
        <Card info='fake' />
      ))} */}
      </ul>
    </div>
  );
};

export default CardList;
