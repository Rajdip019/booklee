import Document from "../../document";
import Navbar from "../../components/Navbar";
import GeneralSidebar from "../../components/GeneralSidebar";
import UserProfileOthers from "../../components/UserProfileOthers";
import UserProfileDonation from "../../components/UserProfileDonation";
import ProductCardSellingDisplay from "../../components/ProductCardSellingDisplay";
import ProductCardDonationDisplay from "../../components/ProductCardDonationDisplay";
import ProductSoldOutCard from "../../components/ProductSoldOutCard";
import ProductDonatedCard from "../../components/ProductDonatedCard";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Tabs, TabList, Tab, ChakraProvider } from "@chakra-ui/react";

function bookCardsD(Book) {
  return (
    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
      <ProductCardDonationDisplay
        _id={Book._id}
        seller_id={Book.seller_id}
        name={Book.name}
        img={Book.photo}
        price={Book.Price}
        condition={Book.condition}
        category={Book.category}
      />
    </div>
  );
}

function bookCardsoldD(Book) {
  return (
    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
      <ProductDonatedCard
        _id={Book._id}
        seller_id={Book.seller_id}
        name={Book.name}
        img={Book.photo}
        price={Book.Price}
        condition={Book.condition}
        category={Book.category}
      />
    </div>
  );
}

function bookCards(Book) {
  return (
    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
      <ProductCardSellingDisplay
        _id={Book._id}
        seller_id={Book.seller_id}
        name={Book.name}
        img={Book.photo}
        price={Book.price}
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
        _id={Book._id}
        seller_id={Book.seller_id}
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
  const [bookS, setBookS] = useState([]);
  const [bookD, setBookD] = useState([]);
  const [soldBook, setSoldBook] = useState([]);
  const [donateBook, setDonatedBook] = useState([])
  const [profile, setprofile] = useState(false);
  // const [isbookS , setisbookS] = useState(false);
  // const [isbookD , setisbookD] = useState(false);
  // const [isbookSold , setisbookSold] = useState(false);
  // const [isbookDonated , setisbookDonated] = useState(false);

  useEffect(() => {
    handleBookD();
  }, []);
  // const isBookSFunc = () => {
  //   if(UserDetails.bookDid.Array?.length !== 0 ){
  //     setisbookS(true)
  //   }
  // }
  // const isbookSoldFunc = () => {
  //   if(UserDetails.bookDid.length !== 0 ){
  //     setisbookSold(true)
  //   }
  // }
  // const isbookDFunc = () => {
  //   if(UserDetails.bookDid.length !== 0 ){
  //     setisbookD(true)
  //   }
  // }
  // const isbookDonatedFunc = () => {
  //   if(UserDetails.bookDid.length !== 0 ){
  //     setisbookDonated(true)
  //   }
  // }
  const handleBookD = async () => {
    const res = await fetch("https://booklee.vercel.app/api/user/bookD", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: UserDetails.bookDid,
      }),
    });
    const bookData = await res.json();
    setBookD(bookData);
  };

  useEffect(() => {
    handleBookS();
  }, []);

  const handleBookS = async () => {
    const res = await fetch("https://booklee.vercel.app/api/user/bookS", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: UserDetails.bookSid,
      }),
    });
    const bookData = await res.json();
    setBookS(bookData);
  };

  
  useEffect(() => {
    handleBookSold();
  }, []);


  const handleBookSold = async () => {
    const res = await fetch("https://booklee.vercel.app/api/user/soldbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: UserDetails.bookSoldid,
      }),
    });
    const bookData = await res.json();
    setSoldBook(bookData);
  };

  useEffect(() => {
    handleBookDonated();
  }, []);

  const handleBookDonated = async () => {
    const res = await fetch("https://booklee.vercel.app/api/user/donatedbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: UserDetails.bookDonatedid,
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
            {UserDetails.email === session?.user?.email && (
              <div>
                <Link href={`/profile/${UserDetails._id}/admin`}>
                  <button className="ml-10 mt-5 sm:mt-0 bg-skin-lightBlue text-skin-darkBlue px-4 py-2 font-semibold rounded-3xl hover:bg-skin-hoverBlue">
                    Switch to Admin View
                  </button>
                </Link>
              </div>
            )}
          </div>
          {/* Toggle Button Finish */}

          {profile ? (
            <>
              <div className=" items-center">
                <div className="lg:ml-[300px] my-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:w-[calc(100%-350px)] align-middle">
                  {bookD.map(bookCardsD)}
                </div>
              </div>
              <div className="lg:ml-[350px] my-14 text-3xl font-semibold mx-auto">
                <h1 className="text-center lg:text-left">Donated</h1>
                <hr />
              </div>
              <div className="lg:ml-[300px] my-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:w-[calc(100%-350px)] align-middle">
                {donateBook.map(bookCardsoldD)}
              </div>
            </>
          ) : (
            <>
              <div className=" items-center">
                <div className="lg:ml-[300px] my-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:w-[calc(100%-350px)] align-middle">
                  {bookS.map(bookCards)}
                </div>
              </div>
              <div className="lg:ml-[350px] my-14 text-3xl font-semibold mx-auto">
                <h1 className="text-center lg:text-left">Sold Out</h1>
                <hr />
              </div>
              <div className="lg:ml-[300px] my-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:w-[calc(100%-350px)] align-middle">
                {soldBook.map(bookCardsold)}
              </div>
            </>
          )}
        </>

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
