import React, { useEffect, useState } from 'react';
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
  const { setValues, decks, images, requestData, } = useGlobalContext()
  const [render, setRender] = useState("Input")

  useEffect(() => {
    requestData()
    return () => {
      setValues("")
    }
  }, [decks])

  // VIEW
  return (
    <div className="App">
      {render === "Input" && <Input />}
      {render === "DeckList" && <DeckList />}
      {render === "CardCodelist" && <CardCodeList />}
      {render ===  "Images" && <Images />}
      {images && images.length}
    </div>
  );
}

export default App;
