import React from "react";
import Link from 'next/link'

const GetBooksHome = ({topLoader}) => {
  return (
    <div>
      <div className="grid  grid-col-1 lg:grid-cols-2 gap-6 w-11/12 mx-auto">
        <div className="bg-skin-lightGreen text-skin-darkGreen rounded-xl">
          <div className="grid grid-cols-2 m-auto">
            <div className="m-auto pl-3 sm:pl-0 lg:pl-8 xl:pl-0">
            <h1 className="text-2xl sm:text-4xl xl:text-5xl  font-bold">Get</h1>
            <h1 className="text-md sm:text-[20px]  font-bold">Free Educational Books</h1>
            <Link href="/browsefreebooks" >
            <button className="font-bold bg-skin-darkGreen text-skin-lightGreen rounded-xl py-2 px-4 my-3 text-md sm:text-lg" onClick={()=> {topLoader()}}>
              Browse Now
            </button>
            </Link>
            </div>
            <div >
                <img src="/Edubg.png"></img>
            </div>
          </div>
        </div>

        <div className="bg-skin-lightBlue text-skin-darkBlue rounded-xl">
          <div className="grid grid-cols-2 m-auto ">
            <div className="m-auto pl-3 sm:pl-0 lg:pl-8 xl:pl-0 ">
            <h1 className="text-2xl sm:text-4xl xl:text-5xl font-bold">Get</h1>
            <h1 className="text-md sm:text-[20px] font-bold">Old Books at less price</h1>
            <Link href="/browsebooks" >
            <button className="font-bold bg-skin-darkBlue text-skin-lightBlue rounded-xl py-2 px-4 my-3 text-md sm:text-lg" onClick={()=> {topLoader()}}>
              Browse Now
            </button>
            </Link>
            </div>
            <div className="ml-auto rounded-r-md">
                <img className="rounded-r-md" src="/Sellbg.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetBooksHome;