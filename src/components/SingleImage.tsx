import React from 'react'

interface Props {
  image: string,
  // id: number,
}

// COMPONENT
const SingleImage: React.FC<Props> = ({image}) => {

  // VIEW
  return (
     <img className='SingleImage' src={"https://arkhamdb.com/" + image} /> 
  )
}
export default SingleImage