"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

function NotFound() {

  const router = useRouter()

  function goBackHandle(){
    router.back()
  }

  return (

    <div className='flex justify-center items-center h-screen text-center'>
      <div>
        <h1 className='text-[180px] font-semibold text-[var(--main-color)] mb-3'>404</h1>
        <h2 className='text-2xl font-bold mb-3'>Somethin went wrong.</h2>
        <p className='text-md mb-6'>
          Sorry, we cant find  the page your looking for.
        </p>
        <button 
        onClick={goBackHandle}
        className='button hover:opacity-80 transition-all'
        >
          Go Back
        </button>
      </div>
    </div>

  )
}

export default NotFound;