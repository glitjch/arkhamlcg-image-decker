import React, { useEffect } from 'react';
import './styles.scss';

// CHILDREN
import DeckList from './components/DeckList';
import Input from './components/Input';
import CardCodeList from './components/CardCodeList';
import Images from './components/Images';

// GLOBAL PROPS
import { useGlobalContext } from './GlobalContext';
import Nav from './components/Nav';

enum Renders {
  Input = "Input",
  DeckList = "DeckList",
  CardCodeList = "CardCodeList",
  Images = "Images",
};

// COMPONENT
const App: React.FC = () => {
  const { setValues, decks, images, requestData, render} = useGlobalContext()

  // Fetches data when senses an added deck instance
  useEffect(() => {
    requestData();
    return () => setValues("");
  }, [decks]);

  // VIEW
  return (
    <>
    <Nav/>
    <div className="layerBg"/>
    <div className="App">
      {render === Renders.Input && <Input />}
      {render === Renders.DeckList && <DeckList />}
      {render === Renders.CardCodeList && <CardCodeList />}
      {render === Renders.Images && <Images />}
      {images && images.length}
    </div>
    </>
  );
}

export default App;
