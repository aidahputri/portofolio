import { Variants } from 'framer-motion'

export const VARIANTS: Variants = {
  hidden: { opacity: 0, x: 0, y: 70 },
  enter: { opacity: 1, x: 0, y: 40 },
  exit: { opacity: 0, x: 0, y: -70 },
}
