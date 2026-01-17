"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BookingModal from "@/components/booking/BookingModal";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <>
            <Navbar onBookNow={() => setIsBookingOpen(true)} />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
            {isBookingOpen && (
                <BookingModal onClose={() => setIsBookingOpen(false)} />
            )}
        </>
    );
}
