interface ChipButtonProps {
  title: string
  value: string
}

export const ChipButton: React.FC<ChipButtonProps> = ({ title, value }) => {
  return (
    <button
      value={value}
      className="w-fit flex items-center justify-center px-4 py-2 rounded-full border border-[#B5179E]"
    >
      {title}
    </button>
  )
}
