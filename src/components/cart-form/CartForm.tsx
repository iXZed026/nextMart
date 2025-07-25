"use client"
import React, { useState } from 'react'

function CartForm() {

    const [inputs, setInputs] = useState<any>({
        name: '',
        email: '',
        country: '',
        city: '',
        address: '',
        postalCode: '',
    });

    function setValueHandler(e: any) {
        setInputs((prevInput: any) => {
            return { ...prevInput, [e.target.name]: e.target.value }
        }
        )
    }

    function submitHandler(e: React.FormEvent) {
        e.preventDefault();

        console.log(inputs)
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                className='input bg-blue-100'
                type="text"
                name="name"
                placeholder='Name'
                onChange={setValueHandler}
            />


            <input
                className='input bg-blue-100'
                type="text"
                name="email"
                placeholder='Email'
                onChange={setValueHandler}
            />

            <input
                className='input bg-blue-100'
                type="text"
                name="country"
                onChange={setValueHandler} placeholder='Country'

            />

            <input
                className='input bg-blue-100'
                type="text"
                name="city"
                placeholder='City'
                onChange={setValueHandler}
            />

            <input
                className='input bg-blue-100'
                type="text"
                name="address"
                onChange={setValueHandler} placeholder='Address'

            />

            <input
                className='input bg-blue-100'
                type="text"
                name="postalCode"
                onChange={setValueHandler} placeholder='PostalCo
                de'
            />

            <br /><br /><br />
            <button
                className='w-full bg-[var(--main-color)] cursor-pointer h-[50px] text-white font-bold rounded-lg hover'
                type='submit'
            >
                Buy
            </button>
        </form>
    )
}

export default CartForm