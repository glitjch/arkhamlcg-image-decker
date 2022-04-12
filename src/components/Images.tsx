import printJS from 'print-js';
import React, { useEffect, useState } from 'react'
import '../styles.scss'
import SingleImage from './SingleImage'
import { useGlobalContext } from '../GlobalContext';


// COMPONENT
const Images: React.FC = () => {
  const { 
    images, setImages, 
    generateImageURLs, 
    print, 
    printAll, } = useGlobalContext();

  useEffect(() => {
    printAll();
  }, [images])
  
  const generateImages = images.slice(0,5).map((image) => {
    return (
      <SingleImage image={image} key={Date.now() + Math.random()}/>
    )
  })


  // VIEW
  return (
    <div className='Images__container'>
      <form className='getImage'>
        <button type='button' onClick={()=> generateImageURLs()}>Generate</button>
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
      {images && generateImages}
    </div>
  )
}

export default Images