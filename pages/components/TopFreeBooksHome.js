import React from 'react'
import ProductCardDonationDisplay from './ProductCardDonationDisplay'
import Link from 'next/link'


function Edubooks(edubook) {
    return (
        <div className="ml-auto mr-auto mb-16">
            <ProductCardDonationDisplay
                key={edubook._id}
                _id={edubook._id}
                seller_id={edubook.seller_id}
                name={edubook.name}
                img={edubook.photo}
                condition={edubook.condition}
            />
        </div>
    )
}



const TopFreeEduBook = ({donateBooks}) => {
    return (
        <>
            {/*////////////////////////////////////////// For Extra Large/PC Skin/////////////////////////////////////////// */}

            <div className="sm:hidden 2xl:grid 2xl:grid-cols-5 gap-1 w-11/12 m-auto md:hidden lg:hidden hidden mt-32 mb-6">
                <div className="col-span-5  mb-12 px-[2vw]">
                    <span className="text-3xl font-semibold ml-0">Free Educational Books</span>
                    <Link href="/browsefreebooks" >
                    <button className="float-right bg-skin-lightBlue text-skin-darkBlue py-2 px-4 rounded-lg font-semibold text-xl hover:bg-skin-hoverBlue transition-all">View all</button>
                    </Link>
                </div>
                {donateBooks.slice(0, 5).map(Edubooks)}
            </div>

            {/*////////////////////////////////////////////////// For Large/Laptop Screens //////////////////////////////////////*/}

            <div className="sm:grid sm:grid-cols-2 lg:hidden xl:grid xl:grid-cols-4 2xl:hidden hidden my-14">
                <div className="sm:col-span-2 xl:col-span-4  mb-12 xl:px-[3vw] px-[8vw]">
                    <span className=" sm:text-center text-3xl font-semibold xl:text-left">Free Educational Books</span>
                    <Link href="/browsefreebooks" >
                    <button className="float-right bg-skin-lightBlue text-skin-darkBlue py-2 px-4 rounded-lg font-semibold text-xl hover:bg-skin-hoverBlue transition-all">View all</button>
                    </Link>
                </div>
                    {donateBooks.slice(0, 4).map(Edubooks)}
            </div>

            {/* ////////////////////////////////////////////////For Medium Screens////////////////////////////////////////// */}

            <div className="lg:grid lg:grid-cols-3 xl:hidden sm:hidden md:hidden 2xl:hidden hidden my-14">
                <div className="col-span-3 mb-12 px-[5vw]">
                <span className="text-3xl font-semibold">Free Educational Books</span>
                <Link href="/browsefreebooks" >
                <button className="float-right bg-skin-lightBlue text-skin-darkBlue py-2 px-4 rounded-lg font-semibold text-xl hover:bg-skin-hoverBlue transition-all">View all</button>
                </Link>
                </div>
                {donateBooks.slice(0, 3).map(Edubooks)}
            </div>

            {/* ///////////////////////////////////////////////////For Small/Mobile Screens///////////////////////////////////////// */}

            <div className="sm:hidden  grid grid-cols-1 my-14">
                <h2 className="text-3xl font-semibold mb-12 text-center underline">Free Educational Books</h2>
                {donateBooks.slice(0, 2).map(Edubooks)}
                <Link href="/browsefreebooks" >
                <button className="float-right bg-skin-lightBlue text-skin-darkBlue py-2 px-4 rounded-lg font-semibold text-xl hover:bg-skin-hoverBlue transition-all w-8/12 ml-auto mr-auto">View all</button>
                </Link>
            </div>
        </>
    )
}


export default TopFreeEduBook
