import { jsonLdSchema } from './jsonLdSchema';

export const jsonLdData: jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateCompany',
    'name': 'Downtown Realtyj Private Limited',
    'image': 'https://www.downtownrealtyj.com/og-image.png',
    '@id': 'https://www.downtownrealtyj.com',
    'url': 'https://www.downtownrealtyj.com',
    'telephone': '+919031845010, +919031845012',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '3rd Floor, Leeds Tower, Nahar Chauk, Rupaspur, Bailey Road',
      'addressLocality': 'Patna',
      'addressRegion': 'Bihar',
      'postalCode': '801503',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '25.609245924674955',
      'longitude': '85.06206843754032'
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '10:00',
      'closes': '19:00'
    },
    'areaServed': [
      {
        '@type': 'City',
        'name': 'Patna'
      },
      {
        '@type': 'State',
        'name': 'Bihar'
      }
    ],
    'sameAs': [
      'https://www.facebook.com/share/17iupmHnhe/',
      'https://www.linkedin.com/company/downtown-realtyj-private-limited/about/',
      'https://www.instagram.com/downtown_realtyj?igsh=YzI2MmU2cGR6Mm91',
    ]
};