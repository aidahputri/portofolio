import { HIGHLIGHT_ITEMS } from '../constants'
import { HighlightPoint } from '../module-elements'

export const HighlightSection: React.FC = () => {
  return (
    <section
      className="bg-[#E5E5E5]/10 p-6 md:px-20 lg:px-24 md:py-14 rounded-lg 
      border border-transparent animate-gradient-border grid grid-cols-1 md:grid-cols-2 gap-12"
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
    </section>
  )
}
