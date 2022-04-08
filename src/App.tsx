import React, { useState } from 'react';
import './App.scss';
import DeckList from './components/DeckList';
import Input from './components/Input';

const App: React.FC = () => {
  const [ value, setValue ] = useState<any>("")
  const [ decks, setDecks ] = useState<number[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value) {
      setDecks([...decks, value]);
      setValue("");
    }
  }


  return (
    <div className="App">
      <Input 
        value={value} 
        setValue={setValue}
        handleSubmit={handleSubmit}
      />
      <DeckList decks={decks} />
    </div>
  );
}

export default App;
