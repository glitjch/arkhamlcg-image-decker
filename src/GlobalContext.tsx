import axios from 'axios';
import { createContext, useContext, useState } from 'react';

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
  const [values, setValues] = useState<any>("")
  const [decks, setDecks] =  useState<number[]>([])
  const [cardCodes, setCardCodes] = useState<number[]>([]) // CardCodeList component
  const [ images, setImages ] = useState<string[]>([]); // Images component
  const [ print, setPrint ] = useState<string[]>([]); // Images Component list for print option



  // INPUT COMPONENT
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (values) {
      setDecks([...decks, values]);
      console.log(values);

    }
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
  }


  //
  // WRAPPER WITH PROPS
  return (
    <MyGlobalContext.Provider value={providerData}>
      {props.children}
    </MyGlobalContext.Provider>
  )
}