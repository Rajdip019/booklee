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
} from "@chakra-ui/react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import LoadingBar from 'react-top-loading-bar';
import { template } from "../../helpers/template";

const Navbar = (props) => {

  const {templateString} = template;
  const [searchInput, setSearchInput] = useState(null);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { data: session } = useSession();

  const [id, setId] = useState("");

  const havesession = async () => {
    const sessionMail = session?.user?.email;
    if (sessionMail) {
      const res = await fetch(
        `${templateString}/api/user/${sessionMail}`
      );
      const userData = await res.json();
      setId(userData._id);
    }
  };
  havesession();

  const search = () => {
    setProgress(100)
    router.push({
      pathname: "/search/sell",
      query: {
        book: searchInput,
      },
    });
  };

  const [progress, setProgress] = useState(0)

  return (
    <div className="shadow-lg md:sticky top-0 z-40">
        <LoadingBar
        color='#4287f5'
        height = {4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {session && (
        <nav className="bg-white flex justify-between max-w-8xl sm:px-6 lg:px-[200px]">
          <div className="flex-shrink-0 cursor-pointer">
            <Link href="/">
              <Avatar
                className="flex justify-start h-20 w-auto"
                src="/Logo.png"
                alt="Workflow"
                onClick={()=> {setProgress(100)}}
              />
            </Link>
          </div>
          <div className="w-[25vw] flex">
            <input
              value={searchInput}
              type="text"
              placeholder={props.book ? props.book : "Serch a Book you want"}
              className="hidden xl:block bg-gray-200 h-10  my-5 w-full rounded-r-none"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              onClick={async () => {
                search();
                try {
                setProgress(40)
                  await props.handleFilter();
                  setProgress(100)
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
            <span className="hidden xl:block">
              <Link href="/ListBookForSelling">
                <button onClick={()=> {setProgress(100)}} className="bg-skin-lightBlue hover:bg-skin-hoverBlue text-skin-darkBlue py-2 px-4 rounded-lg mx-4 font-bold transition-all">
                  Sell
                </button>
              </Link>
            </span>
            <span className="hidden xl:block">
              <Link href="/ListBookForDonating">
                <button onClick={()=> {setProgress(100)}} className="bg-skin-lightGreen hover:bg-skin-hoverGreen text-skin-darkGreen py-2 px-4 rounded-lg mx-4 font-bold transition-all">
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
              <MenuList className=" bg-white rounded-lg p-2 w-28 shadow-lg">
                <Link href={"/profile/[uid]/admin"} as={`/profile/${id}/admin`}>
                  <MenuItem className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold" >
                    <span onClick={()=> {setProgress(40);}} className="text-skin-darkBlue">User Profile</span>
                  </MenuItem>
                </Link>
                <Link
                  href={"/profile/[uid]/admin/favourite"}
                  as={`/profile/${id}/admin/favourite`}
                >
                  <MenuItem className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold" >
                    <span onClick={()=> {setProgress(40);}} className="text-skin-darkBlue">Favourite</span>
                  </MenuItem>
                </Link>
                <Link
                  href={"/profile/[uid]/admin/orders"}
                  as={`/profile/${id}/admin/orders`}
                >
                  <MenuItem className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold" >
                    <span onClick={()=> {setProgress(40);}} className="text-skin-darkBlue">Your Orders</span>
                  </MenuItem>
                </Link>
                <MenuItem className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold" onClick={()=> {setProgress(40); setProgress(100)}}>
                  <span
                    onClick={() => signOut()}
                    className="text-skin-darkBlue"
                  >
                    Logout
                  </span>
                </MenuItem>
              </MenuList>
            </Menu>
            {/*Donate Button for mobile*/}
            <div className="block xl:hidden">
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
                      className="h-6 w-6 text-skin-darkGreen hover:"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      />
                    </svg>
                  </div>
                </MenuButton>
                <MenuList className=" bg-white rounded-lg p-2 w-24 shadow-xl " onClick={()=> {setProgress(40); setProgress(100)}}>
                  <Link href="/ListBookForSelling">
                    <MenuItem className="p-1 hover:bg-skin-lightGreen transition-all rounded font-semibold">
                      <span className="text-skin-darkGreen text-center mx-auto">
                        Sell
                      </span>
                    </MenuItem>
                  </Link>
                  <Link href="/ListBookForDonating">
                    <MenuItem className="p-1 hover:bg-skin-lightGreen transition-all rounded font-semibold" onClick={()=> {setProgress(40); setProgress(100)}}>
                      <span className="text-skin-darkGreen text-center mx-auto">
                        Donate Directly
                      </span>
                    </MenuItem>
                  </Link>
                  <Link href="/donatengo">
                    <MenuItem className="p-1 hover:bg-skin-lightGreen transition-all rounded font-semibold" onClick={()=> {setProgress(40); setProgress(100)}}>
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
                              <button className="w-full  text-xl rounded-lg font-semibold text-skin-darkBlue my-2" onClick={()=> {setProgress(40); setProgress(100)}}>
                                Home
                              </button>
                            </Link>
                            <hr />
                            <Link
                              href={"/profile/[uid]/admin"}
                              as={`/profile/${id}/admin`}
                            >
                              <button className="w-full  text-xl rounded-lg font-semibold text-skin-darkBlue my-2" onClick={()=> {setProgress(40); setProgress(100)}}>
                                Profile
                              </button>
                            </Link>
                            <hr />
                            <Link
                              href={"/profile/[uid]/admin/favourite"}
                              as={`/profile/${id}/admin/favourite`}
                            >
                              <button className="w-full  text-xl rounded-lg font-semibold text-skin-darkBlue my-2" onClick={()=> {setProgress(40); setProgress(100)}}>
                                Favourite
                              </button>
                            </Link>
                            <hr />
                            <Link
                              href={"/profile/[uid]/admin/orders"}
                              as={`/profile/${id}/admin/orders`}
                            >
                              <button className="w-full  text-xl rounded-lg font-semibold text-skin-darkBlue my-2" onClick={()=> {setProgress(40); setProgress(100)}}>
                                Your Orders
                              </button>
                            </Link>
                            <hr />
                            <button
                              onClick={() => signOut()}
                              className="w-full text-xl rounded-lg font-semibold text-skin-darkBlue my-2" onClick={()=> {setProgress(40); setProgress(100)}}
                            >
                              Logout
                            </button>
                            <hr />
                            <Link href="/profile/sell">
                              <div className=" bottom-0 absolute mb-3 w-full left-0 py-3" onClick={()=> {setProgress(40); setProgress(100)}}>
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
                                    <p className="text-lg font-semibold text-left" onClick={()=> {setProgress(40); setProgress(100)}}>
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
                onClick={()=> {setProgress(40); setProgress(100)}}
              />
            </Link>
          </div>
          <div className="w-[25vw] flex">
            <Input
              type="text"
              placeholder="Search "
              className="hidden xl:block bg-gray-200 h-10  my-5 w-full rounded-r-none"
            />
            <button >
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
            <Link href="/auth/signin">
              <button onClick={()=> {setProgress(40); setProgress(100)}} className="bg-skin-lightBlue hover:bg-skin-hoverBlue text-skin-darkBlue py-2 px-4 rounded-lg mx-4 font-bold w-[100px] ">
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
            placeholder={props.book ? props.book : "Serch a Book you want"}
            className=" bg-gray-200 h-10 w-[80vw] rounded-r-none"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            onClick={async () => {
              search();
              try {
                setProgress(40)
                await props.handleFilter();
                setProgress(100)
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
