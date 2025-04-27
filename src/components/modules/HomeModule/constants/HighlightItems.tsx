import Code from '../../../../../public/Code.svg'
import Figma from '../../../../../public/Figma.svg'
import Layers from '../../../../../public/Layers.svg'
import Activity from '../../../../../public/Activity.svg'
import Game from '../../../../../public/Gamedev.svg'
import Image from 'next/image'

export const HIGHLIGHT_ITEMS = [
  {
    id: 1,
    image: <Image src={Code} alt={'Code'} />,
    title: 'Web Development',
    description:
      'Specializing in creating responsive and user-friendly websites using modern technologies and best practices.',
  },
  {
    id: 2,
    image: <Image src={Layers} alt={'Layers'} />,
    title: 'System Analysis & Design',
    description:
      'Expert in analyzing complex systems and designing efficient, scalable solutions tailored to business needs.',
  },
  {
    id: 3,
    image: <Image src={Figma} alt={'Figma'} />,
    title: 'UI/UX Design',
    description:
      'Focused on crafting intuitive and aesthetically pleasing user interfaces to enhance user experience.',
  },
  {
    id: 4,
    image: <Image src={Activity} alt={'Activity'} />,
    title: 'Data Analysis',
    description:
      'Proficient in interpreting data, identifying trends, and providing actionable insights to drive business decisions.',
  },
  {
    id: 5,
    image: <Image src={Game} alt={'Game'} />,
    title: 'Game Development',
    description:
      'Skilled in designing engaging gameplay experiences, creating immersive worlds, and developing interactive mechanics.',
  },
]
