import React from 'react'
import '../styles.scss'
import SingleImage from './SingleImage'

  interface Props {
    images: string[],
    setImages: React.Dispatch<React.SetStateAction<string[]>>,
    generateImages: () => Promise<void>,
  }

// COMPONENT
const Images: React.FC<Props> = ({images, setImages, generateImages}) => {
  
  // VIEW
  return (
    <div className='Images__container'>
      <form className='getImage'>
        <button type='button' onClick={()=> generateImages()}>Generate</button>
      </form>
      {images.map((image, id) => {
        return <SingleImage images={images} key={id}/>
      })}
    </div>
  )
}

export default Images