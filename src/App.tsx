import React, { useEffect, useState } from 'react';
import './styles.scss';

// CHILDREN
import DeckList from './components/DeckList';
import Input from './components/Input';
import CardCodeList from './components/CardCodeList';
import Images from './components/Images';

// GLOBAL PROPS
import { useGlobalContext } from './GlobalContext';

enum Renders {
  Input = "Input",
  DeckList = "DeckList",
  CardCodeList = "CardCodeList",
  Images = "Images",
}

// type Renders = "Input" | "Decklist"

// COMPONENT
const App: React.FC = () => {
  const { setValues, decks, images, requestData, } = useGlobalContext()
  const [render, setRender] = useState<string>("Input")

  useEffect(() => {
    requestData()
    return () => {
      setValues("")
    }
  }, [decks])

  // VIEW
  return (
    <div className="App">
      <header>Proxy Ritual</header>
      {render === Renders.Input && <Input setRender={setRender}/>}
      {render === Renders.DeckList && <DeckList />}
      {render === Renders.CardCodeList && <CardCodeList />}
      {render === Renders.Images && <Images />}
      {images && images.length}
    </div>
  );
}

export default App;
