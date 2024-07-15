'use client'

import { motion } from 'framer-motion'
import * as HeroImage from '../../../../../public/hero-aidah.svg'
import Image from 'next/image'

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 xl:gap-20">
      <div className="flex flex-col gap-4 w-full xl:w-[90%] text-center md:text-left">
        <span className="text-xs md:text-sm lg:text-lg font-medium">
          H E L L O&nbsp;&nbsp;&nbsp;E V E R Y O N E!
        </span>
        <div className="flex gap-1 items-center justify-center md:justify-normal font-bold">
          <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            I'm
          </span>
          <span className="text-lg md:text-xl xl:text-3xl 2xl:text-4xl bg-gradient-to-r from-[#7209B7] to-[#F72585] bg-clip-text text-transparent">
            Aidah Novallia
          </span>
        </div>
        <p className="text-xs md:text-sm 2xl:text-md">
          As a Computer Science student, I am driven by a passion for technology
          and a strong desire to continually learn and grow within the field. I
          am an ambitious and responsible individual, ready to proactively
          tackle diverse tasks and situations.
        </p>
      </div>

      <div className="relative w-full">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="relative"
        >
          <Image
            src={HeroImage}
            alt={'aidah-novallia-hero'}
            layout="responsive"
            width={1200}
            height={800}
            quality={100}
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
