'use client'

import React, { ComponentPropsWithoutRef } from 'react'

interface ChipButtonProps {
  title: string
  value: string
  isClicked: boolean
  onClick: () => void
}

export const ChipButton: React.FC<
  ComponentPropsWithoutRef<'button'> & ChipButtonProps
> = ({ title, value, isClicked, onClick }) => {
  return (
    <button
      value={value}
      onClick={onClick}
      className={`w-fit flex items-center text-xs justify-center px-4 py-2 rounded-full border border-[#B5179E] ${
        isClicked ? 'bg-[#B5179E] text-white' : 'bg-transparent'
      }`}
    >
      {title}
    </button>
  )
}
