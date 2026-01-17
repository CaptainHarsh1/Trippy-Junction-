"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";

interface BookingFormProps {
    initialPackage?: string;
    onClose: () => void;
}

const BookingModal = ({ initialPackage = "", onClose }: BookingFormProps) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        package: initialPackage,
        dates: "",
        travelers: "2",
    });

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/60 backdrop-blur-sm">
            <div className="bg-white rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl animate-fade-in">

                {/* Header */}
                <div className="nature-gradient p-8 text-white relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                    >
                        ✕
                    </button>
                    <p className="text-xs font-heading font-bold uppercase tracking-widest opacity-80 mb-2">Step {step} of 4</p>
                    <h2 className="text-3xl font-heading font-bold">Plan Your Journey</h2>
                </div>

                {/* Progress Bar */}
                <div className="h-1 bg-brand-sand/30">
                    <div
                        className="h-full bg-brand-teal transition-all duration-500"
                        style={{ width: `${(step / 4) * 100}%` }}
                    />
                </div>

                <div className="p-8">
                    {step === 1 && (
                        <div className="space-y-6 animate-fade-in">
                            <h3 className="text-xl font-heading font-bold text-brand-dark">Basic Details</h3>
                            <div>
                                <label className="block text-sm font-heading font-bold text-brand-dark/60 mb-2 uppercase tracking-wide">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-6 py-4 rounded-2xl bg-brand-bg border border-brand-sand/50 focus:outline-none focus:border-brand-teal font-body"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-heading font-bold text-brand-dark/60 mb-2 uppercase tracking-wide">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-6 py-4 rounded-2xl bg-brand-bg border border-brand-sand/50 focus:outline-none focus:border-brand-teal font-body"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <Button onClick={nextStep} variant="primary" className="w-full py-4 mt-4">Next Step →</Button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-6 animate-fade-in">
                            <h3 className="text-xl font-heading font-bold text-brand-dark">Package & Travelers</h3>
                            <div>
                                <label className="block text-sm font-heading font-bold text-brand-dark/60 mb-2 uppercase tracking-wide">Select Destination</label>
                                <select
                                    className="w-full px-6 py-4 rounded-2xl bg-brand-bg border border-brand-sand/50 focus:outline-none focus:border-brand-teal font-body"
                                    value={formData.package}
                                    onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                                >
                                    <option value="">Choose a destination</option>
                                    <option value="manali">Manali Expedition</option>
                                    <option value="chopta">Chopta Trek</option>
                                    <option value="jibhi">Jibhi Getaway</option>
                                    <option value="spiti">Spiti Valley Tour</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-heading font-bold text-brand-dark/60 mb-2 uppercase tracking-wide">No. of Travelers</label>
                                <input
                                    type="number"
                                    className="w-full px-6 py-4 rounded-2xl bg-brand-bg border border-brand-sand/50 focus:outline-none focus:border-brand-teal font-body"
                                    min="1"
                                    value={formData.travelers}
                                    onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                                />
                            </div>
                            <div className="flex gap-4">
                                <Button onClick={prevStep} variant="outline" className="flex-1">Back</Button>
                                <Button onClick={nextStep} variant="primary" className="flex-[2]">Continue →</Button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-6 animate-fade-in">
                            <h3 className="text-xl font-heading font-bold text-brand-dark">Contact Information</h3>
                            <div>
                                <label className="block text-sm font-heading font-bold text-brand-dark/60 mb-2 uppercase tracking-wide">Phone Number</label>
                                <input
                                    type="text"
                                    className="w-full px-6 py-4 rounded-2xl bg-brand-bg border border-brand-sand/50 focus:outline-none focus:border-brand-teal font-body"
                                    placeholder="+91 84489 50928"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <p className="text-brand-dark/50 text-xs font-body italic">
                                * Our travel expert will contact you within 24 hours to finalize the itinerary and payment details.
                            </p>
                            <div className="flex gap-4">
                                <Button onClick={prevStep} variant="outline" className="flex-1">Back</Button>
                                <Button onClick={nextStep} variant="primary" className="flex-[2]">Confirm Booking</Button>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="text-center py-6 animate-fade-in">
                            <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-green text-2xl">
                                ✓
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-2">Inquiry Received!</h3>
                            <p className="text-brand-dark/60 font-body text-sm mb-6">
                                Thank you for choosing Trippy Junction. Our team will reach out shortly to finalize your trip.
                            </p>

                            <div className="bg-brand-bg rounded-2xl p-6 mb-6 border border-brand-sand/30">
                                <p className="text-xs font-heading font-bold text-brand-dark/40 uppercase tracking-widest mb-4">Quick Payment (UPI)</p>
                                <div className="relative w-40 h-40 mx-auto mb-4 bg-white p-2 rounded-xl shadow-inner">
                                    <Image
                                        src="/images/qr_payment_v2.png"
                                        alt="Payment QR Code"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-sm font-heading font-bold text-brand-dark mb-1">Scan to Pay with PhonePe / UPI</p>
                                <p className="text-xs text-brand-dark/50 font-body">Secure your slot by paying the booking amount.</p>
                            </div>

                            <div className="flex gap-4">
                                <Button onClick={prevStep} variant="outline" className="flex-1">Back</Button>
                                <Button onClick={onClose} variant="primary" className="flex-[2]">
                                    Close & Exploring
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
