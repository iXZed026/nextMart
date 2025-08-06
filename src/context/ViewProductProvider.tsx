"use client"
import { ChildrenProps } from "@/types/children"
import React, { createContext, RefObject, useContext, useRef } from "react"

type ViewProductContextType = RefObject<HTMLDivElement> | null;

const ViewProductContext = createContext<any>(null);

export function useViewProductContext() {
    return useContext(ViewProductContext)
}

function ViewProductProvider({ children }: ChildrenProps) {

    const viewProductRef = useRef<HTMLDivElement>(null)

    return (
        <ViewProductContext.Provider value={viewProductRef}>
            {children}
        </ViewProductContext.Provider>
    )
}

export default ViewProductProvider