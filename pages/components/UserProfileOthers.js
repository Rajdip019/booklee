import React from "react";
import { Avatar, ChakraProvider } from "@chakra-ui/react";
import Link from "next/link";
import { getSession } from "next-auth/react";
import { useState } from "react";
import { useSession } from "next-auth/react";

const UserProfileOthers = (props) => {
  const [id, setId] = useState("");
  const { data: session } = useSession();
  const mail = session?.user?.email;

  const havesession = async () => {
    const fetchsession = await getSession();
    const fetchmail = fetchsession?.user?.email;
    const res = await fetch(`http://localhost:3000/api/user/${fetchmail}`);
    const userData = await res.json();
    setId(userData._id);
  };
  havesession();

  return (
    <>
      {/* //------------------------For Laptop Size-------------------------------------- */}
      <div className="hidden lg:block">
        <div className="h-96 ml-[300px] ">
          <div
            className="  bg-Educational-bg"
            style={{
              height: "350px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="w-full text-center items-center pt-14">
              <ChakraProvider>
                <Avatar
                  src={props.image}
                  borderRadius="100%"
                  size="2xl"
                >
                  {mail === props.email && (
                    <>
                    {props.image ? (
                      <div className="cursor-pointer">
                        <Link
                          href={"/profile/[uid]/admin/edit"}
                          as={`/profile/${props.id}/admin/edit`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-9 w-9 bg-skin-lightBlue text-skin-darkBlue mt-20 -ml-9 rounded-2xl p-2"
                            viewBox="0 0 20 20"
                            onClick={()=> {try{props.topLoader()}catch{}}}
                          >
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </Link>
                      </div>
                    ) : (
                      <div className="cursor-pointer">
                        <Link
                          href={"/profile/[uid]/admin/edit"}
                          as={`/profile/${props.id}/admin/edit`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-9 w-9 bg-skin-lightBlue text-skin-darkBlue mt-20 rounded-2xl p-2"
                            viewBox="0 0 20 20"
                            onClick={()=> {try{props.topLoader()}catch{}}}
                          >
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </Link>
                      </div>
                    )}
                    </>
                  )}
                  {mail != props.email && <></>}
                </Avatar>
              </ChakraProvider>
              <h3 className="text-white text-xl font-semibold mt-3">
                {props.name}
              </h3>
              {mail === props.email && (
                <>
                  <h4 className="text-white">{props.email}</h4>
                </>
              )}
              {mail != props.email && <></>}
              {session ? (
                <>
                  {mail != props.email && (
                    <Link
                      href={"/profile/[uid]/message"}
                      as={`/profile/${props.id}/message`}
                    >
                      <button className="text-md text-center bg-skin-lightBlue text-skin-darkBlue p-2 px-6 rounded-3xl hover:bg-blue-100 font-semibold m-4 2xl:mx-2 transition-all" onClick={()=> {try{props.topLoader()}catch{}}}>
                        Message
                      </button>
                    </Link>
                  )}
                </>
              ) : (
                <>
                  {mail != props.email && (
                    <Link href={"/auth/signin"} as={`/auth/signin`}>
                      <button className="text-md text-center bg-gray-200 text-gray-900 p-2 px-6 rounded-3xl font-semibold m-4 2xl:mx-2 transition-all" onClick={()=> {try{props.topLoader()}catch{}}}>
                        SignIn to Message
                      </button>
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* //------------------------For Mobile Size-------------------------------------- */}

      <div className="block lg:hidden h-auto">
        <div
          className=" bg-EducationM-bg"
          style={{
            height: "230px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="text-center">
            <ChakraProvider>
              <Avatar
                src={props.image}
                className="mt-5"
                borderRadius="100%"
                size="xl"
              >
                {mail === props.email && (
                  <>
                  {props.image ? (
                    <div className="cursor-pointer">
                      <Link
                        href={"/profile/[uid]/admin/edit"}
                        as={`/profile/${props.id}/admin/edit`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 bg-skin-lightBlue text-skin-darkBlue mt-20 -ml-7 rounded-2xl p-1"
                          viewBox="0 0 20 20"
                          onClick={()=> {try{props.topLoader()}catch{}}}
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </Link>
                    </div>
                  ) : (
                    <div className="cursor-pointer">
                        <Link
                          href={"/profile/[uid]/admin/edit"}
                          as={`/profile/${props.id}/admin/edit`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-9 w-9 bg-skin-lightBlue text-skin-darkBlue mt-20 rounded-2xl p-2"
                            viewBox="0 0 20 20"
                            onClick={()=> {try{props.topLoader()}catch{}}}
                          >
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </Link>
                      </div>
                  )}
                  </>
                )}
              </Avatar>
            </ChakraProvider>
            <h3 className="text-white text-xl font-semibold mt-3">
              {props.name}
            </h3>
            {mail === props.email && (
              <>
                <h4 className="text-white">{props.email}</h4>
              </>
            )}
            {mail != props.email && <></>}
            {session ? (
              <>
                {mail != props.email && (
                  <Link
                    href={"/profile/[uid]/message"}
                    as={`/profile/${props.id}/message`}
                  >
                    <button className="text-md text-center bg-skin-lightBlue text-skin-darkBlue p-2 px-6 rounded-3xl hover:bg-blue-100 font-semibold m-4 2xl:mx-2 transition-all" onClick={()=> {try{props.topLoader()}catch{}}}>
                      Message
                    </button>
                  </Link>
                )}
              </>
            ) : (
              <>
                {mail != props.email && (
                  <Link href={"/auth/signin"} as={`/auth/signin`}>
                    <button className="text-md text-center bg-gray-200 text-gray-900 p-2 px-6 rounded-3xl font-semibold m-4 2xl:mx-2 transition-all" onClick={()=> {try{props.topLoader()}catch{}}}>
                      SignIn to Message
                    </button>
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileOthers;
