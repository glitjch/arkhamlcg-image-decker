import React, { useState } from 'react'
import { useGlobalContext } from '../GlobalContext';

type Form = React.InputHTMLAttributes<HTMLInputElement>

const InputFormItem = () => {
  const { values, setValues } = useGlobalContext();
  // const { digits, setDigits } = useState<any[]>([]);
  // const { values, setdigit } = useGlobalContext();
  // const { values, setdigit } = useGlobalContext();
  // const { values, setdigit } = useGlobalContext();
  
  function multiply () {
    const formsArray:any = [];
    for (let i = 1; i <= 5; i++) {
      formsArray.push(
        <input 
        type="text" 
        maxLength={1}
        className="input__field"
        // value={}
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
      {values}
    </form>
  )
}

export default InputFormItem