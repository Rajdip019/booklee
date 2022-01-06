import Document from "../../../document";
import Navbar from "../../../components/Navbar";
import GeneralSidebar from "../../../components/GeneralSidebar";
import { Avatar, ChakraProvider } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { createStandaloneToast } from "@chakra-ui/react";
import Link from "next/link";

export default function ThankYou({ UserDetails }) {
  const { data: session } = useSession();
  const sender_email = session?.user?.email;
  const sender_name = session?.user?.name;

  //Defining the message
  const [message, setMessage] = useState();
  const [bookName , setBookName] = useState();

  const toast = createStandaloneToast(); // A standalone toast (doesn't reqiure a parent element)

  const handleMail = async () => {
    const res = await fetch("https://booklee.vercel.app/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        seller_name: UserDetails.name,
        sender_email: sender_email,
        seller_email: UserDetails.email,
        sender_name: sender_name,
        bookName: bookName,
        message: message,
      }),
    });
    const mail = await res.json(); //Getting the response data to use it show the Toast conditionally

    //Showing Toast conditionally

    if (mail.error) {
      return toast({
        title: "There is a Problem.",
        description: "Please fill the message box or try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      return toast({
        title: "Message Sent.",
        description: `Your message is sent to ${UserDetails.name}.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Document />
      <Navbar />
      <GeneralSidebar title="Message" />
      <div className="lg:w-[calc(100%-300px)] ">
        <div className="lg:ml-[calc(300px+4vw)]  w-11/12 mx-auto ">
          <h1 className="text-center text-4xl font-semibold my-14">
            Let's Connect.
          </h1>
          <div className="flex flex-wrap mx-auto flex-col">
            <div className="flex flex-col items-center justify-center mx-auto">
              <ChakraProvider>
                <Avatar
                  src={UserDetails.image}
                  size="2xl"
                  name={UserDetails.name}
                  className="mb-5"
                ></Avatar>
              </ChakraProvider>
              <h3 className="text-xl font-semibold ">{UserDetails.name}</h3>
            </div>
            <div className="mb-24 mt-12 mx-auto flex flex-col">
            <h3 className="my-3 font-semibold text-gray-700">
                Book Name
              </h3>
              <input
                type="text"
                className="md:w-[35vw] w-[85vw]"
                type="text"
                placeholder="Write the Book Name."
                required
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
              />
              <h3 className="my-3 font-semibold text-gray-700">
                Write down your Queries about the book!
              </h3>
              <textarea
                className="md:w-[35vw] w-[85vw]"
                type="text"
                placeholder="Write a message to Seller/Donator."
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {session ? (
                <button
                  className="bg-skin-lightBlue text-skin-darkBlue p-2 px-6 text-xl font-bold rounded-lg mt-10 hover:bg-skin-hoverBlue transition-all"
                  onClick={handleMail}
                >
                  Send
                </button>
              ) : (
                <Link href="/auth/signin">
                  <button className="bg-gray-400 text-gray-900 p-2 px-6 text-xl font-bold rounded-lg mt-10 transition-all">
                    Sign In to Message
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params: { uid } }) {
  try {
    const res = await fetch(
      `https://booklee.vercel.app/api/user/userdetails/${uid}`
    );
    const data = await res.json();
    return {
      props: {
        UserDetails: data,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
