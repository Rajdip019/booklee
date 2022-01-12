import React from "react";
import ProductCardSellingDisplay from "./ProductCardSellingDisplay";
import Link from "next/link";
import { useState, useEffect } from "react";
import { template } from "../../helpers/template";
import CardSkeleton from "./CardSkeleton";

const TopStoryBooksHome = ({topLoader}) => {
  const { templateString } = template;
  const [isFteched, setISFetched] = useState(true)

  const [result, setResult] = useState(null);

  const handleStory = async () => {
    try {
      const res = await fetch(`${templateString}/api/sellbook/storybooks`);
      const bookData = await res.json(); //Getting the response data to use it show the Toast conditionally
      setResult(bookData);
      setISFetched(false)
    } catch {
      null;
    }
  };

  useEffect(() => {
    handleStory();
  }, []);

  return (
    <>
      {/*////////////////////////////////////////// For Extra Large/PC Skin/////////////////////////////////////////// */}

      <div className="sm:hidden 2xl:grid 2xl:grid-cols-5 gap-1 w-11/12 m-auto md:hidden lg:hidden hidden">
        <div className="col-span-5  mb-12 px-[2vw]">
          <span className="text-4xl font-bold ml-0 font-rokkitt">Top Story Books</span>
          <Link href="/browsebooks/topstorybooks">
            <button className="float-right bg-skin-lightBlue text-skin-darkBlue py-2 px-4 rounded-lg font-semibold text-xl hover:bg-skin-hoverBlue transition-all " onClick={() => {topLoader();}}>
              View all
            </button>
          </Link>
        </div>
        {isFteched ? (
          <>
          <div className="ml-auto mr-auto mb-16"><CardSkeleton /></div>
          <div className="ml-auto mr-auto mb-16"><CardSkeleton /></div>
          <div className="ml-auto mr-auto mb-16"><CardSkeleton /></div>
          <div className="ml-auto mr-auto mb-16"><CardSkeleton /></div>
          <div className="ml-auto mr-auto mb-16"><CardSkeleton /></div>
          </>
        ) : (null)}
        {result?.slice(0, 5).map((storybook) => {
          return (
            <div className="ml-auto mr-auto mb-16">
              <div
                onClick={() => {
                  topLoader();
                }}
              >
                <ProductCardSellingDisplay
                  _id={storybook._id}
                  seller_id={storybook.seller_id}
                  name={storybook.name}
                  img={storybook.photo}
                  price={storybook.price}
                  condition={storybook.condition}
                  category={storybook.category}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/*////////////////////////////////////////////////// For Large/Laptop Screens //////////////////////////////////////*/}

      <div className="sm:grid sm:grid-cols-2 lg:hidden xl:grid xl:grid-cols-4 2xl:hidden hidden ">
        <div className="sm:col-span-2 xl:col-span-4  mb-12 xl:px-[3vw] px-[8vw]">
          <span className=" sm:text-center text-4xl font-bold font-rokkitt xl:text-left">
            Top Story Books
          </span>
          <Link href="/browsebooks/topstorybooks">
            <button className="float-right bg-skin-lightBlue text-skin-darkBlue py-2 px-4 rounded-lg font-semibold text-xl hover:bg-skin-hoverBlue transition-all" onClick={() => {topLoader();}}>
              View all
            </button>
          </Link>
        </div>
        {isFteched ? (
          <>
          <div className="ml-auto mr-auto mb-16"><CardSkeleton /></div>
          <div className="ml-auto mr-auto mb-16"><CardSkeleton /></div>
          <div className="ml-auto mr-auto mb-16"><CardSkeleton /></div>
          <div className="ml-auto mr-auto mb-16"><CardSkeleton /></div>
          </>
        ) : (null)}
        {result?.slice(0, 4).map((storybook) => {
          return (
            <div className="ml-auto mr-auto mb-16">
              <div
                onClick={() => {
                  topLoader();
                }}
              >
                <ProductCardSellingDisplay
                  _id={storybook._id}
                  seller_id={storybook.seller_id}
                  name={storybook.name}
                  img={storybook.photo}
                  price={storybook.price}
                  condition={storybook.condition}
                  category={storybook.category}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* ////////////////////////////////////////////////For Medium Screens////////////////////////////////////////// */}

      <div className="lg:grid lg:grid-cols-3 xl:hidden sm:hidden md:hidden 2xl:hidden hidden">
        <div className="col-span-3 mb-12 px-[5vw]">
          <span className="text-4xl font-bold font-rokkitt">Top Story Books</span>
          <Link href="/browsebooks/topstorybooks">
            <button className="float-right bg-skin-lightBlue text-skin-darkBlue py-2 px-4 rounded-lg font-semibold text-xl hover:bg-skin-hoverBlue transition-all" onClick={() => {topLoader();}}>
              View all
            </button>
          </Link>
        </div>
        {isFteched ? (
          <>
          <div className="ml-auto mr-auto mb-16"><CardSkeleton /></div>
          <div className="ml-auto mr-auto mb-16"><CardSkeleton /></div>
          <div className="ml-auto mr-auto mb-16"><CardSkeleton /></div>
          </>
        ) : (null)}
        {result?.slice(0, 3).map((storybook) => {
          return (
            <div className="ml-auto mr-auto mb-16">
              <div
                onClick={() => {
                  topLoader();
                }}
              >
                <ProductCardSellingDisplay
                  _id={storybook._id}
                  seller_id={storybook.seller_id}
                  name={storybook.name}
                  img={storybook.photo}
                  price={storybook.price}
                  condition={storybook.condition}
                  category={storybook.category}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* ///////////////////////////////////////////////////For Small/Mobile Screens///////////////////////////////////////// */}

      <div className="sm:hidden  grid grid-cols-1">
        <h2 className="text-3xl font-bold  font-rokkitt mb-12 text-center underline">
          Top Story Books
        </h2>
        {isFteched ? (
          <>
          <div className="ml-auto mr-auto mb-16"><CardSkeleton /></div>
          <div className="ml-auto mr-auto mb-16"><CardSkeleton /></div>
          </>
        ) : (null)}
        {result?.slice(0, 2).map((storybook) => {
          return (
            <div className="ml-auto mr-auto mb-16">
              <div
                onClick={() => {
                  topLoader();
                }}
              >
                <ProductCardSellingDisplay
                  _id={storybook._id}
                  seller_id={storybook.seller_id}
                  name={storybook.name}
                  img={storybook.photo}
                  price={storybook.price}
                  condition={storybook.condition}
                  category={storybook.category}
                />
              </div>
            </div>
          );
        })}
        <Link href="/browsebooks/topstorybooks">
          <button className="float-right bg-skin-lightBlue text-skin-darkBlue py-2 px-4 rounded-lg font-semibold text-xl hover:bg-skin-hoverBlue transition-all w-8/12 ml-auto mr-auto" onClick={() => {topLoader();}}>
            View all
          </button>
        </Link>
      </div>
    </>
  );
};

export default TopStoryBooksHome;