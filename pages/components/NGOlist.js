import React from 'react'

const NGOlist = (props) => {



    const ClickedNgoDetails = (e) => {
        e.preventDefault();
        props.SelectedNGOList(props.address, props.country, props.pin, props.city, props.name )
    }

    return (
        <>
        <button onClick={ClickedNgoDetails} className=" rounded-2xl sm:w-full mx-auto hover:scale-105 active:scale-110 focus:scale-110  transition-all ease-in-out hover:bg-gray-100 focus:bg-gray-100 hover:shadow-md focus:shadow-md cursor-pointer text-left">

           
                <div className="my-auto mt-6 sm:m-auto p-4">
                    <h1 className="text-2xl font-semibold mb-4">{props.name}</h1>
                    <p className="">{props.country}, {props.city} - {props.pin}</p>
                    <p className="">{props.address}</p>
                </div>

            </button>
                <hr className='my-5'/>

        </>
    )
}

export default NGOlist
