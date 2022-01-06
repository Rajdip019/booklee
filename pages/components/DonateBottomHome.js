import React from "react";
import Link from "next/dist/client/link";

const DonateBottomHome = () => {
  return (
    <div className=" w-11/12 mx-auto my-10">
      <div className="bg-skin-lightGreen text-skin-darkGreen rounded-xl h-[30vh]">
          <div className="flex flex-col sm:flex-row text-center sm:text-left justify-between h-full ">
            <div className="ml-0 sm:ml-7 my-auto ">
              <h1 className="text-2xl sm:text-4xl font-bold mb-2">Spread </h1>
              <h1 className="text-xl sm:text-2xl font-bold">
                Educational and Help a Needy child 
              </h1>

            </div>
            <div className="my-auto text-center">
            <Link href="/donatengo">
            <button className="font-bold bg-skin-darkGreen text-skin-lightGreen rounded-xl mr-0 sm:mr-7 py-2 px-4 my-3 text-xl">
              Donate Now
            </button>
            </Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default DonateBottomHome;
