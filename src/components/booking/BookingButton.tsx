"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import BookingModal from "@/components/booking/BookingModal";

interface BookingButtonProps {
    packageName: string;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
    children?: React.ReactNode;
}

const BookingButton = ({
    packageName,
    variant = "primary",
    size = "md",
    className = "",
    children = "Enquire Now"
}: BookingButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button
                variant={variant}
                size={size}
                className={className}
                onClick={() => setIsOpen(true)}
            >
                {children}
            </Button>
            {isOpen && (
                <BookingModal
                    initialPackage={packageName}
                    onClose={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default BookingButton;
