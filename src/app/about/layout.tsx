import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Downtown Realtyj | Best Real Estate Company in Patna Bihar',
    description: 'Downtown Realtyj is recognized as one of the best real estate company in Patna, Bihar. We develop and sell modern townships, premium apartments, and commercial & residential plots.',
    keywords: [
        'best real estate company in patna bihar', 
        'real estate companies in patna', 
        'bihar real estate', 
        'Downtown Realtyj'
    ],
    alternates: {
        canonical: 'https://downtownrealtyj.com/about',
    },
    openGraph: {
        title: 'About Us | Downtown Realtyj - Best Real Estate Company in Patna Bihar',
        description: 'Downtown Realtyj, your trusted partner in Patna, Bihar real estate. We specialize in developing modern townships, premium apartments (2BHK, 3BHK), and commercial / residential plots. Discover why we are the best real estate company in Patna.',
        url: 'https://downtownrealtyj.com/about',
        images: [
            {
                url: 'https://downtownrealtyj.com/project_image.webp',
                width: 1200,
                height: 630,
                alt: 'About Downtown Realtyj - Best Real Estate Company in Patna Bihar',
            },
        ],
    },
};

const AboutPageLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <div className='min-h-200 px-4 space-y-10'>{children}</div>;
};

export default AboutPageLayout;