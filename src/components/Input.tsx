import React from 'react';
import '../styles.scss';
import { useGlobalContext } from '../GlobalContext';


// COMPONENT
const Input: React.FC = () => {
const { values, setValues, handleSubmit } = useGlobalContext();


// VIEW
  return (
    <form className='Input__container' onSubmit={(e) => handleSubmit(e)}>
      <input 
        type="text" 
        className="input__field"
        value={values}
        onChange={(e) => setValues(e.target.value)}
      />
      {values}
      <button className="input__button">GO</button>
    </form>
  )
}

export default Input