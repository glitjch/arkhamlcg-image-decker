import React from 'react';
import '../styles.scss';


import { useGlobalContext } from '../GlobalContext';
import InputFormItem from './InputFormItem';


// COMPONENT
const Input: React.FC = () => {
const { values, setValues, handleSubmit } = useGlobalContext();

// Set each input into one 
// VIEW
  return (
    <form className='Input__container' onSubmit={(e) => handleSubmit(e)}>
      <InputFormItem />
      {values}
      <button className="input__button">INVOKE</button>
    </form>
  )
}

export default Input