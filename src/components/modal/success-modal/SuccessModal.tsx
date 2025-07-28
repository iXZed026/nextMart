import React from 'react'
import { IoCheckmarkCircle } from "react-icons/io5";

function SuccessModal({ showModal, title }: { showModal: boolean, title: string }) {



    return (
        <div className={`modal ${showModal ? "block" : "hidden"} w-[300px] bg-white mx-auto rounded-lg fixed top-2 left-50 right-50 border-2 border-[var(--main-color)]`}>
            <div className='w-full px-3 py-3 flex justify-between items-center'>
                <span className='text-lg font-semibold text-gray-700'>{title}</span>
                <span><IoCheckmarkCircle className='text-xl text-green-600' /></span>
            </div>
        </div>
    )
}

export default SuccessModal