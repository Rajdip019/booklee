import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import GeneralSidebar from "../components/GeneralSidebar";
import Document from "../document";
import Link from "next/link";
import {
  Input,
  ChakraProvider,
} from "@chakra-ui/react";

const bookDonateEdit = () => {

  const HandleSubmit = (e) => {
    e.preventDefault()
    console.log(bookname,authorname,description,quantity,condition,media);
  }

  const [bookname, setBookname] = useState("");
  const [authorname, setAuthorname] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [media, setMedia] = useState("");
  const [condition,setCondition] = useState("");

  return (
    <div>
    <Document />
    <Navbar />
    <form>

      <GeneralSidebar title="Edit Book Details" />
      <div className="ml-[0px] lg:ml-[300px] lg:w-[calc(100%-300px)] ">
      <div className="hidden lg:block bg-skin-lightGreen text-skin-darkGreen rounded-xl w-11/12 mx-auto mt-5 shadow-lg">
          <div className="flex flex-col sm:flex-row text-center sm:text-left justify-between h-full">
            <div className="ml-0 sm:ml-7 my-auto ">
              <h1 className="text-xl sm:text-2xl font-bold">
                Donate to NGO
              </h1>

            </div>
            <div className="my-auto text-center">
            <Link href="/donatengo">
            <button className="font-bold bg-skin-darkGreen text-skin-lightGreen rounded-xl mr-0 sm:mr-7 p-2 my-3 text-xl">
              Donate
            </button>
            </Link>
            </div>
          </div>
      </div>
    </div>

      {/* ///////////////////////////////////Enter Book Details Below(first part)//////////////////////////////// */}
      <div className="mt-10 w-10/12 mx-auto">
        <div className="ml-[0px] lg:ml-[300px] w-11/12 lg:w-[calc(100%-300px)] grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-10">
          <div>
            <h1 className="text-2xl font-bold mb-5">
              Edit Book Details Below
            </h1>
            <div className="my-3">
              <h3>Book Name</h3>
              <ChakraProvider className="w-[30vw]">
                <Input placeholder="Enter the book Name" className="w-[10vw]" name="bookname" value={bookname}  onChange={(e)=>{setBookname(e.target.value)}} required />
              </ChakraProvider>{" "}
              <div className="my-5">
                <h3>Author Name</h3>
                <ChakraProvider>
                  <Input placeholder="Enter the Author Name" name="authorname" value={authorname} onChange={(e)=>{setAuthorname(e.target.value)}}/>
                </ChakraProvider>
              </div>
              <div className="my-3">
                <h3>Product Description</h3>
                <ChakraProvider>
                  <Input placeholder="Enter Product Description" name="description" value={description}
                  onChange={(e)=>{setDescription(e.target.value)}}/>
                </ChakraProvider>
              </div>
              <div className="my-3">
                <h3>Quantity</h3>
                <ChakraProvider>
                  <Input placeholder="Enter Quantity" name="Quantity" value={quantity}
                  onChange={(e)=>{setQuantity(e.target.value)}}/>
                </ChakraProvider>
              </div>
            </div>
          </div>
          {/* ///////////////////////////////////Enter Book Details Below(last part)//////////////////////////////// */}
          <div className="mt-0 md:mt-[59px]">
            <div className="xl:pr-8">
              <div className="hidden md:block">
                <img
                  src="/ListBookForDonation.svg"
                  className="w-[230px] h-[160px]"
                ></img>
              </div>

              <label for="cars">Condition</label>
              <select value={condition} onChange={(e)=> setCondition(e.target.value)} className="block w-full h-[40px] pl-2 mb-5">
              <option value="">Enter Condition</option>
                <option value="4 stars or above">4 stars or above</option>
                <option value="3 stars or above">3 stars or above</option>
                <option value="2 stars or above">2 stars or above</option>
                <option value="1 stars or above">1 stars or above</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* /////////<///////////////////////////After Grid////////////////////////////////////////// */}

      <div className="mt-5 w-10/12 mx-auto">
      <div className="ml-[0px] lg:ml-[300px] w-11/12 lg:w-[calc(100%-300px)]">
                <label className="block text-sm font-medium text-gray-700">
        Edit Product Image
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-skin-darkBlue hover:text-skin-darkBlue  focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-bg-skin-lightBlue"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  accept="image/*"
                  onChange={(e)=>setMedia(e.target.files[0])}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      <ChakraProvider>
      <ToastComponent />
      </ChakraProvider>
      </div>
      </div>

    </form>
    </div>





  );
};

export default bookDonateEdit;