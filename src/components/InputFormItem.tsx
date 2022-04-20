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
  
  // 1. if the form is empty set to empty. why? 
  // 2. focus on the first one. it unique by key
  // if it is empty and any field greater value than its value is empty: focus
  // if form is empty, its classname is empty

  function multiply () {
    const formsArray:any = [];
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
          setValues((prev: any) => [prev, singleInput]);
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
    <form className='InputFormItem__container'>
      {multiply()}
      {/* hi{props.r} */}
      {empty}
    </form>
  )
}

export default InputFormItem