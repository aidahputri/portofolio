import { IoPerson } from 'react-icons/io5'
import { FaCode } from 'react-icons/fa'
import { NavbarProps } from './interface'

export const NAV_ITEMS: NavbarProps[] = [
  {
    label: 'About',
    url: '/',
    Icon: IoPerson,
  },
  {
    label: 'Projects',
    url: '/projects',
    Icon: FaCode,
  },
]
