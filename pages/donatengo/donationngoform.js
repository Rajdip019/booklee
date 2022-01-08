import React from "react";
import Navbar from "../components/Navbar";
import GeneralSidebar from "../components/GeneralSidebar";
import { Input, ChakraProvider, createStandaloneToast, Spinner } from "@chakra-ui/react";
import Document from "../document";
import { useRouter } from "next/router";
import { useState } from "react";
import cities from "../../database/city";
import { useSession } from "next-auth/react";
import Link from "next/link";

const DonationAddressForm = () => {
  const router = useRouter();
  const {data : session} = useSession();

  const [adress, setAdress] = useState();
  const [landmark, setLandmark] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [pin, setPin] = useState();
  const [quantity, setQuantity] = useState();
  const [condition, setCondition] = useState();
  const [category, setCategory] = useState();

  const stateCity = cities.filter((element) => element.state == state); //Filtering data according to State from the cities database

  const toast = createStandaloneToast(); // A standalone toast (doesn't reqiure a parent element)

  const [loading, setLoading] = useState(false);

  const handleQuery = () => {
    if (
      !adress ||
      !landmark ||
      !country ||
      !city ||
      !state ||
      !pin ||
      !quantity ||
      !condition ||
      !category
    ) {
      return toast({
        title: "There is a Problem.",
        description: "Please fill all data.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      setLoading(true);
      router.push({
        pathname: "/donatengo/donationNGOlist",
        query: {
          address: adress,
          landmark: landmark,
          country: country,
          state: state,
          city: city,
          pin: pin,
          quantity: quantity,
          condition: condition,
          category: category,
        },
      });
    }
  };

  return (
    <div>
      <Document />
      <Navbar />
      <GeneralSidebar title="Donate to a NGO" />

              {/*//////////////////////////////////////////// When User is not Authenticated //////////////////////////////////// */}

              {!session && (
          <>
            <div className="ml-[0px] lg:ml-[300px] lg:w-[calc(100%-300px)]">
              <div className="flex justify-center mt-[30vh] lg:mt-[40vh]">
                <Link href="/auth/signin">
                  <button className="bg-skin-lightBlue hover:bg-skin-hoverBlue text-skin-darkBlue p-6 rounded-lg font-bold text-xl">
                    Sign In to List Your Book for Donating
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
        {session && (

      <>
        <div className="mt-10 w-10/12 m-auto">
          <div className="ml-[0px] lg:ml-[300px] w-11/12 lg:w-[calc(100%-300px)] grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-10">
            <div className=" col-span-1 md:col-span-2">
              <h1 className="text-2xl font-bold mb-1">Enter Address Details</h1>
              <p className="text-sm text-red-600">
                *All the fields are required.
              </p>
            </div>
            <div>
              <div className="my-3">
                <h3>Address</h3>
                <ChakraProvider className="w-[30vw]">
                  <Input
                    value={adress}
                    placeholder="Enter your Address"
                    className="mb-5 "
                    onChange={(e) => setAdress(e.target.value)}
                  />
                </ChakraProvider>
                <label>Country</label>
                <select
                  className="block w-full h-[40px] pl-2 mb-5"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">Enter Country</option>
                  <option value="India">India</option>
                </select>
                <label className="md:hidden">State</label>
                <select
                  className="block w-full h-[40px] pl-2 mb-5 md:hidden"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
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
              </div>
            </div>
            {/* ///////////////////////////////////DonationAdressForm(second part)//////////////////////////////// */}
            <div>
              <div className="my-3">
                <div>
                  <h3>Landmark</h3>
                  <ChakraProvider>
                    <Input
                      placeholder="Enter Your nearby Landmark"
                      value={landmark}
                      onChange={(e) => setLandmark(e.target.value)}
                      className="mb-5"
                    />
                  </ChakraProvider>
                </div>
                <label className="hidden md:block">State</label>
                <select
                  className=" w-full h-[40px] pl-2 mb-5 hidden md:block"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
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
                <div>
                  <h3>Pincode</h3>
                  <ChakraProvider>
                    <Input
                      placeholder="Enter Your Pincode"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                    />
                  </ChakraProvider>
                </div>
              </div>
            </div>

            {/*/////////////////////////////////////////////////////////// Book Form///////////////////////////////////////// */}
            <div>
              <div className="my-3">
                <h2 className="font-bold text-2xl mb-5">Enter Book Details</h2>
                <h3>Quantity</h3>
                <ChakraProvider className="w-[30vw]">
                  <Input
                    placeholder="Enter Quantity"
                    type="number"
                    className="mb-5"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                  />
                </ChakraProvider>
                <label>Overall Condition</label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="block w-full h-[40px] pl-2 mb-5"
                >
                  <option value="">Enter Condition</option>
                  <option value="5">5 star (Almost New Condition))</option>
                  <option value="4">4 star (Good Condition)</option>
                  <option value="3">3 star (Average Condition)</option>
                  <option value="2">2 star (Below Average Condition)</option>
                  <option value="1">1 star (Poor Condition)</option>
                </select>
                <label>Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="block w-full h-[40px] pl-2 mb-5"
                >
                  <option value="">Enter Category</option>
                  <option value="Education">Education</option>
                  <option value="Story Book">Story Book</option>
                  <option value="Sci-fi">Sci-fi</option>
                  <option value="Self_Growth">Self-Growth</option>
                  <option value="Horror">Horror</option>
                  <option value="Documentry">Documentry</option>
                </select>
              </div>
            </div>

            <div>
              <div className="hidden md:block">
                <img
                  src="/ListBookForSelling.svg"
                  className="w-[250px] h-[250px] m-auto"
                ></img>
              </div>
            </div>

            <div className="flex mb-8">
              <button
                type="submit"
                className="bg-skin-lightGreen text-skin-darkGreen font-bold py-2 px-4 rounded-lg hover:bg-skin-hoverGreen transition-all mr-5"
                onClick={handleQuery}
              >
                Find Nearby NGO
              </button>
              {/* Showing the Spinner Conditionally */}

              {loading ? (
                <div >
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
      </>
        )}
    </div>
  );
};

export default DonationAddressForm;
