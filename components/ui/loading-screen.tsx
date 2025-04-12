import React from "react";

interface LoadingScreenProps {
    message?: string;
}

export function LoadingScreen({ message = "Loading..." }: LoadingScreenProps) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#F5EBE0]">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B4513] mx-auto mb-4"></div>
                <h2 className="text-xl font-medium text-[#5D4037]">{message}</h2>
            </div>
        </div>
    );
}