import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.scss';

// CHILDREN
import DeckList from './components/DeckList';
import Input from './components/Input';
import CardCodeList from './components/CardCodeList';
import Images from './components/Images';



// COMPONENT
const App: React.FC = () => {
  const [ value, setValue ] = useState<any>("")
  const [ decks, setDecks ] = useState<number[]>([])

  const [cardCodes, setCardCodes] = useState<number[]>([]) // CardCodeList component
  const [ images, setImages] = useState<string[]>([]); // Images component


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value) {
      setDecks([...decks, value]);
    }
  }

  useEffect(() => {
    requestData()
    return () => {
      setValue("")
    }
  }, [decks])
  
  const requestData = () => {
    if (value && Number(value) !== NaN && value.length === 5) {
      const newestDeck = decks[decks.length - 1];      
      return axios
      .get(`https://arkhamdb.com/api/public/decklist/${newestDeck}`)
      .then(result => {
        const codes: any = Object.keys(result.data.slots);
        return setCardCodes(codes)
      })
      .catch(error => console.log(error))
    }
  }


  // FOR IMAGES COMPONENT 
  const generateImages: any = () => {    
    let requestImagesrc: any[] = [];
    if (cardCodes) {
      cardCodes.map((code) => {
        let p =  axios
          .get(`https://arkhamdb.com/api/public/card/${code}`)
          requestImagesrc.push(p)
      })

      Promise.all(requestImagesrc)
        .then(results => {
          const array = results.map(result => result.data.imagesrc)
          setImages([...array])
        })
    }
  };

  // VIEW
  return (
    <div className="App">
      <Input 
        value={value} 
        setValue={setValue}
        handleSubmit={handleSubmit}
      />
      <DeckList decks={decks} />
      <CardCodeList
        cardCodes={cardCodes}
      />
      <Images 
        generateImages={generateImages} 
        images={images}
        setImages={setImages}
      />
      {images && images.length}
    </div>
  );
}

export default App;
