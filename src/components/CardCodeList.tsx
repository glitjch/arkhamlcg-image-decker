import React from 'react'

interface Props {
  cardCodes: number[],
}

// COMPONENT
const CardCodeList: React.FC<Props> = ({cardCodes}) => {
  
const generateCodeList = (list: number[]) => {
  return list.map( (code, id) => {
    return <ul key={id}>{code}</ul>
  })
}

// VIEW
  return (
    <div className='CardCodeList__container'>
      {/* {cardCodes && generateCodeList(cardCodes)} */}
    </div>
  )
}

export default CardCodeList