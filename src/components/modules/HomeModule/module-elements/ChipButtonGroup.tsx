'use client'

import { FILTERS } from '../constants'
import { ChipButton } from './ChipButton'
import { useChipButtonContext } from '@/context'

export const ChipButtonGroup: React.FC = () => {
  const { clickedButton, setClickedButton } = useChipButtonContext()

  return (
    <div className="flex flex-wrap gap-2 place-self-center">
      {FILTERS.map((filter, index) => {
        return (
          <ChipButton
            key={index}
            title={filter.title}
            value={filter.value}
            isClicked={clickedButton === filter.value}
            onClick={() => setClickedButton(filter.value)}
          />
        )
      })}
    </div>
  )
}
