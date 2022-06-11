import React, {createContext, useState} from 'react'


export const MarluContext = createContext();



export default function MarloProvider({children}) {
    const [defaultBackgroundColor, setDefaultBackgroundColor ] = useState('#232323')


  return (
    <MarluContext.Provider
    value={{
        defaultBackgroundColor, setDefaultBackgroundColor
    }}
    >
        {children}
    </MarluContext.Provider>
  )
}
