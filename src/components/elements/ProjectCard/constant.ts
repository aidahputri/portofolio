import { ProjectCardProps } from './interface'
import ECI from '../../../../public/images/Eci.png'
import TamanSchool from '../../../../public/images/taman-school.png'

export const PROJECTS: ProjectCardProps[] = [
  {
    title: 'Mata Garuda',
    imageUrl: ECI,
    type: 'WEBDEV',
    paid: true,
    description:
      'As part of Endurance Challenge Indonesia, the Mata Garuda project aims to address the widespread issue of road damage in Indonesia through the development of an AI-based application. ',
    techStacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    ],
    website: 'https://eci-webapp-staging.vercel.app/',
  },
  {
    title: 'Taman School',
    imageUrl: TamanSchool,
    type: 'WEBDEV',
    paid: true,
    description:
      'The project aims to bring Ki Hajar Dewantara vision to life by transforming passionate individuals into great teachers within the student community.',
    techStacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
    ],
    website: 'https://www.tamanschool.com/',
  },
]
