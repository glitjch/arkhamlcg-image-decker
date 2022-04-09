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
      // .then(result => console.log(cardCodes))
      .catch(error => console.log(error))
    }
  }


  // FOR IMAGES COMPONENT 
  const generateImages = () => {
    if (cardCodes) {
      return cardCodes.map((code) => {
        return axios
          .get(`https://arkhamdb.com/api/public/card/${code}`)
          .then(result => {
            setImages([...images, result.data.imagesrc])
          })
          .catch(result => console.log(result))
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
    </div>
  );
}

export default App;
