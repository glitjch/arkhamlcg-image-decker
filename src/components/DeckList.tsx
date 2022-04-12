import React from 'react';
import { useGlobalContext } from '../GlobalContext';

// COMPONENT
const DeckList: React.FC = () => {
  const { decks } = useGlobalContext();

  const listDecks = (props: any) => {
    return props.map((deck: number) => {
      return <ul key={deck}>{deck}</ul>
    })
  }
  
// VIEW
  return (
    <div className='Decklist__container'>
      {listDecks(decks)}
    </div>
  )
}


export default DeckList