import Document from "../../document";
import Navbar from "../../components/Navbar";
import GeneralSidebar from "../../components/GeneralSidebar";
import UserProfileOthers from "../../components/UserProfileOthers";
import UserProfileDonation from "../../components/UserProfileDonation";
import ProductCardSellingDisplay from "../../components/ProductCardSellingDisplay";
import ProductCardDonationDisplay from "../../components/ProductCardDonationDisplay";
import ProductSoldOutCardN from "../../components/ProductCardSoldOutN";
import ProductDonatedCardN from "../../components/ProductCardDonatedN";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Tabs, TabList, Tab, ChakraProvider } from "@chakra-ui/react";
import { template } from "../../../helpers/template";
import LoadingBar from "react-top-loading-bar";
import CardSkeleton from "../../components/CardSkeleton";

export default function UserProfile({ UserDetails }) {
  const { templateString } = template;

  const [isFetched, setISFetched] = useState(true);

  const [progress, setProgress] = useState(0);

  const { data: session } = useSession();
  const [bookS, setBookS] = useState([]);
  const [bookD, setBookD] = useState([]);
  const [soldBook, setSoldBook] = useState([]);
  const [donateBook, setDonatedBook] = useState([]);
  const [profile, setprofile] = useState(false);

  useEffect(() => {
    handleBookD();
  }, []);

  const handleBookD = async () => {
    const res = await fetch(`${templateString}/api/user/bookD`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: UserDetails.bookDid,
      }),
    });
    setISFetched(false);
    const bookData = await res.json();
    setBookD(bookData);
  };

  useEffect(() => {
    handleBookS();
  }, []);

  const handleBookS = async () => {
    setProgress(30);
    const res = await fetch(`${templateString}/api/user/bookS`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: UserDetails.bookSid,
      }),
    });
    setISFetched(false);
    setProgress(90);
    const bookData = await res.json();
    setBookS(bookData);
    setProgress(100);
  };

  useEffect(() => {
    handleBookSold();
  }, []);

  const handleBookSold = async () => {
    const res = await fetch(`${templateString}/api/user/soldbook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: UserDetails.bookSoldid,
      }),
    });
    setISFetched(false);
    const bookData = await res.json();
    setSoldBook(bookData);
  };

  useEffect(() => {
    handleBookDonated();
  }, []);

  const handleBookDonated = async () => {
    const res = await fetch(`${templateString}/api/user/donatedbook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: UserDetails.bookDonatedid,
      }),
    });
    setISFetched(false);
    const bookData = await res.json();
    setDonatedBook(bookData);
  };

  const topLoader = () => {
    setProgress(30);
  };

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
      <GeneralSidebar title="User Profile" />

      <>
        {profile ? (
          <UserProfileDonation
            id={UserDetails._id}
            name={UserDetails.name}
            email={UserDetails.email}
            image={UserDetails.image}
            topLoader={topLoader}
          />
        ) : (
          <UserProfileOthers
            id={UserDetails._id}
            name={UserDetails.name}
            email={UserDetails.email}
            image={UserDetails.image}
            topLoader={topLoader}
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
                        setProgress(100);
                      }}
                    >
                      Educational
                    </Tab>
                    <Tab
                      className="w-[150px] "
                      onClick={() => {
                        setprofile(false);
                        setProgress(100);
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
                        setProgress(100);
                      }}
                    >
                      Educational
                    </Tab>
                    <Tab
                      className="w-[150px] "
                      onClick={() => {
                        setprofile(false);
                        setProgress(100);
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
                <button
                  className="ml-10 mt-5 sm:mt-0 bg-skin-lightBlue text-skin-darkBlue px-4 py-2 font-semibold rounded-3xl hover:bg-skin-hoverBlue"
                  onClick={() => setProgress(30)}
                >
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
                {isFetched ? (
                  <>
                    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                      <CardSkeleton />
                    </div>
                    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                      <CardSkeleton />
                    </div>
                    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                      <CardSkeleton />
                    </div>
                    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                      <CardSkeleton />
                    </div>
                  </>
                ) : null}
                {bookD?.map((Book) => {
                  return (
                    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                      <div
                        onClick={() => {
                          setProgress(30);
                        }}
                      >
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
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="lg:ml-[350px] my-14 text-3xl font-semibold mx-auto">
              <h1 className="text-center lg:text-left">Donated</h1>
              <hr />
            </div>
            <div className="lg:ml-[300px] my-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:w-[calc(100%-350px)] align-middle">
              {isFetched ? (
                <>
                  <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                    <CardSkeleton />
                  </div>
                  <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                    <CardSkeleton />
                  </div>
                  <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                    <CardSkeleton />
                  </div>
                  <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                    <CardSkeleton />
                  </div>
                </>
              ) : null}
              {donateBook?.map((Book) => {
                return (
                  <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                    <div>
                      <ProductDonatedCardN
                        _id={Book._id}
                        seller_id={Book.seller_id}
                        name={Book.name}
                        img={Book.photo}
                        price={Book.Price}
                        condition={Book.condition}
                        category={Book.category}
                        topLoader={topLoader}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div className=" items-center">
              <div className="lg:ml-[300px] my-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:w-[calc(100%-350px)] align-middle">
                {isFetched ? (
                  <>
                    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                      <CardSkeleton />
                    </div>
                    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                      <CardSkeleton />
                    </div>
                    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                      <CardSkeleton />
                    </div>
                    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                      <CardSkeleton />
                    </div>
                  </>
                ) : null}
                {bookS?.map((Book) => {
                  return (
                    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                      <div
                        onClick={() => {
                          setProgress(30);
                        }}
                      >
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
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="lg:ml-[350px] my-14 text-3xl font-semibold mx-auto">
              <h1 className="text-center lg:text-left">Sold Out</h1>
              <hr />
            </div>
            <div className="lg:ml-[300px] my-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:w-[calc(100%-350px)] align-middle">
              {isFetched ? (
                <>
                  <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                    <CardSkeleton />
                  </div>
                  <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                    <CardSkeleton />
                  </div>
                  <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                    <CardSkeleton />
                  </div>
                  <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                    <CardSkeleton />
                  </div>
                </>
              ) : null}
              {soldBook?.map((Book) => {
                return (
                  <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                    <div>
                      <ProductSoldOutCardN
                        _id={Book._id}
                        seller_id={Book.seller_id}
                        name={Book.name}
                        img={Book.photo}
                        price={Book.price}
                        condition={Book.condition}
                        category={Book.category}
                        topLoader={topLoader}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </>
    </>
  );
}

export async function getServerSideProps({ params: { uid } }) {
  const { templateString } = template;

  try {
    const res = await fetch(`${templateString}/api/user/userdetails/${uid}`);
    const data = await res.json();
    return {
      props: {
        UserDetails: data,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
