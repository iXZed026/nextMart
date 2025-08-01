import React from 'react'
import { VscError } from "react-icons/vsc";

function ErrorModal({ showErrorModal, title }: { showErrorModal: boolean, title: string }) {



    return (
        <div className={`modal ${showErrorModal ? "block" : "hidden"} lg:w-1/4 md:3/5  w-4/5`}>
            <div className='w-full px-3 py-3 flex justify-between items-center gap-5'>
                <span className='text-md font-semibold text-gray-700 ml-5'>{title}</span>
                <span><VscError className='text-3xl text-red-600' /></span>
            </div>
        </div>
    )
}

export default ErrorModal