import React, { useRef, useState } from 'react';
import '../styles.scss';


import { useGlobalContext } from '../GlobalContext';
import InputFormItem from './InputFormItem';


// COMPONENT
const Input: React.FC = () => {
const { values, setValues, handleSubmit } = useGlobalContext();
const [empty, setEmpty] = useState(1)


const inputElement:any = useRef();

const focusInput:() => void = ()=> {
  
  inputElement.current.focus();  
}

// VIEW
  return (
    <form className='Input__container' onSubmit={(e) => handleSubmit(e)}>
      <button 
        type="button" className="begin__button"
        onClick={() => focusInput()}
        >Begin Ritual
        
        </button>
      <InputFormItem 
        inputElement={inputElement}
        focusInput={focusInput}
      />
      {values}
      <button className="input__button">INVOKE</button>
    </form>
  )
}

export default Input