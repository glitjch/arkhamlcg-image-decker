import '../styles.scss';
import { useGlobalContext } from '../GlobalContext';
import { useRef, useState, useEffect } from 'react';

// COMPONENT
const InputFormItem = (props: any) => {
  const { values, setValues } = useGlobalContext();  
  const [empty, setEmpty] = useState(1)

  useEffect(() => {
    if (empty < 6) {
      props.focusInput()
    }
  }, [empty])

  function multiply () {
    const formsArray:any = [];

    // prevents user from retyping in the same input after value exists
    function disableInput (index: number){
      let theInput = (document.getElementById(`digit${index}`) as HTMLInputElement);
      theInput.disabled = true;
    }

    for (let i = 1; i <= 5; i++) {
      formsArray.push(
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
          disableInput(i);
          setEmpty(prev => prev + 1)
        }}
        
        />
        )
    }
    return formsArray;
  }
  
  // VIEW
  return (
    <form className='InputFormItem__container' 
    id='test'

    >
      {multiply()}
    </form>
  )
}

export default InputFormItem