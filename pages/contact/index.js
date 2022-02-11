import Document from "../document";
import Navbar from "../components/Navbar";
import GeneralSidebar from "../components/GeneralSidebar";
import { createStandaloneToast } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { template } from "../../helpers/template";

export default function Contact() {
  const { templateString } = template;

  const toast = createStandaloneToast(); // A standalone toast (doesn't reqiure a parent element)

  const { data: session } = useSession();
  const sender_email = session?.user?.email;
  const sender_name = session?.user?.name;
  const [message, setMessage] = useState("");
  let remaining = (300 - message.length);


  const handleMail = async () => {
    const res = await fetch(`${templateString}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender_email: sender_email,
        sender_name: sender_name,
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
        description: `Your message is sent to Booklee Team.`,
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
      <GeneralSidebar title="Contact Us" />
      <div className=" ">
        <div className="lg:ml-[300px] ">
          <h1 className="text-center text-4xl font-semibold mt-14 ">
            Let's Connect for Good
          </h1>
          <div className="flex-wrap flex">
            <div className="my-auto mt-24 mx-auto flex-col flex">
              <h2 className="my-5 font-semibold text-gray-800 text-xl">
                Please Fill the form:
              </h2>
              <h3 className="my-1">Enter Your Email</h3>
              <input
                className="md:w-[35vw] w-[85vw]"
                type="email"
                placeholder="john@gmail.com"
                required
              />
              <h3 className="my-1 mt-5">Write down your concern</h3>
              <textarea
                className="md:w-[35vw] w-[85vw] h-[13vh] resize-none"
                type="text"
                placeholder="Write a message to us."
                value={message}
                maxLength="500"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <p className={remaining == 0 ? "ml-auto text-xs text-red-600" : "ml-auto text-xs text-opacity-50 "} id="remaining-char">{remaining} characters remaining</p>

              <button
                className="mb-20 bg-skin-lightBlue text-skin-darkBlue p-2 px-6 text-xl font-bold rounded-lg mt-10 hover:bg-skin-hoverBlue"
                type="submit"
                onClick={handleMail}
              >
                Submit
              </button>
            </div>
            <div className="max-w-[400px] m-auto w-11/12">
              <img src="contact.svg" alt="" />
            </div>
          </div>
          <h1 className="mt-16 text-center">
            <b> Or mail us at: </b> rajdeepdebajyoti@gmail.com
          </h1>
        </div>
      </div>
    </>
  );
}
