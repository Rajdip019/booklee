import React, {useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import Document from "../../../document";
import { template } from "../../../../helpers/template";

const index = ({ soldBooksDetails }) => {

  const {templateString} = template;
  
  const router = useRouter();
  const {data : session } = useSession()
  const mail = session?.user?.email;

  const [id, setId] = useState("");

  const havesession =async ()=> {
    const fetchSession =  await getSession()
    const sessionMail = fetchSession?.user?.email;
    if(sessionMail){
      const res = await fetch(`${templateString}/api/user/${sessionMail}`)
      const userData = await res.json()
      setId(userData._id)
    }
  }
  havesession()

  return (
    <div>
    <Document />
    {(soldBooksDetails.seller_mail != mail && soldBooksDetails.buyer_mail != mail) && (
      <div className="lg:ml-[350px] my-[35vh] lg:w-[calc(100%-350px)]">
          <h1 className="text-4xl text-gray-500 text-center">You Do not Have Access to this Page!</h1>
          <h1 className="text-2xl text-gray-500 text-center mt-3">This page can only be accessed by Admin</h1>
          <Link href="/">
          <p className="mx-[20vw] rounded-3xl text-center mt-5 bg-skin-lightBlue text-skin-darkBlue hover:bg-skin-hoverBlue px-4 py-2 font-semibold text-xl cursor-pointer">Go to Home</p>
          </Link>
          </div>
    )}
      {(soldBooksDetails.seller_mail === mail || soldBooksDetails.buyer_mail === mail) && (
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl text-center font-semibold my-10">Invoice</h1>
        <div className="bg-gray-50 px-8 py-4 rounded-2xl">
          <h1 className="text-2xl font-semibold mb-2 underline">
            Order Details
          </h1>
          <div className="flex flex-row flex-wrap justify-between items-start">
            <div className="flex items-center">
              <h3 className="font-semibold text-gray-800 text-lg mr-2">
                Order_ID:
              </h3>
              <h2 className="text-slate-900 font-medium text-md">
                {soldBooksDetails._id}
              </h2>
            </div>


              <div className="flex items-center">
                <h3 className="font-semibold text-gray-800 text-lg mr-2">
                  Date:
                </h3>
                <h2 className="text-slate-900 font-medium text-md">
                  {soldBooksDetails.date}
                </h2>
              </div>
              <div className="flex items-center">

                <h3 className="font-semibold text-gray-800 text-lg mr-2">
                  Time:
                </h3>
                <h2 className="text-slate-900 font-medium text-md">
                  {soldBooksDetails.time}
                </h2>
              </div>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="bg-gray-50 px-8 py-4 rounded-2xl">
          <h1 className="text-2xl font-semibold mb-2 underline">
            Book Details
          </h1>
          <div className="flex flex-wrap justify-between ">
            <div>
              <div className="flex items-center">
                <h3 className="font-semibold text-gray-800 text-lg mr-2">
                  Book Name:
                </h3>
                <h2 className="text-slate-900 font-medium text-md">
                  {soldBooksDetails.name}
                </h2>
              </div>
              <div className="flex items-center">
                <h3 className="font-semibold text-gray-800 text-lg mr-2">
                  Author:
                </h3>
                <h2 className="text-slate-900 font-medium text-md">
                  {soldBooksDetails.author}
                </h2>
              </div>
              <div className="flex items-center">
                <h3 className="font-semibold text-gray-800 text-lg mr-2">
                  Price:
                </h3>
                <h2 className="text-slate-900 font-medium text-md">
                  {soldBooksDetails.price}
                </h2>
              </div>
              <div className="flex items-center">
                <h3 className="font-semibold text-gray-800 text-lg mr-2">
                  Condition:
                </h3>
                <h2 className="text-slate-900 font-medium text-md">
                  {soldBooksDetails.condition}
                </h2>
              </div>
              <div className="flex items-center">
                <h3 className="font-semibold text-gray-800 text-lg mr-2">
                  Category:
                </h3>
                <h2 className="text-slate-900 font-medium text-md">
                  {soldBooksDetails.category}
                </h2>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <h3 className="font-semibold text-gray-800 text-lg mr-2">
                  Address:
                </h3>
                <h2 className="text-slate-900 font-medium text-md">
                  {soldBooksDetails.adress}
                </h2>
              </div>
              <div className="flex items-center">
                <h3 className="font-semibold text-gray-800 text-lg mr-2">
                  City:
                </h3>
                <h2 className="text-slate-900 font-medium text-md">
                  {soldBooksDetails.city}
                </h2>
              </div>
              <div className="flex items-center">
                <h3 className="font-semibold text-gray-800 text-lg mr-2">
                  State:
                </h3>
                <h2 className="text-slate-900 font-medium text-md">
                  {soldBooksDetails.state}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="bg-gray-50 px-8 py-4 rounded-2xl">
          <h1 className="text-2xl font-semibold mb-2 underline">
            Seller Details
          </h1>

          <div className="flex items-center">
            <h3 className="font-semibold text-gray-800 text-lg mr-2">
              Name:
            </h3>
            <h2 className="text-slate-900 font-medium text-md">
              {soldBooksDetails.seller_name}
            </h2>
          </div>
          <div className="flex items-center">
            <h3 className="font-semibold text-gray-800 text-lg mr-2">Email:</h3>
            <h2 className="text-slate-900 font-medium text-md">
              {soldBooksDetails.seller_mail}
            </h2>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="bg-gray-50 px-8 py-4 rounded-2xl mb-10">
          <h1 className="text-2xl font-semibold mb-2 underline">
            Buyer Details
          </h1>
          <div className="flex items-center">
            <h3 className="font-semibold text-gray-800 text-lg mr-2">
              Name:
            </h3>
            <h2 className="text-slate-900 font-medium text-md">
              {soldBooksDetails.buyer_name}
            </h2>
          </div>
          <div className="flex items-center">
            <h3 className="font-semibold text-gray-800 text-lg mr-2">Email:</h3>
            <h2 className="text-slate-900 font-medium text-md">
              {soldBooksDetails.buyer_mail}
            </h2>
          </div>
        </div>
        <div className="mb-10">
        {
          typeof window !== "undefined" && (
            <button
              className="text-lg font-bold bg-skin-lightBlue px-4 py-2 rounded-xl text-skin-darkBlue hover:bg-skin-hoverBlue transition-all"
              onClick={() => {
                window.print();
                router.reload;
              }}
            >
              Save
            </button>
          )
          // browser code
        }
        <Link href={'/profile/[uid]/admin/orders'} as={`/profile/${id}/admin/orders`}>
          <button className="text-lg font-bold bg-skin-lightBlue px-4 py-2 mx-5 rounded-xl text-skin-darkBlue hover:bg-skin-hoverBlue transition-all">
            Go to Orders
          </button>
        </Link>

        </div>
      </div>

      )}
    </div>
  );
};

export async function getServerSideProps({ params: { order_id } }) {
  const {templateString} = template;

  try {
    const res = await fetch(`${templateString}/api/soldbook/${order_id}`);
    const data = await res.json();
    return {
      props: {
        soldBooksDetails: data,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

export default index;
