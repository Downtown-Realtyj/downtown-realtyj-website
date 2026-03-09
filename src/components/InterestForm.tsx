"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { validateForm } from "../utils/formValidation";

const InterestForm = () => {
    const [result, setResult] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const onSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("");
        
        const form = event.currentTarget;
        const formData = new FormData(form);

        // Form Validation
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Clear errors and start loading
        setErrors({});
        setLoading(true);
        formData.append("access_key", "d6f062af-ef51-4958-af46-f9f7fdce45ed");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                setResult("Form Submitted Successfully");
                form.reset();
            } else {
                setResult("Something went wrong. Please try again.");
            }
        } catch (error) {
            setResult("Unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="interest-form" className="py-24 bg-gold text-black">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Left Side Info */}
                    <div>
                        <h2 className="text-brand font-bold uppercase tracking-widest mb-4">Get in Touch</h2>
                        <h3 className="text-4xl font-bold mb-8">Partner in Patna's Progress</h3>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand/25 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                                    <MapPin className="text-brand w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg mb-1">Corporate Office</p>
                                    <p className="text-slate-900">
                                        3rd Floor, Leeds Tower, Rupaspur <br />
                                        Bailey Road, Patna, Bihar (801503)
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand/25 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                                    <Phone className="text-brand w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg mb-1">Call Us</p>
                                    <p className="text-slate-900">+91 90318 45014</p>
                                    <p className="text-slate-900">+91 90318 45005</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand/25 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                                    <Mail className="text-brand w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg mb-1">Email</p>
                                    <p className="text-slate-800">info@downtownrealtyj.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="bg-white rounded-3xl p-10 text-slate-900 shadow-2xl">
                        <h4 className="text-2xl font-bold mb-8">Register Interest</h4>
                        <form className="space-y-4" onSubmit={onSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                                    <input
                                        type="text"
                                        name="full_name"
                                        className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:ring-2 focus:ring-brand outline-none transition-all ${
                                            errors.full_name ? "border-red-500 bg-red-50" : "border-slate-200"
                                        }`}
                                        placeholder="John Doe"
                                        required
                                    />
                                    {errors.full_name && <p className="text-xs text-red-500">{errors.full_name}</p>}
                                </div>

                                {/* Phone */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:ring-2 focus:ring-brand outline-none transition-all ${
                                            errors.phone ? "border-red-500 bg-red-50" : "border-slate-200"
                                        }`}
                                        placeholder="01234 56789"
                                        required
                                    />
                                    {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:ring-2 focus:ring-brand outline-none transition-all ${
                                        errors.email ? "border-red-500 bg-red-50" : "border-slate-200"
                                    }`}
                                    placeholder="john@example.com"
                                />
                                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message / Enquiry</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:ring-2 focus:ring-brand outline-none transition-all resize-none ${
                                        errors.message ? "border-red-500 bg-red-50" : "border-slate-200"
                                    }`}
                                    placeholder="How can we help you?"
                                ></textarea>
                                {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                            </div>

                            {/* Submission Status Message */}
                            {result && (
                                <p className={`text-sm font-medium text-center ${result.includes("Successfully") ? "text-green-600" : "text-red-600"}`}>
                                    {result}
                                </p>
                            )}

                            <button
                                className="w-full py-3 bg-brand hover:bg-brand/90 text-black font-bold rounded-lg transition-all shadow-lg shadow-brand/20 cursor-pointer disabled:opacity-50"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "Submit Interest"}
                            </button>
                            <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest">
                                We respect your privacy. No spam, only updates.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InterestForm;