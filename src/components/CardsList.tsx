import { NONAME } from 'dns';
import printJS from 'print-js';
import React, { useEffect } from 'react'
import { useGlobalContext } from '../GlobalContext';
import { printAll, generateImageURLs } from '../helpers';

import '../styles.scss'
import CardsListItem from './CardsListItem'


// COMPONENT
const CardsList: React.FC = () => {
  const { cardFronts, setCardFronts, cardCodes, print, setPrint, } = useGlobalContext();

  // <helpers.tsx> Requests for artwork of card fronts
  const handleGenerateImages = () => {
    console.log(cardCodes);
    generateImageURLs(cardCodes, setCardFronts);
  };

  useEffect(() => {
    printAll(print, setPrint);
  }, [cardFronts]);
  
  const generateImages = cardFronts
    // .slice(0,10)
      .map((card) => <CardsListItem image={card}/>
      );

  
  const printMulti = () => printJS({
    printable: 'printPage', 
    type: 'html',
    targetStyles: ["margin"],
    css: "../print.scss",
    honorColor: true,
    maxWidth: 900,
  });
  
  // VIEW
  return (
    <>
      <div className="CardList__buttons">
        <button type='button' onClick={() => handleGenerateImages()}>Generate</button>
        <button type="button" onClick={() => printMulti()}> Print All {cardFronts.length} Cards</button>
      </div>
      <div className='CardList__container' id={'printPage'}>
        {cardFronts && generateImages}
      </div>
    </>
  )
};

export default CardsList;