import React, { useEffect, useState } from 'react';
import './Cards.scss';
import Card from './card/Card';
import { CardModel } from './card/card.model';

export default function Cards() {
  const [cards, setCards] = useState<CardModel[]>();

  useEffect(() => {
    let card_list: CardModel[] = require('./cards.json');
    if (card_list.length > 0) {
      setCards(card_list);
    }
  }, []);

  return (
    <div className="cards-container">
      {cards?.map((card) => {
        if (card) {
          return (
            <Card
              key={card.id}
              name={card.name}
              image={card.image}
              description={card.description}
              technologies={card.technologies}
            />
          );
        }
      })}
    </div>
  );
}
