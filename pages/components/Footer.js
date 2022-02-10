import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <div className="grid md:grid-cols-5 bg-skin-lightBlue p-10 grid-cols-1 mt-10">
                <div className=" text-center m-auto">
                    <img className="w-56 m-auto" src="/Logo.png" alt="logo" />
                    <p className="hidden lg:block">Your simple donation can change another's life.</p>
                </div>
                <div className=" m-auto text-center md:text-left my-7">
                    <h2 className="text-xl font-bold mb-2">Know Us</h2>
                    <Link href="/aboutus">
                    <a className="py-2 hover:underline transition-all">About</a>
                    </Link>
                    <Link href="/projectdetails">
                    <a className="block py-2 hover:underline transition-all">Project Details</a>
                    </Link>
                </div>
                <div className="m-auto text-center md:text-left my-7">
                    <h2 className="text-xl font-bold mb-2">Security</h2>
                    <Link href="/privacypolicy">
                    <a className="py-2 hover:underline transition-all">Privacy Policy</a>
                    </Link>
                    <Link href="/termsofuse">
                    <a className="block py-2 hover:underline transition-all">Terms of Use</a>
                    </Link>
                </div>
                <div className="m-auto text-center md:text-left my-7">
                    <h2 className="text-xl font-bold mb-2">Contact & Help</h2>
                    <Link href="/faq">
                    <a className="py-2 hover:underline transition-all">FAQ</a>
                    </Link>
                    <Link href="/contact">
                    <a className="block py-2 hover:underline transition-all">Contact</a>
                    </Link>
                </div>
                <div className="m-auto text-center md:text-left my-7">

                    <h2 className="text-xl font-bold mb-2">Social Media</h2>
                    <a href="https://twitter.com/RajdeepS019" target="_blank">
                    <div>
                    <svg className="inline" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="20" height="20"
                            viewBox="0 0 48 48"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path></svg>
                        <span className="py-2 hover:underline transition-all pl-2">Rajdeep's Twitter </span>
                    </div>
                    </a>
                    <a href="https://twitter.com/itsdebajyoti" target="_blank">
                    <div>
                        <svg className="inline" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="20" height="20"
                            viewBox="0 0 48 48"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path></svg>
                        <span className="py-2 hover:underline transition-all pl-2">Debajyoti's Twitter</span>
                    </div>
                    </a>
                </div>
            </div>
            <div className="bg-black flex justify-between px-[7vw] sm:flex-row flex-col py-5">
                <p className="text-center text-white ">Copyright&copy; Booklee 2022</p>

                <p className="text-center text-white sm:pt-0 pt-4 cursor-pointer">Powered by Booklee</p>

            </div>
        </>
    )
}

export default Footer
