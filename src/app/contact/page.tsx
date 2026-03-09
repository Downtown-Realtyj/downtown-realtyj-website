import ContactForm from '../../components/contact-us/ContactForm';

export const metadata = {
  title: 'Contact Us | Downtown Realtyj',
  description: 'Get in touch with Downtown Realtyj for property inquiries and consultation.',
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
        {/* Hero Section */}
        <div className="pt-32 pb-12 md:pt-32 md:pb-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Let&apos;s Connect
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                        Have questions about our properties or services? We&apos;re here to help you find your perfect space in Patna.
                    </p>
                </div>

                {/* Contact Form with Side-by-side Layout */}
                <ContactForm />
            </div>
        </div>

      {/* Bottom Section */}
      <div className="py-12 md:py-16 border-t border-slate-200 mt-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Response Time</h3>
                <p className="text-slate-600 text-sm">
                    We typically respond to inquiries within 24 hours. For urgent matters, please call us directly.
                </p>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Follow Us</h3>
                <p className="text-slate-600 text-sm">
                    Connect with us on social media for updates on new properties and market insights.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
