'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageLayoutProps {
  children?: ReactNode
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div>
        <main className="max-w-[1440px] w-full mx-auto flex flex-col justify-center items-center gap-16 md:gap-20 lg:gap-24 px-16 md:px-24 lg:px-36 py-2 md:py-8 xl:py-0 text-white">
          {children}
        </main>
      </motion.div>
    </AnimatePresence>
  )
}
