import Link from 'next/link'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const WinnersofNamed = () => {
  return (
   <div className='container mx-auto px-20'>
      <div className='pt-4'>
        <div className='flex items-center gap-3 pb-5'>
          <h1 className='text-2xl font-semibold w-[910px] text-blue-950'>Winners of Named Scholarships for the Year 2024</h1>
          <div className='border-t-2 w-full opacity-50 text-blue-950'></div>
        </div>
        <div className='flex items-center gap-2 pt-3'>
            <Link href='/students' className='text-blue-800 underline'>
                Students
            </Link>
            <ArrowRightAltIcon className='text-blue-800'/>
            <p className='text-blue-950'>Winners of Named Scholarships for the Year 2024</p>
        </div>
        <div className='pt-7'>
            <Link href='/WinnerBeruniy' className='cursor-pointer '>
        <div className='bg-gray-100 shadow-xl hover:bg-gray-200 transition duration-300 hover:scale-102 px-10 py-5 rounded-xl'>
            <p className='text-lg text-blue-950 font-semibold'>Winners of the Beruniy Scholarship 2024</p>
        </div>
        </Link>
        <div className='pt-6'>
            <Link href='/WinIslamKarimov' className='cursor-pointer '>
        <div className='bg-gray-100 shadow-xl hover:bg-gray-200 transition duration-300 px-10 hover:scale-102 py-5 rounded-xl'>
            <p className='text-lg text-blue-950 font-semibold'>Winners of the Islam Karimov Scholarship 2024</p>
        </div>
        </Link>
        </div> 
     <div className='pt-6'>
           <Link href='/WinnersofPresident' className='cursor-pointer '>
        <div className='bg-gray-100 shadow-xl hover:bg-gray-200 transition duration-300 px-10 hover:scale-102 py-5 rounded-xl'>
            <p className='text-lg text-blue-950 font-semibold'>Winners of the Presidential Scholarships 2024</p>
        </div>
        </Link> 
     </div>
        <div className='pt-6'>
            <Link href='WinnersKhorazmiy' className='cursor-pointer '>
        <div className='bg-gray-100 shadow-xl hover:bg-gray-200 transition duration-300 px-10 hover:scale-102 py-5 rounded-xl'>
            <p className='text-lg text-blue-950 font-semibold'>Winners of the Khorezmi Scholarship 2024</p>
        </div>
        </Link> 
        </div>
       <div className='pt-6'>
         <Link href='WinnersVazirlik' className='cursor-pointer'>
        <div className='bg-gray-100 shadow-xl hover:bg-gray-200 transition duration-300 px-10 hover:scale-102 py-5 rounded-xl'>
            <p className='text-lg text-blue-950 font-semibold'>Students Awarded the Ministry Scholarship 2024</p>
        </div>
        </Link></div> 
        </div>
      </div>
    </div>
  )
}

export default WinnersofNamed