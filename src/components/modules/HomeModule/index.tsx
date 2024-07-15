import { PageAnimation } from '@/components/elements'
import { HeroSection } from './sections'

export const HomeModule: React.FC = () => {
  return (
    <PageAnimation>
      <div className="w-full justify-center">
        <HeroSection />
      </div>
    </PageAnimation>
  )
}
