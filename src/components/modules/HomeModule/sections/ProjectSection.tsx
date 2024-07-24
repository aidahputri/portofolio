'use client'

import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import { ChipButtonGroup } from '../module-elements'
import { PROJECTS } from '@/components/elements/ProjectCard/constant'
import { ProjectCard } from '@/components/elements'
import { useChipButtonContext } from '@/context'

export const ProjectSection: React.FC = () => {
  const { clickedButton } = useChipButtonContext()

  const filteredProjects =
    clickedButton === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((project) => project.type === clickedButton)

  const displayedProjects = filteredProjects.slice(0, 3)

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

        <ChipButtonGroup />

        <Link
          href={'/projects'}
          className="flex items-center justify-center place-self-end px-6 py-3 md:px-8 md:py-3 bg-[#F72585] hover:bg-[#F72585]/70 rounded-xl w-full md:w-fit 
          gap-4 transition-transform duration-300 transform hover:scale-95"
        >
          <span className="font-bold text-md md:text-lg">See All</span>
          <FaArrowRightLong size={20} color="#ffffff" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {displayedProjects.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            imageUrl={item.imageUrl}
            type={item.type}
            paid={item.paid}
            description={item.description}
            techStacks={item.techStacks}
            website={item.website}
            application={item.application}
          />
        ))}
      </div>
    </section>
  )
}
