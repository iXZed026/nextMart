"use client"
import { IProduct } from '@/app/api/products/route'
import ErrorModal from '@/components/error-modal/ErrorModal';
import SuccessModal from '@/components/modal/success-modal/SuccessModal';
import { ICart, useCartContext } from '@/context/CartProvider'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function AddToCartButton(props: IProduct) {


    const { cart, setCart } = useCartContext();
    const router = useRouter();
    const pathname = usePathname()

    const [showModal, setShowModal] = useState<boolean>(false)
    const [showErrorModal, setShowErrorModal] = useState(false)

    function addToCartHandler() {

        const findProduct = cart.find((cart: IProduct) => cart._id === props._id);

        if (findProduct) {
            setCart((prevCart: ICart[]) => (
                prevCart.map((item) => {
                    if (item._id === findProduct._id && item.count < 5) {
                        return { ...item, count: item.count + 1 };
                    }
                    return item
                })
            )
            )
        } else {
            setCart((prevCart: ICart[]) => {
                return [...prevCart, { ...props, count: 1 }];
            })
        }

        showModalHandler(findProduct?.count)

    }

    function showModalHandler(COUNT: any) {
        if (COUNT < 5 || COUNT === undefined) {
            if (pathname !== "/") {
                setShowModal(true);
                setTimeout(() => {
                    setShowModal(false)
                    router.push("/");
                }, 1000)
            } else {
                setShowModal(true);
                setTimeout(() => setShowModal(false), 1000)
            }
        } else {
            setShowModal(false)
            setShowErrorModal(true)
            setTimeout(() => setShowErrorModal(false), 1000)
        }

    }

    return (
        <>
            <button
                onClick={addToCartHandler}
                disabled={showModal}
                className={`button ${showModal ? "opacity-20" : ""}`}
            >
                Add To Cart
            </button >
            <SuccessModal showModal={showModal} title={`${props.title}, Added to cart!`} />
            <ErrorModal showErrorModal={showErrorModal} title={`You cannot add more than 5 of these products to your cart.`} />
        </>
    )
}

export default AddToCartButton;