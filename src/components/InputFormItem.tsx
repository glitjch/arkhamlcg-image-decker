import '../styles.scss';
import { useGlobalContext } from '../GlobalContext';
import { useEffect } from 'react';

// COMPONENT
const InputFormItem = (props: any) => {
  const { filled, setFilled, setValues } = useGlobalContext();  

  // Refocuses on the next input slot once user inserts value. 5 slots total.
  useEffect(() => {
    filled < 5 && props.focusInput();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filled]);


  const handleInputChange = (event: any) => {
    if (event.target.value) {
      event.preventDefault();
      setValues((prev: any) => prev + event.target.value);
      setFilled(prev => prev + 1)
    }
  };

    // Prevents user from retyping in the same input after value exists
    const disableFilledInput = (index: number) => {
      let filledInput = (document.getElementById(`digit${index}`) as HTMLInputElement);
      if (filled === index) {
        filledInput.disabled = true;
      }
    };
  
  // Generates multiple slots with state conditions
  function multiplyNumberSlots () {
    const slotsArray:any = [];
    for (let i = 0; i < 5; i++) {
      slotsArray.push(
        <input 
          maxLength={1}
          type="number" 
          ref={filled === i ? props.inputElement : null} // Refocuses the next slot
          className={`input__field ${i}`}
          id={`digit${i}`} // Refocuses the next slot
          key={i}
          onChange={(e) => {
            handleInputChange(e)
            disableFilledInput(i);
          }} 
        />
      )
    }
    return slotsArray;
  };
  
  // VIEW
  return (
    <form className='InputFormItem__container' id='test'>
      {multiplyNumberSlots()}
    </form>
  )
};

export default InputFormItem;