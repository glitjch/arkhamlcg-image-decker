import React from 'react'
import '../styles.scss'
import SingleImage from './SingleImage'

  interface Props {
    images: string[],
    setImages: React.Dispatch<React.SetStateAction<string[]>>,
    generateImages: () => Promise<void>[] | undefined,
  }

// COMPONENT
const Images: React.FC<Props> = ({images, setImages, generateImages}) => {
  
  // VIEW
  return (
    <div className='Images__container'>
      <form className='getImage'>
        <button type='button' onClick={()=> generateImages()}>Generate</button>
      </form>
      {images && images.map((image, id) => {

        return <ul>
          <SingleImage image={image} key={id}/>
          </ul>
      })}
    </div>
  )
}

export default Images