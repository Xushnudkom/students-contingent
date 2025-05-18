import Image from "next/image";
import React from "react";
import Link from "next/link";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const ContSoftStudents = () => {
  return (
    <div className="container mx-auto px-20 pb-8">
         <div className='flex items-center gap-2 pt-4 pb-6'>
            <Link href='/students' className='text-blue-800 underline'>
                Students
            </Link>            
            <ArrowRightAltIcon className='text-blue-800'/>
            <Link href='/studentsContingent' className='text-blue-800 underline'>
                Student enrollment
            </Link> 
            <ArrowRightAltIcon className='text-blue-800'/>
            <p className='text-blue-950'>Software Engineering</p>
        </div>
        <div>
            <p className='text-blue-950 text-2xl font-semibold'>Software Engineering</p>
            <div className="1-kurs">
                <div className='flex items-center pt-4'>
          <h1 className='text-2xl font-semibold text-blue-950 w-[300px]'>1st year students</h1>
          <div className='border-t-2 w-full opacity-50 text-blue-950'></div>
        </div>
        <div className="1-kurs-group pt-8 flex justify-between">
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            310-24
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            311-24
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            312-24
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            313-24
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            314-24
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            315-24
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            316-24
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            317-24
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            318-24
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            319-24
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            320-24
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            321-24
            </Link>
            
        </div>
            </div>

             <div className="2-kurs">
                <div className='flex items-center pt-12'>
          <h1 className='text-2xl font-semibold text-blue-950 w-[300px]'>2nd year students</h1>
          <div className='border-t-2 w-full opacity-50 text-blue-950'></div>
        </div>
        <div className="2-kurs-group pt-8 flex justify-between ">
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            310-23
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            311-23
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            312-23
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            313-23
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            314-23
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            315-23
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            316-23
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            317-23
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            318-23
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            319-23
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            320-23
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            321-23
            </Link>
        </div>
            </div>

            <div className="3-kurs">
                <div className='flex items-center pt-12'>
          <h1 className='text-2xl font-semibold text-blue-950 w-[300px]'>3rd year students</h1>
          <div className='border-t-2 w-full opacity-50 text-blue-950'></div>
        </div>
        <div className="3-kurs-group pt-8 flex justify-between ">
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            310-22
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            311-22
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            312-22
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            313-22
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            314-22
            </Link>
            <Link href='/groups/315-22' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            315-22
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            316-22
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            317-22
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            318-22
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            319-22
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            320-22
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            321-22
            </Link>
        </div>
            </div>

             <div className="3-kurs">
                <div className='flex items-center pt-12'>
          <h1 className='text-2xl font-semibold text-blue-950 w-[300px]'>4th year students</h1>
          <div className='border-t-2 w-full opacity-50 text-blue-950'></div>
        </div>
        <div className="3-kurs-group flex justify-between pt-8">
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            310-21
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            311-21
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            312-21
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            313-21
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            314-21
            </Link>
            <Link href='/myGroup' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            315-21
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            316-21
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            317-21
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            318-21
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            319-21
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            320-21
            </Link>
            <Link href='#' className="bg-gray-100 p-4 hover:bg-gray-300 transition duration-300 shadow-xl text-blue-950 text-xl rounded-xl">
            321-21
            </Link>
        </div>
            </div>
            
        </div>
    </div>
  );
};

export default ContSoftStudents;
