import React from 'react'
import UniversityMap from './university-map'
import Link from 'next/link'


const Help = () => {
  return (
    <div className='container mx-auto px-20'>
      <div className='pt-10'>
        <div className='flex items-center gap-3'>
          <h1 className='text-2xl font-semibold text-blue-950'>HELP</h1>
          <div className='border-t-2 w-full opacity-50 text-blue-950'></div>
        </div>
        <p className='text-xl text-blue-950 pt-7 font-normal'>
          Use this form to send us your issue via email. We will get back to you shortly.
        </p>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
  <div className='flex flex-col gap-4'>
    <input
      type='text'
      placeholder='Full Name'
      className='border border-gray-300 text-blue-950 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900'
      required
    />
    <input
      type='email'
      placeholder='Email Address'
      className='border border-gray-300 px-4 py-2 text-blue-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900'
      required
    />
    <input
      type='text'
      placeholder='Subject'
      className='border border-gray-300 px-4 py-2 text-blue-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900'
    />
  </div>
  <div>
    <textarea
      placeholder='Message'
      rows='6'
      className='w-full border border-gray-300 text-blue-950 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900'
    ></textarea>
  </div>
</div>

<div className='pt-6 justify-end text-end'>
  <button className='bg-blue-900 hover:bg-gray-200 hover:text-blue-900 cursor-pointer text-white px-6 py-2 rounded-md transition duration-500'>
    SUBMIT
  </button>
</div>
    <div>
    <UniversityMap />
    </div>
    <div className='pb-9'>
      <h1 className='text-xl font-semibold text-blue-950'>Faculty of Information Technologies</h1>
      <div className='flex gap-1 text-blue-950 pt-3'>
        <p className='font-semibold text-xl'>Address:</p>
        <p className='text-xl'>108 Amir Temur Avenue, Tashkent 100084, Uzbekistan</p>
      </div>
      <div className='flex gap-1 text-blue-950 pt-3'>
        <p className='font-semibold text-xl'>Phone:</p>
        <p className='text-xl'>+998 71 238 64 15</p>
      </div>
      <div className='flex gap-1 text-blue-950 pt-3'>
        <p className='font-semibold text-xl'>E-Mail:</p>
        <Link href='#' className='text-blue-800 text-xl'>
        <p>info@tuit.uz</p>
        </Link>
      </div>
      <div className='flex gap-1 text-blue-950 pt-3'>
        <p className='font-semibold text-xl'> Public transport:</p>
        <p className='text-xl'>Bus lines 72, 93, 51, 24, 50, 26, 63, and 115</p>
      </div>
      <div className='flex gap-1 text-blue-950 pt-3'>
        <p className='font-semibold text-xl'>Metro:</p>
        <p className='text-xl'>Bodomzor station</p>
      </div>
      <div className='flex gap-1 text-blue-950 pt-3'>
        <p className='font-semibold text-xl'>Work schedule:</p>
        <p className='text-xl'>Monday - Saturday 8:30 AM - 6:00 PM
      Lunch break: 1:00 PM - 2:00 PM</p>
      </div>
       <div className='flex gap-1 text-blue-950 pt-3'>
        <p className='font-semibold text-xl'>Sunday is a non-working day</p>
        
      </div>
    </div>
      </div>
    </div>
  )
}

export default Help