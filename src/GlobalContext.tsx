import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import { EnumType } from 'typescript';

// ts shape
interface GlobalContent {
  values: any,
  setValues: any,
  decks: any,
  setDecks: any,
  handleSubmit: (e: any) => void,
  cardCodes: any,
  setCardCodes: any,
  images: string[],
  setImages: any,
  requestData: () => void,
  print: string[],
  setPrint: React.Dispatch<React.SetStateAction<string[]>>,
  filled: number,
  setFilled: React.Dispatch<React.SetStateAction<number>>,
  inputRender: string,
  setInputRender: React.Dispatch<React.SetStateAction<string>>,
  render: string,
  setRender: React.Dispatch<React.SetStateAction<string>>,
   
  // values: string,
  // setValues: React.Dispatch<React.SetStateAction<string>>,
  // decks: number[],
  // setDecks: React.Dispatch<React.SetStateAction<number[]>>,
  // handleSubmit: (e: React.FormEvent) => void,
  // cardCodes: number[],
  // images: string[],
  // setImages: React.Dispatch<React.SetStateAction<string[]>>,
  // generateImageURLs: () => Promise<void>[] | undefined,
};

// context WRAPPER
export const MyGlobalContext = createContext({} as GlobalContent);

// context USE
export const useGlobalContext = () => useContext(MyGlobalContext);


//
// PROVIDER COMPONENT
export default function ContextProvider(props:any) {
  // ALL STATES MANAGED
  const [values, setValues] = useState<any>("") // form input 
  const [decks, setDecks] =  useState<number[]>([]) // record of decks (some features for future app)
  const [cardCodes, setCardCodes] = useState<number[]>([]) // CardCodeList component
  const [ images, setImages ] = useState<string[]>([]); // Images component
  const [ print, setPrint ] = useState<string[]>([]); // Images Component list for print option
  const [ filled, setFilled ] = useState<number>(0);
  const [ inputRender, setInputRender ] = useState<string>("begin");
  const [render, setRender] = useState<string>("Input") // ---> for mounting and unmounting components. 


  // INPUT COMPONENT
  const handleSubmit = (e: React.FormEvent) => {
    if(values.length < 5) {
      throw new Error("Insert the full Deck ID");
    }
    e.preventDefault();
    setRender("Images")

    // if (values.length === 5) {
    //   setDecks([...decks, values]);
    // }
  }

  // CARDCODESLIST COMPONENT
  const requestData = () => {
    if (values && Number(values) !== NaN && values.length === 5) {
      const newestDeck = decks[decks.length - 1];      
      return axios
      .get(`https://arkhamdb.com/api/public/decklist/${newestDeck}`)
      .then(result => {
        const codes: any = Object.keys(result.data.slots);
        return setCardCodes(codes)
      })
      .catch(error => console.log(error))
    }
  }


  const providerData = { 
    values, 
    setValues, 
    decks, 
    setDecks, 
    handleSubmit, 
    cardCodes, 
    setCardCodes,
    images,
    setImages,
    requestData,
    print,
    setPrint,
    filled,
    setFilled,
    inputRender,
    setInputRender,
    render,
    setRender
  }


  //
  // WRAPPER WITH PROPS
  return (
    <MyGlobalContext.Provider value={providerData}>
      {props.children}
    </MyGlobalContext.Provider>
  )
}