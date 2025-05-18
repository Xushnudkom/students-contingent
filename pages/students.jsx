import Link from 'next/link'
import React from 'react'

const Students = () => {
  return (
    <div className='container mx-auto px-20'>
      <div className='pt-4'>
        <div className='flex items-center gap-3 pb-5'>
          <h1 className='text-2xl font-semibold text-blue-950'>Students</h1>
          <div className='border-t-2 w-full opacity-50 text-blue-950'></div>
        </div>
        <Link href='/WinnersofNamed' className='cursor-pointer '>
        <div className='bg-gray-100 shadow-2xl hover:bg-gray-200 transition duration-300 hover:scale-102 px-10 py-5 rounded-xl'>
            <p className='text-lg text-blue-950 font-semibold'>Winners of Named Scholarships for the Year 2024</p>
        </div>
        </Link>
        <div className='pt-5'>
          <Link href='/studentsContingent' className='cursor-pointer '>
        <div className='bg-gray-100 shadow-2xl hover:bg-gray-200 transition duration-300 hover:scale-102 px-10 py-5 rounded-xl'>
            <p className='text-lg text-blue-950 font-semibold'>Student enrollment</p>
        </div>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Students