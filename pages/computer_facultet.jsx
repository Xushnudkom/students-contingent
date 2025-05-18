import Link from 'next/link'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Image from 'next/image';
import { Fullscreen } from '@mui/icons-material';

const Computer_facultet = () => {
  return (
    <div className='container mx-auto px-20 pb-8'>
         <div className='flex items-center pt-8'>
          <h1 className='text-xl w-[300px] font-semibold text-blue-950'>Computer Engineering</h1>
          <div className='border-t-2 w-full pl-[-200px] opacity-50 text-blue-950'></div>
        </div>
        <div className='flex items-center gap-2 pt-3'>
            <Link href='/faculty' className='text-blue-800 underline'>
                Faculty
            </Link>
            <ArrowRightAltIcon className='text-blue-800'/>
            <p className='text-blue-950'>Computer Engineering</p>
        </div>
        <Image src='/computer-comuni.jpg' width={1400} height={100} className='h-96 pt-5'/>

        <p className='text-blue-950 pt-3'>The Faculty of Computer Engineering was established based on the Decree No. PQ-1942 dated March 26, 2013, of the President of the Republic of Uzbekistan, titled “On Measures to Further Improve the System of Training Personnel in the Field of Information and Communication Technologies.” It was founded on the basis of the Faculty of Information Technologies. Currently, more than 90 professors and lecturers are actively working at the faculty.</p>
        <p className='text-blue-950 pt-3'>The faculty offers undergraduate programs in Computer Engineering, including specialties such as Computer Engineering, IT Service, and Multimedia Technologies. Other undergraduate fields include Artificial Intelligence, Mechatronics and Robotics, and Postal Communication Technology. At the master's level, students study various specializations including Computer Engineering with focuses on Computer Systems Design, Applied Software Design, and Information and Multimedia Technologies. Other master's programs include Electronic Government System Management, Geoinformation Systems and Technologies, Data Science, Computer Systems in Medicine, Intelligent Information and Communication Systems, Artificial Intelligence, Internet of Things, and Organization and Technology of Postal Services.</p>
        <p className='text-blue-950 pt-3'>In the 2023/2024 academic year, a total of 1,602 students are enrolled in all full-time programs at the faculty. Nearly 130 master's students are studying in the above-mentioned specializations and conducting scientific research.</p>

         <div className='flex items-center pt-8'>
          <h1 className='text-xl w-[300px] font-semibold text-blue-950'>Faculty administration:</h1>
          <div className='border-t-2 w-full pl-[-200px] opacity-50 text-blue-950'></div>
        </div>
      
            <div className='flex pt-10'>
                <Image src='/Kuchqorov.png' width={200} height={100}/>
                <div className='pl-4'>
                <p className='text-blue-950 text-lg'>Dean of the Faculty of Computer Engineering</p>
                <p className='text-blue-950 text-xl font-semibold pt-1'>Temurbek Ataxonovich Kuchkorov</p>
                <p className='font-semibold pt-2 text-blue-950'>Office hours: <span className='font-normal'>Every day from 2:00 PM to 4:00 PM (except Monday and Saturday)</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>Phone: <span className='font-normal'> (+99871) 207-59-45</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>E-mail: <Link href='#' className='font-normal text-blue-800'>t.kuchkorov@tuit.uz</Link></p>
                </div>
            </div>
            <div className='flex pt-10'>
                <Image src='/Karimov.png' width={200} height={100}/>
                <div className='pl-4'>
                <p className='text-blue-950 text-lg'>Deputy Dean for Youth Affairs</p>
                <p className='text-blue-950 text-xl font-semibold pt-1'>Abdulatif Botirovich Karimov</p>
                <p className='font-semibold pt-2 text-blue-950'>Office hours: <span className='font-normal'>Every day from 2:00 PM to 5:00 PM</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>Phone: <span className='font-normal'> (+99871) 207-59-46</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>E-mail: <Link href='#' className='font-normal text-blue-800'>abdulatifkarimoff@gmail.com</Link></p>
                </div>
            </div>
             <div className='flex pt-10'>
                <Image src='/Husanov.png' width={200} height={100}/>
                <div className='pl-4'>
                <p className='text-blue-950 text-lg'>Deputy Dean for Academic Affairs</p>
                <p className='text-blue-950 text-xl font-semibold pt-1'>Sherzod Abdimanonovich Husanov</p>
                <p className='font-semibold pt-2 text-blue-950'>Office hours: <span className='font-normal'>Every day from 2:00 PM to 5:00 PM</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>Phone: <span className='font-normal'> (+99871) 207-59-46</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>E-mail: <Link href='#' className='font-normal text-blue-800'>sh.khusanov@tuit.uz</Link></p>
                </div>
            </div>
            <div className='flex pt-10'>
                <Image src='/Gulomov.png' width={200} height={100}/>
                <div className='pl-4'>
                <p className='text-blue-950 text-lg'>Deputy Dean for Academic Affairs</p>
                <p className='text-blue-950 text-xl font-semibold pt-1'>Doniyor Zaynobidinovich G‘ulomov</p>
                <p className='font-semibold pt-2 text-blue-950'>Office hours: <span className='font-normal'>Every day from 2:00 PM to 5:00 PM</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>Phone: <span className='font-normal'> (+99871) 207-59-46</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>E-mail: <Link href='#' className='font-normal text-blue-800'>d.gulomov@tuit.uz</Link></p>
                </div>
            </div>
             <div className='flex pt-10'>
                <Image src='/Sardor.png' width={200} height={100}/>
                <div className='pl-4'>
                <p className='text-blue-950 text-lg'>Deputy Dean for Academic Affairs</p>
                <p className='text-blue-950 text-xl font-semibold pt-1'>Sardor Atkhamovich Karimov</p>
                <p className='font-semibold pt-2 text-blue-950'>Office hours: <span className='font-normal'>Every day from 2:00 PM to 5:00 PM</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>Phone: <span className='font-normal'> (+99871) 207-59-46</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>E-mail: <Link href='#' className='font-normal text-blue-800'>s.karimov@tuit.uz</Link></p>
                </div>
            </div>
            
        </div>
  )
}

export default Computer_facultet