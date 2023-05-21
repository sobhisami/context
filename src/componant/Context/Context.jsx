import React, {useState } from "react"

export const Context = React.createContext({
  Dataa:[],
  SetDataa:()=>{},
});

export const ContextHandle=({children})=> {
  let [Dataa,SetDataa]=useState([])
  return (
    <Context.Provider value={{
        Dataa:Dataa,
      SetDataa:SetDataa}
    }>
      {children}
    </Context.Provider>
  )
}

