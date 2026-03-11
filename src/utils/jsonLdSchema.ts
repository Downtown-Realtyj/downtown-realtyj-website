export interface AreaServed {
  '@type': string;
  name: string;
}

export interface jsonLdSchema {
    '@context': 'https://schema.org';
    '@type': 'RealEstateAgent';
    name: string;
    image: string;
    '@id': string;
    url: string;
    telephone: string;
    address: {
        '@type': 'PostalAddress';
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
    geo: {
        '@type': 'GeoCoordinates';
        latitude: string;
        longitude: string;
    };
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification';
        dayOfWeek: string[];
        opens: string;
        closes: string;
    };
    areaServed: AreaServed[];
    sameAs: string[];
}