import React from 'react'

interface Props {
  images: string[],
  // id: number,
}

// COMPONENT
const SingleImage: React.FC<Props> = ({images}) => {

  // VIEW
  return (
     <img className='SingleImage' src={"https://arkhamdb.com/" + images} /> 
  )
}
export default SingleImage