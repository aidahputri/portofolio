import { PageAnimation } from '@/components/elements'
import { HeroSection, HighlightSection } from './sections'

export const HomeModule: React.FC = () => {
  return (
    <PageAnimation>
      <div className="w-full justify-center flex flex-col gap-16">
        <HeroSection />
        <HighlightSection/>
      </div>
    </PageAnimation>
  )
}
