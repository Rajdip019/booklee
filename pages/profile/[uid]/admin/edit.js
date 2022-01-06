import React from "react";
import { useState } from "react";
import Navbar from "../../../components/Navbar";
import GeneralSidebar from "../../../components/GeneralSidebar";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import Document from "../../../document";
import { Input, ChakraProvider } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import cities from "../../../../database/city"; //Have all the cities name According to State
import { createStandaloneToast } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { template } from "../../../../helpers/template";

const EditProfile = ({UserDetails}) => {

  const {templateString} = template;

  const { data: session } = useSession();
  
  //Getting Email of the user form Session
  
  const mail = session?.user?.email;
  
  
  //Gettting the form Changes


  const [phoneNumber, setPhoneNumber] = useState(UserDetails.phone);
  const [address, setAddress] = useState(UserDetails.address);
  const [country, setCountry] = useState(UserDetails.country);
  const [state, setState] = useState(UserDetails.state);
  const [city, setCity] = useState(UserDetails.city);
  const [pin, setPin] = useState(UserDetails.pin);
  const [landmark, setLandmark] = useState(UserDetails.landmark);

  const [loading, setLoading] = useState(false); //useState for the loading dynamic animation

  const toast = createStandaloneToast(); // A standalone toast (doesn't reqiure a parent element)

  const stateCity = cities.filter((element) => element.state == state); //Filtering data according to State from the cities database
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Preventing Default Action of form (Stops page reload)
    setLoading(true); //Showing Loading Animation

    //Getting the Data from all the input field and Sending it to the API end Point.

    const res = await fetch(`${templateString}/api/user/edit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: phoneNumber,
        email: mail,
        address: address,
        landmark: landmark,
        country: country,
        state: state,
        city: city,
        pin: pin,
      }),
    });
    const UserData = await res.json(); //Getting the response data to use it show the Toast conditionally
    //Showing Toast conditionally

    if (UserData.error) {
      setLoading(false); //Turning the animation off after the precoess is done.
      return toast({
        title: "There is a Problem.",
        description: "Please fill all data.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      setLoading(false); //Turning the animation off after the precoess is done.
      return toast({
        title: "Profile Updated.",
        description: "We've Updated Your Profile.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleReset = () => {
    
  }

  return (
    <div>
      <Document />
      <Navbar />
      <GeneralSidebar title="Edit Profile" />

      {!session && (
          <>
            <div className="ml-[0px] lg:ml-[300px] lg:w-[calc(100%-300px)]">
              <div className="flex justify-center mt-[30vh] lg:mt-[40vh]">
                <Link href="/auth/signin">
                  <button className="bg-skin-lightBlue hover:bg-skin-hoverBlue text-skin-darkBlue p-6 rounded-lg font-bold text-xl">
                    Sign In to List Your Book for Selling
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
        {session && (
          <>


        {mail != UserDetails.email && (
          <>
            <div className="ml-[0px] lg:ml-[300px] lg:w-[calc(100%-300px)]">
              <div className="flex justify-center mt-[30vh] lg:mt-[40vh]">
                <Link href="/auth/signin">
                  <p className="bg-skin-lightBlue text-skin-darkBlue p-6 rounded-lg font-bold text-xl inline-block text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 inline-block mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                    You Don't Have Acess to this Page
                  </p>
                </Link>
              </div>
            </div>
          </>
        )}

        {mail === UserDetails.email && (
        <>

      <h1 className="text-2xl font-semibold mb-5 block md:hidden text-center my-5">
        Edit Your Profile
      </h1>
      {/* ///////////////////////////////////Avatar Section//////////////////////////////// */}
      <form>
        <div className="ml-[4vw] md:ml-0">
          <div className="ml-[0px] lg:ml-[300px] w-11/12 lg:w-[calc(100%-300px)] grid grid-col-1 md:grid-cols-5 lg:grid-cols-5 gap-0 md:gap-10">
            <div className="col-span-2 md:col-span-5 lg:col-span-1 mt-10 m-auto">
              <div className="flex flex-col">
              <Avatar
                className="w-28 h-28 scale-100 lg:scale-75 xl:scale-100 mx-auto"
                name={session?.user?.name}
                borderRadius="100%"
                src={session?.user?.image}
              >
              </Avatar>
              <span className="block md:hidden lg:block font-semibold text-center mt-3 text-lg mx-auto" >{session?.user?.name}</span>
              <span className="block md:hidden lg:block text-center text-sm mx-auto text-gray-700" >{session?.user?.email}</span>
              </div>
            </div>
            {/* ///////////////////////////////////Edit Your Profile Personal Details//////////////////////////////// */}
            <div className="col-span-2 mt-5">
              <h1 className="text-2xl font-semibold mb-5 hidden md:block">
                Edit Your Profile
              </h1>
              <h3 className="text-xl font-medium">Personal Details</h3>
              <div className="my-3">
                <div className="my-3">
                  <h3>Phone No</h3>
                  <ChakraProvider>
                    <Input
                      placeholder="Enter Your Mobile Number"
                      value={phoneNumber}
                      type="tel"
                      contentEditable = "true"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </ChakraProvider>
                </div>
                <div className="my-3">
                  <h3>Email</h3>
                  <ChakraProvider>
                    <Input
                      placeholder={mail}
                      type="text"
                      disabled
                      value={mail}
                    />
                  </ChakraProvider>
                </div>
              </div>
            </div>
            <div className="hidden md:block col-span-2 m-auto">
              <img src="/Editprofile.svg" className="w-[230px] h-[160px]"></img>
            </div>
          </div>
          {/* ///////////////////////////////////Adress Part//////////////////////////////// */}
          <div className="ml-[0px] lg:ml-[300px] lg:w-[calc(100%-300px)] grid grid-col-1 md:grid-cols-5 lg:grid-cols-5 gap-0 md:gap-10 mt-10">
            <div className="col-span-2 md:col-span-1 mx-auto"></div>
            <hr className="col-span-4 w-11/12" />
          </div>
          <div className="ml-[0px] lg:ml-[300px] w-11/12 lg:w-[calc(100%-300px)] grid grid-col-1 md:grid-cols-5 lg:grid-cols-5 gap-0 md:gap-10 mt-6">
            <div className="col-span-2 md:col-span-1 mx-auto"></div>
            {/* ///////////////////////////////////Edit Your Profile Personal Details//////////////////////////////// */}
            <div className="md:col-span-4 col-span-1  mt-5 text-xl font-medium lg:-mb-6">
              <h3>Adress Details</h3>
            </div>
            <div className="col-span-2 md:col-span-1   mx-auto"></div>

            <div className=" col-span-2">
              <div className="mb-5">
                <h3>Address</h3>
                <ChakraProvider>
                  <Input
                    placeholder="Enter Your Address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </ChakraProvider>
              </div>
              <label>Country</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="block w-full h-[40px] pl-2 mb-5"
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
              </select>
              <div className="block md:hidden">
                <label>State</label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="block w-full h-[40px] pl-2 mb-5"
                >
                  <option value="">Select State</option>

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
              </div>
              <label>City</label>
              <label className="text-red-500 pl-3 text-sm">
                (*enter state before selecting city)
              </label>
              <select
                className="block w-full h-[40px] pl-2 "
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">Select City</option>
                {stateCity.map((city) => {
                  return (
                    <option value={city.name}>{city.name}</option> //Mapping through city database According to state
                  );
                })}
              </select>

              <div className=" flex my-8">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="hidden md:block bg-skin-lightGreen text-skin-darkGreen font-bold px-4 py-2 rounded-lg mr-6"
                >
                  Save
                </button>
                <button
                  type="submit"
                  onClick={handleReset}
                  className="hidden md:block bg-skin-lightRed text-skin-darkRed font-bold px-4 py-2 rounded-lg mr-6"
                >
                  Reset
                </button>
                {loading ? (
                        <div className="hidden md:block">
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
                        <></>
                      )}
              </div>
            </div>
            <div className="col-span-2 xl:pr-8 ">
              <div className="md:w-11/12">
                <h3>Landmark</h3>
                <ChakraProvider>
                  <Input
                    type="text"
                    placeholder="Enter Your nearby Landmark"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                  />
                </ChakraProvider>
              </div>
              <div className="hidden md:block mt-5">
                <label>State</label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="block h-[40px] pl-2 mb-5 md:w-11/12"
                >
                  <option value="">Select State</option>
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
              </div>
              <div className="mt-5 md:w-11/12">
                <h3>Pincode</h3>
                <ChakraProvider>
                  <Input 
                    placeholder="Enter Your Pincode"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                  />
                </ChakraProvider>
              </div>
              {/* ////////////////////Mobile Buttons////////////////////////////// */}
              <div className=" flex mb-10">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="block md:hidden bg-skin-lightGreen text-skin-darkGreen font-bold px-4 py-2 rounded-lg mr-6 mt-5"
                >
                  Save
                </button>
                {loading ? (
                        <div className="mt-5 block md:hidden">
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
                        <></>
                      )}
              </div>
            </div>
          </div>
        </div>
      </form>


        </>

        )}
          </>
        )}

    </div>
  );
};
export async function getServerSideProps({params:{uid}}) {
  const {templateString} = template;

  try{
    const res = await fetch(`${templateString}/api/user/userdetails/${uid}`);
    const data = await res.json()
    return{
      props:{
        UserDetails : data,
      }
    }

  }catch{
    return{
      notFound: true,
    }
  }
}

export default EditProfile;

