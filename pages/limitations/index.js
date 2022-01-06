import React from 'react'
import Navbar from '../components/Navbar'
import GeneralSidebar from '../components/GeneralSidebar'
import Document from '../document'

const index = () => {
    return (
        <>
        <Navbar/>
        <Document/>
        <GeneralSidebar title="Limits"/>
        <div className=' lg:ml-[350px] mr-[20px] ml-[20px]'>
            <h1 className="text-4xl font-semibold mt-16">Limitations</h1>
            <div className='text-xl font-medium mt-8 mb-10'>
                <p>As we have Azure for student subscription plan,We are allowed to spend 100$.There are certain limitations.When we used S1 tier or basic pricing plan we can have 50 indexes or 15 indexes respectively which is sufficient for our project but after enabling the service 50$ spent in only one day.So we were left with no other option except free plan where we can create only 1 index.So as we are opting free plan,We can't make 2 indexes for Sell & Donation both.So We haven't integrated Filter functionalities into the Donation page.The image of the subscription plan is shown beside</p>
                {/* <img src='/'></img> */}
            </div>
            
        </div>
        </>
    )
}

export default index
