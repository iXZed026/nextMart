"use client"
import { ChildrenProps } from "@/types/children"
import React, { createContext, RefObject, useContext, useRef } from "react"

type ViewProductContextType = RefObject<HTMLDivElement> | null;

const ViewProductContext = createContext<ViewProductContextType>(null);

export function useViewProductContext() {
    return useContext(ViewProductContext)
}

function ViewProductProvider({ children }: ChildrenProps) {

    const viewProductRef = useRef<any>(null)

    return (
        <ViewProductContext.Provider value={viewProductRef}>
            {children}
        </ViewProductContext.Provider>
    )
}

export default ViewProductProvider