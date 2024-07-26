'use client'

import { createContext, useContext, useState } from 'react'
import {
  ChipButtonContextProps,
  ChipButtonContextProviderProps,
} from './interface'

const ChipButtonContext = createContext({} as ChipButtonContextProps)

export const useChipButtonContext = () => useContext(ChipButtonContext)

export const ChipButtonContextProvider: React.FC<
  ChipButtonContextProviderProps
> = ({ children }) => {
  const [clickedButton, setClickedButton] = useState<string | null>('ALL')

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
