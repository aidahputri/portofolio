'use client'

import { motion } from 'framer-motion'
import * as HeroImage from '../../../../../public/hero-aidah.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FiMousePointer } from 'react-icons/fi'
import { Typewriter } from 'react-simple-typewriter'

interface AnimatedBlobProps {
  className?: string
}

const AnimatedBlob: React.FC<AnimatedBlobProps> = ({ className }) => (
  <motion.div
    className={`absolute top-0 left-0 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-2xl rounded-full ${className}`}
    animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
  />
)

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 xl:gap-20 overflow-hidden">
      <div className="flex flex-col gap-4 w-full xl:w-[90%] text-center md:text-left">
        <span className="text-xs md:text-sm font-medium">
          H E L L O&nbsp;&nbsp;&nbsp;E V E R Y O N E!
        </span>
        <div className="flex gap-2 items-center justify-center md:justify-normal font-bold">
          <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            I'm
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

        <div className="pt-10">
          <Link
            href={''}
            className="flex items-center px-8 py-3 bg-[#3A0CA3] rounded-lg w-fit gap-4"
          >
            <span className="font-bold">Go to Projects</span>
            <FiMousePointer size={20} />
          </Link>
        </div>
      </div>

      <div className="relative w-full z-50">
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

      <AnimatedBlob className="top-28 w-96 h-96" />
      <AnimatedBlob className="left-auto right-28 bottom-0" />
    </section>
  )
}
