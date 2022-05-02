import axios from "axios";


// DECKLIST COMPONENT
export const listDecks = (props: any) => {
  return props.map((deck: number) => {
    return <ul key={deck}>{deck}</ul>
  })
};

// CARDCODELIST COMPONENT
export const generateCodeList = (list: number[]) => {
  return list.map( (code, id) => {
    return <ul key={id}>{code}</ul>
  })
};


// IMAGES COMPONENT: PRINTING ALL IMAGES
export const printAll = (state: string[], setState: React.Dispatch<React.SetStateAction<string[]>>) => {
  const printArray: string[] = [];
  state
    .filter(image => image !== undefined)
      .map(image => printArray.push("https://arkhamdb.com" + image));
  setState(printArray);//.slice(0, 10));
};


// IMAGES COMPONENT: ACCRUE URLs
export const generateImageURLs: any = (cardCodes: number[], setCardImgs: React.Dispatch<React.SetStateAction<string[]>>) => {    
  let requestedCardsByUrls: any[] = [];
  if (cardCodes) {
    cardCodes.map((code: number) => {
      let p =  axios.get(`https://arkhamdb.com/api/public/card/${code}`);
      return requestedCardsByUrls.push(p);
    })

    Promise.all(requestedCardsByUrls)
      .then(results => {
        const array = results.map(result => result.data.imagesrc);
        setCardImgs([...array]);
      })
  }
};

