import Document from "../document";
import Navbar from "../components/Navbar";
import GeneralSidebar from "../components/GeneralSidebar";
import Footer from "../components/Footer";


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
                            <div className="flex justify-center mt-4">
                                <a href="https://twitter.com/itsdebajyoti" target="_blank" className="mx-2">
                                <svg className=" mx-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/debajyoti-saha-37bb78219/" target="_blank" className="mx-2">
                                <svg className=" mx-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                                <a href="https://github.com/Debajyoti14" target="_blank" className="mx-2">
                                <svg className=" mx-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                </a>
                            </div>
                            <p className="text-center max-w-[20rem] mt-4 text-gray-500">A great enthusiast of Web development | UI/UX Designing | Web 3.0 | Co-founder at BrutWeb</p>
                        </div>
                        <div className="m-auto mt-10 sm:m-auto">
                            <img src="/rajdeep.png" alt="Rajdeep Sengupta Image" />
                            <h1 className="text-center text-xl font-semibold">Rajdeep Sengupta</h1>
                            <div className="flex justify-center mt-4">
                            <a href="https://twitter.com/RajdeepS019" target="_blank" className="mx-2">
                                <svg className=" mx-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/rajdeep-sengupta/" target="_blank" className="mx-2"> 
                                <svg className=" mx-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                                <a href="https://github.com/Rajdip019" target="_blank" className="mx-2">
                                <svg className=" mx-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                </a>                            </div>
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