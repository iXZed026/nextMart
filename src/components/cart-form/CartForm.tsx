"use client"
import { useCartContext } from '@/context/CartProvider'
import React, { useState } from 'react'
import SuccessModal from '../modal/success-modal/SuccessModal';

export interface IUserInputs {
    name: string,
    email: string,
    country: string,
    city: string,
    address: string,
    postalCode: string,
}

function CartForm() {

    const { cart, setCart, totalPrice } = useCartContext();
    const [error, setError] = useState<string>("");
    const [showModal, setShowModal] = useState<boolean>(false);


    const [inputs, setInputs] = useState<IUserInputs>({
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

    async function submitHandler(e: React.FormEvent) {
        e.preventDefault();

        const orderData = {
            user: inputs,
            cart,
            totalPrice,
        }

        const result = await fetch("http://localhost:3000/api/order", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData)
        })

        if (!result.ok) {
            const response = await result.json()
            setError(response._message)
        } else {
            setError("");

            setInputs({
                name: '',
                email: '',
                country: '',
                city: '',
                address: '',
                postalCode: '',
            })

            setCart([])
            setShowModal(true);
            setTimeout(() => setShowModal(false), 4000)
        }


    }

    return (
        <form onSubmit={submitHandler}>
            <input
                className='input bg-blue-100'
                type="text"
                name="name"
                placeholder='Name'
                value={inputs.name}
                onChange={setValueHandler}
            />


            <input
                className='input bg-blue-100'
                type="text"
                name="email"
                placeholder='Email'
                value={inputs.email}
                onChange={setValueHandler}
            />

            <input
                className='input bg-blue-100'
                type="text"
                name="country"
                value={inputs.country}
                onChange={setValueHandler} placeholder='Country'

            />

            <input
                className='input bg-blue-100'
                type="text"
                name="city"
                placeholder='City'
                value={inputs.city}
                onChange={setValueHandler}
            />

            <input
                className='input bg-blue-100'
                type="text"
                name="address"
                value={inputs.address}
                onChange={setValueHandler} placeholder='Address'

            />

            <input
                className='input bg-blue-100'
                type="text"
                name="postalCode"
                value={inputs.postalCode}
                onChange={setValueHandler} placeholder='PostalCo
                de'
            />

            <br />
            <span className={`text-red-500 font-semibold ${!error ? "overflow-hidden" : "overflow-visible"}`}>
                {error}

            </span>
            <br /><br />
            <button
                className='w-full bg-[var(--main-color)] cursor-pointer h-[50px] text-white font-bold rounded-lg hover'
                type='submit'
            >
                Buy
            </button>

            {showModal && <SuccessModal title="Your order successfuly sended" showModal={showModal} />}

        </form>
    )
}

export default CartForm