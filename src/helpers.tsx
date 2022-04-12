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
  state.filter(image => image !== undefined).map(image => printArray.push("https://arkhamdb.com" + image));
  setState(printArray.slice(0, 5))
}


// IMAGES COMPONENT: ACCRUE URLs
export const generateImageURLs: any = (stateCardCodes: number[], setStateImages: React.Dispatch<React.SetStateAction<string[]>>) => {    
  let requestImagesrc: any[] = [];
  if (stateCardCodes) {
    stateCardCodes.map((code: any) => {
      let p =  axios
        .get(`https://arkhamdb.com/api/public/card/${code}`);
      requestImagesrc.push(p);
    })

    Promise.all(requestImagesrc)
      .then(results => {
        const array = results.map(result => result.data.imagesrc);
        setStateImages([...array]);
      })
  }
};

