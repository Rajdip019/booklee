import React from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  ChakraProvider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
} from "@chakra-ui/react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";
import { template } from "../../helpers/template";

const Navbar = (props) => {
  const { templateString } = template;
  const [searchInput, setSearchInput] = useState(null);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { data: session } = useSession();

  const [id, setId] = useState("");

  const havesession = async () => {
    const sessionMail = session?.user?.email;
    if (sessionMail) {
      const res = await fetch(`${templateString}/api/user/${sessionMail}`);
      const userData = await res.json();
      setId(userData._id);
    }
  };
  havesession();

  const search = () => {
    setProgress(100);
    router.push({
      pathname: "/search/sell",
      query: {
        book: searchInput,
      },
    });
  };

  const [progress, setProgress] = useState(0);

  return (
    <div className="shadow-lg md:sticky top-0 z-40">
      <LoadingBar
        color="#4287f5"
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {session && (
        <nav className="bg-white flex justify-between max-w-8xl sm:px-6 lg:px-[200px]">
          <div className="flex-shrink-0 cursor-pointer">
            <Link href="/">
              <Avatar
                className="flex justify-start h-20 w-auto ml-5"
                src="/Logo.png"
                alt="Workflow"
                onClick={() => {
                  setProgress(100);
                }}
              />
            </Link>
          </div>
          <div className="w-[25vw] flex">
            <input
              value={searchInput}
              type="text"
              placeholder={props.book ? props.book : "Search a Book"}
              className="hidden xl:block bg-gray-200 h-10  my-5 w-full rounded-r-none"
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={(event) => {
                event.key === "Enter" &&
                  document.getElementById("myBtn").click();
              }}
            />
            <button
              id="myBtn"
              onClick={async () => {
                search();
                try {
                  setProgress(40);
                  await props.handleFilter();
                  setProgress(100);
                } catch {}
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 30 30"
                className="bg-gray-300 h-10 mb-1.5 px-4 rounded-r-lg hidden xl:block"
              >
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
              </svg>
            </button>
          </div>

          <div className="flex items-center">
            <a
              href="https://rajdeepsengupta.notion.site/Project-Details-0fcfce9964da4e96af6564c87aa631fc"
              target="_blank"
            >
              <div className="flex flex-col items-center group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 sm:mx-3  text-skin-darkBlue cursor-pointer hover:scale-110 transition-all"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="scale-0 absolute mt-10 group-hover:scale-100 bg-gray-100 sm:text-sm text-xs border-2 px-2 py-1 rounded shadow-xl font-semibold transition-all">
                  How to use Booklee?
                </span>
              </div>
            </a>
            <span className="hidden xl:block">
              <Link href="/ListBookForSelling">
                <button
                  onClick={() => {
                    setProgress(100);
                  }}
                  className="bg-skin-lightBlue hover:bg-skin-hoverBlue text-skin-darkBlue py-2 px-4 rounded-lg mx-4 font-bold transition-all"
                >
                  Sell
                </button>
              </Link>
            </span>
            <span className="hidden xl:block">
              <Link href="/ListBookForDonating">
                <button
                  onClick={() => {
                    setProgress(100);
                  }}
                  className="bg-skin-lightGreen hover:bg-skin-hoverGreen text-skin-darkGreen py-2 px-4 rounded-lg mx-4 font-bold transition-all"
                >
                  Donate
                </button>
              </Link>
            </span>

            {/* --------------------------------User Profile----------------------------------------------------- */}

            <Menu>
              <MenuButton
                py={2}
                transition="all 0.2s"
                _expanded={{ bg: "blue.400" }}
                _focus={{ boxShadow: "outline" }}
              >
                <div className="w-[45px] hidden xl:block ml-4 ">
                  <ChakraProvider>
                    <Avatar
                      name={session?.user.name}
                      src={session?.user?.image}
                      borderRadius="100%"
                    />
                  </ChakraProvider>
                </div>
              </MenuButton>
              <MenuList className=" bg-white rounded-lg p-2 w-36 shadow-lg">
                <Link href={"/profile/[uid]/admin"} as={`/profile/${id}/admin`}>
                  <MenuItem
                    className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold"
                    onClick={() => {
                      setProgress(40);
                    }}
                  >
                    <span className="text-skin-darkBlue flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                          clipRule="evenodd"
                        />
                      </svg>{" "}
                      User Profile
                    </span>
                  </MenuItem>
                </Link>
                <Link
                  href={"/profile/[uid]/admin/favourite"}
                  as={`/profile/${id}/admin/favourite`}
                >
                  <MenuItem
                    className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold"
                    onClick={() => {
                      setProgress(40);
                    }}
                  >
                    <span className="text-skin-darkBlue flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-red-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Favourite
                    </span>
                  </MenuItem>
                </Link>
                <Link
                  href={"/profile/[uid]/admin/orders"}
                  as={`/profile/${id}/admin/orders`}
                >
                  <MenuItem
                    className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold"
                    onClick={() => {
                      setProgress(40);
                    }}
                  >
                    <span className="text-skin-darkBlue flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Your Orders
                    </span>
                  </MenuItem>
                </Link>
                <MenuItem
                  className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold"
                  onClick={() => {
                    signOut();
                    setProgress(40);
                    setProgress(100);
                  }}
                >
                  <span className="text-skin-darkBlue flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Logout
                  </span>
                </MenuItem>
              </MenuList>
            </Menu>
            {/*Donate Button for mobile*/}
            <div className="flex items-center">
              <div className="block xl:hidden z-50 mt-1">
                <Menu>
                  <MenuButton
                    py={2}
                    transition="all 0.2s"
                    _expanded={{ bg: "blue.400" }}
                    _focus={{ boxShadow: "outline" }}
                  >
                    <div className="w-[35px] ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-skin-darkGreen"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                  </MenuButton>
                  <MenuList
                    className=" bg-white rounded-lg p-2 w-24 shadow-xl "
                    onClick={() => {
                      setProgress(40);
                    }}
                  >
                    <Link href="/ListBookForSelling">
                      <MenuItem className="p-1 hover:bg-skin-lightGreen transition-all rounded font-semibold">
                        <span className="text-skin-darkGreen text-center mx-auto">
                          Sell
                        </span>
                      </MenuItem>
                    </Link>
                    <Link href="/ListBookForDonating">
                      <MenuItem
                        className="p-1 hover:bg-skin-lightGreen transition-all rounded font-semibold"
                        onClick={() => {
                          setProgress(40);
                        }}
                      >
                        <span className="text-skin-darkGreen text-center mx-auto">
                          Donate Directly
                        </span>
                      </MenuItem>
                    </Link>
                    <Link href="/donatengo">
                      <MenuItem
                        className="p-1 hover:bg-skin-lightGreen transition-all rounded font-semibold"
                        onClick={() => {
                          setProgress(40);
                        }}
                      >
                        <span className="text-skin-darkGreen text-center mx-auto">
                          Donate to NGO
                        </span>
                      </MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
              </div>
              {/* {/--------------------------------------*Hamburger Menu*--------------------------------------------/} */}
              <div className="block xl:hidden">
                <>
                  <ChakraProvider>
                    <Button ref={btnRef} onClick={onOpen} bgColor="white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Button>
                    <Drawer
                      isOpen={isOpen}
                      placement="right"
                      onClose={onClose}
                      finalFocusRef={btnRef}
                    >
                      <DrawerOverlay />
                      <DrawerContent>
                        <DrawerCloseButton />

                        <DrawerBody>
                          <>
                            <div className="text-center h-[97vh]">
                              <h1 className="text-3xl font-semibold py-10 font-rokkitt">
                                Booklee
                              </h1>
                              <hr />
                              <Link href="/">
                                <button
                                  className="w-full  text-xl rounded-lg font-semibold text-skin-darkBlue my-2"
                                  onClick={() => {
                                    setProgress(40);
                                  }}
                                >
                                  Home
                                </button>
                              </Link>
                              <hr />
                              <Link
                                href={"/profile/[uid]/admin"}
                                as={`/profile/${id}/admin`}
                              >
                                <button
                                  className="w-full  text-xl rounded-lg font-semibold text-skin-darkBlue my-2"
                                  onClick={() => {
                                    setProgress(40);
                                  }}
                                >
                                  Profile
                                </button>
                              </Link>
                              <hr />
                              <Link
                                href={"/profile/[uid]/admin/favourite"}
                                as={`/profile/${id}/admin/favourite`}
                              >
                                <button
                                  className="w-full  text-xl rounded-lg font-semibold text-skin-darkBlue my-2"
                                  onClick={() => {
                                    setProgress(40);
                                  }}
                                >
                                  Favourite
                                </button>
                              </Link>
                              <hr />
                              <Link
                                href={"/profile/[uid]/admin/orders"}
                                as={`/profile/${id}/admin/orders`}
                              >
                                <button
                                  className="w-full  text-xl rounded-lg font-semibold text-skin-darkBlue my-2"
                                  onClick={() => {
                                    setProgress(40);
                                  }}
                                >
                                  Your Orders
                                </button>
                              </Link>
                              <hr />
                              <button
                                onClick={() => signOut()}
                                className="w-full text-xl rounded-lg font-semibold text-skin-darkBlue my-2"
                                onClick={() => {
                                  setProgress(40);
                                }}
                              >
                                Logout
                              </button>
                              <hr />
                              <Link href="/profile/sell">
                                <div
                                  className=" bottom-0 absolute mb-3 w-full left-0 py-3"
                                  onClick={() => {
                                    setProgress(40);
                                  }}
                                >
                                  <hr />
                                  <div className="flex mt-3">
                                    <div className="mx-5 my-auto">
                                      <Avatar
                                        name={session?.user.name}
                                        src={session?.user?.image}
                                        borderRadius="100%"
                                      />
                                    </div>
                                    <div>
                                      <p
                                        className="text-lg font-semibold text-left"
                                        onClick={() => {
                                          setProgress(40);
                                        }}
                                      >
                                        {session?.user.name}
                                      </p>
                                      <p className="text-left text-sm">
                                        {session?.user.email}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </>
                        </DrawerBody>
                      </DrawerContent>
                    </Drawer>
                  </ChakraProvider>
                </>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/*/////////////////////////////////////////////// Not Signed In ////////////////////////////////////////////////////////////////////////////////*/}

      {!session && (
        <nav className="bg-white flex justify-between max-w-8xl sm:px-6 lg:px-[200px]">
          <div className="flex-shrink-0 cursor-pointer scale-75 sm:scale-100">
            <Link href="/">
              <Avatar
                className="flex justify-start h-20 w-auto"
                src="/Logo.png"
                alt="Workflow"
                onClick={() => {
                  setProgress(40);
                }}
              />
            </Link>
          </div>
          <div className="w-[25vw] flex">
            <Input
              value={searchInput}
              type="text"
              placeholder={props.book ? props.book : "Search a Book"}
              className="hidden xl:block bg-gray-200 h-10  my-5 w-full rounded-r-none"
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={(event) => {
                event.key === "Enter" &&
                  document.getElementById("myBtn").click();
              }}
            />
            <button
              id="myBtn"
              onClick={async () => {
                search();
                try {
                  setProgress(40);
                  await props.handleFilter();
                  setProgress(100);
                } catch {}
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 30 30"
                className="bg-gray-300 h-10 mb-1.5 px-4 rounded-r-lg hidden xl:block"
              >
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
              </svg>
            </button>
          </div>

          <div className="flex items-center">
            <a
              href="https://rajdeepsengupta.notion.site/Project-Details-0fcfce9964da4e96af6564c87aa631fc"
              target="_blank"
            >
              <div className="flex flex-col items-center group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 sm:mx-3  text-skin-darkBlue cursor-pointer hover:scale-110 transition-all"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="scale-0 absolute mt-10 group-hover:scale-100 bg-gray-100 sm:text-sm text-xs border-2 px-2 py-1 rounded shadow-xl font-semibold transition-all">
                  How to use Booklee?
                </span>
              </div>
            </a>
            <Link href="/auth/signin">
              <button
                onClick={() => {
                  setProgress(40);
                }}
                className="bg-skin-lightBlue hover:bg-skin-hoverBlue text-skin-darkBlue py-2 px-4 rounded-lg mx-4 font-bold w-[100px] "
              >
                Sign In
              </button>
            </Link>
          </div>
        </nav>
      )}

      {/* //////////////////////////////Mobile Serch Input/////////////////////////////////////////// */}
      <div className="w-full pb-5 block xl:hidden bg-white mx-auto">
        <div className="mx-auto flex justify-center">
          <Input
            type="text"
            value={searchInput}
            placeholder={props.book ? props.book : "Search a Book"}
            className=" bg-gray-200 h-10 w-[80vw] rounded-r-none"
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={(event) => {
              event.key === "Enter" &&
                document.getElementById("BtnMob").click();
            }}
          />
          <button
            id="BtnMob"
            onClick={async () => {
              search();
              try {
                setProgress(40);
                await props.handleFilter();
                setProgress(100);
              } catch {}
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 30 30"
              className="bg-gray-300 h-10 mb-1.5 px-4 rounded-r-lg block xl:hidden  cursor-pointer "
            >
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;