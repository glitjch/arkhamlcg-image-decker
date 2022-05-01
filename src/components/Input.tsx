import React, { useRef, useState } from 'react';
import '../styles.scss';

import { useGlobalContext } from '../GlobalContext';
import InputFormItem from './InputFormItem';

interface Props{
  setRender: React.Dispatch<React.SetStateAction<string>>
}

// COMPONENT
const Input: React.FC<Props> = ({setRender}: Props ) => {
  const { handleSubmit } = useGlobalContext();
  const [ inputRender, setInputRender ] = useState<string>("begin");

  const inputElement:any = useRef();

  const focusInput:() => void = ()=> {
    inputElement.current.focus();  
  }

  // VIEW
  return (
    <form 
      className='Input__container' 
      onSubmit={(e) => {
        handleSubmit(e)
        setRender("Images")
    }}>

      {inputRender === "begin" && 
        <button 
        type="button" className="begin__button" 
        onClick={() => {
          setTimeout( ()=> {
            setInputRender("process")
            focusInput()
            }, 500) 
        }}>
          Begin Ritual
        </button>  
      }
    
      {inputRender === "process" && 
        <>
        <InputFormItem 
        inputElement={inputElement}
        focusInput={focusInput} 
        />
          <button className="input__button">INVOKE</button>
        </>
      }
    </form>
  )
}

export default Input