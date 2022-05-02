import React, { useRef, useEffect } from 'react';
import '../styles.scss';

import { useGlobalContext } from '../GlobalContext';
import InputFormItem from './InputFormItem';

// COMPONENT
const Input: React.FC = () => {
  const { inputRender, setInputRender, handleSubmit, filled, values, decks, setDecks, setRender} = useGlobalContext();
  
  // Focuses on inputFormItems slots
  const inputElement:any = useRef();
  const focusInput:() => void = ()=> {
    inputElement.current.focus();  
  };

  // Reveals InputFormItems slots
  const handleOnClick = () => {
    setTimeout( ()=> {
      setInputRender("process");
      focusInput();
    }, 500);
  };

  // Reveals deck after completing all slots
  useEffect(() => {
    if (filled === 5) {
      setDecks([...decks, values]);
      setRender("CardsList");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filled]);
  
  // VIEW
  return (
    <form className='Input__container' onSubmit={(e) => handleSubmit(e)}>
      {inputRender === "begin" && 
        <button 
          type="button" 
          className="begin__button" 
          onClick={() => {
            handleOnClick();
        }}>
          Begin Ritual
        </button>  
      }
      {inputRender === "process" && 
        <InputFormItem 
          inputElement={inputElement}
          focusInput={focusInput} 
        />
      }
    </form>
  )
};

export default Input;