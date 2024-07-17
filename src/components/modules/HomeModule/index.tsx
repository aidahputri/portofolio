import { PageAnimation } from '@/components/elements'
import { HeroSection, HighlightSection, TechStackSection } from './sections'

export const HomeModule: React.FC = () => {
  return (
    <PageAnimation>
      <div className="w-full justify-center flex flex-col gap-16 2xl:gap-24">
        <HeroSection />
        <HighlightSection />
        <TechStackSection />
      </div>
    </PageAnimation>
  )
}
