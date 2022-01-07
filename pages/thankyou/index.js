import Document from "../document";
import Navbar from "../components/Navbar";
import GeneralSidebar from "../components/GeneralSidebar";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function ThankYou() {
    const {data : session} = useSession();
    const name = session?.user?.name;
    return (
        <>
            <Document />
            <Navbar />
            <GeneralSidebar title="Thank You" />
            <div className="lg:w-[calc(100%-300px)] ">
            <div className="lg:ml-[calc(300px+4vw)] text-center w-11/12 mx-auto lg:text-left">
            <h1 className="text-center text-3xl sm:text-6xl font-semibold mt-12 sm:mt-20">Thank You</h1>
            <h1 className="text-center text-xl sm:text-4xl font-semibold mt-5 sm:mt-5 drop-shadow-md">{name}</h1>
            <p className="text-center text-gray-500 my-10 ">"The value of life is not in its duration, but in its donation. You are not important because of how long you live,<br />  you are important because of how effective you live."</p>
            <div className="xl:w-4/12 lg:w-6/12 w-8/12 mx-auto my-16">
            <img src="/thankyoufordonation.svg" alt="" className="m-auto"/>
            </div>
            <p className="text-center text-red-500 my-10 drop-shadow-xl">**We will reach you soon with a scheduling mail within 7 days.</p>
            <Link href="/">
            <button className="block lg:hidden bg-skin-lightBlue text-skin-darkBlue p-2 px-6 text-xl font-bold rounded-lg mt-10 hover:bg-skin-hoverBlue mx-auto mb-20">Go to Home Page</button>
            </Link>
            </div>
            </div>
        </>
    )
}