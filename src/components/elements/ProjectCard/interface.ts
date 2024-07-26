import { StaticImageData } from 'next/image'

export interface ProjectCardProps {
  title: string
  imageUrl: StaticImageData
  type: string
  paid: boolean
  description: string
  techStacks: string[]
  website?: string
  git?: string
  documentation?: string
  application?: string
}
