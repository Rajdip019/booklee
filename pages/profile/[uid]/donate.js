import Document from "../../document";
import Navbar from "../../components/Navbar";
import GeneralSidebar from "../../components/GeneralSidebar";
import UserProfileDonation from "../../components/UserProfileDonation";
import ProductCardDonationMakeProof from "../../components/ProductCardDonationMakeProof";
import ProductDonatedCard from "../../components/ProductDonatedCard";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

function bookCards(Book){
    return(
    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
    <ProductCardDonationMakeProof
      name= {Book.name}
      img = {Book.photo}
      price = {Book.Price}
      condition = {Book.condition}
      category = {Book.category}
       />
    </div>
    )
  }


function bookCardsold(Book){
    return(
    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
    <ProductDonatedCard
      name= {Book.name}
      img = {Book.photo}
      price = {Book.Price}
      condition = {Book.condition}
      category = {Book.category}
       />
    </div>
    )
}  



export default function UserProfileDonate({UserDetails}) {

  const [bookD, setBookD] = useState([]);
  
  useEffect(() => {
    handleSubmit();  
    },[]) 

  const handleSubmit = async () => {
   
    const res = await fetch("https://booklee.vercel.app/api/user/bookD", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id : UserDetails.bookDid
      }),
    });
    const bookData = await res.json();
    setBookD(bookData)
  };


  const {data :  session} = useSession();

    return (
      <>  
      <Document />
      <Navbar/>
      <GeneralSidebar title="User Profile"/>
      {!session &&(
      <>
      <div className="ml-[0px] lg:ml-[300px] lg:w-[calc(100%-300px)]">
      <div className="flex justify-center mt-[28vh] lg:mt-[38vh]">
      <h1 className="text-3xl">Oops, You are not Signed In!</h1>
      </div>
      <div className="flex justify-center mt-5">
      <Link href="/auth/signin">
      <button className="bg-skin-lightBlue hover:bg-skin-hoverBlue text-skin-darkBlue px-6 py-4 rounded-lg font-bold text-xl">Sign In</button>
      </Link>
      </div>
      </div>
      </>
    )}

    {session && (
      <>
      <UserProfileDonation
        id = {UserDetails._id}
        name = {UserDetails.name}
        email = {UserDetails.email}
        image = {UserDetails.image}
      />
      <div className=" ml-[30px] mt-10  lg:ml-[350px]">
      <ToggleButtonDonate />
      </div>
      <div className=" items-center">
      <div className="lg:ml-[300px] my-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:w-[calc(100%-350px)] align-middle">
      {bookD.map(bookCards)}
      </div>
      </div>
      <div className="lg:ml-[350px] my-14 text-3xl font-semibold mx-auto">
      <h1 className="text-center lg:text-left">Sold Out</h1>
      <hr  />
      </div>
      <div className="lg:ml-[300px] my-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:w-[calc(100%-350px)] align-middle">
      {BookD.map(bookCardsold)}
      </div>
      <Link href="/ListBookForDonating">
      <button className="fixed right-10 bottom-10 bg-skin-darkGreen rounded-full text-skin-lightGreen p-4 shadow-xl"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg></button>
      </Link>
      </>
    )}
      </>
    )
  }

  export async function getServerSideProps({params:{uid}}) {
    try{
      const res = await fetch(`https://booklee.vercel.app/api/user/userdetails/${uid}`);
      const data = await res.json()
      return{
        props:{
          UserDetails : data,
        }
      }
    }catch{
      return{
        notFound: true,
      }
    }
  }