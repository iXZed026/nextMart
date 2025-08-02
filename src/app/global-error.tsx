"use client"

import { useEffect, useState } from "react";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {

    const [errorMessage, setErrorMessage] = useState<string>("");

    useEffect(() => {
        switch (error.name) {
            case "TypeError":
                setErrorMessage(`A Type Error occurred: Invalid operation on data.`);
                break
            case "ReferenceError":
                setErrorMessage(`A variable or function is missing!`);
                break
            case "":
                setErrorMessage(`Server Error: Our backend is having issues. Please try later.`);
                break
            case "SyntaxError":
                setErrorMessage(`Code Error: There's a syntax mistake in our application.`);
                break
            default:
                if (error.digest?.startsWith("SERVER_ERROR") || error.message.includes("500")) {
                    return setErrorMessage("Server Error: Our backend is having issues. Please try later.")
                }
                return setErrorMessage("An unexpected error occurred!")
        }

    }, [])

    return (
        <html>
            <body>
                <div className="w-full h-screen flex justify-center items-center text-center">
                    <div>
                        <div className="flex justify-center items-center">
                            <img className="w-[450px]" src="/images/error.png" alt="Error image" />
                        </div>
                        <h1 className="mb-3 text-2xl font-bold">Oops! Something went wrong.</h1>
                        <p className={`mb-6 text-gray-600 text-lg ${errorMessage ? "initial" : "hidden"}`}>
                            We encountered an error: <code className="text-red-500">{errorMessage}</code>
                        </p>
                        <button
                            onClick={reset}
                            className="button hover:opacity-80 transition-all"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </body>
        </html >
    );
}