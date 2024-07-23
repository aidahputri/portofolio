'use client'

import { motion } from "framer-motion"

interface AnimatedBlobProps {
  className?: string
}

export const AnimatedBlob: React.FC<AnimatedBlobProps> = ({ className }) => (
  <motion.div
    className={`-z-10 hidden md:block absolute top-0 left-0 w-64 h-64 xl:w-80 xl:h-80 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-2xl rounded-full ${className}`}
    animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
  />
)
