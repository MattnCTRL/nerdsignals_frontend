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
    <>
      <Header />

      <main>
        <div className="reveal-on-scroll">
          <HeroSection />
        </div>
        <div className="reveal-on-scroll">
          <ShowcaseSection />
        </div>
        <div className="reveal-on-scroll">
          <HighlightsSection className='hidden lg:block' />
        </div>

        <div className='-mb-8 rounded-t-4xl bg-[#101220] lg:mt-[120px] lg:pt-16'>
          <div className="reveal-on-scroll">
            <HighlightsSection className='block py-8! lg:hidden' />
          </div>
          <div className="reveal-on-scroll">
            <StepsSection />
          </div>
          <div className="reveal-on-scroll">
            <AvailabilitySection />
          </div>
          <div className="reveal-on-scroll">
            <BenefitsSection />
          </div>
          <div className="reveal-on-scroll">
            <FaqsSection />
          </div>

          <div className='relative mt-[50px] overflow-hidden rounded-t-4xl bg-[#030372] pb-[50px]'>
            <Image src={GradientImage1} alt='' className='absolute top-0 left-0 w-full' />
            <Image
              src={EffectImage1}
              alt=''
              className='absolute bottom-0 left-1/2 w-[1800px] max-w-none -translate-x-1/2'
            />

            <div className="reveal-on-scroll">
              <ChooseUsSection />
            </div>
            <div className="reveal-on-scroll">
              <CTASection />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
