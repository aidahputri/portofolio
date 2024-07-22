export interface ChipButtonContextProps {
  clickedButton: string | null
  setClickedButton: (value: string) => void
}

export interface ChipButtonContextProviderProps {
  children?: React.ReactNode
}
