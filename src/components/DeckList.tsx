import React from 'react';
import { useGlobalContext } from '../GlobalContext';
import { listDecks } from '../helpers';

// COMPONENT
const DeckList: React.FC = () => {
  const { decks } = useGlobalContext();

// VIEW
  return (
    <div className='Decklist__container'>
      {listDecks(decks)}
    </div>
  )
}


export default DeckList