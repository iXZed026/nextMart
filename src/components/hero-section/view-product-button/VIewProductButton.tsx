"use client"
import { useViewProductContext } from "@/context/ViewProductProvider"


function VIewProductButton() {

    const viewProductRef = useViewProductContext()

    function viewProducthandle() {
        viewProductRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <>
            <button
                className='button'
                onClick={viewProducthandle}
            >
                View products
            </button>

        </>
    )
}

export default VIewProductButton