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
  generateImageURLs: () => Promise<void>[],
  printAll: () => void,
  print: string[],
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

  // IMAGES COMPONENT
  const generateImageURLs: any = () => {    
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

  // IMAGES COMPONENT FOR PRINTING ALL IMAGES
  const printAll = () => {
    const printArray: string[] = [];
    images.filter(image => image !== undefined).map(image => printArray.push("https://arkhamdb.com" + image));
    setPrint(printArray.slice(0, 5))
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
    generateImageURLs,
    print,
    printAll,
  }


  //
  // WRAPPER WITH PROPS
  return (
    <MyGlobalContext.Provider value={providerData}>
      {props.children}
    </MyGlobalContext.Provider>
  )
}