import React from "react";
import ProductCardDonationDisplay from "./ProductCardDonationDisplay";
import Link from "next/link";
import { useState, useEffect } from "react";
import { template } from "../../helpers/template";


const TopFreeEduBook = ({ topLoader }) => {

  const [result, setResult]  = useState()

  const {templateString} =template;

  const handledonatebook = async () => {
    try {
      const res = await fetch(`${templateString}/api/donatebook`);
      const bookData = await res.json(); //Getting the response data to use it show the Toast conditionally
      setResult(bookData);
    } catch {
      null;
    }
  };

  useEffect(() => {
    handledonatebook();
  }, []);

  return (
    <>
      {/*////////////////////////////////////////// For Extra Large/PC Skin/////////////////////////////////////////// */}

      <div className="sm:hidden 2xl:grid 2xl:grid-cols-5 gap-1 w-11/12 m-auto md:hidden lg:hidden hidden mt-32 mb-6">
        <div className="col-span-5  mb-12 px-[2vw]">
          <span className="text-4xl font-bold ml-0 font-rokkitt">
            Free Educational Books
          </span>
          <Link href="/browsefreebooks">
            <button className="float-right bg-skin-lightBlue text-skin-darkBlue py-2 px-4 rounded-lg font-semibold text-xl hover:bg-skin-hoverBlue transition-all" onClick={() => {topLoader()}}>
              View all
            </button>
          </Link>
        </div>
        {result?.slice(0, 5).map((edubook) => {
          return (
            <div className="ml-auto mr-auto mb-16">
              <div
                onClick={() => {
                  topLoader();
                }}
              >
                <ProductCardDonationDisplay
                  key={edubook._id}
                  _id={edubook._id}
                  seller_id={edubook.seller_id}
                  name={edubook.name}
                  img={edubook.photo}
                  condition={edubook.condition}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/*////////////////////////////////////////////////// For Large/Laptop Screens //////////////////////////////////////*/}

      <div className="sm:grid sm:grid-cols-2 lg:hidden xl:grid xl:grid-cols-4 2xl:hidden hidden my-14">
        <div className="sm:col-span-2 xl:col-span-4  mb-12 xl:px-[3vw] px-[8vw]">
          <span className=" sm:text-center font-bold font-rokkitt text-4xl xl:text-left">
            Free Educational Books
          </span>
          <Link href="/browsefreebooks">
            <button className="float-right bg-skin-lightBlue text-skin-darkBlue py-2 px-4 rounded-lg font-semibold text-xl hover:bg-skin-hoverBlue transition-all" onClick={() => {topLoader()}}>
              View all
            </button>
          </Link>
        </div>
        {result?.slice(0, 4).map((edubook) => {
          return (
            <div className="ml-auto mr-auto mb-16">
              <div
                onClick={() => {
                  topLoader();
                }}
              >
                <ProductCardDonationDisplay
                  key={edubook._id}
                  _id={edubook._id}
                  seller_id={edubook.seller_id}
                  name={edubook.name}
                  img={edubook.photo}
                  condition={edubook.condition}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* ////////////////////////////////////////////////For Medium Screens////////////////////////////////////////// */}

      <div className="lg:grid lg:grid-cols-3 xl:hidden sm:hidden md:hidden 2xl:hidden hidden my-14">
        <div className="col-span-3 mb-12 px-[5vw]">
          <span className="font-bold font-rokkitt text-4xl">Free Educational Books</span>
          <Link href="/browsefreebooks">
            <button className="float-right bg-skin-lightBlue text-skin-darkBlue py-2 px-4 rounded-lg font-semibold text-xl hover:bg-skin-hoverBlue transition-all" onClick={() => {topLoader()}}>
              View all
            </button>
          </Link>
        </div>
        {result?.slice(0, 3).map((edubook) => {
          return (
            <div className="ml-auto mr-auto mb-16">
              <div
                onClick={() => {
                  topLoader();
                }}
              >
                <ProductCardDonationDisplay
                  key={edubook._id}
                  _id={edubook._id}
                  seller_id={edubook.seller_id}
                  name={edubook.name}
                  img={edubook.photo}
                  condition={edubook.condition}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* ///////////////////////////////////////////////////For Small/Mobile Screens///////////////////////////////////////// */}

      <div className="sm:hidden  grid grid-cols-1 my-14">
        <h2 className="font-bold font-rokkitt text-3xl mb-12 text-center underline">
          Free Educational Books
        </h2>
        {result?.slice(0, 2).map((edubook) => {
          return (
            <div className="ml-auto mr-auto mb-16">
              <div
                onClick={() => {
                  topLoader();
                }}
              >
                <ProductCardDonationDisplay
                  key={edubook._id}
                  _id={edubook._id}
                  seller_id={edubook.seller_id}
                  name={edubook.name}
                  img={edubook.photo}
                  condition={edubook.condition}
                />
              </div>
            </div>
          );
        })}
        <Link href="/browsefreebooks">
          <button className="float-right bg-skin-lightBlue text-skin-darkBlue py-2 px-4 rounded-lg font-semibold text-xl hover:bg-skin-hoverBlue transition-all w-8/12 ml-auto mr-auto" onClick={() => {topLoader()}}>
            View all
          </button>
        </Link>
      </div>
    </>
  );
};

export default TopFreeEduBook;