import React, { useEffect } from 'react';
import './styles.scss';

// CHILDREN
import DeckList from './components/DeckList';
import Input from './components/Input';
import CardCodeList from './components/CardCodeList';
import Images from './components/Images';

// GLOBAL PROPS
import { useGlobalContext } from './GlobalContext';


// COMPONENT
const App: React.FC = () => {
  const {
    values, setValues, 
    decks, setDecks, 
    cardCodes, setCardCodes, 
    images, setImages,
    requestData,
    generateImages } = useGlobalContext()

  useEffect(() => {
    requestData()
    return () => {
      setValues("")
    }
  }, [decks])

  // VIEW
  return (
    <div className="App">
      <Input />
      <DeckList />
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
