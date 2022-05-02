import React, { useEffect } from 'react';
import './styles.scss';

// CHILDREN
import DeckList from './components/DeckList';
import Input from './components/Input';
import CardCodeList from './components/CardCodeList';
import CardsList from './components/CardsList';

// GLOBAL PROPS
import { useGlobalContext } from './GlobalContext';
import Nav from './components/Nav';

enum Renders {
  Input = "Input",
  DeckList = "DeckList",
  CardCodeList = "CardCodeList",
  CardsList = "CardsList",
};


// COMPONENT
const App: React.FC = () => {
  const { setValues, decks, requestData, render} = useGlobalContext()

  // Fetches data when new deck added
  useEffect(() => {
    requestData();
    return () => setValues("");
  }, [decks]);

  // VIEW
  return (
    <>
    <Nav />
    <div className="layerBg"/>
    <div className="App">
      {render === Renders.Input && <Input />}
      {render === Renders.DeckList && <DeckList />}
      {render === Renders.CardCodeList && <CardCodeList />}
      {render === Renders.CardsList && <CardsList />}
    </div>
    </>
  );
}

export default App;
