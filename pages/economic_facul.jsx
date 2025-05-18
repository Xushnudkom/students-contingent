import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Economic_facul = () => {
  return (
    <div className='container mx-auto px-20 pb-8'>
         <div className='flex items-center pt-8'>
          <h1 className='text-xl w-[300px] font-semibold text-blue-950'>Economics & Management</h1>
          <div className='border-t-2 w-full pl-[-200px] opacity-50 text-blue-950'></div>
        </div>
        <div className='flex items-center gap-2 pt-3'>
            <Link href='/faculty' className='text-blue-800 underline'>
                Faculty
            </Link>
            <ArrowRightAltIcon className='text-blue-800'/>
            <p className='text-blue-950'>Economics & Management</p>
        </div>
        <Image src='/econimic-comuni.jpg' width={1400} height={100} className='h-96 pt-5'/>

        
        <p className='text-blue-950 pt-3'>The Faculty of Engineering Economics was established based on the Order No. 175 of the Ministry of Communications of the Republic of Uzbekistan dated May 20, 1996. Due to the renaming of the Tashkent Electrotechnical Communication Institute to Tashkent University of Information Technologies, the faculty was renamed the Faculty of Economics and Management on February 1, 2003. Since 2013, it has been renamed the Faculty of Economics and Management in the ICT Sector.</p>
        <p className='text-blue-950 pt-3'>Graduates of the faculty work in planning and economic departments of the communications sector, in production and technical services, joint-stock and private enterprises, design organizations, and the social sector, as well as in the transport industry. Since December 26, 2022, the faculty has been headed by Doctor of Economics, Muhammadkhoja Sobirkhoja o‘g‘li Saitkamolov.</p>

         <div className='flex items-center pt-8'>
          <h1 className='text-xl w-[300px] font-semibold text-blue-950'>Faculty administration:</h1>
          <div className='border-t-2 w-full pl-[-200px] opacity-50 text-blue-950'></div>
        </div>
      
            <div className='flex pt-10'>
                <Image src='/saitkomolov.png' width={200} height={100}/>
                <div className='pl-4'>
                <p className='text-blue-950 text-lg'>Dean of the Faculty of Economics and Management in the ICT Sector</p>
                <p className='text-blue-950 text-xl font-semibold pt-1'>Muhammadkhoja Sobirkhoja o‘g‘li Saitkamolov</p>
                <p className='font-semibold pt-2 text-blue-950'>Office hours: <span className='font-normal'>Monday to Friday (until 4:00 PM)</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>Phone: <span className='font-normal'>  (+99871) 238-64-09</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>E-mail: <Link href='#' className='font-normal text-blue-800'>m.saitkamolov@tuit.uz</Link></p>
                </div>
            </div>
            <div className='flex pt-10'>
                <Image src='/dilfuza.png' width={200} height={100}/>
                <div className='pl-4'>
                <p className='text-blue-950 text-lg'>Deputy Dean for Academic Affairs</p>
                <p className='text-blue-950 text-xl font-semibold pt-1'>Dilfuza Irkenovna Nurmuxamedova</p>
                <p className='font-semibold pt-2 text-blue-950'>Office hours: <span className='font-normal'>Monday to Friday (until 4:00 PM)</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>Phone: <span className='font-normal'>  (+99871) 238-64-35</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>E-mail: <Link href='#' className='font-normal text-blue-800'>d.nurmuxamedova@tuit.uz</Link></p>
                </div>
            </div>
             <div className='flex pt-10'>
                <Image src='/zaripov.png' width={200} height={100}/>
                <div className='pl-4'>
                <p className='text-blue-950 text-lg'>Deputy Dean for Youth Affairs and Spiritual-Educational Work</p>
                <p className='text-blue-950 text-xl font-semibold pt-1'>Alisher Mukhammatovich Zaripov</p>
                <p className='font-semibold pt-2 text-blue-950'>Office hours: <span className='font-normal'>Monday to Friday (until 4:00 PM)</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>Phone: <span className='font-normal'> (+99871) 238-64-35</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>E-mail: <Link href='#' className='font-normal text-blue-800'>zaripov.a@tuit.uz</Link></p>
                </div>
            </div>
            
            
        </div>
  )
}

export default Economic_facul