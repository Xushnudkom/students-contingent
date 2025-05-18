import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';
import Image from 'next/image';

const WinnerBeruniy = () => {
  return (
    <div className='container mx-auto px-20 pb-14'>
    <div className='ber pt-4'>
        <div className='flex items-center gap-3 pb-5'>
          <h1 className='text-2xl font-semibold w-[700px] text-blue-950'>Winners of the Beruniy Scholarship 2024</h1>
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
            <p className='text-blue-950'>Winners of the Beruniy Scholarship 2024</p>
        </div>
        <div className='flex justify-between'>
            <div className='bg-gray-50 pb-5 shadow-xl w-[300px] hover:scale-104 rounded-xl transition duration-300 hover:shadow-2xl'>
            <Image src='/beruniy/mirjahon.jpg' width={250} height={20} className='h-[400px] w-[300px]'/>
            <p className='text-blue-900 text-center text-2xl  font-semibold pt-3'>Istamov Mirjahon Mo‘minjon o‘g‘li</p>
            <p className='text-center pt-4 font-semibold text-md opacity-70 text-blue-950 px-3'>A student of group 313-22 at the Faculty of Software Engineering, TUIT,
is a recipient of the Beruniy Scholarship.</p>
        </div>
        <div className='bg-gray-50 pb-5 shadow-xl w-[300px] hover:scale-104 rounded-xl transition duration-300 hover:shadow-2xl'>
            <Image src='/beruniy/qurbonmurod.jpg' width={250} height={20} className='h-[400px] w-[300px]'/>
            <p className='text-blue-900 text-center text-2xl  font-semibold pt-3'>Qurbonmurodov Diyorbek Ulug‘bek o‘g‘li</p>
            <p className='text-center pt-4 font-semibold text-md opacity-70 text-blue-950 px-3'>A student of group 710-21 at the Faculty of Cybersecurity, TUIT,
is a recipient of the Beruniy Scholarship.</p>
        </div>
        <div className='bg-gray-50 pb-5 shadow-xl w-[300px] hover:scale-104 rounded-xl transition duration-300 hover:shadow-2xl'>
            <Image src='/beruniy/Gulgina.jpg' width={250} height={20} className='h-[400px] w-[300px]'/>
            <p className='text-blue-900 text-center text-2xl  font-semibold pt-3'>Abdurazoqova Gulgina Murodjon qizi</p>
            <p className='text-center pt-4 font-semibold text-md opacity-70 text-blue-950 px-3'>a student of the TUIT Fergana branch,
is a recipient of the Beruniy Scholarship.</p>
        </div>
        <div className='bg-gray-50 pb-5 shadow-xl w-[300px] hover:scale-104 rounded-xl transition duration-300 hover:shadow-2xl'>
            <Image src='/beruniy/Usnatdin.jpg' width={250} height={20} className='h-[400px] w-[300px]'/>
            <p className='text-blue-900 text-center text-2xl  font-semibold pt-3'>Khafizadinov Usnatdin Nuratdin o‘g‘li</p>
            <p className='text-center pt-4 font-semibold text-md opacity-70 text-blue-950 px-3'>A student of group 314-22 at the Faculty of Software Engineering, TUIT,
is a recipient of the Beruniy Scholarship.</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default WinnerBeruniy