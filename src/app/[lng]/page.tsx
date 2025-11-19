import Image from 'next/image'
import EffectImage1 from '@/assets/images/effect-1.png'
import GradientImage1 from '@/assets/images/gradient-1.png'
import Footer from '@/components/footer'
import Header from '@/components/header'
import AvailabilitySection from '@/components/sections/home/availability'
import BenefitsSection from '@/components/sections/home/benefits'
import ChooseUsSection from '@/components/sections/home/choose-us'
import CTASection from '@/components/sections/home/cta'
import FaqsSection from '@/components/sections/home/faqs'
import HeroSection from '@/components/sections/home/hero'
import HighlightsSection from '@/components/sections/home/highlights'
import ShowcaseSection from '@/components/sections/home/showcase'
import StepsSection from '@/components/sections/home/steps'

export default function Home() {
  return (
    <div className='min-h-screen bg-[#0D0E16]'>
      <Header />
      <HeroSection />
      <ShowcaseSection />
      <HighlightsSection />

      <div className='mt-[120px] -mb-8 rounded-t-4xl bg-[#101220] pt-16'>
        <StepsSection />
        <AvailabilitySection />
        <BenefitsSection />
        <FaqsSection />

        <div className='relative overflow-hidden bg-[#030372] pb-[50px]'>
          <Image src={GradientImage1} alt='' className='absolute top-0 left-0 w-full' />
          <Image src={EffectImage1} alt='' className='absolute bottom-0 left-0 w-full' />

          <ChooseUsSection />
          <CTASection />
        </div>
      </div>
      <Footer />
    </div>
  )
}
