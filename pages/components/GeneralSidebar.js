import React from 'react'
import Link from 'next/dist/client/link'

const GeneralSidebar = (props) => {
    return (

        <div className="hidden lg:block ">
            <div className="w-[300px] h-screen shadow-xl bg-sidebar-pattern float-left fixed text-center">
                <h1 className="font-rokkitt font-extrabold text-7xl text-center mt-28">{props.title}</h1>
                <Link href="/">
                <button className=" bg-skin-darkBlue text-skin-lightBlue py-2 px-4 text-xl rounded-lg relative top-[45vh] hover:bg-blue-700">Back to Home</button>
                </Link>
            </div>
        </div>
    )
}

export default GeneralSidebar
