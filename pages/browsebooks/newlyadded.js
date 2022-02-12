import React, { useEffect } from "react";
import { useState } from "react";
import ProductCardSellingDisplay from "../components/ProductCardSellingDisplay";
import Navbar from "../components/Navbar";
import Document from "../document";
import cities from "../../database/city";
import { useDisclosure } from "@chakra-ui/hooks";
import Link from "next/link";
import { template } from "../../helpers/template";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";
import collegeList from "../../database/college";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
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
  Badge
} from "@chakra-ui/react";

const search = () => {
  const { templateString } = template;

  const router = useRouter();
  const {categoryr , stater, cityr, conditionr, pricer, colleger} = router.query;

  const [progress, setProgress] = useState(0);

  const [category, setCategory] = useState(0);
  const [state, setState] = useState(0);
  const [city, setCity] = useState(0);
  const [condition, setCondition] = useState(0);
  const [price, setPrice] = useState(10000);
  const [priceMax, setPriceMax] = useState(10000);
  const [priceMin, setPriceMin] = useState(0);
  const [result, setResult] = useState(null);
  const [college, setCollege] = useState(0);

  const stateCity = cities.filter((element) => element.state == state);
  const handleFilter = async () => {
    //Getting the Data from all the input field and Sending it to the API end Point.
    try {
      setProgress(30);
      const res = await fetch(`${templateString}/api/filter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: categoryr,
          state: stater,
          city: cityr,
          condition: conditionr,
          price: pricer,
          college: colleger
        }),
      });
      setProgress(100);
      const bookData = await res.json();
      const newBooks = bookData?.value.reverse();
      setResult(newBooks);
    } catch {
      null;
    }
  };
  
  const handlePriceMax = async () => {
    //Getting the Data from all the input field and Sending it to the API end Point.

    const res = await fetch(`${templateString}/api/filter/all`);
    const bookData = await res.json();
    const newBooks = bookData?.value.reverse(); //Getting the response data to use it show the Toast conditionally
    setResult(newBooks);
    let priceArr = [];
    for (const i = 0; i < bookData?.value.length; i++) {
      priceArr.push(bookData?.value[i]?.price);
    }
    setPriceMax(Math.max(...priceArr));
    setPriceMin(Math.min(...priceArr));
  };

  const handleReset = () => {
    setCategory(0);
    setState(0);
    setCity(0);
    setCondition(0);
    setPrice(10000);
    setCollege(0);
  };
  
  useEffect(() => {
    handlePriceMax();
  }, [])
  
  useEffect(() => {
    handleFilter();
  }, [categoryr, stater, cityr, conditionr, pricer, colleger]);

  useEffect(() => {
    handleRouting();
  }, [category, state, city, condition, price, college])


  const handleRouting = () => {
    router.push({
      pathname: "/browsebooks/newlyadded",
      query: {
        categoryr: category,
        stater : state,
        cityr : city,
        conditionr : condition,
        pricer : price,
        colleger: college
      },
    });
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
        <div className="w-[300px] text-center shadow-2xl h-[100vh] fixed hidden lg:block scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50 overflow-y-scroll">
          <h1 className="text-5xl font-semibold py-10 font-rokkitt">Filter</h1>
          {/* Slider Starts */}
          <div className="w-10/12 mx-auto">
            <h2 className="text-left text-xl font-semibold my-3">Price</h2>
            <Slider
              aria-label="slider-ex-6"
              onChange={(val) => setPrice(val + 1)}
              min={priceMin}
              max={priceMax}
            >
              <SliderMark
                value={price}
                textAlign="center"
                bg="blue.500"
                color="white"
                mt="-10"
                ml="-5"
                w="12"
              >
                ₹ {price}
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </div>
          {/* Slider Ends */}

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
              <h2 className="text-left text-xl font-semibold  my-5">
                Category
              </h2>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="block w-full h-[40px] pl-2 mb-5"
              >
                <option value={0}>Enter Category</option>
                <option value={0}>All Books</option>
                <option value="Education">Education</option>
                <option value="Story Book">Story Book</option>
                <option value="Sci-fi">Sci-fi</option>
                <option value="Self_Growth">Self-Growth</option>
                <option value="Horror">Horror</option>
                <option value="Documentry">Documentry</option>
              </select>
            </div>
            <div className="w-11/12 mx-auto">
              <h2 className="text-left text-xl font-semibold  my-5">College</h2>
              <select
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                className="block w-full h-[40px] pl-2 mb-5"
              >
                <option value={0}>Select College</option>
                {collegeList.map((college) => {
                  return <option value={college}>{college}</option>;
                })}
                <option value="other">Other</option>
              </select>
              <p className="text-sm text-red-800">You can also search by your school/college name</p>
            </div>
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
                className="block w-full h-[40px] pl-2 mb-32"
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

              <DrawerBody>
                <div className="mt-12">
              <DrawerCloseButton className="mt-24" />
                <h1 className="text-5xl font-semibold py-10 font-rokkitt">
                    Filter
                  </h1>
                  {/* Slider Starts */}
                  <div className="w-10/12 mx-auto overflow-hidden">
                    <h2 className="text-left text-xl font-semibold my-3">
                      Price
                    </h2>
                    <Slider
                      aria-label="slider-ex-6"
                      onChange={(val) => setPrice(val + 1)}
                      min={priceMin}
                      max={priceMax}
                      value={price}
                    >
                        
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                      <SliderThumb />
                    </Slider>
                    <div className="text-right font-bold">
                    ₹ {price}
                    </div>
                  </div>
                  {/* Slider Ends */}

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
                      <h2 className="text-left text-xl font-semibold  my-5">
                        Category
                      </h2>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="block w-full h-[40px] pl-2 mb-5"
                      >
                        <option value={0}>Enter Category</option>
                        <option value={0}>All Books</option>
                        <option value="Education">Education</option>
                        <option value="Story Book">Story Book</option>
                        <option value="Sci-fi">Sci-fi</option>
                        <option value="Self_Growth">Self-Growth</option>
                        <option value="Horror">Horror</option>
                        <option value="Documentry">Documentry</option>
                      </select>
                    </div>
                    <div className="w-11/12 mx-auto">
              <h2 className="text-left text-xl font-semibold  my-5">College</h2>
              <select
                value={college}
                onChange={(e) => setCategory(e.target.value)}
                className="block w-full h-[40px] pl-2 mb-5"
              >
                <option value={0}>Select College</option>
                {collegeList.map((college) => {
                  return <option value={college}>{college}</option>;
                })}
                <option value="other">Other</option>
              </select>
              <p className="text-sm text-red-800">You can also search by your school/college name</p>
            </div>
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
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </ChakraProvider>
      </>

      {/* Mobile Filter End */}

      <div className=" ml-[30px] mt-10  lg:ml-[350px] flex-row sm:flex sm:items-center">
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
                <Link href={"/browsefreebooks"}>
                  <Tab
                    className="w-[160px]"
                    onClick={() => {
                      setProgress(30);
                    }}
                  >
                    Educational
                  </Tab>
                </Link>
                <Tab className="w-[150px] ">Others</Tab>
              </TabList>
            </Tabs>
          </ChakraProvider>
        </div>
      </div>
      <div className=" ml-[30px] mt-10  lg:ml-[350px] md:flex-row sm:flex sm:items-center justify-between mr-16 flex-col">
        <div className="flex items-center flex-wrap">
          {(pricer !== "10000" ||
            conditionr !== "0" ||
            categoryr !== "0" ||
            colleger !== "0" ||
            stater !== "0"||
            cityr !== "0") && (
            <p className=" font-rokkitt text-2xl">Filters Applied :</p>
          )}
          <ChakraProvider>
            {pricer !== "10000" && (
              <Badge
                rounded="full"
                paddingX="3"
                paddingY="1"
                variant="solid"
                colorScheme="blue"
                className="mx-1.5 my-1.5"
              >
                Price: {pricer}<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block cursor-pointer ml-1 mb-0.5" onClick={() => {setPrice(10000)}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
              </Badge>
            )}
            {conditionr !== "0" && (
              <Badge
                rounded="full"
                paddingX="3"
                paddingY="1"
                variant="solid"
                colorScheme="blue"
                className="mx-1.5 my-1.5"
              >
                Condition: {parseInt(conditionr) + 1} ⭐ and above
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block cursor-pointer ml-1 mb-0.5" onClick={() => {setCondition(0)}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
              </Badge>
            )}
            {categoryr !== "0" && (
              <Badge
                rounded="full"
                paddingX="3"
                paddingY="1"
                variant="solid"
                colorScheme="blue"
                className="mx-1.5 my-1.5"
              >
                Category: {categoryr}<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block cursor-pointer ml-1 mb-0.5" onClick={() => {setCategory(0)}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
              </Badge>
            )}
            {colleger !== "0" && (
              <span className="break-words mx-1.5 my-1.5 font-semibold uppercase text-xs text-white bg-[#3182CE] px-2 py-1 sm:rounded-full rounded-lg">
                {" "}
                College: {colleger}<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block cursor-pointer ml-1 mb-0.5" onClick={() => {setCollege(0)}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
              </span>
            )}
            {stater !== "0" && (
              <Badge
                rounded="full"
                paddingX="3"
                paddingY="1"
                variant="solid"
                colorScheme="blue"
                className="mx-1.5 my-1.5"
              >
                State: {stater} <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block cursor-pointer ml-1 mb-0.5" onClick={() => {setState(0)}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
              </Badge>
            )}
            {cityr !== "0" && (
              <Badge
                rounded="full"
                paddingX="3"
                paddingY="1"
                variant="solid"
                colorScheme="blue"
                className="mx-1.5 my-1.5"
              >
                City: {cityr}<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block cursor-pointer ml-1 mb-0.5" onClick={() => {setCity(0)}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
              </Badge>
            )}
          </ChakraProvider>
        </div>
        {(pricer !== "10000" ||
        conditionr !== "0" ||
            categoryr !== "0" ||
            colleger !== "0" ||
            stater !== "0"||
          cityr !== "0") && (
          <button
            className="bg-skin-lightRed text-skin-darkRed font-semibold px-2 py-1 text-sm rounded-full hover:bg-red-200 transition-all hover:shadow-md whitespace-nowrap mt-5"
            onClick={() => {
              handleReset();
            }}
          >
            Clear Filter
          </button>
        )}
      </div>

      <div className=" items-center">
        <div className="lg:ml-[300px] my-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:w-[calc(100%-350px)] align-middle">
          {result?.map((Book) => {
            return (
              <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
                <div
                  onClick={() => {
                    setProgress(30);
                  }}
                >
                  <ProductCardSellingDisplay
                    _id={Book.doc_id}
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
        {result?.length === 0 && (
          <p className="lg:ml-[300px] text-5xl text-center text-gray-600 font-rokkitt flex items-center justify-center h-[50vh]">No Search Result Found</p>
        )}
      </div>
    </>
  );
};

export default search;
