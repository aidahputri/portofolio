import { PageAnimation } from '@/components/elements'
import {
  HeroSection,
  HighlightSection,
  ProjectSection,
  TechStackSection,
} from './sections'

export const HomeModule: React.FC = () => {
  return (
    <PageAnimation>
      <div className="w-full justify-center items-center flex flex-col gap-16 lg:gap-20 2xl:gap-24">
        <HeroSection />
        <HighlightSection />
        <TechStackSection />
        <ProjectSection />
      </div>
    </PageAnimation>
  )
}
