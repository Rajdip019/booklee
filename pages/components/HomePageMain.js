import React from 'react'
import Link from 'next/link'
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Keyboard, Autoplay, fadeEffect } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/keyboard';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'

const HomePageMain = () => {
  const [progress, setProgress] = useState(0)
  return (
    <>
      <LoadingBar
        color='#4287f5'
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard, Autoplay]}
        // spaceBetween={50}
        loop={true}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        keyboard={true}
        autoplay={true}
      >
        <SwiperSlide>
          <div className='bg-landing1 h-[90vh] bg-no-repeat flex items-center justify-center'>
            <div className="w-9/12 sm:w-[60%] lg:w-[40%] ml-0 sm:ml-auto sm:mr-20">
              <h1 className="text-4xl font-rokkitt font-extrabold tracking-tight text-gray-900 sm:text-6xl relative z-20 leading-[50px]">
                Donate and sell
                your Old books
              </h1>
              <p className="mt-4 sm:text-lg text-xl text-gray-500 relative z-20 ">
                One and only stop for buying and selling old books. You can also donate your old academic books to NGO, So that it can help others.
              </p>
              <Link href="/ListBookForDonating">
                <button onClick={() => { setProgress(40); setProgress(100) }}
                  className="hidden w-full mt-5 xs:w-auto sm:inline-block text-center font-bold text-xl bg-skin-darkGreen border border-transparent rounded-md py-3 px-10 text-skin-lightGreen hover:bg-skin-hoverGreen hover:text-skin-darkGreen transition-all"
                >
                  Donate Now
                </button>
              </Link>
              <button onClick={() => { setProgress(40); setProgress(100) }}
                className="inline-block sm:hidden w-full mt-5 xs:w-auto text-center font-bold text-xl bg-skin-darkGreen border border-transparent rounded-md py-3 px-10 text-skin-lightGreen hover:bg-skin-hoverGreen hover:text-skin-darkGreen transition-all"
              >
                Donate
              </button>
              <Link href="/ListBookForSelling">
                <button onClick={() => { setProgress(40); setProgress(100) }}
                  className="w-full ml-0 mt-5 xs:w-auto xs:ml-3 sm:ml-6 inline-block text-center font-bold text-xl bg-skin-darkBlue border border-transparent rounded-md py-3 px-8 text-skin-lightBlue hover:bg-skin-hoverBlue hover:text-skin-darkBlue relative z-20 transition-all"
                >
                  Sell
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-landing4 h-[90vh] bg-no-repeat flex items-center justify-center'>
            <div className="w-9/12 sm:w-[40%] ml-0 sm:mr-auto sm:ml-20">
              <h1 className="text-4xl font-rokkitt font-extrabold tracking-tight text-white sm:text-6xl relative z-20 leading-[50px]">
                Donate To Nearby NGOs Directly
              </h1>
              <p className="mt-4 sm:text-lg text-xl text-gray-300 relative z-20 ">
                Donate your old books to the nearby NGOs and help us to spread education throughout India.
              </p>
              <Link href="/ListBookForDonating">
                <button onClick={() => { setProgress(40); setProgress(100) }}
                  className="w-full mt-5 xs:w-auto inline-block text-center font-bold text-xl bg-skin-lightGreen border border-transparent rounded-md py-3 px-10 text-skin-darkGreen hover:bg-skin-hoverGreen transition-all"
                >
                  Donate to NGO
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-landing2 h-[90vh] bg-no-repeat flex items-center justify-center'>
            <div className="w-9/12 sm:w-[40%] ml-0 sm:mr-auto sm:ml-20">
              <h1 className=" text-white text-4xl font-rokkitt font-extrabold tracking-tight sm:text-6xl relative z-20 leading-[50px]">
                Donate to those
                Who needs the most
              </h1>
              <p className="mt-4 sm:text-lg text-xl text-gray-300 relative z-20">
                Donate your old academic books and take a step forward in the noble cause.
              </p>
              <Link href="/ListBookForDonating">
                <button onClick={() => { setProgress(40); setProgress(100) }}
                  className="w-full mt-5 xs:w-auto inline-block text-center font-bold text-xl bg-skin-darkBlue border border-transparent rounded-md py-3 px-8 text-skin-lightBlue hover:bg-skin-hoverBlue hover:text-skin-darkBlue relative z-20 transition-all"
                >
                  Donate Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-2">
          <div className='bg-landing3 h-[90vh] bg-no-repeat flex items-center justify-center'>
            <div className="w-9/12 sm:w-[40%] ml-0 sm:ml-auto sm:mr-20">
              <h1 className="text-4xl font-rokkitt font-extrabold tracking-tight text-white sm:text-6xl relative z-20 leading-[50px]">
                Sell Your Old Books
                &
                Help Others
              </h1>
              <p className="mt-4 sm:text-lg text-xl text-gray-300 relative z-20 ">
                Sell your old books at a minimal price and help others to access them
              </p>
              <Link href="/ListBookForSelling">
                <button onClick={() => { setProgress(40); setProgress(100) }}
                  className="w-full ml-0 mt-5 xs:w-auto inline-block text-center font-bold text-xl bg-skin-lightBlue border border-transparent rounded-md py-3 px-8 text-skin-darkBlue hover:bg-skin-hoverBlue relative z-20 transition-all"
                >
                  Sell Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default HomePageMain