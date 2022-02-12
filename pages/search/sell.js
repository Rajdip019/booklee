import React from "react";
import { useState, useEffect } from "react";
import ProductCardSellingDisplay from "../components/ProductCardSellingDisplay";
import Document from "../document";
import cities from "../../database/city";
import { useDisclosure } from "@chakra-ui/hooks";
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
  Badge
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { template } from "../../helpers/template";

function bookCards(Book) {
  return (
    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
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
  );
}

const Search = () => {

  const {templateString} = template;

  const [category, setCategory] = useState(0);
  const [state, setState] = useState(0);
  const [city, setCity] = useState(0);
  const [condition, setCondition] = useState(0);
  const [price, setPrice] = useState(10000);
  const [priceMax, setPriceMax] = useState(10000);
  const [priceMin, setPriceMin] = useState(0);
  const [result, setResult] = useState(0);
  const [college, setCollege] = useState(0);

  const router = useRouter();
  const {book} = router.query;
 
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const stateCity = cities.filter((element) => element.state == state); //Filtering data according to State from the cities database

  const handleFilter = async () => {
    //Getting the Data from all the input field and Sending it to the API end Point.
    const res = await fetch(`${templateString}/api/filter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: category,
        state: state,
        city: city,
        condition: condition,
        price: price,
        book: book
      }),
    });
    const bookData = await res.json(); //Getting the response data to use it show the Toast conditionally
    setResult(bookData?.value);
  };



  const handlePriceMax = async () => {
    //Getting the Data from all the input field and Sending it to the API end Point.

    const res = await fetch(`${templateString}/api/filter/all`);
    const bookData = await res.json(); //Getting the response data to use it show the Toast conditionally

    let priceArr = [];
    for (const i = 0; i < bookData?.value.length; i++) {
      priceArr.push(bookData?.value[i]?.price);
    }
    setPriceMax(Math.max(...priceArr));
    setPriceMin(Math.min(...priceArr) - 1);
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
    handleFilter();
  }, [book, college, state, condition, category, city, price]);
  
  useEffect(() => {
    
    handlePriceMax();
  },[])
 

  return (
    <div>
      <Document />
      <Navbar 
        handleFilter = {handleFilter}
        book = {book}
      />
      {/* Filter Start */}
      <ChakraProvider>
        <div className="w-[300px] text-center shadow-2xl h-[100vh] fixed hidden lg:block scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50 overflow-y-scroll ">
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
              <DrawerCloseButton className="mt-24"/>

              <DrawerBody>
                <div className="mt-12">
                  <h1 className="text-5xl font-semibold py-10 font-rokkitt">
                    Filter
                  </h1>
                  {/* Slider Starts */}
                  <div className="w-10/12 mx-auto">
                    <h2 className="text-left text-xl font-semibold my-3">
                      Price
                    </h2>
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
                        value={college}
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
                      <h2 className="text-left text-xl font-semibold py-5">
                        Locations
                      </h2>
                      <select
                        className="block w-full h-[40px] pl-2 mb-5"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      >
                        <option value={null}>Select State</option>
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
      <div className=" ml-[30px] mt-10  lg:ml-[350px] md:flex-row sm:flex sm:items-center justify-between mr-16 flex-col">
        <div className="flex items-center flex-wrap">
          {(price !== 10000 ||
            condition !== 0 ||
            category !== 0 ||
            college !== 0 ||
            state !== 0||
            city !== 0) && (
            <p className=" font-rokkitt text-2xl">Filters Applied :</p>
          )}
          <ChakraProvider>
            {price !== 10000 && (
              <Badge
                rounded="full"
                paddingX="3"
                paddingY="1"
                variant="solid"
                colorScheme="blue"
                className="mx-1.5 my-1.5"
              >
                Price: {price}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block cursor-pointer ml-1 mb-0.5" onClick={() => {setPrice(10000)}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
              </Badge>
            )}
            {condition !== 0 && (
              <Badge
                rounded="full"
                paddingX="3"
                paddingY="1"
                variant="solid"
                colorScheme="blue"
                className="mx-1.5 my-1.5"
              >
                Condition: {parseInt(condition) + 1} ⭐ and above
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block cursor-pointer ml-1 mb-0.5" onClick={() => {setCondition(0)}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
              </Badge>
            )}
            {category !== 0 && (
              <Badge
                rounded="full"
                paddingX="3"
                paddingY="1"
                variant="solid"
                colorScheme="blue"
                className="mx-1.5 my-1.5"
              >
                Category: {category}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block cursor-pointer ml-1 mb-0.5" onClick={() => {setCategory(0)}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
              </Badge>
            )}
            {college !== 0 && (
              <span className="break-words mx-1.5 my-1.5 font-semibold uppercase text-xs text-white bg-[#3182CE] px-2 py-1 sm:rounded-full rounded-lg">
                {" "}
                College: {college}<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block cursor-pointer ml-1 mb-0.5" onClick={() => {setCollege(0)}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
              </span>
            )}
            {state !== 0 && (
              <Badge
                rounded="full"
                paddingX="3"
                paddingY="1"
                variant="solid"
                colorScheme="blue"
                className="mx-1.5 my-1.5"
              >
                State: {state}<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block cursor-pointer ml-1 mb-0.5" onClick={() => {setState(0)}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
              </Badge>
            )}
            {city !== 0 && (
              <Badge
                rounded="full"
                paddingX="3"
                paddingY="1"
                variant="solid"
                colorScheme="blue"
                className="mx-1.5 my-1.5"
              >
                City: {city}<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block cursor-pointer ml-1 mb-0.5" onClick={() => {setCity(0)}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
              </Badge>
            )}
          </ChakraProvider>
        </div>
        {(price !== 10000 ||
        condition !== 0 ||
            category !== 0 ||
            college !== 0 ||
            state !== 0||
          city !== 0) && (
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
      {result ? (
        <>
        <div className="lg:ml-[300px] my-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:w-[calc(100%-350px)] align-middle">
          {result.map(bookCards)}
        </div>
        {result.length === 0 && (
          <p className="lg:ml-[300px] text-5xl text-center text-gray-600 font-rokkitt flex items-center justify-center h-[70vh]">No Search Result Found</p>
        )}
        </>
      ) : (
        null
      )}
        </div>
    </div>
  );
};

export default Search;
