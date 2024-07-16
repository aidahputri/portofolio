import Code from '../../../../../public/Code.svg'
import Figma from '../../../../../public/Figma.svg'
import Layers from '../../../../../public/Layers.svg'
import Activity from '../../../../../public/Activity.svg'
import Image from 'next/image'

export const HIGHLIGHT_ITEMS = [
  {
    id: 1,
    image:  <Image src={Code} alt={'Code'} />,
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et congue odio. Integer tincidunt risus a elit vestibulum, ac eleifend enim bibendum. '
  },
  {
    id: 2,
    image: <Image src={Layers} alt={'Layers'} />,
    title: 'System Analysis & Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et congue odio. Integer tincidunt risus a elit vestibulum, ac eleifend enim bibendum. '
  },
  {
    id: 3,
    image: <Image src={Figma} alt={'Figma'} />,
    title: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et congue odio. Integer tincidunt risus a elit vestibulum, ac eleifend enim bibendum. '
  },
  {
    id: 4,
    image: <Image src={Activity} alt={'Activity'} />,
    title: 'Data Analysis',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et congue odio. Integer tincidunt risus a elit vestibulum, ac eleifend enim bibendum. '
  },
]