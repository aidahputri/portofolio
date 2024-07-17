'use client'

import { motion } from 'framer-motion'
import { VARIANTS } from './constant'
import { ReactNode } from 'react'

interface PageAnimationProps {
  children: ReactNode
}

export const PageAnimation: React.FC<PageAnimationProps> = ({ children }) => (
  <motion.div initial="hidden" animate="enter" exit="exit" variants={VARIANTS}>
    {children}
  </motion.div>
)
