import { createContext, useContext } from 'react';


export type GlobalContent = {
  value: string,
  setValue: (c: string) => void,
  decks: number[],
};



export const MyGlobalContext = createContext<GlobalContent>({
  value: "",
  setValue: () => {},
  decks: []
})

export const useGlobalContext = () => useContext(MyGlobalContext)
