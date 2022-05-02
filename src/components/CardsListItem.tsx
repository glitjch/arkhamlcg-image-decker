import React from 'react'
import printJS from 'print-js';

interface Props {
  image: string,
  key: number,
}

// COMPONENT
const CardsListItem: React.FC<Props> = ({image, key}) => {
  // VIEW
  return (
    <div>
      <img key={key} className='CardsListItem' src={"https://arkhamdb.com/" + image} /> 
      <button type="button" onClick={() => printJS(`https://arkhamdb.com/${image}`, "image")}>Print</button>
    </div>
  )
}
export default CardsListItem