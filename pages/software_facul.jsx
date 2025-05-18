import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Software_facul = () => {
  return (
    <div className='container mx-auto px-20 pb-8'>
         <div className='flex items-center pt-8'>
          <h1 className='text-xl w-[300px] font-semibold text-blue-950'>Software Engineering</h1>
          <div className='border-t-2 w-full pl-[-200px] opacity-50 text-blue-950'></div>
        </div>
        <div className='flex items-center gap-2 pt-3'>
            <Link href='/faculty' className='text-blue-800 underline'>
                Faculty
            </Link>
            <ArrowRightAltIcon className='text-blue-800'/>
            <p className='text-blue-950'>Software Engineering</p>
        </div>
        <Image src='/software-comuni.jpg' width={1400} height={100} className='h-96 pt-5'/>

        
        <p className='text-blue-950 pt-3'>Welcome to the Faculty of Software Engineering at Tashkent University of Information Technologies named after Muhammad al-Khwarizmi!</p>
        <p className='text-blue-950 pt-3'>The faculty was established based on the decree No. PQ-1942 dated March 26, 2013, of the President of the Republic of Uzbekistan titled “On Measures to Further Improve the System of Training Personnel in the Field of Information and Communication Technologies.” It was founded on the basis of the Faculty of Information Technologies.</p>

        <p className='text-blue-950 pt-3'>The Faculty of Software Engineering strives to train a new generation of specialists in the field of digital technologies. The faculty’s mission is to provide students with the knowledge and skills necessary to become leaders in the field of software engineering.</p>
        <p className='text-blue-950 pt-3'>We offer a wide range of educational programs, including bachelor's and master's degrees in software engineering. Our courses cover everything from programming fundamentals to advanced areas such as artificial intelligence, software development, and mobile application development. Students have the opportunity to specialize in specific fields within their study programs.</p>

         <div className='flex items-center pt-8'>
          <h1 className='text-xl w-[300px] font-semibold text-blue-950'>Faculty administration:</h1>
          <div className='border-t-2 w-full pl-[-200px] opacity-50 text-blue-950'></div>
        </div>
      
            <div className='flex pt-10'>
                <Image src='/Rozibayev.png' width={200} height={100}/>
                <div className='pl-4'>
                <p className='text-blue-950 text-lg'>Dean of the Faculty of Software Engineering</p>
                <p className='text-blue-950 text-xl font-semibold pt-1'>Ortiq Bakhtiyorovich Ro‘zibayev</p>
                <p className='font-semibold pt-2 text-blue-950'>Office hours: <span className='font-normal'>Every day from 10:00 AM to 12:00 PM</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>Phone: <span className='font-normal'> (+99871) 238-64-08</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>E-mail: <Link href='#' className='font-normal text-blue-800'>o.ruzibaev@tuit.uz</Link></p>
                </div>
            </div>
            <div className='flex pt-10'>
                <Image src='/Suvunov.png' width={200} height={100}/>
                <div className='pl-4'>
                <p className='text-blue-950 text-lg'>Deputy Dean for Academic Affairs</p>
                <p className='text-blue-950 text-xl font-semibold pt-1'>Himmatjon Hakimjonovich Suvonov</p>
                <p className='font-semibold pt-2 text-blue-950'>Office hours: <span className='font-normal'>Every day from 1:00 PM to 3:00 PM</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>Phone: <span className='font-normal'> (+99871) 238-64-42</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>E-mail: <Link href='#' className='font-normal text-blue-800'></Link></p>
                </div>
            </div>
             <div className='flex pt-10'>
                <Image src='/shirinov.png' width={200} height={100}/>
                <div className='pl-4'>
                <p className='text-blue-950 text-lg'>Deputy Dean for Youth Affairs</p>
                <p className='text-blue-950 text-xl font-semibold pt-1'>Laziz Toxirovich Shirinov</p>
                <p className='font-semibold pt-2 text-blue-950'>Office hours: <span className='font-normal'>Every day from 1:00 PM to 3:00 PM</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>Phone: <span className='font-normal'>  (+99871) 238-64-42</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>E-mail: <Link href='#' className='font-normal text-blue-800'>shirinovlaziz05@gmail.com</Link></p>
                </div>
            </div>
            
            
        </div>
  )
}

export default Software_facul