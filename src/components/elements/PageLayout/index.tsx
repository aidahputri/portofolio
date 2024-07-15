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
        <main className="max-w-[1440px] w-full mx-auto flex flex-col gap-16 md:gap-20 lg:gap-24 px-8 md:px-14 lg:px-16 xl:px-28 py-12 md:py-16">
          {children}
        </main>
      </motion.div>
    </AnimatePresence>
  )
}
