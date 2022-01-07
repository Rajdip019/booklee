import React, { useEffect } from "react";
import { useState } from "react";
import ProductCardDonationDisplay from "../components/ProductCardDonationDisplay";
import Navbar from "../components/Navbar";
import Document from "../document";
import cities from "../../database/city";
import { useDisclosure } from "@chakra-ui/hooks";
import Link from "next/link";
import { template } from "../../helpers/template";
import LoadingBar from "react-top-loading-bar";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  ChakraProvider,
  RadioGroup,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";


export default function BrowseFreeBooks({ donatebook }) {
  const [progress, setProgress] = useState(0);

  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [condition, setCondition] = useState();
  // const [result, setResult] = useState();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const stateCity = cities.filter((element) => element.state == state); //Filtering data according to State from the cities database

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
      {/* Filter Start */}
      <ChakraProvider>
        <div className="w-[300px] text-center shadow-2xl h-[100vh] fixed hidden lg:block overflow-scroll">
          <h1 className="text-5xl font-semibold py-10 font-rokkitt">Filter</h1>
          {/* Condition Radio Button Start*/}
          <div className="w-10/12 mx-auto">
            <h2 className="text-left text-xl font-semibold  my-3">Condition</h2>
            <div className="text-left   flex">
              <ChakraProvider>
                <RadioGroup
                  onChange={setCondition}
                  value={condition}
                  defaultValue={0}
                >
                  <div className="flex items-center">
                    <input
                      id="4"
                      type="radio"
                      name="condition"
                      value={3}
                      className="mx-3 my-2"
                      onClick={(e) => setCondition(e.target.value)}
                    ></input>
                    <label htmlFor="4" className="flex items-center text-lg">
                      4
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400 mx-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      and above.
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="3"
                      type="radio"
                      name="condition"
                      value={2}
                      className="mx-3 my-2"
                      onClick={(e) => setCondition(e.target.value)}
                    ></input>
                    <label htmlFor="3" className="flex items-center text-lg">
                      3
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400 mx-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      and above.
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="2"
                      type="radio"
                      name="condition"
                      value={1}
                      className="mx-3 my-2"
                      onClick={(e) => setCondition(e.target.value)}
                    ></input>
                    <label htmlFor="2" className="flex items-center text-lg">
                      2
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400 mx-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      and above.
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="condition"
                      value={0}
                      id="All"
                      className="mx-3 my-2"
                      defaultChecked
                      onClick={(e) => setCondition(e.target.value)}
                    ></input>
                    <label htmlFor="All" className="text-lg">
                      All Books
                    </label>
                  </div>
                </RadioGroup>
              </ChakraProvider>
            </div>

            {/* Condition Radio Button End*/}
            <div className="w-11/12 mx-auto">
              <h2 className="text-left text-xl font-semibold py-5">
                Locations
              </h2>
              <select
                className="block w-full h-[40px] pl-2 mb-5"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value={0}>Select State</option>
                <option value={0}>Any State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">
                  Dadar and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
              <select
                className="block w-full h-[40px] pl-2 "
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value={null}>Select City</option>
                <option value={null}>Any City</option>
                {stateCity.map((city) => {
                  return (
                    <option value={city.name}>{city.name}</option> //Mapping through city database According to state
                  );
                })}
              </select>
            </div>
            <div className="flex justify-between mb-12">
              <button className="bg-skin-lightRed text-skin-darkRed hover:bg-red-100 px-4 py-2 transition-all rounded-lg font-bold my-10 ">
                Clear Filter
              </button>
              <button className=" bg-skin-lightBlue text-skin-darkBlue hover:bg-skin-hoverBlue px-4 py-2 transition-all rounded-lg font-bold my-10">
                Search
              </button>
            </div>
          </div>
        </div>
      </ChakraProvider>
      {/* Filter End */}

      {/* Mobile Filter Start */}

      <>
        <ChakraProvider>
          <div className="lg:hidden block fixed bottom-6 right-6 z-50">
            <Button ref={btnRef} colorScheme="blue" onClick={onOpen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 pr-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                  clipRule="evenodd"
                />
              </svg>
              Filter
            </Button>
          </div>
          <Drawer
            isOpen={isOpen}
            placement="bottom"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />

              <DrawerBody>
                <>
                  <h1 className="text-5xl font-semibold py-10 font-rokkitt">
                    Filter
                  </h1>

                  {/* Condition Radio Button Start*/}
                  <div className="w-10/12 mx-auto">
                    <h2 className="text-left text-xl font-semibold  my-3">
                      Condition
                    </h2>
                    <div className="text-left   flex">
                      <ChakraProvider>
                        <RadioGroup
                          onChange={setCondition}
                          value={condition}
                          defaultValue={0}
                        >
                          <div className="flex items-center">
                            <input
                              id="4"
                              type="radio"
                              name="condition"
                              value={3}
                              className="mx-3 my-2"
                              onClick={(e) => setCondition(e.target.value)}
                            ></input>
                            <label
                              htmlFor="4"
                              className="flex items-center text-lg"
                            >
                              4
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-yellow-400 mx-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              and above.
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="3"
                              type="radio"
                              name="condition"
                              value={2}
                              className="mx-3 my-2"
                              onClick={(e) => setCondition(e.target.value)}
                            ></input>
                            <label
                              htmlFor="3"
                              className="flex items-center text-lg"
                            >
                              3
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-yellow-400 mx-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              and above.
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="2"
                              type="radio"
                              name="condition"
                              value={1}
                              className="mx-3 my-2"
                              onClick={(e) => setCondition(e.target.value)}
                            ></input>
                            <label
                              htmlFor="2"
                              className="flex items-center text-lg"
                            >
                              2
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-yellow-400 mx-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              and above.
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              name="condition"
                              value={0}
                              id="All"
                              className="mx-3 my-2"
                              defaultChecked
                              onClick={(e) => setCondition(e.target.value)}
                            ></input>
                            <label htmlFor="All" className="text-lg">
                              All Books
                            </label>
                          </div>
                        </RadioGroup>
                      </ChakraProvider>
                    </div>

                    {/* Condition Radio Button End*/}

                    <div className="w-11/12 mx-auto">
                      <h2 className="text-left text-xl font-semibold py-5">
                        Locations
                      </h2>
                      <select
                        className="block w-full h-[40px] pl-2 mb-5"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      >
                        <option value={0}>Select State</option>
                        <option value={0}>Any State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">
                          Andaman and Nicobar Islands
                        </option>
                        <option value="Arunachal Pradesh">
                          Arunachal Pradesh
                        </option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">
                          Dadar and Nagar Haveli
                        </option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">
                          Himachal Pradesh
                        </option>
                        <option value="Jammu and Kashmir">
                          Jammu and Kashmir
                        </option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                      </select>
                      <select
                        className="block w-full h-[40px] pl-2 "
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      >
                        <option value={null}>Select City</option>
                        <option value={null}>Any City</option>
                        {stateCity.map((city) => {
                          return (
                            <option value={city.name}>{city.name}</option> //Mapping through city database According to state
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-between w-9/12 mx-auto">
                    <button className="bg-skin-lightRed text-skin-darkRed hover:bg-red-100 px-4 py-2 transition-all rounded-lg font-bold my-10 ">
                      Clear Filter
                    </button>
                    <button className=" bg-skin-lightBlue text-skin-darkBlue hover:bg-skin-hoverBlue px-4 py-2 transition-all rounded-lg font-bold my-10">
                      Search
                    </button>
                  </div>
                </>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </ChakraProvider>
      </>

      {/* Mobile Filter End */}
      <div className=" mt-10  lg:ml-[300px] ">
        <div className=" bg-skin-lightRed text-skin-darkRed rounded-xl w-11/12 mx-auto mt-5 shadow-lg">
          <div className="flex flex-col sm:flex-row text-center sm:text-left justify-between h-full ">
            <div className="ml-0 sm:ml-7 my-auto ">
              <h1 className="text-xl sm:text-2xl font-semibold p-2">
                Filter & Search Freature doesn't work in Donated Books due to
                Azure Student Subscription Limitations!
              </h1>
            </div>
            <div className="my-auto text-center">
              <Link href="/limitations">
                <button
                  className="font-bold bg-skin-darkRed text-skin-lightRed rounded-xl mr-0 sm:mr-7 py-2 px-4 my-3 text-xl hover:bg-red-600 transition-all"
                  onClick={() => {
                    setProgress(30);
                  }}
                >
                  Know More!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" ml-[30px] mt-10  lg:ml-[350px] flex-row sm:flex sm:items-center">
        <div>
          <ChakraProvider>
            <Tabs
              variant="soft-rounded"
              colorScheme="green"
              size="lg"
              orientation="horizontal"
            >
              <TabList className="bg-blue-50 w-[300px] rounded-3xl shadow-lg">
                <Tab className="w-[160px]">Educational</Tab>
                <Link href={"/browsebooks"}>
                  <Tab
                    className="w-[150px] "
                    onClick={() => {
                      setProgress(30);
                    }}
                  >
                    Others
                  </Tab>
                </Link>
              </TabList>
            </Tabs>
          </ChakraProvider>
        </div>
      </div>
      <div className=" items-center">
        <div className="lg:ml-[300px] my-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:w-[calc(100%-350px)] align-middle">
          {donatebook?.map((Book) => {
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
    </>
  );
}

export async function getServerSideProps() {
  const { templateString } = template;
  try {
    const res = await fetch(`${templateString}/api/donatebook`);
    const donatebook = await res.json();
    return {
      props: {
        donatebook: donatebook,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
