import Document from "../document";
import Navbar from "../components/Navbar";
import GeneralSidebar from "../components/GeneralSidebar";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Link from "next/link";

export default function FAQs() {
  return (
    <>
      <Document />
      <Navbar />
      <GeneralSidebar title="FAQ" />
      <div className="lg:w-[calc(100%-300px)] ">
        <div className="lg:ml-[calc(300px+4vw)] text-center w-11/12 mx-auto lg:text-left">
          <h1 className="text-4xl font-semibold mt-14 mb-4">
            Have Questions? Try finding them below
          </h1>
          <p className="mb-12">
            We have shortlisted all the important questions regarding our
            service.Have a look inside.It may resolve your query.
          </p>
        </div>
      </div>
      <div className="lg:ml-[300px]">
        <FAQ />
      </div>
      <div className="lg:w-[calc(100%-300px)]">
        <div className="lg:ml-[calc(300px+4vw)] text-center w-11/12 mx-auto lg:text-left">
          <h1 className="text-4xl font-semibold mt-14 mb-4 inline-block">
            Have Questions other than this?
          </h1>
          <Link href="/contact">
          <button className="inline-block bg-skin-lightBlue text-skin-darkBlue p-2 text-xl font-bold rounded-lg lg:ml-10 hover:bg-skin-hoverBlue">
            Contact
          </button>
          </Link>
        </div>
        <div className="lg:ml-[300px] w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}
