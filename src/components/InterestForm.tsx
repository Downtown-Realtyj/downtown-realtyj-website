"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import { validateForm } from "../utils/formValidation";

const InterestForm = () => {
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const onSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitStatus('idle');
        
        const form = event.currentTarget;
        const formData = new FormData(form);

        // Form Validation
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsLoading(true);
        formData.append("access_key", "d6f062af-ef51-4958-af46-f9f7fdce45ed");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                setSubmitStatus('success');
                form.reset();
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="interest-form">
                    <div className="rounded-3xl p-10 md:p-12 text-slate-900 shadow-sm border border-gray-200/80">
                        <h4 className="text-2xl md:text-3xl font-bold mb-8">Register Interest</h4>
                        
                        {/* Success Message */}
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3 animate-fade-in-scale">
                                <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                                <div>
                                    <p className="text-green-800 text-sm font-medium">Interest registered successfully! We&apos;ll contact you soon.</p>
                                </div>
                            </div>
                        )}

                        {/* Error Message */}
                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3 animate-fade-in-scale">
                                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                                <div>
                                    <p className="text-red-800 text-sm font-medium">Something went wrong. Please try again.</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={onSubmit} className="space-y-4">
                            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:ring-2 focus:ring-brand outline-none transition-all ${
                                            errors.name ? "border-red-500 bg-red-50" : "border-slate-200"
                                        }`}
                                        placeholder="John Doe"
                                        required
                                    />
                                    {errors.name && <p className="text-xs text-red-500">{errors.full_name}</p>}
                                </div>

                                {/* Phone */}
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
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
                                <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:ring-2 focus:ring-brand outline-none transition-all ${
                                        errors.email ? "border-red-500 bg-red-50" : "border-slate-200"
                                    }`}
                                    placeholder="john@example.com"
                                />
                                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message / Enquiry</label>
                                <textarea
                                    rows={3}
                                    name="message"
                                    id="message"
                                    className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:ring-2 focus:ring-brand outline-none transition-all resize-none ${
                                        errors.message ? "border-red-500 bg-red-50" : "border-slate-200"
                                    }`}
                                    placeholder="How can we help you?"
                                ></textarea>
                                {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                            </div>

                            <button
                                className="w-full py-3 bg-brand hover:bg-brand/90 text-black font-bold rounded-lg transition-all shadow-lg shadow-brand/20 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                                        Submitting...
                                    </>
                                ) : (
                                    "Submit Interest"
                                )}
                            </button>
                            <p className="text-[10px] text-slate-700 text-center uppercase tracking-widest">
                                We respect your privacy. No spam, only updates.
                            </p>
                        </form>
                    </div>
        </section>
    );
};

export default InterestForm;