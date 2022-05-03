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
    setTimeout(() => {
      generateImageURLs(cardCodes, setCardFronts);
    }, 500)
  };

  useEffect(() => {
    printAll(print, setPrint);
    console.log(cardFronts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardFronts]);
  
  const generateImages = cardFronts
    .filter(card => card !== undefined)
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
      {cardFronts.length === 0 && (<h1 className='CardList__message'>DECK IS READY TO LOAD CLICK 'GENERATE' BELOW</h1>)}
      <div className="CardList__buttons">
        {cardFronts.length === 0 && <button type='button' onClick={() => handleGenerateImages()}>Generate</button>}
        {cardFronts.length > 0 && <button type="button" onClick={() => printMulti()}> Print All {cardFronts.length} Cards</button>}
      </div>
      <div className='CardList__container' id={'printPage'}>
        {cardFronts && generateImages}
      </div>
    </>
  )
};

export default CardsList;