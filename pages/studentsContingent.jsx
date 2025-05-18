import Image from "next/image";
import React from "react";
import Link from "next/link";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const studentsContingent = () => {
  return (
    <div className="container mx-auto px-20">
         <div className='flex items-center gap-2 pt-4 pb-6'>
            <Link href='/students' className='text-blue-800 underline'>
                Students
            </Link>
            
            <ArrowRightAltIcon className='text-blue-800'/>
            <p className='text-blue-950'>Student enrollment</p>
        </div>
      <h1 className="font-bold text-2xl justify-center text-blue-950 flex pt-7">
        Faculty of Information Technologies
      </h1>

      <div className="flex pt-9 justify-between">
        <Link href='/ContCompStudents'>
        <div className="box bg-gray-100 px-10 py-4 pb-6 rounded-md transform transition duration-300 hover:shadow-xl hover:shadow-gray-400 hover:scale-101">
          <Image
            src="/computer-engeneering.png"
            width={200}
            height={100}
            className="justify-center"
          />
          <h2 className="text-center text-blue-950 text-lg font-semibold pt-1.5">
            Computer Engineering
          </h2>
        </div>
        </Link>
       <Link href='/ContSoftStudents'>
        <div className="box bg-gray-100 px-10 py-4 pb-6 rounded-md transform transition duration-300 hover:shadow-xl hover:shadow-gray-400 hover:scale-101">
          <Image
            src="/Software.png"
            width={200}
            height={100}
            className="justify-center pt-2"
          />
          <h2 className="text-center text-blue-950 text-lg font-semibold pt-6">
            Software Engineering
          </h2>
        </div>
       </Link>
        <Link href='ContCyberStudents'>
        <div className="box bg-gray-100 px-10 py-4 pb-6 rounded-md transform transition duration-300 hover:shadow-xl hover:shadow-gray-400 hover:scale-101">
          <Image
            src="/cybersecurity.png"
            width={200}
            height={100}
            className="justify-center"
          />
          <h2 className="text-center text-blue-950 text-lg font-semibold pt-1.5">
            CyberSecurity
          </h2>
        </div>
        </Link>
        <Link href='ContEconomStudents'>
        <div className="box bg-gray-100 px-10 py-4 pb-6 rounded-md transform transition duration-300 hover:shadow-xl hover:shadow-gray-400 hover:scale-101">
          <Image
            src="/ACT.png"
            width={200}
            height={100}
            className="justify-center"
          />
          <h2 className="text-center text-lg text-blue-950 font-semibold pt-6">
            Economics & Management
          </h2>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default studentsContingent;
