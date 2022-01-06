import React from 'react'
import Link from 'next/link'

const DonationMainCounter = ({totalDonation}) => {




    return (
        <div className="h-full w-full">
            <div className="text-center mt-10 lg:mt-20 xl:mt-24 2xl:mt-30 px-4">
                <h1 className="text-xl sm:text-3xl font-medium my-5 max-w-3xl mx-auto ">“I think people forget that it doesn't take a big donation to help someone, just a lot of little donations.”</h1>
                <p className="text-2xl opacity-75 font-bold">Total Books Donated</p>
                <p className="font-normal text-lg opacity-75">till now...</p>
            </div>
            <div className="h-48 w-48 rounded-full bg-skin-lightGreen mx-auto my-6 sm:my-20 pt-[52px] shadow-xl scale-125 sm:scale-150">
                <h1 className="text-7xl font-bold text-center font-rokkitt">{totalDonation}</h1>
                <h1 className="text-xl font-bold text-center">Books</h1>
            </div>
            <div className="text-center">
            <Link href="/donatengo/donationngoform">
            <button className="my-10 text-skin-darkGreen bg-skin-lightGreen hover:bg-skin-hoverGreen p-[16px] rounded-xl text-center font-bold">Donate</button>
            </Link>
            </div>
            
        </div>
    )
}

export default DonationMainCounter
