import React from 'react'
import printJS from 'print-js';

interface Props {
  image: string,
}

// COMPONENT
const CardsListItem: React.FC<Props> = ({image}) => {
  // VIEW
  return (
    <>
      <img key={Date.now() + Math.random()} className='CardsListItem' src={"https://arkhamdb.com" + image} alt={image}/> 
      <button type="button" className='CardListItem__print' onClick={() => printJS(`https://arkhamdb.com/${image}`, "image")}>Print</button>
    </>
  )
}
export default CardsListItem