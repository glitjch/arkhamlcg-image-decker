import React from 'react';
import { useGlobalContext } from '../GlobalContext';


interface Props {
  // decks: number[]
}

// COMPONENT
const DeckList: React.FC<Props> = () => {
  const { decks } = useGlobalContext();

  const listDecks = (props: any) => {
    return props.map((deck: number, id: number) => {
      return <ul key={id}>{deck}</ul>
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