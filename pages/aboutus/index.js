import Document from "../document";
import Navbar from "../Components/Navbar";
import GeneralSidebar from "../Components/GeneralSidebar";
import Footer from "../Components/Footer";



export default function AboutUs() {
    return (
        <>
            <Document />
            <Navbar />
            <GeneralSidebar title="About Us" />
            <div className="lg:w-[calc(100%-300px)] ">
                <div className="lg:ml-[calc(300px+4vw)] text-center w-11/12 mx-auto lg:text-left">
                    <h1 className="text-4xl font-semibold mt-14 mb-4 text-center">About Us</h1>
                    <div className="grid sm:grid-cols-2  mt-14">
                        <div className="m-auto">
                            <img src="/debajyoti.png" alt="Debajyoti Saha Image" />
                            <h1 className="text-center text-xl font-semibold">Debajyoti Saha</h1>
                            <p className="text-center max-w-[20rem] mt-4 text-gray-500">A great enthusiast of Web development | UI/UX Designing | Web 3.0 | Co-founder at BrutWeb</p>
                        </div>
                        <div className="m-auto mt-10 sm:m-auto">
                            <img src="/rajdeep.png" alt="Rajdeep Sengupta Image" />
                            <h1 className="text-center text-xl font-semibold">Rajdeep Sengupta</h1>
                            <p className="text-center max-w-[20rem] mt-4 text-gray-500">Young UI & UX Designer and Web Developer | Co-founder at BrutWeb | Loves to Play Chess</p>
                        </div>
                    </div>
                    <div className="lg:flex sm:mt-40 mt-20">
                        <div>
                            <h2 className="text-2xl font-semibold my-5">Our Motto</h2>
                            <p>In our country India,There are many poor student who cannot afford to buy new books due to financial problems.With our this little initiative they will be able to buy used books online from others at a very reasonable price.Those who also can't find buyer to whom they can sell their old used books, can also get benefit from it.</p>
                            <br />
                            <p>So our motto is to provide the needy ones books at a affordable price and help them to grow</p>
                        </div>
                        <div className="lg:ml-10 flex justify-center">
                            <img src="/about us1.svg" alt="" className="min-w-[300px]" />
                        </div>
                    </div>
                    <div className="lg:flex flex flex-col-reverse lg:flex-row mt-20">
                        <div className="lg:mr-10 flex justify-center">
                            <img src="/about us2.svg" alt="" className="min-w-[350px] scale-75 mb-5" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold my-5">Our Goals</h2>
                            <p>Our Goal is to build a healthy community where people will publish their old used books at a very cheap and minimal price.so that poor people can get benefit from it.Generally Both the buyer and seller face very difficulties while buying or selling used books</p>
                            <br />
                            <p>Through our service people can also donate their old academic books to the NGO nearby their location and further the NGO will donate the books to the children who needed them badly.This is our mission</p>
                        </div>
                    </div>
                    <div className="lg:flex mt-20">
                        <div>
                            <h2 className="text-2xl font-semibold my-5">Contact us</h2>
                            <p>We are open to feedback.In case of any queries and complaints,Contact us </p>
                            <button className="bg-skin-lightBlue text-skin-darkBlue p-2 px-6 text-xl font-bold rounded-lg mt-5 hover:bg-skin-hoverBlue">Contact</button>
                        </div>
                        <div className="lg:ml-48 flex justify-center sm:w-[600px] m-auto">
                        <img src="/contact.svg" alt="" className="min-w-[350px] scale-75 mb-10" />
                        </div>
                    </div>
                </div>
                <div className="lg:ml-[300px] w-full">
                <Footer />
                </div>
            </div>
        </>
    )
}