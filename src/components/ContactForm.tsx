'use client';

import { useRef, useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const requirements = [
        'Apartment Purchase',
        'Land Investment',
        'Commercial Property',
        'Other',
    ];

    const getFormData = () => {
        if (!formRef.current) return null;
        return new FormData(formRef.current);
    };

    const validateForm = () => {
        const formData = getFormData();
        if (!formData) return false;

        const newErrors: Record<string, string> = {};
        const name = (formData.get('name') as string)?.trim();
        const phone = (formData.get('phone') as string)?.trim();
        const requirement = formData.get('requirement') as string;
        const email = (formData.get('email') as string)?.trim();

        if (!name) {
            newErrors.name = 'Name is required';
        }

        if (!phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[0-9]{10}$/.test(phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }

        if (!requirement) {
            newErrors.requirement = 'Please select a requirement';
        }

        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name } = e.target;
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setSubmitStatus('idle');

        try {
            const formData = getFormData();
            if (!formData) {
                setSubmitStatus('error');
                setIsLoading(false);
                return;
            }

            // Web3Forms configuration
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'test_key',
                    name: formData.get('name'),
                    phone: formData.get('phone'),
                    email: formData.get('email') || 'not-provided@example.com',
                    requirement: formData.get('requirement'),
                    message: formData.get('message') || 'No additional message',
                    subject: `New Contact Form Submission from ${formData.get('name')}`,
                    from_name: 'Downtown Realtyj Website',
                }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                if (formRef.current) {
                    formRef.current.reset();
                }
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
                setTimeout(() => setSubmitStatus('idle'), 5000);
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 5000);
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
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
                            <li>Monday - Saturday: 10:00 AM - 7:00 PM</li>
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
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={handleChange}
                                className={`w-full px-4 py-2.5 rounded-lg border-2 transition-colors focus:outline-none ${
                                    errors.name
                                        ? 'border-red-500 focus:border-red-600 bg-red-50'
                                        : 'border-slate-200 focus:border-brand bg-white'
                                }`}
                                placeholder="John Doe"
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
                                onChange={handleChange}
                                className={`w-full px-4 py-2.5 rounded-lg border-2 transition-colors focus:outline-none ${
                                    errors.phone
                                        ? 'border-red-500 focus:border-red-600 bg-red-50'
                                        : 'border-slate-200 focus:border-brand bg-white'
                                }`}
                                placeholder="+91 98765 43210"
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
                                onChange={handleChange}
                                className={`w-full px-4 py-2.5 rounded-lg border-2 transition-colors focus:outline-none ${
                                    errors.requirement
                                        ? 'border-red-500 focus:border-red-600 bg-red-50'
                                        : 'border-slate-200 focus:border-brand bg-white'
                                }`}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
