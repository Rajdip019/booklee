import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { ChakraProvider, Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { createStandaloneToast } from '@chakra-ui/react'
import { template } from "../../helpers/template";


const DeleteModalButton = (props) => {
  const {templateString} = template;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = createStandaloneToast()

  const handleSoldDelete = async () => {
    //Getting the Data from all the input field and Sending it to the API end Point.

    const res = await fetch(`${templateString}/api/donatebook/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id : props._id,
        seller_mail : props.seller_mail
      }),
    });
    const bookData = await res.json();

    if (bookData.error) {
      return toast({
        title: "There is a Problem.",
        description: "Problem While Deleting",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      return toast({
        title: "Book Deleted.",
        description: "We've Deleted your book.",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  return (
    <div>
      <ChakraProvider>
      <button   onClick={onOpen} className="font-semibold text-skin-darkRed">Delete</button>


        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1>Do you want to delete this product?</h1>
            </ModalBody>

            <ModalFooter>
              <Button
                className="bg-skin-lightBlue text-skin-darkBlue font-bold p-2 rounded-lg mt-5"
                mr={3}
                onClick={onClose}
              >
                No
              </Button>
              <Link href={`/profile/${props.user_id}/admin`}>
              <Button
                variant="ghost"
                type="submit"
                className="bg-skin-lightRed font-bold p-2 rounded-lg mt-5"
                onClick={()=> {handleSoldDelete(); onClose();}}
              >
                Yes
              </Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </div>
  );
};

export default DeleteModalButton;
