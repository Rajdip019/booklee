import Document from "../../../../document";
import Navbar from "../../../../components/Navbar";
import GeneralSidebar from "../../../../components/GeneralSidebar";
import UserProfileOthers from "../../../../components/UserProfileOthers";
import UserProfileDonation from "../../../../components/UserProfileDonation";
import ProductCardSellingDisplayfav from "../../../../components/ProductCardSellingDisplayfav";
import ProductCardDonationDisplayfav from "../../../../components/ProductCardDonationDisplayfav";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Tabs, TabList, Tab, ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { template } from "../../../../../helpers/template";
import LoadingBar from "react-top-loading-bar";


export default function UserProfileSell({ UserDetails }) {
  const { templateString } = template;

  const [progress, setProgress] = useState(0);

  const [favbookS, setFavBookS] = useState([]);
  const [favbookD, setFavBookD] = useState([]);
  const [profile, setprofile] = useState(false);
  const router = useRouter();

  const { data: session } = useSession();
  const mail = session?.user?.email;

  useEffect(() => {
    handleBookS();
  }, []);

  const handleBookS = async () => {
    setProgress(30)
    const res = await fetch(`${templateString}/api/user/bookS`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: UserDetails.favbookSid,
      }),
    });
    setProgress(90)
    const bookData = await res.json();
    setFavBookS(bookData);
    setProgress(100)
  };

  useEffect(() => {
    handleBookD();
  }, []);

  const handleBookD = async () => {
    setProgress(30)
    const res = await fetch(`${templateString}/api/user/bookD`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: UserDetails.favbookDid,
      }),
    });
    setProgress(90)
    const bookData = await res.json();
    setFavBookD(bookData);
    setProgress(100)
  };

  const handleRender = () => {
    setProgress(30)
    router.push(`/profile/${UserDetails._id}/admin/favourite/save`);
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
      <GeneralSidebar title="Favourite Books" />

      {!session && (
        <>
          <div className="ml-[0px] lg:ml-[300px] lg:w-[calc(100%-300px)]">
            <div className="flex justify-center mt-[28vh] lg:mt-[38vh]">
              <h1 className="text-3xl">Oops, You are not Signed In!</h1>
            </div>
            <div className="flex justify-center mt-5">
              <Link href="/auth/signin">
                <button
                  className="bg-skin-lightBlue hover:bg-skin-hoverBlue text-skin-darkBlue px-6 py-4 rounded-lg font-bold text-xl"
                  onClick={() => setProgress(30)}
                >
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
              <h1 className="text-4xl text-gray-500 text-center">
                You Do not Have Access to this Page!
              </h1>
              <h1 className="text-2xl text-gray-500 text-center mt-3">
                This page can only be accessed by Admin
              </h1>
              <Link href={`/profile/${UserDetails._id}`}>
                <p
                  className="mx-[20vw] rounded-3xl text-center mt-5 bg-skin-lightBlue text-skin-darkBlue hover:bg-skin-hoverBlue px-4 py-2 font-semibold text-xl cursor-pointer "
                  onClick={() => setProgress(30)}
                >
                  Go to Visitor View
                </p>
              </Link>
            </div>
          )}

          {UserDetails.email === session?.user?.email && (
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
              </div>
              {/* Toggle Button Finish */}

              {profile ? (
                <>
                  <div className=" items-center">
                    <div className="lg:ml-[300px] my-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:w-[calc(100%-350px)] align-middle">
                      {favbookD?.map((Book) => {
                        return (
                          <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                            <div
                              onClick={() => {
                                setProgress(30);
                              }}
                            >
                              <ProductCardDonationDisplayfav
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

                  <button
                    className="fixed right-10 bottom-10 bg-skin-darkGreen rounded-full text-skin-lightGreen p-4 shadow-xl hover:bg-green-600 transition-all"
                    onClick={() => {
                      handleRender();
                      setProgress(30);
                    }}
                  >
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
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                      />
                    </svg>
                  </button>
                </>
              ) : (
                <>
                  <div className=" items-center">
                    <div className="lg:ml-[300px] my-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:w-[calc(100%-350px)] align-middle">
                      {favbookS?.map((Book) => {
                        return (
                          <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                            <div
                              onClick={() => {
                                setProgress(30);
                              }}
                            >
                              <ProductCardSellingDisplayfav
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
                  <button
                    className="fixed right-10 bottom-10 bg-skin-darkBlue rounded-full text-skin-lightBlue p-4 hover:bg-skin-lightBlue hover:text-skin-darkBlue shadow-xl transition-all"
                    onClick={() => handleRender()}
                  >
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
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                      />
                    </svg>
                  </button>
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
