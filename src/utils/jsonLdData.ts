export const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    'name': 'Downtown Realtyj Private Limited',
    'image': 'https://www.downtownrealtyj.com/og-image.png',
    '@id': 'https://www.downtownrealtyj.com',
    'url': 'https://www.downtownrealtyj.com',
    'telephone': '+91-9031845005',
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
      'https://www.facebook.com/1FercKXpzu/',
      'https://www.linkedin.com/company/downtown-realtyj-private-limited/about/'
    ]
  };