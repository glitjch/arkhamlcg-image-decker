import React, { useRef, useEffect } from 'react';
import '../styles.scss';

import { useGlobalContext } from '../GlobalContext';
import InputFormItem from './InputFormItem';

// COMPONENT
const Input: React.FC = () => {
  const { inputRender, setInputRender, handleSubmit, filled, } = useGlobalContext();
  const inputElement:any = useRef();
  
  const focusInput:() => void = ()=> {
    inputElement.current.focus();  
  }

  const handleOnClick = () => {
    setTimeout( ()=> {
      setInputRender("process")
      focusInput()
    }, 500) 
  }
  // VIEW
  return (
    <form 
      className='Input__container' 
      onSubmit={(e) => {
        handleSubmit(e)
    }}>

      {inputRender === "begin" && 
        <button 
          type="button" 
          className="begin__button" 
          onClick={() => {
            handleOnClick()
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
}

export default Input