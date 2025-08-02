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

    function setValueHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setInputs((prevInput: IUserInputs) => ({
            ...prevInput,
            [name]: value,
        }));
    }

    async function submitHandler(e: React.FormEvent) {
        e.preventDefault();

        const orderData = {
            user: inputs,
            cart,
            totalPrice,
        };

        const result = await fetch("http://localhost:3000/api/order", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData)
        });

        if (!result.ok) {
            const response = await result.json();
            setError(response._message || "Something went wrong");
        } else {
            setError("");

            setInputs({
                name: '',
                email: '',
                country: '',
                city: '',
                address: '',
                postalCode: '',
            });

            setCart([]);
            setShowModal(true);
            setTimeout(() => setShowModal(false), 4000);
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
                placeholder='Country'
                value={inputs.country}
                onChange={setValueHandler}
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
                placeholder='Address'
                value={inputs.address}
                onChange={setValueHandler}
            />

            <input
                className='input bg-blue-100'
                type="text"
                name="postalCode"
                placeholder='Postal Code'
                value={inputs.postalCode}
                onChange={setValueHandler}
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

            {showModal && <SuccessModal title="Your order successfully sent" showModal={showModal} />}
        </form>
    );
}

export default CartForm;
