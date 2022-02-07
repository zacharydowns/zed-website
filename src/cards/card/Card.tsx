import React from 'react';
import { CardModel } from './card.model';
import './Card.scss';

export default function Card({
  name,
  image,
  description,
  technologies,
}: CardModel) {
  return <div className="card-container"></div>;
}
