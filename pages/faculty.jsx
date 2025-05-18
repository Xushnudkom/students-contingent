import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";

const Facultet = () => {
  return (
    <div className="container mx-auto px-20">
      <h1 className="font-bold text-2xl justify-center text-blue-950 flex pt-7">
        Faculty of Information Technologies
      </h1>

      <div className="flex pt-9 justify-between">
        <Link href='/computer_facultet'>
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
       <Link href='/software_facul'>
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
        <Link href='cyber_facul'>
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
        <Link href='economic_facul'>
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
      <div className="pt-16">
       <div className="bg-gray-100 rounded-xl px-1 py-5 transform transition duration-300 hover:shadow-xl hover:shadow-gray-400 hover:scale-101">
         <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={5}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
        >
          <SwiperSlide>
            <Image
              src="/milliy.svg"
              className="h-28 mx-auto"
              alt="University 1"
              width={100}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/moliya.png"
              className="h-26 mx-auto"
              alt="University 1"
              width={110}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Tatu.png"
              className="h-24 mx-auto"
              alt="University 1"
              width={100}
              height={100}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/transport.png"
              className="h-23 bg-blue-900 rounded-xl p-3 mx-auto"
              alt="University 1"
              width={150}
              height={100}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/karshi.png"
              className="h-23 mx-auto"
              alt="University 1"
              width={120}
              height={100}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/yurid.png"
              className="h-23 mx-auto"
              alt="University 1"
              width={100}
              height={100}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/diplomatiya.png"
              className="h-23 mx-auto"
              alt="University 1"
              width={100}
              height={100}
            />{" "}
          </SwiperSlide>
        </Swiper>
       </div>
      </div>
    </div>
  );
};

export default Facultet;
