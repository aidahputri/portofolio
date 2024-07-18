'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import {
  ChipButtonContextProps,
  ChipButtonContextProviderProps,
} from './interface'

const ChipButtonContext = createContext({} as ChipButtonContextProps)

export const useChipButtonContext = () => useContext(ChipButtonContext)

export const ChipButtonContextProvider: React.FC<
  ChipButtonContextProviderProps
> = ({ children }) => {
  const [clickedButton, setClickedButton] = useState<string | null>(null)

  // useEffect(() => {
  //   console.log(clickedButton)
  // }, [clickedButton])

  const contextValue = {
    clickedButton,
    setClickedButton,
  }

  return (
    <ChipButtonContext.Provider value={contextValue}>
      {children}
    </ChipButtonContext.Provider>
  )
}
