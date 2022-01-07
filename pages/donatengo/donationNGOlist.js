import React from "react";
import Navbar from "../components/Navbar";
import NGOlist from "../components/NGOlist";
import Link from "next/link";
import Document from "../document";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { ChakraProvider, Spinner, createStandaloneToast } from "@chakra-ui/react";
import { template } from "../../helpers/template";

const DonationNGOlist = ({ NGOData }) => {
  const {templateString} = template;
  const { data: session } = useSession();
  const email = session?.user?.email;
  const nameUser = session?.user?.name;

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const {
    address,
    landmark,
    country,
    state,
    city,
    pin,
    quantity,
    condition,
    category,
  } = router.query;

  const NGOILocation = NGOData.results.map((result) => ({
    latitude: result?.position?.lat,
    longitude: result?.position?.lon,
  }));

  const NGOInfo = NGOData.results.map((result) => ({
    country: result?.address?.country,
    city: result?.address?.countrySecondarySubdivision,
    pin: result?.address?.postalCode,
    freeAddress: result?.address?.freeformAddress,
    name: result?.poi?.name,
    latitude: result?.position?.lat,
    longitude: result?.position?.lon,
  }));

  const center = getCenter(NGOILocation);

  const [selectedLocation, setSelectedLocation] = useState({});

  const [viewport, setViewport] = useState({
    width: "550px",
    height: "100vh",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  const [addressS, setAddressS] = useState("");
  const [countryS, setCountryS] = useState("");
  const [cityS, setCityS] = useState("");
  const [pinS, setPinS] = useState("");
  const [nameS, setNameS] = useState("");
  const [submitButton, setSubmitButton] = useState(false);

  const SelectedNgoDetails = (
    addessPassed,
    countrySPassed,
    pinPassed,
    cityPassed,
    namePassed
  ) => {
    setAddressS(addessPassed);
    setCountryS(countrySPassed);
    setPinS(pinPassed);
    setCityS(cityPassed);
    setNameS(namePassed);
    setSubmitButton(true);
  };

  const toast = createStandaloneToast(); // A standalone toast (doesn't reqiure a parent element)

  const handleSubmit = async (e) => {
    e.preventDefault(); // Preventing Default Action of form (Stops page reload)
    setLoading(true); //Showing Loading Animation

    //Getting the Data from all the input field and Sending it to the API end Point.

    const res = await fetch(`${templateString}/api/donatengo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nameUser: nameUser,
        email: email,
        condition: condition,
        category: category,
        address: address,
        landmark: landmark,
        country: country,
        state: state,
        city: city,
        pin: pin,
        quantity: quantity,
        addressNGO: addressS,
        countryNGO: countryS,
        cityNGO: cityS,
        pinNGO: pinS,
        nameNGO: nameS,
      }),
    });
    const Donatedata = await res.json(); //Getting the response data to use it show the Toast conditionally

    if (Donatedata.error) {
      setLoading(false); //Turning the animation off after the precoess is done.
      return toast({
        title: "There is a Problem.",
        description: "Please try again",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      router.push("/thankyoufordonation");
      setLoading(false); //Turning the animation off after the precoess is done.
      return toast({
        title: "Donation Request Sent",
        description: "We will reach you within 6 hour with confirmation.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <Document />
      <Navbar />
      <form>
        <div className=" lg:grid lg:grid-cols-2">
          <div className="mx-auto w-10/12 mt-10">
            <h1 className="text-5xl font-bold mb-10 text-left font-rokkitt">
              Select a Nearby NGO to Donate:
            </h1>
            <div className="mb-48">
              {NGOInfo.map((ngo) => {
                return (
                  <NGOlist
                    name={ngo.name}
                    address={ngo.freeAddress}
                    country={ngo.country}
                    city={ngo.city}
                    pin={ngo.pin}
                    SelectedNGOList={SelectedNgoDetails}
                  />
                );
              })}
            </div>
          </div>
          <section className="ml-auto hidden lg:block" onClick={() => {setSubmitButton(false);}}>
            <ReactMapGL
              mapStyle="mapbox://styles/rajdip019/ckxhm41s1im8l14pccg026pf5"
              mapboxApiAccessToken="pk.eyJ1IjoicmFqZGlwMDE5IiwiYSI6ImNreGhuZnplMDBlaDAyd3Vib3RyMGVhajMifQ.IQoz-hXnogEvUowXf7kMnQ"
              {...viewport}
              onViewportChange={(e) => setViewport(e)}
            >
              {NGOInfo.map((result) => (
                <div key={result.longitude}>
                  <Marker
                    latitude={result.latitude}
                    longitude={result.longitude}
                    offsetLeft={-20}
                    offsetTop={-10}
                  >
                    <p
                      onClick={() => setSelectedLocation(result)}
                      className=" cursor-pointer text-2xl animate-bounce"
                    >
                      📌
                    </p>
                  </Marker>
                  {selectedLocation.longitude === result.longitude ? (
                    <Popup
                      closeOnClick={true}
                      onclose={() => setSelectedLocation({})}
                      latitude={result.latitude}
                      longitude={result.longitude}
                    >
                      <div className="max-w-[200px]">
                        <p className="text-lg font-semibold font-rokkitt ">
                          {result.name}
                        </p>
                      </div>
                    </Popup>
                  ) : (
                    false
                  )}
                </div>
              ))}
            </ReactMapGL>
          </section>
        </div>

        <div className="mt-5 fixed z-50 bottom-0 bg-white lg:py-8 shadow-inner w-full">
          <div className="flex justify-end w-11/12 mx-auto flex-col-reverse lg:flex-row">
            <Link href="/donatengo/donationngoform">
              <button
                type="submit"
                className=" font-bold text-lg bg-skin-lightRed text-skin-darkRed px-4 py-2 rounded-xl mb-3 lg:my-3 mx-10 transition-all hover:bg-red-200"
              >
                Back
              </button>
            </Link>
            {submitButton ? (
              <button
                type="submit"
                className="lg:flex lg:items-center my-3 font-bold text-lg bg-skin-lightGreen text-skin-darkGreen px-4 py-2 rounded-xl mx-10 transition-all hover:bg-skin-hoverGreen"
                onClick={handleSubmit}
              >
                Donate to <p className="text-sm lg:ml-2 lg:mt-[2px] ">{nameS}</p> 
              </button>
            ) : (
              <button
                type="submit"
                className=" font-bold text-lg bg-gray-300 text-gray-700 px-4 py-2 rounded-xl my-3 lg:my-3 mx-10"
                disabled
              >
                Donate
              </button>
            )}
            {/* Showing the Spinner Conditionally */}

            {loading ? (
              <div className="my-5">
                <ChakraProvider>
                  <Spinner
                    thickness="3.5px"
                    size="lg"
                    color="blue.500"
                    speed="0.8s"
                  />
                </ChakraProvider>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { address, landmark, country, city, state, pin } = query;
  const Api_key = process.env.GEOCODING_API_KEY;
  const res = await fetch(
    `https://atlas.microsoft.com/search/address/json?&subscription-key=${Api_key}&api-version=1.0&language=en-US&query=${address}${city},${pin},${state},${country}`
  );
  const latData = await res.json();
  const lat = await latData?.results[0]?.position?.lat;
  const lon = await latData?.results[0]?.position?.lon;
  const res1 = await fetch(
    `https://atlas.microsoft.com/search/nearby/json?subscription-key=${Api_key}&api-version=1.0&lat=${lat}&lon=${lon}&categorySet=9152&radius=10000`
  );
  const NGOData = await res1.json(); //Getting the response data to use it show the Toast conditionally
  return {
    props: {
      NGOData: NGOData,
    },
  };
}

export default DonationNGOlist;
