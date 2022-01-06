
// URL: productdetailssell/sellerId/bookId

import Document from "../../../../document";
import Navbar from "../../../../components/Navbar";
import GeneralSidebar from "../../../../components/GeneralSidebar";
import ProductDetailsSell from "../../../../components/ProductDetailsSell";
import SoldModalButton from "../../../../components/SoldModalButton";
import DeleteModalButton from "../../../../components/DeleteModalButton";
import { Avatar } from "@chakra-ui/react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { template } from "../../../../../helpers/template";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

export default function ProductDetailsSellPage({
  sellBooksDetails,
  UserBookDetails,
}) {

  const {data : session} = useSession();
  const mail = session?.user?.email;

  const [progress, setProgress] = useState(0);

  return (
    <>
      <Document />
      <Navbar />
      <LoadingBar
        color="#4287f5"
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <GeneralSidebar title="Book Details" />

      {UserBookDetails.email != mail && (
            <div className="lg:ml-[350px] my-[35vh] lg:w-[calc(100%-350px)]">
          <h1 className="text-4xl text-gray-500 text-center">You Do not Have Access to this Page!</h1>
          <h1 className="text-2xl text-gray-500 text-center mt-3">This page can only be accessed by Admin</h1>
          <Link href={`/productdetailssell/${UserBookDetails._id}/${sellBooksDetails._id}`}>
          <p className="mx-[20vw] rounded-3xl text-center mt-5 bg-skin-lightBlue text-skin-darkBlue hover:bg-skin-hoverBlue px-4 py-2 font-semibold text-xl cursor-pointer" onClick={()=> {setProgress(30)}}>Go to Visitor View</p>
          </Link>
          </div>
        ) }

      {mail === UserBookDetails.email && (
        <>

      <div className=" mr-6 lg:ml-[300px]">
        <ProductDetailsSell
          name={sellBooksDetails.name}
          img={sellBooksDetails.photo}
          description={sellBooksDetails.description}
          category={sellBooksDetails.category}
          author={sellBooksDetails.author}
          condition={sellBooksDetails.condition}
          city={sellBooksDetails.city}
          country={sellBooksDetails.country}
          state={sellBooksDetails.state}
          landmark={sellBooksDetails.landmark}
          price={sellBooksDetails.price}
        />
      </div>

      {/* Admin Pannel Start */}

      <div className="lg:ml-[300px] bg-gray-50 pt-5 block text-center">
        <h2 className=" text-3xl font-semibold">Admin Pannel</h2>
        <div className="2xl:hidden items-center">
          <Avatar
            className="w-36 h-36 mt-5 "
            name={UserBookDetails.name}
            src={UserBookDetails.image}
            borderRadius="100%"
          ></Avatar>
          <h3 className=" text-xl font-semibold text-center">
            {UserBookDetails.name}
          </h3>
          <h4 className="text-center">{UserBookDetails.email}</h4>
        </div>
      </div>
      <div className="lg:ml-[300px] bg-gray-50 py-10 md:flex justify-center flex flex-col md:flex-row items-center">
        <div className="hidden 2xl:flex-col 2xl:flex  mr-[8vw] 2xl:items-center">
          <Avatar
            className="w-36 h-36 mb-5"
            name={UserBookDetails.name}
            src={UserBookDetails.image}
            borderRadius="100%"
          ></Avatar>
          <h3 className=" text-xl font-semibold text-center">
            {UserBookDetails.name}
          </h3>
          <h4 className="text-center">{UserBookDetails.email}</h4>
        </div>
        <Link href={'/productdetailssell/[uid]/[pid]/admin/edit'} as={`/productdetailssell/${UserBookDetails._id}/${sellBooksDetails._id}/admin/edit`}>
        <button className="h-[50px] w-10/12  md:w-auto bg-skin-lightBlue text-skin-darkBlue hover:bg-skin-hoverBlue px-4 py-2 text-lg font-bold rounded-lg transition-all xl:mx-10 lg:mx-5  mx-5 mt-4" onClick={()=> {setProgress(30)}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block pr-1 mb-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          Edit
        </button>
        </Link>
        <button className="h-[50px] w-10/12 md:w-auto bg-skin-lightBlue text-skin-darkBlue hover:bg-skin-hoverBlue px-4 py-2 text-lg font-bold rounded-lg transition-all xl:mx-10 lg:mx-4  mx-5 mt-4">
          <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block pr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          <SoldModalButton
            user_id={sellBooksDetails.seller_id}
            _id = {sellBooksDetails._id}
            name={sellBooksDetails.name}
            author={sellBooksDetails.author}
            img={sellBooksDetails.photo}
            condition={sellBooksDetails.condition}
            category={sellBooksDetails.category}
            description={sellBooksDetails.description}
            price={sellBooksDetails.price}
            seller_mail ={sellBooksDetails.seller_mail}
            seller_id ={sellBooksDetails.seller_id}
            adress = {sellBooksDetails.adress}
            landmark={sellBooksDetails.landmark}
            country={sellBooksDetails.country}
            state={sellBooksDetails.state}
            city={sellBooksDetails.city}
            pin = {sellBooksDetails.pin}
          />
          </div>
        </button>
        <button className="h-[50px] w-10/12 md:w-auto bg-skin-lightRed text-skin-darkRed hover:bg-red-100 px-4 py-2 text-lg font-bold rounded-lg transition-all xl:mx-10 lg:mx-4  mx-5 mt-4">
          <div className="flex justify-center items-center"> 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-flex pr-1 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          <DeleteModalButton 
            _id = {sellBooksDetails._id}
            seller_mail ={sellBooksDetails.seller_mail}
            user_id={sellBooksDetails.seller_id}
          />
          </div>
        </button>
        <Link href={'/productdetailssell/[uid]/[pid]'} as={`/productdetailssell/${UserBookDetails._id}/${sellBooksDetails._id}`}>
        <button className="h-[50px] w-10/12 md:w-auto bg-skin-lightBlue text-skin-darkBlue hover:bg-skin-hoverBlue px-4 py-2 text-lg font-bold rounded-lg transition-all xl:mx-10 lg:mx-4 sm:mx-3 mx-5 mt-4" onClick={()=> {setProgress(30)}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline pr-1 mb-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          </svg>
          Switch to Visitor View
        </button>
        </Link>
      </div>
      {/* Admin Pannel End */}
        </>
      )}
    </>
  );
}

export async function getServerSideProps({ params: { pid, uid } }) {
  const {templateString} = template;

  try{
    const res = await fetch(`${templateString}/api/sellbook/${pid}`);
    const res2 = await fetch(`${templateString}/api/user/userdetails/${uid}`);
    const data = await res.json();
    const data2 = await res2.json();
  
    if (!data || !data2 ) {
      return {
        notFound: true,
      }
    }
    
    return {
      props: {
        sellBooksDetails: data,
        UserBookDetails: data2,
      },
    };
    
  }catch{
    return{
      notFound: true,
    }
  }
}
