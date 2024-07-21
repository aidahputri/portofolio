import { HIGHLIGHT_ITEMS } from '../constants'
import { AnimatedBlob, HighlightPoint } from '../module-elements'

export const HighlightSection: React.FC = () => {
  return (
    <section
      className="bg-[#E5E5E5]/10 p-6 md:px-20 lg:px-24 md:py-14 rounded-lg 
      border border-transparent animate-gradient-border grid grid-cols-1 md:grid-cols-2 gap-12 relative"
    >
      {HIGHLIGHT_ITEMS.map((item) => {
        return (
          <HighlightPoint
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        )
      })}
      <AnimatedBlob className="top-40 -left-4 w-72 h-72 blur-3xl bg-gradient-to-r from-purple-500 to-purple-900" />
      <AnimatedBlob className="top-72 left-auto -right-4 bottom-0 blur-3xl bg-gradient-to-r from-pink-500 to-pink-600" />
    </section>
  )
}
