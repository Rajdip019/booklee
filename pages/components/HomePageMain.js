import React from 'react'
import Link from 'next/link'
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

const HomePageMain = () => {
  const [progress, setProgress] = useState(0)
    return (
        <>
        <LoadingBar
        color='#4287f5'
        height = {4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <div className="absolute z-10 right-0 hidden lg:block">
        <img src="/Vector.png" alt="vector image" />
        </div>
        <div className="relative bg-white overflow-hidden">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className=" -mt-14 sm:-mt-0 text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl relative z-20 leading-[50px]">
            Donate and sell
            your Old books
            </h1>
            <p className="mt-4 text-xl text-gray-500 relative z-20 ">
              Donate and sell your Old bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the best. 
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 z-20 mt-36">
                  <div className="flex items-center space-x-6 lg:space-x-8 ">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8 ">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100 ">
                        <img
                          src="/Rectangle 138.png"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="/Rectangle 100.png"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden ">
                        <img
                          src="/Rectangle 102.png"
                          alt=""
                          className="w-full h-full object-center object-cover rounded-lg "
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="/Rectangle 96.png"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="/Rectangle 98.png"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="/Rectangle 97.png"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="/Rectangle 99.png"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/ListBookForDonating">
              <button onClick={()=> {setProgress(40); setProgress(100)}}
                className="inline-block text-center font-bold text-xl bg-skin-lightGreen border border-transparent rounded-md py-3 px-10 text-skin-darkGreen hover:bg-skin-hoverGreen transition-all"
              >
                Donate Now
              </button>
              </Link>
              <Link href="/ListBookForSelling">
              <button onClick={()=> {setProgress(40); setProgress(100)}}
                className="ml-6 inline-block text-center font-bold text-xl bg-skin-lightBlue border border-transparent rounded-md py-3 px-8 text-skin-darkBlue hover:bg-skin-hoverBlue relative z-20 transition-all"
              >
                Sell
              </button>
              </Link>
              <Link href="/donatengo">
              <button onClick={()=> {setProgress(40); setProgress(100)}}
                className="block mt-5 px-[5.4rem] text-center font-bold text-xl border-4 border-[#155D18] rounded-md py-3 text-skin-darkGreen hover:bg-skin-hoverGreen transition-all"
              >
                Donate to NGO
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div> 
        </>
    )
}

export default HomePageMain
