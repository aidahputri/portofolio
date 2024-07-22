'use client'

import { createContext, useContext, useState } from 'react'
import { LoadingContextProps, LoadingContextProviderProps } from './interface'

const LoadingContext = createContext({} as LoadingContextProps)

export const useLoadingContext = () => useContext(LoadingContext)

export const LoadingContextProvider: React.FC<LoadingContextProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true)

  const contextValue = {
    isLoading,
    setIsLoading,
  }

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  )
}
