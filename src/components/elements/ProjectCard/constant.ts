import { ProjectCardProps } from './interface'
import ECI from '../../../../public/images/Eci.png'
import TamanSchool from '../../../../public/images/taman-school.png'
import Pegon from '../../../../public/images/pegon.png'
import Optima from '../../../../public/images/optima.png'

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
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    ],
    website: 'https://www.tamanschool.com/',
  },
  {
    title: 'Optima MedTech Antibiotic Predictor',
    imageUrl: Optima,
    type: 'WEBDEV',
    paid: true,
    description:
      'Optima MedTech Antibiotic Predictor is a tool designed to predict the most effective antibiotics for treating infections, based on patient-specific data and microbial analysis.',
    techStacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    ],
    application: 'https://play.google.com/store/apps/details?id=com.medtech.optima&hl=en',
  },
  {
    title: 'Pegon',
    imageUrl: Pegon,
    type: 'WEBDEV',
    paid: false,
    description:
      'Pegon is a solution dedicated to preserve manuscripts written in Pegon Language. By digitizing the manuscripts, Pegon is trying to preserve ancient manuscripts from the erosion of time.',
    techStacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    ],
    website: 'https://www.tamanschool.com/',
  },
]
