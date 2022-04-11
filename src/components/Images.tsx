import printJS from 'print-js';
import React, { useEffect, useState } from 'react'
import '../styles.scss'
import SingleImage from './SingleImage';


  interface Props {
    images: string[],
    setImages: React.Dispatch<React.SetStateAction<string[]>>,
    generateImages: () => Promise<void>[] | undefined,
  }

// COMPONENT
const Images: React.FC<Props> = ({images, setImages, generateImages}) => {
  const [ print, setPrint ] = useState<string[]>([]);

  useEffect(() => {
    const printAll = () => {
      const printArray: string[] = [];
      images.filter(image => image !== undefined).map(image => printArray.push("https://arkhamdb.com" + image));
      setPrint(printArray.slice(0, 5))
    }
    printAll();
  
  }, [images])
  

  // VIEW
  return (
    <div className='Images__container'>
      <form className='getImage'>
        <button type='button' onClick={()=> generateImages()}>Generate</button>
      </form>
      <button type="button" onClick={() => {
        printJS({
          printable: print,
          type: 'image',
          targetStyles: [ 
          "*"
          ],
          header: null,
          css: "../styles.scss",
          style: "margin: 50"

        })
        }}>
        Print All {print.length} Cards
      </button>
      {print.map(p => {
        return <ul>{p}</ul>
      })}

      {images && images.slice(0,5).map((image) => {
        return (
          <SingleImage image={image} key={Date.now() + Math.random()}/>
        )
      })}
    </div>
  )
}

export default Images