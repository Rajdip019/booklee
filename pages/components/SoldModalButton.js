import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Spinner,
  ChakraProvider,
  PinInput,
  PinInputField,
  HStack
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { template } from "../../helpers/template";

const SoldModalButton = (props) => {
  const { templateString } = template;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [expandZone, setExpandZone] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  const today = new Date();
  const date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  const time = today.getHours() + ":" + today.getMinutes();

  function handleExpansion() {
    setExpandZone(true);
  }
  function handleExpansionClose() {
    setExpandZone(false);
  }
  function handleFail() {
    setExpandZone("fail");
  }

  const handleSoldAdd = async (e) => {
    //Getting the Data from all the input field and Sending it to the API end Point.
    setLoader(true);
    const res = await fetch(`${templateString}/api/soldbook/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: props.name,
        author: props.author,
        condition: props.condition,
        description: props.description,
        category: props.category,
        price: props.price,
        photo: props.img,
        seller_mail: props.seller_mail,
        seller_name: session?.user?.name,
        buyer_mail: buyerEmail,
        buyer_name: buyerdata.name,
        seller_id: props.seller_id,
        adress: props.adress,
        landmark: props.landmark,
        country: props.country,
        state: props.state,
        city: props.city,
        pin: props.pin,
        date: date,
        time: time,
      }),
    });
    await handleSoldDelete();
    const bookData = await res.json();
  };

  const handleSoldDelete = async (e) => {
    //Getting the Data from all the input field and Sending it to the API end Point.

    const res = await fetch(`${templateString}/api/soldbook/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props._id,
        seller_mail: props.seller_mail,
      }),
    });
  };

  const handleSoldPull = async (e) => {
    //Getting the Data from all the input field and Sending it to the API end Point.

    const res = await fetch(`${templateString}/api/soldbook/pull`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props._id,
        seller_mail: props.seller_mail,
      }),
    });
    const bookData = await res.json();
  };

  //Invoice Making
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerdata, setBuyerData] = useState(null);

  const handleEmailCheck = async () => {
    try {
      const res = await fetch(`${templateString}/api/user/${buyerEmail}`);
      const data = await res.json();
      setBuyerData(data);
    } catch {
      handleFail();
    }
  };
  const invoicePage = () => {
    router.push(`/profile/${props.seller_id}/admin`);
  };

  const waitSendFunc = () => {
    const waitSend = setTimeout(invoicePage, 5000);
    waitSend;
  };
  const [OTP, setOTP] = useState();

  //Mail Sender
  const handleMail = async () => {
    //OTP Generater
    var otp = Math.floor(1000 + Math.random() * 9000);
    setOTP(otp);
    const res = await fetch(`${templateString}/api/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        buyer_mail: buyerEmail,
        name: buyerdata.name,
        OTP: otp,
      }),
    });
  };

  const [OTPVerified, setOTPVerified] = useState(false);
  const [OTPUser, setOTPUser] = useState();
  const [expandOTP, setExpandOTP] = useState(false);

  const OTPVerification = () => {
    if (OTP == OTPUser) {
      setOTPVerified(true);
    }
  };

  //Loader
  const [loader, setLoader] = useState(false);

  return (
    <div>
      <ChakraProvider>
        <button
          className="font-bold"
          onClick={() => {
            onOpen();
            handleExpansionClose();
          }}
        >
          Mark Sold
        </button>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay bgColor="rgba(0, 0, 0, 0.2)" />
          <div>
            <ModalContent
              className="bg-white rounded-lg shadow-lg p-8"
              maxW="400px"
              m="auto"
              minH="100px"
            >
              <ModalHeader className="text-center text-2xl font-semibold mb-3">
                Verify Email
              </ModalHeader>
              <ModalCloseButton
                className=" right-4 absolute"
                onClick={() => {
                  setOTPVerified(false);
                  setOTPUser(null);
                }}
              />
              <ModalBody className="text-center mt-6 ">
                {expandZone === "fail" && (
                  <>
                    <h1 className="text-2xl font-semibold text-red-500">
                      Buyer is not Verified!
                    </h1>
                    <h1 className="text-md font-semibold text-red-600 mt-3">
                      Email Verification Failed.
                    </h1>
                  </>
                )}
                {expandZone != "fail" && (
                  <>
                    {expandZone ? (
                      <>
                        <div className="flex justify-around items-center">
                          <ChakraProvider>
                            <Avatar
                              name={buyerdata?.name}
                              src={buyerdata?.image}
                              size="lg"
                              borderRadius="100%"
                            />
                          </ChakraProvider>
                          <div>
                            <h2 className="m-auto font-semibold text text-xl ">
                              {buyerdata?.name}
                            </h2>
                            <p className=" bg-skin-lightGreen text-skin-darkGreen font-semibold rounded-2xl mt-1">
                              Buyer Verified!
                            </p>
                          </div>
                        </div>
                        <p className="text-left mt-6">Email Address</p>
                        <input
                          type="tel"
                          className="w-full mr-auto ml-auto bg-gray-100"
                          placeholder="Enter your email address"
                          disabled
                        />
                        {expandOTP ? (
                          <>
                            <p className="text-left mt-3">OTP</p>
                            <ChakraProvider>
                            <HStack>
                              <PinInput
                                autoFocus
                                value={OTPUser}
                                onChange={(e) => {
                                  setOTPUser(e);
                                }}
                                className="w-full"
                                size="xl"
                              >
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                              </PinInput>
                              </HStack>
                            </ChakraProvider>
                            <p className="text-xs text-left mt-2 text-red-500">
                              *If you can't find the OTP Please check spam or
                              promotional section of your email.
                            </p>
                          </>
                        ) : null}
                      </>
                    ) : (
                      <>
                        <div className="flex ">
                          <Avatar
                            name={props.name}
                            src={props.img}
                            className="w-24 h-24 "
                            borderRadius="100%"
                          />
                          <h2 className="m-auto font-semibold text text-xl ">
                            {props.name}
                          </h2>
                        </div>
                        <p className="text-left mt-6">Email Address.</p>
                        <input
                          type="email"
                          className="w-full mr-auto ml-auto"
                          placeholder="Enter Email Address of Buyer"
                          value={buyerEmail}
                          onChange={(e) => {
                            setBuyerEmail(e.target.value);
                          }}
                        />
                      </>
                    )}
                  </>
                )}
              </ModalBody>

              <ModalFooter display="block" className="text-center">
                {expandZone === "fail" && (
                  <button
                    className="ml-auto mr-auto bg-skin-lightBlue text-skin-darkBlue rounded-lg p-3 mt-6 font-bold hover:bg-skin-hoverBlue transition-all"
                    onClick={() => {
                      handleExpansionClose();
                    }}
                  >
                    Back
                  </button>
                )}
                {expandZone != "fail" && (
                  <>
                    {expandZone ? (
                      <>
                        {expandOTP ? (
                          <>
                            {OTPVerified ? (
                              <button
                                className="ml-auto mr-auto bg-skin-lightGreen text-skin-darkGreen rounded-lg px-4 py-2 mt-6 font-bold hover:bg-skin-hoverGreen transition-all"
                                onClick={() => {
                                  handleSoldAdd();
                                  waitSendFunc();
                                  handleSoldPull();
                                }}
                              >
                                Make Invoice
                              </button>
                            ) : (
                              <>
                                <button
                                  disabled
                                  className="ml-auto mr-auto bg-gray-500 text-gray-800 rounded-lg px-4 py-2 mt-6 font-bold"
                                  onClick={OTPVerification()}
                                >
                                  Make Invoice
                                </button>
                              </>
                            )}
                          </>
                        ) : (
                          <button
                            className="ml-auto mr-auto bg-skin-lightGreen text-skin-darkGreen rounded-lg px-4 py-2 mt-6 font-bold hover:bg-skin-hoverGreen transition-all"
                            onClick={() => {
                              setExpandOTP(true);
                              handleMail();
                            }}
                          >
                            Get OTP
                          </button>
                        )}
                      </>
                    ) : (
                      <button
                        className={
                          buyerEmail
                            ? " ml-auto mr-auto bg-skin-lightBlue text-skin-darkBlue rounded-lg px-4 py-2 mt-6 font-bold hover:bg-skin-hoverBlue transition-all"
                            : "bg-gray-200 rounded-lg px-4 py-2 mt-6 font-bold"
                        }
                        onClick={() => {
                          handleExpansion();
                          handleEmailCheck();
                          setExpandOTP(false);
                        }}
                        disabled={!buyerEmail}
                      >
                        Verify
                      </button>
                    )}
                  </>
                )}
                {loader ? (
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
              </ModalFooter>
            </ModalContent>
          </div>
        </Modal>
      </ChakraProvider>
    </div>
  );
};

export default SoldModalButton;
