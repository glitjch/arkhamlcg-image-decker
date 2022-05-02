import printJS from 'print-js';
import React, { useEffect } from 'react'
import { useGlobalContext } from '../GlobalContext';
import { printAll, generateImageURLs } from '../helpers';

import '../styles.scss'
import CardsListItem from './CardsListItem'


// COMPONENT
const CardsList: React.FC = () => {
  const { images, setImages, cardCodes, print, setPrint, } = useGlobalContext();

  const handleGenerateImages = () => {
    console.log(cardCodes);
    generateImageURLs(cardCodes, setImages)
  };

  useEffect(() => {printAll(print, setPrint);}, [images]);
  
  const generateImages = images
    .slice(0,5)
    .map((image) => {
      return (
        <CardsListItem image={image} key={Date.now() + Math.random()}/>
      )
    }
  );

  const printMulti = () => printJS({
    printable: print,
    type: 'image',
    targetStyles: [ 
    "*"
    ],
    header: null,
    css: "../styles.scss",
    style: "margin: 50"
  })
  
  // VIEW
  return (
    <div className='Images__container'>
      <form className='getImage'>
        <button type='button' onClick={()=> handleGenerateImages()}>Generate</button>
      </form>
      <button type="button" onClick={() => printMulti()}>
        Print All {print.length} Cards
      </button>
      {images && generateImages}
    </div>
  )
};

export default CardsList;