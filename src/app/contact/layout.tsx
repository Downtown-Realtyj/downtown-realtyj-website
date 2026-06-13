import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Downtown Realtyj | Best Real Estate Company in Patna Bihar',
    description: 'Have questions about premium plots or apartments? Contact Downtown Realtyj, the leading real estate company in Patna. Get expert advice on Bihar real estate today.',
    keywords: [
        'plot for sale in patna bihar',
        'land for sale in patna',
        'residential land in patna',
        'buy flat in patna bihar',
        'real estate agents in patna bihar',
        'Downtown Realtyj contact number',
        'buy property in Patna Bihar',
        'real estate office in Patna'
    ],
    alternates: {
        canonical: 'https://downtownrealtyj.com/contact',
    },
    openGraph: {
        title: 'Connect with Downtown Realtyj - Patna Real Estate Experts',
        description: 'Reach out to us for the best deals on residential and commercial properties in Patna, Bihar.',
        url: 'https://downtownrealtyj.com/contact',
        type: 'website',
    }
};

const ContactPageLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <div className='min-h-200 px-4 space-y-10'>{children}</div>;
};

export default ContactPageLayout;