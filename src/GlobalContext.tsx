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
  images: any,
  setImages: any,
  requestData: () => void,
  generateImages: () => Promise<void>[],
  // values: string,
  // setValues: React.Dispatch<React.SetStateAction<string>>,
  // decks: number[],
  // setDecks: React.Dispatch<React.SetStateAction<number[]>>,
  // handleSubmit: (e: React.FormEvent) => void,
  // cardCodes: number[],

};

// context WRAPPER
export const MyGlobalContext = createContext({} as GlobalContent);

// context USE
export const useGlobalContext = () => useContext(MyGlobalContext);


export default function ContextProvider(props:any) {
  const [values, setValues] = useState<any>("")
  const [decks, setDecks] =  useState<number[]>([])
  const [cardCodes, setCardCodes] = useState<number[]>([]) // CardCodeList component
  const [ images, setImages] = useState<string[]>([]); // Images component


  // INPUT
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (values) {
      setDecks([...decks, values]);
    }
  }

  // CARDCODESLIST
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

  // IMAGES
  const generateImages: any = () => {    
    let requestImagesrc: any[] = [];
    if (cardCodes) {
      cardCodes.map((code: any) => {
        let p =  axios
          .get(`https://arkhamdb.com/api/public/card/${code}`);
        requestImagesrc.push(p);
      })

      Promise.all(requestImagesrc)
        .then(results => {
          const array = results.map(result => result.data.imagesrc);
          setImages([...array]);
        })
    }
  };

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
    generateImages
  }


  //
  // WRAPPER WITH PROPS
  return (
    <MyGlobalContext.Provider value={providerData}>
      {props.children}
    </MyGlobalContext.Provider>
  )
}