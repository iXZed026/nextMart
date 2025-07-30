import React from 'react'
import { IoCheckmarkCircle } from "react-icons/io5";

function SuccessModal({ showModal, title }: { showModal: boolean, title: string }) {



    return (
        <div className={`modal ${showModal ? "block" : "hidden"} lg:w-1/4 md:3/5  w-4/5`}>
            <div className='w-full px-3 py-3 flex justify-between items-center'>
                <span className='sm:text-lg text-md font-semibold text-gray-700 ml-5'>{title}</span>
                <span><IoCheckmarkCircle className='text-2xl text-green-600' /></span>
            </div>
        </div>
    )
}

export default SuccessModal