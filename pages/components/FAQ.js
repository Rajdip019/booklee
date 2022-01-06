import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

const FAQ = () => {
    return (
        <div>
           <Accordion defaultIndex={[0]} allowMultiple>

            {/*//////////////////////////////////////////////////////////////// Question No1/////////////////////////////////////////////// */}

            <AccordionItem className="pb-3">
                <h2 className="p-4 text-xl shadow-lg rounded-xl w-11/12 mx-auto">
                <AccordionButton >
                    <Box flex='1' textAlign='left'>
                    1. Where does the donations go?
                    </Box>
                    <AccordionIcon className="font-blod text-3xl" />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="rounded-xl w-11/12 mx-auto p-4 pb-96 bg-gray-50">
                The donations will be directly linked to the respective NGO by our website.We are not a middle man in it.The NGO will handle the delivery of the book and deliver it to them who needs it badly.
                </AccordionPanel>
            </AccordionItem>

            {/*//////////////////////////////////////////////////////////////// Question No2/////////////////////////////////////////////// */}

            <AccordionItem className="pb-3">
                <h2 className="p-4 text-xl shadow-lg rounded-xl w-11/12 mx-auto">
                <AccordionButton >
                    <Box flex='1' textAlign='left'>
                    2. How to sell books?
                    </Box>
                    <AccordionIcon className="font-blod text-3xl" />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="rounded-xl w-11/12 mx-auto p-4 pb-96 bg-gray-50">
                The sole purpose of our service is to provide used books of different category like-story books,self-growth books,documentry to them who can't afford new books due to financial problems.The seller is requested to set the price of the book as minimal as possible.It will also help them who also wants to sell old books but can't sell them as they can't find any buyer.

                </AccordionPanel>
            </AccordionItem>

            {/*//////////////////////////////////////////////////////////////// Question No3/////////////////////////////////////////////// */}

            <AccordionItem className="pb-3">
                <h2 className="p-4 text-xl shadow-lg rounded-xl w-11/12 mx-auto">
                <AccordionButton >
                    <Box flex='1' textAlign='left'>
                    3. Why Invoicing is must?
                    </Box>
                    <AccordionIcon className="font-blod text-3xl" />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="rounded-xl w-11/12 mx-auto p-4 pb-96 bg-gray-50">
                Invoicing is must because after collecting the book from the seller, It stays to you as a proof of buying the book.In case of any fraud or scams,You can report that to us and We will take preventive steps.

                </AccordionPanel>
            </AccordionItem>

            {/*//////////////////////////////////////////////////////////////// Question No4/////////////////////////////////////////////// */}

            <AccordionItem className="pb-3">
                <h2 className="p-4 text-xl shadow-lg rounded-xl w-11/12 mx-auto">
                <AccordionButton >
                    <Box flex='1' textAlign='left'>
                    4. How the books are delivered?
                    </Box>
                    <AccordionIcon className="font-blod text-3xl" />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="rounded-xl w-11/12 mx-auto p-4 pb-96 bg-gray-50">
                We are not responsible for the delivery of the book.You have to contact the seller through the details provided by our end and receive the book from the seller

                </AccordionPanel>
            </AccordionItem>

            {/*//////////////////////////////////////////////////////////////// Question No5/////////////////////////////////////////////// */}

            <AccordionItem className="pb-3">
                <h2 className="p-4 text-xl shadow-lg rounded-xl w-11/12 mx-auto">
                <AccordionButton >
                    <Box flex='1' textAlign='left'>
                    5. How to prevent Scams?
                    </Box>
                    <AccordionIcon className="font-blod text-3xl" />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="rounded-xl w-11/12 mx-auto p-4 pb-96 bg-gray-50">
                To stay safe against any type of scams, Don't receive books without any invoice.Check the condition of the book thoroughly and if the images and the details provided by the seller is misleading,then report the seller and we will investigate further. 

                </AccordionPanel>
            </AccordionItem>
            </Accordion> 
        </div>
    )
}

export default FAQ
