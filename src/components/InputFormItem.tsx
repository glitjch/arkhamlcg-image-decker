import '../styles.scss';
import { useGlobalContext } from '../GlobalContext';
import { useRef } from 'react';

// COMPONENT
const InputFormItem = (props: any) => {
  const { values, setValues } = useGlobalContext();  
  function multiply () {
    const formsArray:any = [];
    for (let i = 1; i <= 1; i++) {
      formsArray.push(
        <input 
        type="text" 
        ref={props.inputElement}
        maxLength={1}
        className={`input__field ${i}`}
        key={i}
        onChange={(e) => {
          const singleInput = e.target.value;
          setValues((prev: any) => [prev, singleInput]);
        }}
        />
        )
    }
    return formsArray;
  }
  
  // VIEW
  return (
    <form className='InputFormItem__container'>
      {multiply()}
      {/* hi{props.r} */}
    </form>
  )
}

export default InputFormItem