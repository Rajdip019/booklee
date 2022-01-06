import Document from "./document";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function ThankYou() {
    return (
        <>
            <Document />
            <Navbar />
            <div className="w-10/12 mx-auto mt-16">
            <img src="/404.png" alt="" className="m-auto"/>
            <div className="text-center mt-10">
            <Link href="/">
            <button className="bg-skin-lightBlue text-skin-darkBlue p-2 px-6 text-xl font-bold rounded-lg mt-10 hover:bg-skin-hoverBlue">Go to Home Page</button>
            </Link>
            </div>
            </div>
        </>
    )
}