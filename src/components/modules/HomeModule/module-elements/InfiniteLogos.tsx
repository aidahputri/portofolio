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
    <div className="relative overflow-hidden py-5 max-w-[1024px]">
      <div
        className={`marquee flex items-center whitespace-nowrap ${reverse ? 'marquee-reverse' : ''}`}
      >
        {[...arr, ...arr, ...arr].map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`logo-${index}`}
            width={80}
            height={80}
            className="mx-5"
          />
        ))}
      </div>
    </div>
  )
}
