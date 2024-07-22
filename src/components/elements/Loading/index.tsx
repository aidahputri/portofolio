'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import LoadingImage from '../../../../public/loading.svg'
import { Typewriter } from 'react-simple-typewriter'

export const Loading: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-14 justify-center items-center min-h-screen">
      <div className="w-48 h-48 md:w-64 md:h-64 relative">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="relative"
        >
          <Image
            src={LoadingImage}
            alt={'aidah-novallia-loading'}
            layout="responsive"
            objectFit="contain"
            width={64}
            height={64}
            quality={100}
            priority
          />
        </motion.div>
      </div>
      <span className="font-bold text-lg md:text-xl xl:text-3xl 2xl:text-4xl bg-gradient-to-r from-[#7209B7] to-[#F72585] bg-clip-text text-transparent">
        <Typewriter
          words={['Loading...']}
          loop={0}
          cursor
          cursorStyle="***"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </div>
  )
}
