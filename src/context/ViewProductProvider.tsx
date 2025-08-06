"use client"
import { ChildrenProps } from "@/types/children"
import React, { createContext, RefObject, useContext, useRef } from "react"

type ViewProductContextType = RefObject<HTMLDivElement>;

const ViewProductContext = createContext<ViewProductContextType | null>(null);

export function useViewProductContext() {
    const context = useContext(ViewProductContext);
    if (!context) {
        throw new Error('useViewProductContext must be used within a ViewProductProvider');
    }
    return context;
}

function ViewProductProvider({ children }: ChildrenProps) {
    const viewProductRef = useRef<HTMLDivElement>(null!);

    return (
        <ViewProductContext.Provider value={viewProductRef}>
            {children}
        </ViewProductContext.Provider>
    );
}

export default ViewProductProvider; 