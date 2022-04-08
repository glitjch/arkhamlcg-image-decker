import React, { FC, useState } from 'react';
import '../styles.scss';

interface Props {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  handleSubmit: (e: React.FormEvent) => void,
}

// COMPONENT
const Input: React.FC<Props> = ({value, setValue, handleSubmit}) => {

// VIEW
  return (
    <form className='Input__container' onSubmit={(e) => handleSubmit(e)}>
      <input 
        type="text" 
        className="input__field"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="input__button">GO</button>
    </form>
  )
}

export default Input