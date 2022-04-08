import React, { useState } from 'react';
import axios from 'axios';
import './styles.scss';

// CHILDREN
import DeckList from './components/DeckList';
import Input from './components/Input';
import CardCodeList from './components/CardCodeList';



// COMPONENT
const App: React.FC = () => {
  const [ value, setValue ] = useState<any>("")
  const [ decks, setDecks ] = useState<number[]>([])

  const [cardCodes, setCardCodes] = useState<number[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value) {
      setDecks([...decks, value]);
      setValue("");
      
      requestData()
    }
  }

  const requestData = () => {
    if (value && Number(value) !== NaN && value.length === 5 && decks.length > 0) {
      const newestDeck = decks[decks.length - 1];      
      return axios
      .get(`https://arkhamdb.com/api/public/decklist/${newestDeck}`)
      .then(result => {
        const codes: any = Object.keys(result.data.slots);
        return setCardCodes(codes)
      })
      .then(result => console.log(cardCodes))
      .catch(error => console.log(error))
    }
  }

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
    </div>
  );
}

export default App;
