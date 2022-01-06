import Document from "../../../document";
import Navbar from "../../../components/Navbar";
import GeneralSidebar from "../../../components/GeneralSidebar";
import UserProfileOthers from "../../../components/UserProfileOthers";
import UserProfileDonation from "../../../components/UserProfileDonation";
import ProductDonatedCard from "../../../components/ProductDonatedCard";
import ProductSoldOutCard from "../../../components/ProductSoldOutCard";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Tabs, TabList, Tab, ChakraProvider } from "@chakra-ui/react";




function bookCardsoldD(Book) {
  return (
    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
      <ProductDonatedCard
        _id = {Book._id}
        seller_id = {Book.seller_id}
        name={Book.name}
        img={Book.photo}
        price={Book.Price}
        condition={Book.condition}
        category={Book.category}
      />
    </div>
  );
}


function bookCardsold(Book) {
  return (
    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
      <ProductSoldOutCard
        _id = {Book._id}
        seller_id = {Book.seller_id}
        name={Book.name}
        img={Book.photo}
        price={Book.price}
        condition={Book.condition}
        category={Book.category}
      />
    </div>
  );
}

export default function UserProfile({ UserDetails }) {
  const { data: session } = useSession();
  const [soldBook, setSoldBook] = useState([]);
  const [donateBook, setDonatedBook] = useState([])
  const [profile, setprofile] = useState(false);
  
  
    useEffect(() => {
      handleBookDonated();
      handleBookSold();
    }, []);

  const handleBookSold = async () => {
    const res = await fetch("https://booklee.vercel.app/api/user/orderedbooks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: UserDetails.orderBook_id,
      }),
    });
    const bookData = await res.json();
    setSoldBook(bookData);
  };

  const handleBookDonated = async () => {
    const res = await fetch("https://booklee.vercel.app/api/user/getbooks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: UserDetails.getBook_id,
      }),
    });
    const bookData = await res.json();
    setDonatedBook(bookData);
  };

  return (
    <>
      <Document />
      <Navbar />
      <GeneralSidebar title="User Profile" />
      {!session && (
        <>
          <div className="ml-[0px] lg:ml-[300px] lg:w-[calc(100%-300px)]">
            <div className="flex justify-center mt-[28vh] lg:mt-[38vh]">
              <h1 className="text-3xl">Oops, You are not Signed In!</h1>
            </div>
            <div className="flex justify-center mt-5">
              <Link href="/auth/signin">
                <button className="bg-skin-lightBlue hover:bg-skin-hoverBlue text-skin-darkBlue px-6 py-4 rounded-lg font-bold text-xl">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </>
      )}

      {session && (
        <>
        {UserDetails.email != session?.user?.email && (
            <div className="lg:ml-[350px] my-[35vh] lg:w-[calc(100%-350px)]">
          <h1 className="text-4xl text-gray-500 text-center">You Do not Have Access to this Page!</h1>
          <h1 className="text-2xl text-gray-500 text-center mt-3">This page can only be accessed by Admin</h1>
          <Link href={`/profile/${UserDetails._id}`}>
          <p className="mx-[20vw] rounded-3xl text-center mt-5 bg-skin-lightBlue text-skin-darkBlue hover:bg-skin-hoverBlue px-4 py-2 font-semibold text-xl cursor-pointer">Go to Visitor View</p>
          </Link>
          </div>
        ) }
        {UserDetails.email === session?.user?.email && (
            <>
          {profile ? (
            <UserProfileDonation
              id={UserDetails._id}
              name={UserDetails.name}
              email={UserDetails.email}
              image={UserDetails.image}
            />
          ) : (
            <UserProfileOthers
              id={UserDetails._id}
              name={UserDetails.name}
              email={UserDetails.email}
              image={UserDetails.image}
            />
          )}
          <div className=" ml-[30px] mt-10  lg:ml-[350px] flex-row sm:flex sm:items-center">
            {/* Toggle Button */}

            {profile ? (
              <div>
                <ChakraProvider>
                  <Tabs
                    variant="soft-rounded"
                    colorScheme="green"
                    size="lg"
                    orientation="horizontal"
                  >
                    <TabList className="bg-blue-50 w-[300px] rounded-3xl shadow-lg">
                      <Tab
                        className="w-[160px]"
                        onClick={() => {
                          setprofile(true);
                        }}
                      >
                        Educational
                      </Tab>
                      <Tab
                        className="w-[150px] "
                        onClick={() => {
                          setprofile(false);
                        }}
                      >
                        
                        Others
                      </Tab>
                    </TabList>
                  </Tabs>
                </ChakraProvider>
              </div>
            ) : (
              <div>
                <ChakraProvider>
                  <Tabs
                    variant="soft-rounded"
                    colorScheme="blue"
                    size="lg"
                    orientation="horizontal"
                    defaultIndex={1}
                  >
                    <TabList className="bg-blue-50 w-[300px] rounded-3xl shadow-lg">
                      <Tab
                        className="w-[160px]"
                        onClick={() => {
                          setprofile(true);
                        }}
                      >
                        Educational
                      </Tab>
                      <Tab
                        className="w-[150px] "
                        onClick={() => {
                          setprofile(false);
                        }}
                      >
                       
                        Others
                      </Tab>
                    </TabList>
                  </Tabs>
                </ChakraProvider>
              </div>
            )}
          </div>
          {/* Toggle Button Finish */}

          {profile ? (
            <>
              <div className="lg:ml-[300px] my-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:w-[calc(100%-350px)] align-middle">
                {donateBook.map(bookCardsoldD)}
              </div>
              <Link href="/ListBookForDonating">
                <button className="fixed right-10 bottom-10 bg-skin-darkGreen rounded-full text-skin-lightGreen p-4 shadow-xl hover:bg-green-600 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </Link>
            </>
          ) : (
            <>
              <div className="lg:ml-[300px] my-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:w-[calc(100%-350px)] align-middle">
                {soldBook.map(bookCardsold)}
              </div>
              <Link href="/ListBookForSelling">
                <button className="fixed right-10 bottom-10 bg-skin-darkBlue rounded-full text-skin-lightBlue p-4 hover:bg-skin-lightBlue hover:text-skin-darkBlue shadow-xl transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </Link>
            </>
        )}
            </>
          )}
        </>
      )}
    </>
  );
}

export async function getServerSideProps({ params: { uid } }) {
  try{
    const res = await fetch(`https://booklee.vercel.app/api/user/userdetails/${uid}`);
    const data = await res.json();
    return {
      props: {
        UserDetails: data,
      },
    };
  }catch{
    return{
      notFound: true,
    }
  }
}
