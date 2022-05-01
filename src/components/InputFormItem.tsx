import '../styles.scss';
import { useGlobalContext } from '../GlobalContext';
import { useState, useEffect } from 'react';

// COMPONENT
const InputFormItem = (props: any) => {
  const { setValues } = useGlobalContext();  
  const [empty, setEmpty] = useState(1)

  // Refocuses on the next input slot once user inserts value. 5 slots total.
  useEffect(() => {
    empty < 6 && props.focusInput()
  }, [empty])

  // Prevents user from retyping in the same input after value exists
  function multiplyNumberSlots () {
    const slotsArray:any = [];
    function disableFilledInput (index: number){
      let filledInput = (document.getElementById(`digit${index}`) as HTMLInputElement);
      filledInput.disabled = true;
    }

    for (let i = 1; i <= 5; i++) {
      slotsArray.push(
        <input 
          type="text" 
          ref={empty === i ? props.inputElement : null}
          maxLength={1}
          className={`input__field ${i}`}
          id={`digit${i}`}
          key={i}
          onChange={(e) => {
            const singleInput = e.target.value;
            setValues((prev: any) => prev + singleInput);
            disableFilledInput(i);
            setEmpty(prev => prev + 1)
          }} 
        />
      )
    }
    return slotsArray;
  };
  
  // VIEW
  return (
    <form 
      className='InputFormItem__container' 
      id='test'
    >
      {multiplyNumberSlots()}
    </form>
  )
}

export default InputFormItem