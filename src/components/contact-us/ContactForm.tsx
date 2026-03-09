'use client';

import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'; 

import { requirements } from './constant';
import { validateForm } from '../../utils/formValidation';

const ContactForm = () => {
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
        formData.append("access_key", "ded9bf88-db81-45d0-9d00-c141f41ecfb3");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                setSubmitStatus('success');
                form.reset();
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
                {/* Left Side - Contact Details */}
                <div className="bg-gold text-black p-8 md:p-10 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Connect With Us</h2>
                        <p className="text-slate-700 mb-8">We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.</p>

                        {/* Contact Info Items */}
                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex gap-4">
                                <div className="shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-brand/20">
                                        <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-black mb-1">Email</h3>
                                    <p className="text-slate-800">info@downtownrealtyj.com</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-4">
                                <div className="shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-brand/20">
                                        <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-black mb-1">Phone</h3>
                                    <p className="text-slate-800">+91 90318 45005</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex gap-4">
                                <div className="shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-brand/20">
                                        <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-black mb-1">Location</h3>
                                    <p className="text-slate-800">Patna, Bihar, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Business Hours */}
                    <div className="border-t border-slate-700 pt-6 mt-8">
                        <h4 className="font-semibold text-black mb-3">Business Hours</h4>
                        <ul className="space-y-2 text-slate-800 text-sm">
                            <li>Office Timings: 10:00 AM - 7:00 PM</li>
                            <li>Sunday: Open</li>
                        </ul>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="p-8 md:p-10">
                    {/* Success Message */}
                    {submitStatus === 'success' && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3 animate-fade-in-scale">
                            <div className="shrink-0 mt-0.5">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-green-900">Message sent successfully!</h3>
                                <p className="text-green-800 text-sm mt-1">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                            </div>
                        </div>
                    )}

                    {/* Error Message */}
                    {submitStatus === 'error' && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3 animate-fade-in-scale">
                            <div className="shrink-0 mt-0.5">
                                <AlertCircle className="w-5 h-5 text-red-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-red-900">Something went wrong</h3>
                                <p className="text-red-800 text-sm mt-1">Please try again or contact us directly.</p>
                            </div>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={onSubmit} className="space-y-5">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={`w-full px-4 py-2.5 rounded-lg border-2 transition-colors focus:outline-none ${
                                    errors.name
                                        ? 'border-red-500 focus:border-red-600 bg-red-50'
                                        : 'border-slate-200 focus:border-brand bg-white'
                                }`}
                                placeholder="John Doe"
                                required
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className={`w-full px-4 py-2.5 rounded-lg border-2 transition-colors focus:outline-none ${
                                    errors.phone
                                        ? 'border-red-500 focus:border-red-600 bg-red-50'
                                        : 'border-slate-200 focus:border-brand bg-white'
                                }`}
                                placeholder="98765 43210"
                                required
                            />
                            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                        </div>

                        {/* Requirement */}
                        <div>
                            <label htmlFor="requirement" className="block text-sm font-semibold text-slate-900 mb-2">
                                What are you looking for? <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="requirement"
                                name="requirement"
                                className={`w-full px-4 py-2.5 rounded-lg border-2 transition-colors focus:outline-none ${
                                    errors.requirement
                                        ? 'border-red-500 focus:border-red-600 bg-red-50'
                                        : 'border-slate-200 focus:border-brand bg-white'
                                }`}
                                required
                            >
                                <option value="">Select a requirement</option>
                                {requirements.map(req => (
                                    <option key={req} value={req}>{req}</option>
                                ))}
                            </select>
                            {errors.requirement && <p className="mt-1 text-sm text-red-600">{errors.requirement}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                                Email Address <span className="text-slate-500 text-xs">(optional)</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`w-full px-4 py-2.5 rounded-lg border-2 transition-colors focus:outline-none ${
                                    errors.email
                                        ? 'border-red-500 focus:border-red-600 bg-red-50'
                                        : 'border-slate-200 focus:border-brand bg-white'
                                }`}
                                placeholder="your.email@example.com"
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                                Additional Message <span className="text-slate-500 text-xs">(optional)</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={3}
                                className="w-full px-4 py-2.5 rounded-lg border-2 border-slate-200 focus:border-brand focus:outline-none transition-colors bg-white resize-none"
                                placeholder="Tell us more about your requirements..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-brand hover:bg-brand/90 disabled:bg-brand/50 text-black font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-base cursor-pointer"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Mail size={20} />
                                    Send Message
                                </>
                            )}
                        </button>

                        {/* Note */}
                        <p className="text-xs text-slate-500 text-center">
                            Required fields are marked with <span className="text-red-500">*</span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
