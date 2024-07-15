'use client'

import { useWindowSize } from 'usehooks-ts'
import { NavItemProps } from './interface'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const NavItem: React.FC<NavItemProps> = ({
  label,
  url,
  currentLoc,
  Icon,
}) => {
  const { width } = useWindowSize()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Link
      href={url}
      className={`group flex md:flex-col gap-2 md:gap-0 items-center rounded-full ${
        width < 768
          ? 'w-[75%] justify-center py-1 duration-300 transition-all ease-in-out'
          : ''
      }`}
    >
      {width < 768 && Icon && (
        <Icon
          className={`w-[18px] h-[18px] ${
            url === currentLoc ? 'text-[#7209B7]' : 'text-white'
          }`}
        />
      )}
      <span
        className={`${
          url === currentLoc
            ? 'bg-gradient-to-r from-[#7209B7] to-white bg-clip-text text-transparent font-bold'
            : 'text-white'
        }`}
      >
        {label}
      </span>
      {width >= 768 && (
        <hr className="w-full group-hover:h-[2px] group-hover:bg-[#F72585] border-none duration-300 transition-all ease-in-out" />
      )}
    </Link>
  )
}
