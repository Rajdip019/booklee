import Document from "../document";
import Navbar from "../components/Navbar";
import GeneralSidebar from "../components/GeneralSidebar";



export default function ProjectDetails() {
    return (
      <>  
      <Document />
      <Navbar/>
      <GeneralSidebar title="Project Details"/>
      <div className="lg:w-[calc(100%-300px)] ">
      <div className="lg:ml-[calc(300px+4vw)] text-center w-11/12 mx-auto lg:text-left">
      <h1 className="text-4xl font-semibold mt-14 mb-4">Project Details</h1>
      <p className="mb-12">Coming Soon</p>
      </div>
      </div>
      </>

    )
  }