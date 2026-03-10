"use client";

import Link from 'next/link';
import ErrorIllustration from '../components/error/ErrorIllustration';
import ErrorPageLayout from '../components/error/ErrorPageLayout';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {

    return (
        <ErrorPageLayout
            errorCode="500"
            heading="Something Went Wrong"
            description="We encountered an unexpected error. Please try again or return to the home page."
            illustration={<ErrorIllustration type="500" />}
        >
            <button
                onClick={reset}
                className="w-full sm:w-auto px-6 py-3 bg-brand text-black font-semibold rounded-md hover:bg-brand/90 transition-colors duration-300 cursor-pointer"
            >
                Try Again
            </button>
            <Link
                href="/"
                className="w-full sm:w-auto px-6 py-3 bg-brand/20 border border-brand text-brand font-semibold rounded-md hover:bg-brand hover:text-black transition-colors duration-300 cursor-pointer inline-block text-center"
            >
                Back to Home
            </Link>
        </ErrorPageLayout>
    );
}
