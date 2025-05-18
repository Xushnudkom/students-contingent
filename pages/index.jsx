import Link from 'next/link'
import React from 'react'

const Index = () => {
  return (    
    <section className='start container px-20 mx-auto'>
     <div className='flex justify-between pt-[120px] items-center'>
       <div className='title '>
        <h1 className='text-3xl w-[600px] text-blue-950 font-semibold'>Developing reports on student demographics and academic activities</h1>
        <p className='w-[610px] text-lg text-blue-950 pt-5 pb-5'>From digital tools to marketing and sales strategies, everything you need to build a successful educational platform for managing student demographics and academic activities is available on a single scalable platform.</p>
        <div className='gap-7 flex'>
        <button className="border border-blue-950 px-4 py-1 cursor-pointer text-blue-950 rounded-sm hover:bg-blue-950 hover:text-white transition-colors duration-700">
  www.was_uz@gmail.com
</button>
          <Link href="/faculty">
        <button className='bg-blue-950 hover:opacity-75 transition-colors duration-500 px-12 py-2 cursor-pointer text-white rounded-sm' >
          Get Started
        </button></Link>
        </div>
      </div>
        
      <div>
        <video className="w-full max-w-2xl rounded-lg" autoPlay muted loop>
        <source src="https://www.learnworlds.com/app/themes/learnworlds/dist/video/homepage-version3/hero.mp4" type="video/mp4" />
        Sizning brauzeringiz video formatini qo‘llab-quvvatlamaydi.
      </video>
      </div>
     </div>
    </section>
  )
}

export default Index