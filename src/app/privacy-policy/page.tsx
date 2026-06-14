import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Privacy Policy | Downtown Realtyj',
  description: 'Privacy Policy and data collection practices for Downtown Realtyj Private Limited.',
};

const PrivacyPolicyPage = () => {
  return (
    <main className="max-w-7xl min-h-screen text-slate-300">
        <div className='w-full h-100 lg:h-125 mx-auto relative overflow-hidden mb-12'>
            <Image
                src="/privacy-policy.webp"
                alt="Privacy Policy"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-black/20" />
            <h1 className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-md">
                Privacy Policy
            </h1>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-2 tracking-tight">
                    Privacy Policy
                </h2>
                <div className='w-36 h-2 bg-brand' />
            </div>

            {/* Content Body */}
            <div className="w-full text-gray-700">
                <p className="w-full text-lg leading-relaxed mb-8">
                    This Privacy Policy governs the manner in which <strong>Downtown Realtyj Private Limited</strong> collects, uses, maintains, and discloses information collected from users (each, a "User") of our website. This Privacy Policy is subject to the terms and conditions of our overall Site Policy (User Agreement) and becomes effective the moment a user browses our platform, submits an inquiry, or registers by completing any lead/registration form.
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-brand mb-4 border-b border-slate-800 pb-2">
                        1. Personal Information We Collect
                    </h2>
                    <p className="mb-4 leading-relaxed">
                        "Personal Information" refers to any data through which you can be specifically identified. Downtown Realtyj Private Limited collects this information across various touchpoints, including our website property pages, landing pages for specific projects (such as <em>The Core Ultrawide Tower, Ghaziabad</em>), digital advertising campaigns, property showcase events, and direct site visits.
                    </p>
                    <p className="mb-4 leading-relaxed">
                        Depending on your activity, the Personal Information we collect may include, but is not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600 marker:text-gray-800">
                        <li>Full Name</li>
                        <li>Email Address</li>
                        <li>Phone Number / WhatsApp Contact Details</li>
                        <li>Mailing/Permanent Address</li>
                        <li>User ID and Passwords (if registering an account)</li>
                        <li>Property preferences (e.g., interest in residential/commercial plots, 2BHK/3BHK flats, or luxury commercial spaces)</li>
                        <li>Customer feedback, comments, and image submissions.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-brand mb-4 border-b border-slate-800 pb-2">
                        2. Information Collection, Use, and Sharing
                    </h2>
                    <p className="mb-4 leading-relaxed">
                        We are the sole owners of the information collected on this site. We only have access to and collect information that you voluntarily provide us via email, web forms, WhatsApp integration links, or other direct contact methods.
                    </p>
                    <p className="mb-6 leading-relaxed font-medium text-black">
                        We will not sell, rent, or lease your personally identifying information to anyone.
                    </p>
                    <h3 className="text-lg font-semibold text-black mb-3">How We Use Your Information:</h3>
                    <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-600 marker:text-gray-800">
                        <li><strong className="text-gray-700">To Personalize Your Experience:</strong> We use your specific preferences to deliver highly relevant real estate listings, catalog downloads, and project updates that fit your criteria in Bihar or the NCR.</li>
                        <li><strong className="text-gray-700">To Improve Our Platform:</strong> Your information helps us analyze site usage patterns, optimize layout configurations, and enhance our overall real estate services.</li>
                        <li><strong className="text-gray-700">Marketing & Communications:</strong> Unless you request to opt-out, we may use your details to contact you with administrative notices, project milestones, targeted banner advertisements, and marketing materials relevant to your interests.</li>
                        <li><strong className="text-gray-700">Third-Party Logistics:</strong> Your data may be shared securely with our internal agents, employees, legal representatives, and trusted third-party service providers (such as CRM systems or channel partners) who are strictly obligated to Downtown Realtyj Private Limited to handle your data with reasonable care.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-brand mb-4 border-b border-slate-800 pb-2">
                        3. Cookies and IP Tracking
                    </h2>
                    <p className="mb-4 leading-relaxed">
                        To provide a streamlined, high-performance browsing experience, Downtown Realtyj Private Limited may track the IP address of a user's device and store minimal configuration data in the form of cookies.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600 marker:text-gray-800">
                        <li>Cookies allow us to recognize your device and load your preferred real estate searches quickly.</li>
                        <li>You hold the right to accept or decline cookies at any time by modifying your active web browser settings, though doing so may limit access to certain interactive site features.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-brand mb-4 border-b border-slate-800 pb-2">
                        4. Data Security and User Consent
                    </h2>
                    <p className="mb-4 leading-relaxed">
                        Every reasonable technical and administrative effort is made to store and safeguard the data provided by our users against unauthorized access.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600 marker:text-gray-800">
                        <li>Browsing our real estate inventory publicly does not require you to disclose your identity or furnish personal contact credentials.</li>
                        <li>Personal identifying details are collected only when you explicitly opt-in to a form, request a call back for property pricing, or register an account.</li>
                        <li>Any promotional display of user reviews, testimonials, or comments on our website is executed exclusively after obtaining prior consent from the user concerned.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-brand mb-4 border-b border-slate-800 pb-2">
                        5. Compliance with Law Enforcement
                    </h2>
                    <p className="mb-6 leading-relaxed">
                        Downtown Realtyj Private Limited firmly believes that protecting user privacy is best achieved by working in close conjunction with local and national regulatory framework authorities. We reserve the right to disclose personal data when strictly required by law enforcement, judicial orders, or to protect the legal rights and safety of our firm, employees, and users.
                    </p>
                </section>

                <section className="mb-20">
                    <h2 className="text-2xl font-semibold text-brand mb-4 border-b border-slate-800 pb-2">
                        6. Managing Your Choices & Opting Out
                    </h2>
                    <p className="mb-6 leading-relaxed">
                        By accepting our User Agreement and browsing this platform, you expressly agree to receive targeted property communication updates. If at any time you wish to stop receiving marketing emails, project catalogs, or updates regarding our Patna or Ghaziabad real estate inventories, you may update your profile preferences or opt out instantly by contacting us via our designated support channels or clicking "Unsubscribe."
                    </p>
                </section>

            </div>
        </div>
    </main>
  );
};

export default PrivacyPolicyPage;