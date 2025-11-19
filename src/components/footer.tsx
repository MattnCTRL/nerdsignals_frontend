import Image from 'next/image'
import LogoImage from '@/assets/images/logo.png'

const Footer: React.FC = () => {
  return (
    <footer className='relative z-10 rounded-t-4xl bg-[#101220] py-[120px]'>
      <div className='container'>
        <div className='flex items-center gap-3'>
          <Image src={LogoImage} alt='Nerd Signals Logo' className='h-[45px] w-fit' />
          <p className='text-[32px]/8 font-bold text-[#E8EAF6]'>
            Nerd<span className='font-thin'>Signals</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
