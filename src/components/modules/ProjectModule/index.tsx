'use client'

import { useChipButtonContext } from '@/context'
import { ChipButtonGroup } from '../HomeModule/module-elements'
import { PROJECTS } from '@/components/elements/ProjectCard/constant'
import { NoData, ProjectCard } from '@/components/elements'

export const ProjectModule: React.FC = () => {
  const { clickedButton } = useChipButtonContext()

  const filteredProjects =
    clickedButton === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((project) => project.type === clickedButton)

  return (
    <div className="w-full justify-center items-center flex flex-col gap-16 lg:gap-20 2xl:gap-24">
      <div className="flex flex-col gap-10">
        <h1 className="font-bold text-lg md:text-xl xl:text-3xl 2xl:text-4xl bg-gradient-to-r from-[#7209B7] to-[#F72585] bg-clip-text text-transparent text-center">
          My Latest Project
        </h1>

        <span className="text-md text-center">
          Here are some of the recent projects I have worked on, showcasing my
          skills and expertise in various domains.
        </span>

        <ChipButtonGroup />
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((item, index) => (
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
              git={item.git}
              documentation={item.documentation}
            />
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-center items-center">
          <NoData />
        </div>
      )}
    </div>
  )
}
