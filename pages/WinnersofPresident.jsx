import Link from 'next/link'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Image from 'next/image';

const WinnersofPresident = () => {
  return (
    <div className='container mx-auto px-20 pb-14'>
    <div className='ber pt-4'>
        <div className='flex items-center gap-3 pb-5'>
          <h1 className='text-2xl font-semibold w-[890px] text-blue-950'>Winners of the Presidential Scholarships 2024</h1>
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
            <p className='text-blue-950'>Winners of the Presidential Scholarships 2024</p>
        </div>
        <div className='flex justify-between'>
            <div className='bg-gray-50 pb-5 shadow-xl w-[300px] hover:scale-104 rounded-xl transition duration-300 hover:shadow-2xl'>
            <Image src='/President/malika.png' width={250} height={20} className='h-[400px] w-[300px]'/>
            <p className='text-blue-900 text-center text-2xl  font-semibold pt-3'>Urinbaeva Malika Muratbek qizi</p>
            <p className='text-center pt-4 font-semibold text-md opacity-70 text-blue-950 px-3'>A student at TUIT,
is a recipient of the Ibroyim Yusupov State Scholarship.</p>
        </div>
        <div className='bg-gray-50 pb-5 shadow-xl w-[300px] hover:scale-104 rounded-xl transition duration-300 hover:shadow-2xl'>
            <Image src='/President/nilufar.jpg' width={250} height={20} className='h-[400px] w-[300px]'/>
            <p className='text-blue-900 text-center text-2xl  font-semibold pt-3'>Tursinbaeva Nilufar Shuxrat qizi</p>
            <p className='text-center pt-4 font-semibold text-md opacity-70 text-blue-950 px-3'>A student at the TUIT Nukus branch,
is a recipient of the Presidential Scholarship.
</p>
        </div>
        <div className='bg-gray-50 pb-5 shadow-xl w-[300px] hover:scale-104 rounded-xl transition duration-300 hover:shadow-2xl'>
            <Image src='/President/fayzullo.jpg' width={250} height={20} className='h-[400px] w-[300px]'/>
            <p className='text-blue-900 text-center text-2xl  font-semibold pt-3'>Abduhakimov Fayzullo Kudratullo ogli</p>
            <p className='text-center pt-4 font-semibold text-md opacity-70 text-blue-950 px-3'>A master's student at TUIT,
is a recipient of the Presidential Scholarship.
</p>
        </div>
        <div className='bg-gray-50 pb-5 shadow-xl w-[300px] hover:scale-104 rounded-xl transition duration-300 hover:shadow-2xl'>
            <Image src='/President/nafosat.jpg' width={250} height={20} className='h-[400px] w-[300px]'/>
            <p className='text-blue-900 text-center text-2xl  font-semibold pt-3'>Ibroximova Nafosatxon Paxlavon qizi</p>
            <p className='text-center pt-4 font-semibold text-md opacity-70 text-blue-950 px-3'>A student at the TUIT Fergana branch,
is a recipient of the Presidential Scholarship.</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default WinnersofPresident