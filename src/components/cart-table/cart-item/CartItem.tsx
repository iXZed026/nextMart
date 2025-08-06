"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { FaDeleteLeft } from "react-icons/fa6";
import { VscEmptyWindow } from "react-icons/vsc";
import Link from "next/link";
import { ICart, useCartContext } from "@/context/CartProvider";

function CartItem() {
  const { cart, setCart, totalPrice, setTotalPrice } = useCartContext();
  const totalPriceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cart.length > 0) {
      const calculatedPrice = cart.reduce((initial: number, item: ICart) => {
        return initial + item.price * item.count;
      }, 0);
      setTotalPrice(calculatedPrice);
    }
  }, [cart, setTotalPrice]);

  useEffect(() => {
    if (cart.length > 0 && totalPriceRef.current) {
      totalPriceRef.current.className = "flex justify-center w-14 price";

      setTimeout(() => {
        if (totalPriceRef.current) {
          totalPriceRef.current.className = "flex justify-center w-14";
        }
      }, 400);
    }
  }, [cart]);

  function increaseHandler(ID: string) {
    setCart((prevCart: ICart[]) =>
      prevCart.map((item) =>
        item._id === ID && item.count < 5
          ? { ...item, count: item.count + 1 }
          : item
      )
    );
  }

  function decreaseHandler(ID: string) {
    setCart((prevCart: ICart[]) =>
      prevCart
        .map((item) => {
          if (item._id === ID) {
            const newCount = item.count - 1;
            if (newCount <= 0) {
              return null;
            } else {
              return { ...item, count: newCount };
            }
          }
          return item;
        })
        .filter((item): item is ICart => item !== null)
    );
  }

  function removeCartItem(ID: string) {
    setCart((prevCart: ICart[]) => prevCart.filter((item) => item._id !== ID));
  }

  return (
    <>
      {cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <tr
              key={item._id}
              className="border-[1px] border-gray-300 h-36 sm:text-md sm:font-semibold text-sm"
            >
              <td>
                <Image
                  className="select-none"
                  src={item.image}
                  width={100}
                  height={100}
                  alt="product image"
                />
              </td>
              <td>
                <span>{item.title}</span>
              </td>
              <td>
                <div className="flex xl:flex-row flex-col-reverse items-center select-none gap-1">
                  <button onClick={() => decreaseHandler(item._id)} className="button">
                    -
                  </button>
                  <span className="px-3">{item.count}</span>
                  <button onClick={() => increaseHandler(item._id)} className="button">
                    +
                  </button>
                </div>
              </td>
              <td className="sm:w-auto w-[15%] text-center">
                ${Number(item.price * item.count).toLocaleString()}
              </td>
              <td>
                <div className="flex sm:justify-center justify-end items-center select-none">
                  <FaDeleteLeft
                    className="cursor-pointer text-2xl text-red-500"
                    onClick={() => removeCartItem(item._id)}
                  />
                </div>
              </td>
            </tr>
          ))}
          <tr className="text-sm text-gray-100 h-14 font-medium bg-[var(--main-color)]">
            <td className="px-3">Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div ref={totalPriceRef} className="flex justify-center w-14">
                ${totalPrice.toLocaleString()}
              </div>
            </td>
          </tr>
        </>
      ) : (
        <tr className="h-[400px]">
          <td className="w-full">
            <div className="text-gray-600">
              <Link
                href="/"
                className="w-full flex flex-col justify-center items-center gap-5"
              >
                <VscEmptyWindow className="md:text-5xl text-2xl" />
                <div className="md:text-2xl text-lg">Your Cart Is Empty.</div>
              </Link>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default CartItem;
