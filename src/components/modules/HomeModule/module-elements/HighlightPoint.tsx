import { ReactNode } from 'react'

interface HighlightPointProps {
  image: ReactNode
  title: string
  description: string
}

export const HighlightPoint: React.FC<HighlightPointProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-4 justify-center md:justify-normal">
      <div className="w-16 flex items-center justify-center h-16 rounded-full bg-[#B5179E] place-self-center md:place-self-start">
        {image}
      </div>

      <span className="font-bold text-center md:text-left text-sm md:text-md xl:text-lg">
        {title}
      </span>
      <span className="text-xs text-center md:text-left md:text-sm xl:text-md">
        {description}
      </span>
    </div>
  )
}
