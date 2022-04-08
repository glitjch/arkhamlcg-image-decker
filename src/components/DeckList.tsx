import React from 'react'

interface Props {
  decks: number[]
}

// COMPONENT
const DeckList: React.FC<Props> = ({decks}) => {
  
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