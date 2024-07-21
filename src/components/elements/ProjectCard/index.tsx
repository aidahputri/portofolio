'use client'

import Link from 'next/link'
import { ProjectCardProps } from './interface'
import Image from 'next/image'
import { getTitleByValue } from '@/components/utils'
import { motion } from 'framer-motion'

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imageUrl,
  paid,
  type,
  description,
  techStacks,
  website,
  git,
  documentation,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="flex flex-col w-full bg-gradient-to-b from-[#3A0CA3] to-[#834DFF]/80 rounded-lg shadow-lg lg:shadow-xl relative"
    >
      <div className="relative w-full aspect-[500/225] overflow-hidden rounded-lg">
        <Image alt={title} src={imageUrl} fill sizes="none" priority />
      </div>

      <div className="flex flex-col flex-1 gap-6 lg:gap-8 p-4 md:p-8 lg:p-6 xl:p-8">
        <div className="flex items-center gap-2">
          <div className="w-fit flex items-center justify-center px-4 py-2 rounded-full bg-[#F72585] text-xs">
            {getTitleByValue(type)}
          </div>

          {paid && (
            <div className="w-fit flex items-center justify-center px-4 py-2 rounded-full border border-[#F72585] bg-transparent text-xs">
              Paid Project
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3 flex-grow">
          <h3 className="text-white font-semibold text-lg xl:text-xl">
            {title}
          </h3>
          <p className="text-white text-xs md:text-xs text-justify">
            {description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap md:flex-row gap-5 md:gap-6">
          {website && (
            <Link
              href={website}
              target="_blank"
              className="text-sm w-fit rounded-lg px-8 py-2 bg-[#B5179E] font-bold"
            >
              Website
            </Link>
          )}
          {git && (
            <Link
              href={git}
              target="_blank"
              className={`text-sm w-fit rounded-lg px-8 py-2 font-bold ${
                website
                  ? 'text-white border-2 border-[#B5179E]'
                  : 'bg-gradient-to-b from-[#B5179E] to-[#F72585]'
              }`}
            >
              Git
            </Link>
          )}
          {documentation && (
            <Link
              href={documentation}
              target="_blank"
              className="text-sm w-fit rounded-lg px-1 py-2 font-bold text-[#B5179E] hover:text-[#B5179E]/70"
            >
              Documentation
              <hr className="border-[1px] border-[#B5179E]" />
            </Link>
          )}
        </div>

        <div className="flex flex-wrap gap-3 md:gap-4">
          {techStacks.map((url, index) => {
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center"
              >
                <Image
                  width={30}
                  height={30}
                  src={url}
                  alt={`logo-project-${index}`}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
