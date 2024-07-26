'use client'

import { motion } from 'framer-motion'
import * as HeroImage from '../../../../../public/hero-aidah.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FiMousePointer } from 'react-icons/fi'
import { Typewriter } from 'react-simple-typewriter'
import { AnimatedBlob } from '../module-elements'

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 xl:gap-20 overflow-hidden">
      <div className="flex flex-col gap-4 w-full xl:w-[90%] text-center md:text-left justify-center md:justify-normal">
        <span className="text-xs md:text-sm font-medium">
          H E L L O&nbsp;&nbsp;&nbsp;E V E R Y O N E!
        </span>
        <div className="flex gap-2 items-center justify-center md:justify-normal font-bold">
          <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            I&apos;m
          </span>
          <span className="text-lg md:text-xl xl:text-3xl 2xl:text-4xl bg-gradient-to-r from-[#7209B7] to-[#F72585] bg-clip-text text-transparent">
            <Typewriter
              words={['Aidah Novallia']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
        <p className="text-xs md:text-sm 2xl:text-md">
          As a Computer Science student, I am driven by a passion for technology
          and a strong desire to continually learn and grow within the field. I
          am an ambitious and responsible individual, ready to proactively
          tackle diverse tasks and situations.
        </p>

        <Link
          href={'/projects'}
          className="flex items-center justify-center px-6 py-3 md:px-8 md:py-3 mt-10 bg-[#3A0CA3] hover:bg-[#3A0CA3]/70 rounded-lg w-full md:w-fit 
          gap-4 transition-transform duration-300 transform hover:scale-95"
        >
          <span className="font-bold text-sm md:text-md">Go to Projects</span>
          <FiMousePointer size={20} />
        </Link>
      </div>

      <div className="relative w-full z-20">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="relative"
        >
          <Image
            src={HeroImage}
            alt={'aidah-novallia-hero'}
            layout="responsive"
            width={600}
            height={600}
            quality={100}
            priority
          />
        </motion.div>
      </div>

      <AnimatedBlob className="top-28 w-96 h-96" />
      <AnimatedBlob className="left-auto right-28 bottom-0" />
    </section>
  )
}
