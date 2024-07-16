import Link from 'next/link'
import { FRAMEWORKS, LANGUAGES } from '../constants'
import { InfiniteLogos } from '../module-elements'
import { FaArrowRightLong } from 'react-icons/fa6'

export const TechStackSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 md:gap-12 xl:gap-16">
      <div className="flex flex-col gap-10">
        <h2 className="font-bold text-lg md:text-xl xl:text-3xl 2xl:text-4xl bg-gradient-to-r from-[#7209B7] to-[#F72585] bg-clip-text text-transparent text-center">
          My Tech Stack
        </h2>

        <span className="text-sm md:text-md xl:text-lg text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
          congue odio. Integer tincidunt risus a elit vestibulum, ac eleifend
          enim bibendum.
        </span>

        <Link
          href={''}
          className="flex items-center place-self-center px-6 py-3 md:px-8 md:py-3 bg-[#B5179E] hover:bg-[#B5179E]/70 rounded-xl w-full md:w-fit 
          gap-4 transition-transform duration-300 transform hover:scale-95"
        >
          <span className="font-bold text-md md:text-lg">See My Projects</span>
          <FaArrowRightLong size={20} color="#ffffff" />
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <span className="font-bold text-center text-md md:text-lg xl:text-xl 2xl:text-2xl">
            Languages
          </span>
          <InfiniteLogos arr={LANGUAGES} />
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-bold text-center text-md md:text-lg xl:text-xl 2xl:text-2xl">
            Frameworks
          </span>
          <InfiniteLogos reverse arr={FRAMEWORKS} />
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-bold text-center text-md md:text-lg xl:text-xl 2xl:text-2xl">
            Tools
          </span>
          <InfiniteLogos arr={LANGUAGES} />
        </div>
      </div>
    </section>
  )
}
