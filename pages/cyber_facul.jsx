import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Cyber_facul = () => {
  return (
    <div className='container mx-auto px-20 pb-8'>
         <div className='flex items-center pt-8'>
          <h1 className='text-xl w-[300px] font-semibold text-blue-950'>CyberSecurity</h1>
          <div className='border-t-2 w-full pl-[-200px] opacity-50 text-blue-950'></div>
        </div>
        <div className='flex items-center gap-2 pt-3'>
            <Link href='/faculty' className='text-blue-800 underline'>
                Faculty
            </Link>
            <ArrowRightAltIcon className='text-blue-800'/>
            <p className='text-blue-950'>CyberSecurity</p>
        </div>
        <Image src='/cyber-comuni.jpg' width={1400} height={100} className='h-96 pt-5'/>

        
        <p className='text-blue-950 pt-3'>In order to ensure the implementation of the task set forth in Clause 10 of the Work Plan of the Cabinet of Ministers for the first half of 2016, approved by Resolution No. 5 of the Presidium of the Cabinet of Ministers of the Republic of Uzbekistan dated January 25, 2016, and based on the proposals of the Ministry regarding the establishment of the Faculty of Information Security and specialized departments under the faculty at Tashkent University of Information Technologies (TUIT), as well as considering the issue of establishing the Faculty of Information Security at TUIT, the matter was discussed at the Technical Council on Information and Communication Security of the Republic of Uzbekistan at its meeting on July 18, 2016 (Resolution No. 3), and by the decision of the Tashkent University of Information Technologies Council dated August 29, 2016, No. 1(661), concerning amendments to the university’s organizational structure, the Department of Information Security within the Faculty of Computer Engineering was transferred to the Faculty of Information Security. On this basis, the Departments of Information Security Assurance and Cryptology and Discrete Mathematics were established.</p>
        <p className='text-blue-950 pt-3'>By the Decree No. PQ–4751 of the President of the Republic of Uzbekistan dated June 15, 2020, titled “On Measures to Further Improve the Cybersecurity System of the Republic of Uzbekistan,” and the Decree No. PQ–4851 of the President of the Republic of Uzbekistan dated October 6, 2020, titled “On Measures to Further Improve the Education System in the Field of Information Technologies, Develop Scientific Research, and Integrate Them with the IT Industry,” as well as the letter No. 33-8/6733 dated September 24, 2021, from the Ministry for the Development of Information Technologies and Communications of the Republic of Uzbekistan, and by Order No. 995 dated September 30, 2021, of the Rector of Tashkent University of Information Technologies named after Muhammad al-Khwarizmi, the Faculty of Information Security was renamed to the Faculty of Cybersecurity.</p>

        <p className='text-blue-950 pt-3'>Our mission as the Faculty of Cybersecurity is to equip the next generation of cybersecurity specialists with the essential knowledge, skills, and competencies needed to protect digital assets and defend against emerging cyber threats. Through an innovative curriculum, practical learning experiences, and advanced research, we aim to build a community of ethical and skilled cybersecurity practitioners prepared to address the evolving challenges of the digital age.

Our commitment extends beyond the classroom, as we strive to foster collaboration with industry partners, government agencies, and the broader cybersecurity community to advance the field and promote a safer digital ecosystem for all. We continuously seek to ensure that our students stay ahead of the latest trends and technologies in cybersecurity.

By nurturing critical thinking, problem-solving abilities, and a strong ethical foundation, we prepare our graduates to become leaders and champions of a secure digital future.</p>

         <div className='flex items-center pt-8'>
          <h1 className='text-xl w-[300px] font-semibold text-blue-950'>Faculty administration:</h1>
          <div className='border-t-2 w-full pl-[-200px] opacity-50 text-blue-950'></div>
        </div>
      
            <div className='flex pt-10'>
                <Image src='/gulomov-sherzod.png' width={200} height={100}/>
                <div className='pl-4'>
                <p className='text-blue-950 text-lg'>Dean of the Faculty of Cybersecurity</p>
                <p className='text-blue-950 text-xl font-semibold pt-1'>Sherzod Rajaboyevich G‘ulomov</p>
                <p className='font-semibold pt-2 text-blue-950'>Office hours: <span className='font-normal'>Monday to Friday (until 4:30 PM)</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>Phone: <span className='font-normal'> (+99871) 238-65-39</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>E-mail: <Link href='#' className='font-normal text-blue-800'>sherzod.gulomov@tuit.uz</Link></p>
                </div>
            </div>
            <div className='flex pt-10'>
                <Image src='/berdiboyev.png' width={200} height={100}/>
                <div className='pl-4'>
                <p className='text-blue-950 text-lg'>Deputy Dean for Youth Affairs</p>
                <p className='text-blue-950 text-xl font-semibold pt-1'>Oltinboy Abdiboqi o‘g‘li Berdiboyev</p>
                <p className='font-semibold pt-2 text-blue-950'>Office hours: <span className='font-normal'>Every day from 2:00 PM to 5:00 PM</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>Phone: <span className='font-normal'>  (+99871) 238-65-59</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>E-mail: <Link href='#' className='font-normal text-blue-800'>o.berdiboyev@tuit.uz</Link></p>
                </div>
            </div>
             <div className='flex pt-10'>
                <Image src='/shukurov.png' width={200} height={100}/>
                <div className='pl-4'>
                <p className='text-blue-950 text-lg'>Deputy Dean for Academic Affairs</p>
                <p className='text-blue-950 text-xl font-semibold pt-1'>Orziqul Pardayevich Shukurov</p>
                <p className='font-semibold pt-2 text-blue-950'>Office hours: <span className='font-normal'>Every day from 2:00 PM to 5:00 PM</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>Phone: <span className='font-normal'> (+99871) 238-65-59</span></p>
                <p className='text-blue-950 pt-2 font-semibold'>E-mail: <Link href='#' className='font-normal text-blue-800'>o.shukurov@tuit.uz</Link></p>
                </div>
            </div>
            
            
        </div>
  )
}

export default Cyber_facul