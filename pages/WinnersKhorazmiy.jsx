import Link from 'next/link'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Image from 'next/image';

const WinnersKhorazmiy = () => {
  return (
    <div className='container mx-auto px-20 pb-14'>
    <div className='ber pt-4'>
        <div className='flex items-center gap-3 pb-5'>
          <h1 className='text-2xl font-semibold w-[890px] text-blue-950'>Winners of the Khorezmi Scholarship 2024</h1>
          <div className='border-t-2 w-full opacity-50 text-blue-950'></div>
        </div>
        <div className='flex items-center gap-2 pt-1 pb-6'>
            <Link href='/students' className='text-blue-800 underline'>
                Students
            </Link>
            
            <ArrowRightAltIcon className='text-blue-800'/>
            <Link href='/WinnersofNamed' className='text-blue-800 underline'>
                Winners of Named Scholarships for the Year 2024
            </Link>
            
            <ArrowRightAltIcon className='text-blue-800'/>
            <p className='text-blue-950'>Winners of the Khorezmi Scholarship 2024</p>
        </div>
        <div className='flex justify-between'>
            <div className='bg-gray-50 pb-5 shadow-xl w-[300px] hover:scale-104 rounded-xl transition duration-300 hover:shadow-2xl'>
            <Image src='/Xorazmiy/xayot.jpg' width={250} height={20} className='h-[400px] w-[300px]'/>
            <p className='text-blue-900 text-center text-2xl  font-semibold pt-3'>Abdullayev Hayotjon Quvondiq o‘g‘li</p>
            <p className='text-center pt-4 font-semibold text-md opacity-70 text-blue-950 px-3'>A student of group 315-22 in Software Engineering at TUIT,
is a recipient of the Khorezmi Scholarship.
</p>
        </div>
        <div className='bg-gray-50 pb-5 shadow-xl w-[300px] hover:scale-104 rounded-xl transition duration-300 hover:shadow-2xl'>
            <Image src='/Xorazmiy/sevinch.jpg' width={250} height={20} className='h-[400px] w-[300px]'/>
            <p className='text-blue-900 text-center text-2xl  font-semibold pt-3'>Chorshanbiyeva Sevinch Akramovna</p>
            <p className='text-center pt-4 font-semibold text-md opacity-70 text-blue-950 px-3'>A student of group 210-22 in Computer Engineering at TUIT,
is a recipient of the Khorezmi Scholarship.
</p>
        </div>
        <div className='bg-gray-50 pb-5 shadow-xl w-[300px] hover:scale-104 rounded-xl transition duration-300 hover:shadow-2xl'>
            <Image src='/Xorazmiy/Sherzod.jpg' width={250} height={20} className='h-[400px] w-[300px]'/>
            <p className='text-blue-900 text-center text-2xl  font-semibold pt-3'>Xushboqov Sherzod Tuychiyevich</p>
            <p className='text-center pt-4 font-semibold text-md opacity-70 text-blue-950 px-3'>A student of group 301-23 in Software Engineering at TUIT,
is a recipient of the Khorezmi Scholarship.
</p>
        </div>
        <div className='bg-gray-50 pb-5 shadow-xl w-[300px] hover:scale-104 rounded-xl transition duration-300 hover:shadow-2xl'>
            <Image src='/Xorazmiy/dilorom.jpg' width={250} height={20} className='h-[400px] w-[300px]'/>
            <p className='text-blue-900 text-center text-2xl  font-semibold pt-3'>Yakubova Diloromxon Murodjon qizi</p>
            <p className='text-center pt-4 font-semibold text-md opacity-70 text-blue-950 px-3'>A student of group 650-21 in Vocational Education in ICT at TUIT,
is a recipient of the Khorezmi Scholarship.</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default WinnersKhorazmiy