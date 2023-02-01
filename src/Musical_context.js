import React, { useReducer, createContext } from 'react'

export const MusicalCont = createContext(null);
const reducerFn = (data) => {
    return data;
}
const Musical_context = ({children}) => {
    const [data, dispatch] = useReducer(reducerFn, 0);

  return (
    <MusicalCont.Provider value={{data, dispatch}}>{children}</MusicalCont.Provider>
  )
}

export default Musical_context