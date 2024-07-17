import { IconType } from 'react-icons'

export interface NavItemProps extends NavbarProps {
  currentLoc: string
}

export interface NavbarProps {
  label: string
  url: string
  Icon: IconType
}
