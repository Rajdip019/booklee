import React from "react";
import { Avatar } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ChakraProvider } from "@chakra-ui/react";
import ReactMapGL from "react-map-gl";
import { useEffect, useState } from "react";


const SellerDonaterDetailsDonate = (props) => {
  const { data: session } = useSession();
  const mail = session?.user?.email;

  const [viewport, setViewport] = useState({
    width: "600px",
    height: "250px",
    latitude: 13.08268,
    longitude: 80.270721,
    zoom: 16,
  });
  const [viewportM, setViewportM] = useState({
    width: "0px",
    height: "0px",
    latitude: 13.08268,
    longitude: 80.270721,
    zoom: 16,
  });

  async function handleMap() {
    // Getting the Data from all the input field and Sending it to the API end Point.
    const Api_key = process.env.GEOCODING_API_KEY
    const res = await fetch(
      `https://atlas.microsoft.com/search/address/json?&subscription-key=${Api_key}&api-version=1.0&language=en-US&query=${props.addressB}${props.cityB},${props.pinB},${props.stateB},${props.countryB}`
    );
    const latData = await res.json(); //Getting the response data to use it show the Toast conditionally
    setViewport({
      width: "600px",
      height: "300px",
      latitude: latData?.results[0]?.position?.lat,
      longitude: latData?.results[0]?.position?.lon,
      zoom: 15,
    });
    setViewportM({
      width: "300px",
      height: "300px",
      latitude: latData?.results[0]?.position?.lat,
      longitude: latData?.results[0]?.position?.lon,
      zoom: 15,
    });
  }

  useEffect(() => {
    handleMap();
  }, []);


  return (
    <>
      {/* ///////////////////////////////////////////////////////Display for PC and laptop ////////////////////////////////////////////*/}

      <div className="hidden lg:block shadow-xl bg-gray-100 py-10">
        <div className="  grid grid-cols-4 py-4 px-10">
          {/* Profile Start Avatar and All*/}

          <div className="flex flex-col items-center justify-center  lg:col-span-4 2xl:col-span-1">
            <ChakraProvider>
              <Avatar
                name={props.name}
                src={props.img}
                size="xl"
                className="w-28 h-28 mb-5"
                borderRadius="100%"
              />
            </ChakraProvider>
            <h3 className="font-semibold text-2xl">{props.name}</h3>
            <div className="flex lg:justify-center 2xl:justify-between">
              <Link href={"/profile/[uid]"} as={`/profile/${props._id}`}>
                <button className=" bg-skin-lightBlue text-skin-darkBlue hover:bg-skin-hoverBlue transition-all px-4 py-2 text-md font-bold rounded-3xl m-4 2xl:mx-2 " onClick={()=> {try{props.topLoader()}catch{}}}>
                  View Profile
                </button>
              </Link>
              {props.email != mail && (
              <Link href={"/profile/[uid]/message"} as={`/profile/${props._id}/message`}>
              <button className="text-md text-center bg-skin-darkBlue text-skin-lightBlue p-2 px-6 rounded-3xl hover:bg-blue-700 font-semibold m-4 2xl:mx-2 " onClick={()=> {try{props.topLoader()}catch{}}}>
                Message
              </button>
              </Link>
              ) }
              {props.email === mail && (
              <Link href={"/productdetailsdonate/[uid]/[pid]/admin"} as={`/productdetailsdonate/${props._id}/${props.book_id}/admin`}>
              <button className="text-md text-center bg-skin-darkBlue text-skin-lightBlue p-2 px-6 rounded-3xl hover:bg-blue-700 font-semibold m-4 2xl:mx-2 " onClick={()=> {try{props.topLoader()}catch{}}}>
                Admin View
              </button>
              </Link>
              ) }
            </div>

            {/* Profile Ends Avatar and All*/}
          </div>
          <div className="flex 2xl:flex-col items-center 2xl:justify-center lg:justify-between 2xl:col-span-1 lg:col-span-4 lg:w-10/12 2xl:w-auto mx-auto lg:my-10 2xl:my-0">
            <div>
              <h2 className="font-bold text-lg text-left mb-3">Location:</h2>
              {!props.city &&
                !props.state &&
                !props.country &&
                !props.landmark && (
                  <p className="text-xl flex">No address details given</p>
                )}
              {props.city && props.state && props.country && props.landmark && (
                <p className="text-xl flex">
                  {props.city}, {props.state}, {props.country} ({props.landmark}
                  )
                </p>
              )}
            </div>
            <div>
              <h2 className="font-bold text-lg 2xl:mt-10 mb-3">Mobile No.</h2>
              {!props.phno && (
                <p className="text-lg">Phone number not povided</p>
              )}
              {props.phno && (
                <>
                  {session && <p className="text-lg">{props.phno}</p>}
                  {!session && (
                    <p className="text-lg">Sign in to See Mobile No</p>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="m-auto  lg:col-span-4 2xl:col-span-2">
            <h4 className="font-semibold text-md mb-5">Book Location Map</h4>
            <section className="min-w-[500px]">
              <ReactMapGL
                mapStyle="mapbox://styles/rajdip019/ckxhm41s1im8l14pccg026pf5"
                mapboxApiAccessToken="pk.eyJ1IjoicmFqZGlwMDE5IiwiYSI6ImNreGhuZnplMDBlaDAyd3Vib3RyMGVhajMifQ.IQoz-hXnogEvUowXf7kMnQ"
                {...viewport}
                onViewportChange={(e) => setViewport(e)}
              ></ReactMapGL>
            </section>
            <p className="text-sm text-red-500 mt-3">
              *This is the area of the book listed above.
            </p>
          </div>
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////Display for Mobile and Tablet ////////////////////////////////////////////*/}

      <div className="block lg:hidden mt-10">
        <div className="m-auto  lg:col-span-4 2xl:col-span-2 flex flex-col justify-center items-center my-10 w-11/12">
          <h4 className="font-semibold text-md mb-5">Book Location Map</h4>

          <ReactMapGL
            mapStyle="mapbox://styles/rajdip019/ckxhm41s1im8l14pccg026pf5"
            mapboxApiAccessToken="pk.eyJ1IjoicmFqZGlwMDE5IiwiYSI6ImNreGhuZnplMDBlaDAyd3Vib3RyMGVhajMifQ.IQoz-hXnogEvUowXf7kMnQ"
            {...viewportM}
            onViewportChange={(e) => setViewportM(e)}
          ></ReactMapGL>

          <p className="text-sm text-red-500 mt-3">
            *This is the area of the book listed above.
          </p>
        </div>
        <div className="bg-white w-11/12 drop-shadow-xl rounded-xl p-4 ml-auto mr-auto">
          <div className="mb-9 ">
            <h1 className="col-span-5 text-center font-bold text-3xl my-5">
              Seller Profile
            </h1>
            <Link href={"/profile/[uid]"} as={`/profile/${props._id}`}>
              <div className="mt-auto mb-auto text-center cursor-pointer" onClick={()=> {try{props.topLoader()}catch{}}}>
                <ChakraProvider>
                  <Avatar
                    name={props.name}
                    src={props.img}
                    size="xl"
                    className="w-28 h-28 mb-5"
                    borderRadius="100%"
                  />
                </ChakraProvider>
              </div>
            </Link>
            <h3 className="font-semibold text-lg mb-3 text-center">
              {props.name}
            </h3>
            <Link href={"/profile/[uid]"} as={`/profile/${props._id}`}>
              <div className="w-8/12 mx-auto">
                <button className="w-full bg-skin-darkBlue text-skin-lightBlue hover:bg-skin-hoverBlue transition-all px-4 py-2  text-xl font-bold rounded-3xl" onClick={()=> {try{props.topLoader()}catch{}}}>
                  View Profile
                </button>
              </div>
            </Link>
            <div className="text-center mt-5">
              <h2 className="font-semibold">Mobile No.</h2>
              {!props.phno && (
                <p className="text-lg">Phone number not povided</p>
              )}
              {props.phno && (
                <>
                  {session && <p className="text-lg">{props.phno}</p>}
                  {!session && (
                    <p className="text-lg">Sign in to See Mobile No</p>
                  )}
                </>
              )}

              <h2 className="font-semibold text-lg mt-5">Location:</h2>
              {!props.city &&
                !props.state &&
                !props.country &&
                !props.landmark && <p className="">No address details given</p>}
              {props.city && props.state && props.country && props.landmark && (
                <p className=" flex justify-center">
                  {props.city}, {props.state}, {props.country} ({props.landmark}
                  )
                </p>
              )}

              <h2 className="font-semibold mt-5">Want to chat?</h2>
              {props.email != mail && (
              <Link href={"/profile/[uid]/message"} as={`/profile/${props._id}/message`}>
              <button className="text-md text-center bg-skin-darkBlue text-skin-lightBlue p-2 px-6 rounded-3xl hover:bg-blue-700 font-semibold m-4 2xl:mx-2 " onClick={()=> {try{props.topLoader()}catch{}}}>
              Message
              </button>
              </Link>
              ) }
              {props.email === mail && (
              <Link href={"/productdetailsdonate/[uid]/[pid]/admin"} as={`/productdetailsdonate/${props._id}/${props.book_id}/admin`}>
              <button className="text-md text-center bg-skin-darkBlue text-skin-lightBlue p-2 px-6 rounded-3xl hover:bg-blue-700 font-semibold m-4 2xl:mx-2 " onClick={()=> {try{props.topLoader()}catch{}}}>
                Admin View
              </button>
              </Link>
              ) }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerDonaterDetailsDonate;
