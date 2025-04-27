import { ProjectCardProps } from './interface'
import ECI from '../../../../public/images/eci.png'
import TamanSchool from '../../../../public/images/taman-school.png'
import Pegon from '../../../../public/images/pegon.png'
import Optima from '../../../../public/images/optima.png'
import RnD from '../../../../public/images/rnd-screnshoot.png'
import Portofolio from '../../../../public/images/portofolio.png'
import Worldie from '../../../../public/images/worldie.png'
import Kivotos from '../../../../public/images/kivotos.png'
import Pemira from '../../../../public/images/pemira.png'
import Cataract from '../../../../public/images/cataract.png'
import PortofolioDesign from '../../../../public/images/porto-design.png'
import CataractDesign from '../../../../public/images/cataract-design.png'
import WorldieDesign from '../../../../public/images/worldie-design.png'
import VinylDesign from '../../../../public/images/vinyl-design.png'
import HonestPantryDesign from '../../../../public/images/honest-pantry-design.png'
import HealthMateDesign from '../../../../public/images/healthmate-design.png'
import WhisperingWoods from '../../../../public/images/WW-1.png'
import Dreamscape from '../../../../public/images/dreamscape.png'
import Kasdad from '../../../../public/images/datagazer-ss.jpg'

export const PROJECTS: ProjectCardProps[] = [
  {
    title: 'RnD (Rent N Drive)',
    imageUrl: RnD,
    type: 'WEBDEV',
    paid: false,
    description:
      'A web-based platform for managing car rentals and allowing users to easily search, book, and rent cars.',
    techStacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    ],
    website: 'https://kelompok-42-rnd-frontend.pkpl.cs.ui.ac.id/',
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
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg',
    ],
    application:
      'https://github.com/cataract-bangkit/android/releases/tag/v1.0.0',
    git: 'https://github.com/cataract-bangkit',
    documentation:
      'https://docs.google.com/document/d/1yrL9-mBf3EqGXgZeX3dhx4Y0Rl900p0EyhYcyDd4-0M/edit?pli=1',
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
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
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
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
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
    description: 'This is UI/UX design for my portofolio website',
    techStacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
    ],
    documentation:
      'https://www.figma.com/design/ardQRx4dPdUGeRxMFQ1hDQ/Portofolio?node-id=0-1&t=2J5agZ1MJObjXn0W-1',
  },
  {
    title: 'CatarAct Interface Design',
    imageUrl: CataractDesign,
    type: 'DESIGN',
    paid: false,
    description: 'This is UI/UX design for CatarAct application.',
    techStacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
    ],
    documentation:
      'https://www.figma.com/design/o2bAKIKx2y5Lt7qnAhyAZ6/High-Fidelity?node-id=0-1&t=LXgRh50bcZFv2mHD-1',
  },
  {
    title: 'Worldie Interface Design',
    imageUrl: WorldieDesign,
    type: 'DESIGN',
    paid: false,
    description: 'This is UI/UX design for Worldie Website.',
    techStacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
    ],
    documentation:
      'https://www.figma.com/design/0qEHVIZYnNvoNfiife6s1J/ATW?node-id=0-1&t=M78U1rR88yNCUzDk-1',
  },
  {
    title: 'Vinyl Interface Design',
    imageUrl: VinylDesign,
    type: 'DESIGN',
    paid: false,
    description: 'This is UI/UX design for Vinyl Website.',
    techStacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
    ],
    documentation:
      'https://www.figma.com/design/8LcPGtpdrQUXr4K1hbY7aa/High-Fidelity?node-id=0-1&t=lFrfxDSFjbuWwkNf-1',
  },
  {
    title: 'Honest Pantry Interface Design',
    imageUrl: HonestPantryDesign,
    type: 'DESIGN',
    paid: false,
    description: 'This is UI/UX design for Honest Pantry Website.',
    techStacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
    ],
    documentation:
      'https://www.figma.com/design/Cg2jo9OKPjyGAtMnIXxY7j/web-design?node-id=5-2&t=aZ5W64bwPm4AdueJ-1',
  },
  {
    title: 'HealthMate Interface Design',
    imageUrl: HealthMateDesign,
    type: 'DESIGN',
    paid: false,
    description: 'This is UI/UX design for HealthMate Application.',
    techStacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
    ],
    documentation:
      'https://www.figma.com/design/xtlolUr8D1D1G8aqmkgwr3/HealthMate?node-id=0-1&t=FL5sOgLXjuVeJR8L-1',
  },
  {
    title: 'Whispering Woods',
    imageUrl: WhisperingWoods,
    type: 'GAME',
    paid: false,
    description:
      'An atmospheric adventure game set in a decaying world. Players control Aeria, a boy guided by the Spirit of Wind, on a journey to restore balance.',
    techStacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg',
    ],
    documentation: 'https://github.com/aidahputri/whispering-winds',
    application: 'https://amaltheanixie.itch.io/whispering-woods',
  },
  {
    title: 'Dreamscape',
    imageUrl: Dreamscape,
    type: 'GAME',
    paid: false,
    description:
      'A Rhythm game where you need to keep the balance between dark and light notes.',
    techStacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg',
    ],
    application: 'https://meervix.itch.io/dreamscape',
  },
  {
    title: 'Meramal Cuaca Data Analysis',
    imageUrl: Kasdad,
    type: 'DATA',
    paid: false,
    description:
      'Meramal Cuaca is a data analysis project aimed at predicting weather patterns using machine learning techniques. The project involves collecting and preprocessing weather data, exploring various models to achieve accurate predictions, and visualizing the results to provide actionable insights.',
    techStacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-plain.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
    ],
    documentation:
      'https://drive.google.com/file/d/1XO8os4J0n0qP2uHJlO-TmDjcWhbaDg-R/view',
  },
]
