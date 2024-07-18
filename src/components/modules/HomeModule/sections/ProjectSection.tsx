import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FILTERS } from '../constants'
import { ChipButton, ChipButtonGroup } from '../module-elements'

export const ProjectSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 md:gap-12 xl:gap-16">
      <div className="flex flex-col gap-10">
        <h2 className="font-bold text-lg md:text-xl xl:text-3xl 2xl:text-4xl bg-gradient-to-r from-[#7209B7] to-[#F72585] bg-clip-text text-transparent text-center">
          My Latest Project
        </h2>

        <span className="text-md md:text-lg xl:text-xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
          congue odio. Integer tincidunt risus a elit vestibulum, ac eleifend
          enim bibendum.
        </span>

        <ChipButtonGroup/>

        <Link
          href={''}
          className="flex items-center place-self-end px-6 py-3 md:px-8 md:py-3 bg-[#3A0CA3] hover:bg-[#3A0CA3]/70 rounded-xl w-full md:w-fit 
          gap-4 transition-transform duration-300 transform hover:scale-95"
        >
          <span className="font-bold text-md md:text-lg">See All</span>
          <FaArrowRightLong size={20} color="#ffffff" />
        </Link>
      </div>
    </section>
  )
}
