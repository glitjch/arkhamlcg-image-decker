import React from 'react'
import { useGlobalContext } from '../GlobalContext';

type Form = React.InputHTMLAttributes<HTMLInputElement>

const InputFormItem = () => {
  const { values, setValues } = useGlobalContext();
  
  function multiply () {
  
    const formsArray = [];
    for (let i = 1; i <= 5; i++) {
      formsArray.push(
        <input 
        type="text" 
        className="input__field"
        value={values}
        onChange={(e) => setValues(e.target.value)}
        />
        )
    }
    return formsArray;
  }
  
  
  return (
    <>
    {multiply()}
    </>
  )
}

export default InputFormItem