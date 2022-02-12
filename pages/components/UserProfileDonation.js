import React from "react";
import { Avatar, AvatarBadge, ChakraProvider } from "@chakra-ui/react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const UserProfileDonation = (props) => {
  const { data: session } = useSession();
  const mail = session?.user?.email;

  return (
    <>
      {/* //------------------------For Laptop Size-------------------------------------- */}
      <div className="hidden lg:block">
        <div className="h-96 ml-[300px]">
          <div
            className="bg-Donation-bg"
            style={{
              height: "350px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="w-full text-center items-center pt-14">
              <ChakraProvider>
                <Avatar
                  borderRadius="100%"
                  src={props.image}
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
                              className="h-9 w-9 bg-skin-lightGreen text-skin-darkGreen mt-20 -ml-9 rounded-2xl p-2"
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
                              className="h-9 w-9 bg-skin-lightGreen text-skin-darkGreen mt-20 rounded-2xl p-2"
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
                    <>
                    {props.college && (
                        <p className="text-white text-sm rounded-full my-1 mx-5">
                          Studying at {props.college}
                        </p>
                      )}
                      {props.school && (
                        <p className="text-white text-sm rounded-full my-1 mx-5">
                          Studying at {props.school}
                        </p>
                      )}
                    <Link
                      href={"/profile/[uid]/message"}
                      as={`/profile/${props.id}/message`}
                    >
                      <button className="text-md text-center bg-skin-lightGreen text-skin-darkGreen p-2 px-6 rounded-3xl hover:bg-green-100 font-semibold m-4 2xl:mx-2 transition-all" onClick={()=> {try{props.topLoader()}catch{}}}>
                        Message
                      </button>
                    </Link>
                    </>
                  )}
                </>
              ) : (
                <>
                  {mail != props.email && (
                    <>
                    {props.college && (
                        <p className="text-white text-sm rounded-full my-1 mx-5">
                          Studying at {props.college}
                        </p>
                      )}
                      {props.school && (
                        <p className="text-white text-sm rounded-full my-1 mx-5">
                          Studying at {props.school}
                        </p>
                      )}
                    <Link href={"/auth/signin"} as={`/auth/signin`}>
                      <button className="text-md text-center bg-gray-200 text-gray-900 p-2 px-6 rounded-3xl font-semibold m-4 2xl:mx-2 transition-all" onClick={()=> {try{props.topLoader()}catch{}}}>
                        SignIn to Message
                      </button>
                    </Link>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* //------------------------For Mobile Size-------------------------------------- */}

      <div className="block lg:hidden">
        <div
          className="bg-DonationM-bg"
          style={{
            height: "230px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="text-center">
            <ChakraProvider>
              <Avatar
                borderRadius="100%"
                src={props.image}
                size="xl"
                className="mt-5"
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
                            className="h-7 w-7 bg-skin-lightGreen text-skin-darkGreen mt-20 -ml-7 rounded-2xl p-1"
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
                            className="h-7 w-7 bg-skin-lightGreen text-skin-darkGreen mt-20 rounded-2xl p-1"
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
            <h3 className="text-white text-xl font-semibold mt-1">
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
                  <>
                  {props.college && (
                      <p className="text-white text-xs rounded-full my-1 mx-5">
                        Studying at {props.college}
                      </p>
                    )}
                    {props.school && (
                      <p className="text-white text-xs rounded-full my-1 mx-5">
                        Studying at {props.school}
                      </p>
                    )}
                  <Link
                    href={"/profile/[uid]/message"}
                    as={`/profile/${props.id}/message`}
                  >
                    <button className="text-sm mt-0 text-center bg-skin-lightGreen text-skin-darkGreen p-2 px-6 rounded-3xl hover:bg-green-100 font-semibold m-4 2xl:mx-2 transition-all" onClick={()=> {try{props.topLoader()}catch{}}}>
                      Message
                    </button>
                  </Link>
                  </>
                )}
              </>
            ) : (
              <>
                {mail != props.email && (
                  <>
                  {props.college && (
                      <p className="text-white text-xs rounded-full my-1 mx-5">
                        Studying at {props.college}
                      </p>
                    )}
                    {props.school && (
                      <p className="text-white text-xs rounded-full my-1 mx-5">
                        Studying at {props.school}
                      </p>
                    )}
                  <Link href={"/auth/signin"} as={`/auth/signin`}>
                    <button className="text-sm mt-0 text-center bg-gray-200 text-gray-900 p-2 px-6 rounded-3xl font-semibold m-4 2xl:mx-2 transition-all" onClick={()=> {try{props.topLoader()}catch{}}}>
                      SignIn to Message
                    </button>
                  </Link>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileDonation;
