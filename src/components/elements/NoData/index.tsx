'use client'

import Image from 'next/image'
import * as NoDataImage from '../../../../public/no-data.svg'

export const NoData: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 justify-center items-center">
      <div className="w-48 h-48 md:w-64 md:h-64 relative">
        <Image
          src={NoDataImage}
          alt={'aidah-novallia-no-data'}
          layout="responsive"
          objectFit="contain"
          width={64}
          height={64}
          quality={100}
          priority
        />
      </div>
      <span className="font-bold text-sm md:text-md xl:text-lg bg-gradient-to-r from-[#7209B7] to-[#F72585] bg-clip-text text-transparent">
        There&apos;s No Data
      </span>
    </div>
  )
}
