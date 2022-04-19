import React, { useState } from 'react'
import { useGlobalContext } from '../GlobalContext';

type Form = React.InputHTMLAttributes<HTMLInputElement>

const InputFormItem = () => {
  const { values, setValues } = useGlobalContext();  
  function multiply () {
    const formsArray:any = [];
    for (let i = 1; i <= 5; i++) {
      formsArray.push(
        <input 
        type="text" 
        maxLength={1}
        className="input__field"
        onChange={(e) => {
          const singleInput = e.target.value;
          setValues((prev: any) => [prev, singleInput]);
        }}
        />
        )
    }
    return formsArray;
  }
  
  
  return (
    <form className='InputFormItem__container'>
      {multiply()}
    </form>
  )
}

export default InputFormItem