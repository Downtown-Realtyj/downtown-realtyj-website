"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import ErrorIllustration from '../components/error/ErrorIllustration';
import ErrorPageLayout from '../components/error/ErrorPageLayout';

export default function NotFound() {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <ErrorPageLayout
            errorCode="404"
            heading="Page Not Found"
            description="The page you're looking for might have been moved or doesn't exist. Let's get you back on track."
            illustration={<ErrorIllustration type="404" />}
        >
            <button
                onClick={handleGoBack}
                className="w-full sm:w-auto px-8 py-3 md:py-4 bg-brand/20 border border-brand text-brand font-semibold text-base md:text-lg rounded-md hover:bg-brand hover:text-black transition-colors duration-300 cursor-pointer"
            >
                <ArrowLeft className="mr-2 inline" />
                Go Back
            </button>
            <Link
                href="/"
                className="w-full sm:w-auto px-8 py-3 md:py-4 bg-brand text-black font-semibold text-base md:text-lg rounded-md hover:bg-brand/90 transition-colors duration-300 cursor-pointer inline-block text-center"
            >
                Back to Home
            </Link>
        </ErrorPageLayout>
    );
}
