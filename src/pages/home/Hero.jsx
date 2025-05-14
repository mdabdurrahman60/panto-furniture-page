import { FaSearch } from 'react-icons/fa'
import bannerImg from '../../assets/banner.png'
import TooltipButton from '../../components/TooltipButton'
const Hero = () => {
  return (
    <section className='h-screen relative bg-cover bg-center text-white' style={{backgroundImage: `url(${bannerImg})`}}>
        <div className='md:pt-25  px-2 pt-24  text-center  space-y-6 md:w-1/2  mx-auto'>
            <h1 className='text-3xl lg:text-5xl font-medium lg:leading-tight leading-snug'>Make Your Interior More Minimalistic & Modern</h1>
            <p className="text-xl  mx-auto poppins-thin">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
            
            {/* Search field */}
            <div className='relative inline-block z-30'>
                <input type="text" placeholder='Search furniture' className='w-full md:w-80 px-6 py-2 placeholder:text-white bg-white/25 rounded-full border border-gray-300 focus:outline-none mt-8' />
               <div className='absolute right-3 top-1/2 transform  p-2 bg-amber-500 rounded-full cursor-pointer'>
                <FaSearch/>
               </div>
            </div>
        </div>
        {/* bottom blur effect */}
        <div className='absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm'/> 

        {/* hover button for displaying tooltip box */}
        <div className='absolute bottom-40 left-24 group'>
            <button className='relative p-4 bg-white/25 rounded-full border border-1 bg-white text-xl'>
                <div className='hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 space-x-1 rounded-lg bg-white/25 shadow-md group-hover:flex'>
                    <div className='size-6 bg-red-700 border border-white rounded-full'></div>
                    <div className='size-6 bg-green-700 border border-white rounded-full'></div>
                    <div className='size-6 bg-blue-700 border border-white rounded-full'></div>
                    {/* tooltip arrow */}
                    <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35 '></div>
                </div>
            </button>
        </div>

        <div>
            <TooltipButton/>
        </div>
    </section>
  )
}

export default Hero