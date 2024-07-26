import { IconType } from 'react-icons'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa6'

type ContactType = 'LINKEDIN' | 'MAIL' | 'GITHUB' | 'MEDIUM'

interface ContactInterface {
  type: ContactType
  Icon: IconType
  url: string
}

export const CONTACTS: ContactInterface[] = [
  {
    type: 'MAIL',
    Icon: MdOutlineMailOutline,
    url: 'aidahptr15@gmail.com',
  },
  {
    type: 'GITHUB',
    Icon: FaGithub,
    url: 'https://github.com/aidahputri',
  },
  {
    type: 'LINKEDIN',
    Icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/aidahnovallia/',
  },
  {
    type: 'MEDIUM',
    Icon: FaMedium,
    url: 'https://medium.com/@aidahptr15',
  },
]
