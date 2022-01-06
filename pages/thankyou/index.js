import Document from "../document";
import Navbar from "../components/Navbar";
import GeneralSidebar from "../components/GeneralSidebar";
import Link from "next/link";


export default function ThankYou() {
    return (
        <>
            <Document />
            <Navbar />
            <GeneralSidebar title="Thank You" />
            <div className="lg:w-[calc(100%-300px)] ">
            <div className="lg:ml-[calc(300px+4vw)] text-center w-11/12 mx-auto lg:text-left">
            <h1 className="text-center text-3xl sm:text-6xl font-semibold mt-12 sm:mt-20">Thank You for Connecting.</h1>
            <p className="text-center text-gray-500 my-10">"The value of life is not in its duration, but in its donation. You are not important because of how long you live,<br />  you are important because of how effective you live."</p>
            <img src="/thankyou.png" alt="" className="m-auto"/>
            <p className="text-center text-gray-500 my-10">We will reach you soon  within 7 days</p>
            <Link href="/">
            <button className="block lg:hidden bg-skin-lightBlue text-skin-darkBlue p-2 px-6 text-xl font-bold rounded-lg mt-10 hover:bg-skin-hoverBlue mx-auto">Go to Home Page</button>
            </Link>
            </div>
            </div>
        </>
    )
}
