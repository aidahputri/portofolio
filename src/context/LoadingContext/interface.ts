export interface LoadingContextProps {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export interface LoadingContextProviderProps {
  children?: React.ReactNode
}
