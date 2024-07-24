import { reverse } from 'dns'
import Image from 'next/image'

interface InfiniteLogosProps {
  arr: string[]
  reverse?: boolean
}

export const InfiniteLogos: React.FC<InfiniteLogosProps> = ({
  arr,
  reverse = false,
}) => {
  return (
    <div className="relative overflow-hidden py-5 max-w-[200px] md:max-w-[600px] xl:max-w-[1024px]">
      <div
        className={`marquee flex items-center whitespace-nowrap ${reverse ? 'marquee-reverse' : ''}`}
      >
        {[...arr, ...arr, ...arr].map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`logo-${index}`}
            width={20}
            height={20}
            className="mx-2 md:mx-5 md:h-20 md:w-20"
            title="aidah kuci kuci"
          />
        ))}
      </div>
    </div>
  )
}