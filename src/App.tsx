import React, { useState } from 'react';
import './App.scss';
import Input from './components/Input';

const App: React.FC = () => {
  const [ value, setValue ] = useState<string>("")
  const [ deck, setDeck ] = useState([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value) {
      console.log(e);
    }
  }

  return (
    <div className="App">
      <Input 
        value={value} 
        setValue={setValue}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
