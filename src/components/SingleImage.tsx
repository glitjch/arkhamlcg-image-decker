import React from 'react'

interface Props {
  image: string,
  key: number,
}

// COMPONENT
const SingleImage: React.FC<Props> = ({image, key}) => {

  // VIEW
  return (
     <img key={key} className='SingleImage' src={"https://arkhamdb.com/" + image} /> 
  )
}
export default SingleImage