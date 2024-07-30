import { ProjectCardProps } from './interface'
import ECI from '../../../../public/images/eci.png'
import TamanSchool from '../../../../public/images/taman-school.png'
import Pegon from '../../../../public/images/pegon.png'
import Optima from '../../../../public/images/optima.png'
import Portofolio from '../../../../public/images/portofolio.png'
import Worldie from '../../../../public/images/worldie.png'
import Kivotos from '../../../../public/images/kivotos.png'
import Pemira from '../../../../public/images/pemira.png'
import Cataract from '../../../../public/images/cataract.png'
import PortofolioDesign from '../../../../public/images/porto-design.png'
import CataractDesign from '../../../../public/images/cataract-design.png'

export const PROJECTS: ProjectCardProps[] = [
  {
    title: 'Optima MedTech Antibiotic Predictor',
    imageUrl: Optima,
    type: 'WEBDEV',
    paid: true,
    description:
      'Optima MedTech Antibiotic Predictor is a tool designed to predict the most effective antibiotics for treating infections, based on patient-specific data and microbial analysis.',
    techStacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    ],
    application:
      'https://play.google.com/store/apps/details?id=com.medtech.optima&hl=en',
  },
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
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
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
    title: 'Portofolio Website',
    imageUrl: Portofolio,
    type: 'WEBDEV',
    paid: false,
    description:
      'A personal portfolio website showcasing my skills and projects.',
    techStacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    ],
    website: 'https://aidahnovallia.vercel.app/',
    git: 'https://github.com/aidahputri/portofolio',
  },
  {
    title: 'CatarAct',
    imageUrl: Cataract,
    type: 'WEBDEV',
    paid: false,
    description:
      'CatarAct is an early cataract detection system using image recognition. By leveraging machine learning, cloud computing, and mobile development, the project seeks to provide accessible and affordable early cataract screening. ',
    techStacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg",
    ],
    application: 'https://github.com/cataract-bangkit/android/releases/tag/v1.0.0',
    git: 'https://github.com/cataract-bangkit',
    documentation: 'https://docs.google.com/document/d/1yrL9-mBf3EqGXgZeX3dhx4Y0Rl900p0EyhYcyDd4-0M/edit?pli=1',
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
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    ],
    website: 'https://pegon.cs.ui.ac.id/app',
  },
  {
    title: 'Worldie',
    imageUrl: Worldie,
    type: 'WEBDEV',
    paid: false,
    description:
      'Worldie is a global travel-focused social media platform. This project is part of Software Engineering Group Projects',
    techStacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    ],
    website: 'https://worldie-atw.vercel.app/',
    git: 'https://github.com/orgs/WorldieATW/repositories',
  },
  {
    title: 'Kivotos Bank',
    imageUrl: Kivotos,
    type: 'WEBDEV',
    paid: false,
    description:
      'Kivotos Bank is an internet banking application designed to meet fast and convenient financial needs in alignment with the digitalization agenda and Industry 4.0 Revolution. Some of the features are Transfer, E-wallet, and Bill Payment. This project is part of Advanced Programming Group Projects.',
    techStacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    ],
    website: 'https://kivotosbank-dev.vercel.app/',
  },
  {
    title: 'Pemira (Student Election) Faculty of Pharmacy 2022',
    imageUrl: Pemira,
    type: 'WEBDEV',
    paid: true,
    description:
      'This website is used by students of Faculty of Pharmacy University of Indonesia for Pemira 2022 (Student Election).',
    techStacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    ],
    git: 'https://github.com/bonaventuragal/pemira-ff-2022',
  },
  {
    title: 'Portofolio Interface Design',
    imageUrl: PortofolioDesign,
    type: 'DESIGN',
    paid: false,
    description:
      'This is UI/UX design for my portofolio website',
    techStacks: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
    ],
    documentation: 'https://www.figma.com/design/ardQRx4dPdUGeRxMFQ1hDQ/Portofolio?node-id=0-1&t=2J5agZ1MJObjXn0W-1',
  },
  {
    title: 'CatarAct Interface Design',
    imageUrl: CataractDesign,
    type: 'DESIGN',
    paid: false,
    description:
      'This is UI/UX design for CatarAct application.',
    techStacks: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
    ],
    documentation: 'https://www.figma.com/design/o2bAKIKx2y5Lt7qnAhyAZ6/High-Fidelity?node-id=0-1&t=LXgRh50bcZFv2mHD-1',
  },
]
