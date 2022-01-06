import Link from 'next/link'
import React from 'react'

const ProductDonatedCard = (props) => {
    return (
        <div>
            <div>
                <img className=" h-[300px] w-[266px] rounded-t-lg " src={props.img} alt="" />
            </div>

            <div className="flex  mb-3 w-[266px]">
            <Link href={'/productdonated/invoice/[order_id]'} as={`/productdonated/invoice/${props._id}`}> 
                <button className="w-[266px] rounded-b-lg bg-skin-lightGreen text-skin-darkGreen py-3 font-bold text-center text-xl" onClick={()=> {try{props.topLoader()}catch{}}}>Get Donation Proof</button>
            </Link>
            </div>
                <h1 className="w-[215px] font-semibold text-xl mb-2">{props.name}</h1>
            <div className="flex">
                <span className="font-bold text-base">{props.condition}</span>
                <span className="pl-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg></span>
            </div>
        </div>
    )
}

export default ProductDonatedCard
