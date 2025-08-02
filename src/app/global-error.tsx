"use client";
import Image from "next/image";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
    const errorMessage = getErrorMessage(error);

    function getErrorMessage(error: Error & { digest?: string }): string {
        switch (error.name) {
            case "TypeError":
                return "A Type Error occurred: Invalid operation on data.";
            case "ReferenceError":
                return "A variable or function is missing!";
            case "SyntaxError":
                return "Code Error: There's a syntax mistake in our application.";
            default:
                if (error.digest?.startsWith("SERVER_ERROR") || error.message.includes("500")) {
                    return "Server Error: Our backend is having issues. Please try later.";
                }
                return "An unexpected error occurred!";
        }
    }

    return (
        <html>
            <body>
                <div className="w-full h-screen flex justify-center items-center text-center">
                    <div>
                        <div className="flex justify-center items-center">
                            <Image
                                className="w-[450px]"
                                src="/images/error.png"
                                alt="Error image"
                                width={450}
                                height={450}
                            />
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
        </html>
    );
}