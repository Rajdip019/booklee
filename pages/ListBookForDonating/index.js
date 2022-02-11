import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import GeneralSidebar from "../components/GeneralSidebar";
import Document from "../document";
import Link from "next/link";
import { Spinner } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { createStandaloneToast } from "@chakra-ui/react";
import { Input, ChakraProvider } from "@chakra-ui/react";
import { getSession } from "next-auth/react";
import cities from "../../database/city"; //Have all the cities name According to State
import { template } from "../../helpers/template";
import LoadingBar from "react-top-loading-bar";
import collegeList from "../../database/college";

const ListBookForDonating = () => {

  const { data: session } = useSession();
  const { templateString } = template;

  const [progress, setProgress] = useState(0);

  //Getting Email of the user form Session

  const mail = session?.user?.email;

  //Gettting the form Changes

  const [bookname, setBookname] = useState("");
  const [authorname, setAuthorname] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState("");
  const [condition, setCondition] = useState("");
  const [adress, setAdress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [study, setStudy] = useState("");
  const [college, setCollege] = useState("");
  const [otherCollege, setOtherCollege] = useState("");
  const [school, setSchool] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [loading, setLoading] = useState(false); //useState for the loading dynamic animation
  const [formStep, setFormStep] = useState(true); //useState for the multi step of the form

  const stateCity = cities.filter((element) => element.state == state); //Filtering data according to State from the cities database

  const toast = createStandaloneToast(); // A standalone toast (doesn't reqiure a parent element)
  ///Form Submit Function
  let remaining = (300 - description.length);


  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const handleSubmit = async (e) => {
    setProgress(30)
    e.preventDefault(); // Preventing Default Action of form (Stops page reload)
    const id = await havesession();
    setLoading(true);  //Showing Loading Animation
    setProgress(50)
    const mediaUrl = await imgUpload(); //Getting the Image URL from the imgUpload function

    //Getting the Data from all the input field and Sending it to the API end Point.
    if(college === "other"){

      const res = await fetch(`${templateString}/api/donatebook/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: bookname,
          author: authorname,
          condition: condition,
          description: description,
          photo: mediaUrl,
          seller_mail: mail,
          seller_id: id,
          adress: adress,
          landmark: landmark,
          country: country,
          state: state,
          city: city,
          pin: pin,
          study: study,
          college: otherCollege,
          school: school
        }),
      });
      setProgress(100)
      const bookData = await res.json(); //Getting the response data to use it show the Toast conditionally
  
      //Showing Toast conditionally
  
      if (bookData.error) {
        setLoading(false); //Turning the animation off after the precoess is done.
        return toast({
          title: "There is a Problem.",
          description: "Please fill all data.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        handleReset(); //Reset the form when the Submission is Successful.
        setLoading(false); //Turning the animation off after the precoess is done.
        setFormStep(true); // After Successful Submission again render Book Details form (first form)
        return toast({
          title: "Book Listed.",
          description: "We've listed your book for selling.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    }else{
      const res = await fetch(`${templateString}/api/donatebook/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: bookname,
          author: authorname,
          condition: condition,
          description: description,
          photo: mediaUrl,
          seller_mail: mail,
          seller_id: id,
          adress: adress,
          landmark: landmark,
          country: country,
          state: state,
          city: city,
          pin: pin,
          study: study,
          college: college,
          school: school
        }),
      });
      setProgress(100)
      const bookData = await res.json(); //Getting the response data to use it show the Toast conditionally
  
      //Showing Toast conditionally
  
      if (bookData.error) {
        setLoading(false); //Turning the animation off after the precoess is done.
        return toast({
          title: "There is a Problem.",
          description: "Please fill all data.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        handleReset(); //Reset the form when the Submission is Successful.
        setLoading(false); //Turning the animation off after the precoess is done.
        setFormStep(true); // After Successful Submission again render Book Details form (first form)
        return toast({
          title: "Book Listed.",
          description: "We've listed your book for selling.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  //Upload Image Function using Coludinary

  const imgUpload = async () => {
    const data = new FormData();
    data.append("file", media);
    data.append("upload_preset", "bookImg");
    data.append("cloud_name", "bookleemedia");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/bookleemedia/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const img = await res.json();
    return img.url;
  };

  const havesession = async () => {
    const fetchSession = await getSession()
    const fetchMail = fetchSession?.user?.email
    const res = await fetch(`${templateString}/api/user/${fetchMail}`)
    const userData = await res.json()
    return userData._id
  }


  //Reset the form Function

  const handleReset = () => {
    setBookname("");
    setAuthorname("");
    setDescription("");
    setMedia("");
    setCondition("");
    setAdress("");
    setLandmark("");
    setCountry("");
    setCity("");
    setState("");
    setPin("");
    setCollege("");
    setOtherCollege("");
    setStudy("");
    setSchool("")
    setSelectedFile(null);
  };

  return (
    <div>
      <Document />
      <Navbar />
      <LoadingBar
        color="#4287f5"
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <GeneralSidebar title="List Your Book" />

      {/*/////////////////////// If there is no session (user is not authenticated)  /////////////////////////// */}

      {!session && (
        <>
          <div className="ml-[0px] lg:ml-[300px] lg:w-[calc(100%-300px)]">
            <div className="flex justify-center mt-[30vh] lg:mt-[40vh]">
              <Link href="/auth/signin">
                <button className="bg-skin-lightGreen hover:bg-skin-hoverGreen text-skin-darkGreen p-6 rounded-lg font-bold text-xl" onClick={() => setProgress(30)}>
                  Sign In to List Your Book for Donation
                </button>
              </Link>
            </div>
          </div>
        </>
      )}

      {/*/////////////////////// If there is session (user is authenticated)  /////////////////////////// */}

      {session && (
        <form>

          {formStep ? ( //Book Details Form
            <>
              <div className="ml-[0px] lg:ml-[300px] lg:w-[calc(100%-300px)] ">
                <div className="hidden lg:block bg-skin-lightGreen text-skin-darkGreen rounded-xl w-11/12 mx-auto mt-5 shadow-lg">
                  <div className="flex flex-col sm:flex-row text-center sm:text-left justify-between h-full ">
                    <div className="ml-0 sm:ml-7 my-auto ">
                      <h1 className="text-xl sm:text-2xl font-bold">
                        Donate to NGO
                      </h1>
                    </div>
                    <div className="my-auto text-center">
                      <Link href="/donatengo">
                        <button className="font-bold bg-skin-darkGreen text-skin-lightGreen rounded-xl mr-0 sm:mr-7 py-2 px-4 my-3 text-xl" onClick={() => setProgress(30)}>
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
                      Enter Book Details Below
                    </h1>
                    <div className="my-3">
                      <h3>Book Name</h3>
                      <ChakraProvider className="w-[30vw]">
                        <Input
                          placeholder="Enter the book Name"
                          className="w-[10vw]"
                          name="bookname"
                          value={bookname}
                          onChange={(e) => {
                            setBookname(e.target.value);
                          }}
                          required
                        />
                      </ChakraProvider>{" "}
                      <div className="my-5">
                        <h3>Author Name</h3>
                        <ChakraProvider>
                          <Input
                            placeholder="Enter the Author Name"
                            name="authorname"
                            value={authorname}
                            onChange={(e) => {
                              setAuthorname(e.target.value);
                            }}
                          />
                        </ChakraProvider>
                      </div>
                      <div className="my-3">
                        <h3>Product Description</h3>
                        <textarea
                          type="text"
                          className="w-full h-24 resize-none"
                          id="text-area"
                          placeholder="Enter Product Description"
                          name="description"
                          value={description}
                          maxLength="300"
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                        />
                        <p className={remaining == 0 ? "float-right text-xs text-red-600" : "float-right text-xs text-opacity-50 "} id="remaining-char">{remaining} characters remaining</p>

                      </div>
                    </div>
                  </div>
                  {/* ///////////////////////////////////Enter Book Details Below(last part)//////////////////////////////// */}
                  <div className="mt-0 md:mt-[59px]">
                    <div className="xl:pr-8">
                      <div className="hidden md:block">
                        <img
                          src="/ListBookForDonation.svg"
                          className="w-[230px] h-[160px] mx-auto scale-105"
                        ></img>
                      </div>

                      <label htmlFor="cars">Condition</label>
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
                    </div>
                  </div>
                </div>
              </div>
              {/* /////////<///////////////////////////After Grid////////////////////////////////////////// */}

              <div className="mt-5 w-10/12 mx-auto">
                <div className="ml-[0px] lg:ml-[300px] w-11/12 lg:w-[calc(100%-300px)]">
                  <label className="block text-sm font-medium text-gray-700">
                    Add Product Image
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">

                    {selectedFile ? ( <img src={selectedFile} alt="" className="w-60 mx-auto my-3" />) : (
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
                          )}
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-skin-darkBlue hover:text-skin-darkBlue  focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-bg-skin-lightBlue"
                        >
                          <span className="hover:underline transition-all">
                            Upload a photo
                          </span>
                        </label>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only "
                          accept="image/*"
                          onChange={(e) => {setMedia(e.target.files[0]); addImageToPost(e);}}
                        />

                        {/* Showing the Uploaded File name */}

                        <span className="ml-2">
                          {media.name} {!media.name && "No Photo Selected"}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
                    </div>
                  </div>
                  <div className="flex mb-9">
                    <button
                      type="submit"
                      className="bg-skin-lightGreen text-skin-darkGreen font-bold py-2 px-4 rounded-lg mt-5 mr-5 hover:bg-skin-hoverGreen transition-all"
                      onClick={() => { setFormStep(false) }}
                    >
                      Next
                    </button>
                    <button
                      type="reset"
                      className="bg-skin-lightRed text-skin-darkRed font-bold py-2 px-4 rounded-lg mt-5 mr-5 hover:bg-red-100 transition-all"
                      onClick={handleReset}
                    >
                      Reset
                    </button>

                    {/* Showing the Spinner Conditionally */}

                    {loading ? (
                      <div className="mt-6">
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

          ) : ( //Adress Details Form
            <>
              <div className="mt-10 w-10/12 m-auto">
                <div className="ml-[0px] lg:ml-[300px] w-11/12 lg:w-[calc(100%-300px)] grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-10">
                <div className=" col-span-1 md:col-span-2">
                      <h1 className="text-2xl font-bold mb-1">
                        Enter College/School Details
                      </h1>
                      <p className="text-sm text-red-600">
                        *Enter college/school name to reach to your school/college students easily.
                      </p>
                    </div>
                    <select
                      name=""
                      id=""
                      className="block w-full h-[40px] pl-2"
                      onChange={(e) => {
                        setStudy(e.target.value);
                        setCollege("")
                        setSchool("")
                      }}
                    >
                      <option value={null}>
                        Are you in College or School?
                      </option>
                      <option value="college">College</option>
                      <option value="school">School</option>
                    </select>
                    {study === "college" && (
                      <select
                        name=""
                        id=""
                        className="block w-full h-[40px] pl-2"
                        onChange={(e) => {
                          setCollege(e.target.value);
                        }}
                      >
                        <option value={null}>Choose Your college</option>
                        {collegeList.map((college) => {
                          return <option value={college} >{college}</option>;
                        })}
                        <option value="other">Other</option>
                      </select>
                    )}
                    {college === "other" && study === "college" && (
                      <>
                        <input type="text" className="" placeholder="Enter your College name" onChange={(e) => {setOtherCollege(e.target.value)}} />
                      </>
                    )}
                    {study === "school" && (
                      <>
                        <input type="text" className="h-10" placeholder="Enter your School name" onChange={(e) => {setSchool(e.target.value) }} />
                      </>
                    )}
                  <div className=" col-span-1 md:col-span-2">
                    <h1 className="text-2xl font-bold mb-1">
                      Enter Address Details
                    </h1>
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
                  <div className="flex">
                    <button
                      type="reset"
                      className="bg-skin-lightBlue text-skin-darkBlue font-bold py-2 px-4 rounded-lg mt-5 mr-5 hover:bg-skin-hoverBlue transition-all"
                      onClick={() => setFormStep(true)}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-skin-lightGreen text-skin-darkGreen font-bold py-2 px-4 rounded-lg mt-5 mr-5 hover:bg-skin-hoverGreen transition-all"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>

                    {/* Showing the Spinner Conditionally */}

                    {loading ? (
                      <div className="mt-5">
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

                  <div className="md:ml-auto">
                    <button
                      type="reset"
                      className="bg-skin-lightRed text-skin-darkRed font-bold py-2 px-4 rounded-lg mt-5 mr-5 hover:bg-red-100 transition-all"
                      onClick={handleReset}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </form>
      )}
    </div>
  );
};

export default ListBookForDonating;
