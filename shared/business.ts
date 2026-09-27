export const SITE_URL = 'https://tts-renovation.ch';
export const BUSINESS_ID = `${SITE_URL}/#business`;

export const BUSINESS = {
  name: 'TTS Renovation',
  phone: '+41762804757',
  email: 'tts.renovation@outlook.com',
  foundingDate: '2020',
  logo: 'https://defma1gvj98ta.cloudfront.net/logo-light.avif',
  image: 'https://defma1gvj98ta.cloudfront.net/contact.avif',
  instagram: 'https://www.instagram.com/tts_renovation',
  description:
    'TTS Renovation is a small Swiss team offering home renovation, plumbing and tiling across Switzerland, with a 24/7 emergency plumbing service. Free on-site visits, fixed itemised quotes and a two-year workmanship guarantee.',
};

export const SERVICES = [
  {
    path: '/renovation',
    name: 'Home renovation',
    serviceType: 'Home renovation',
    description:
      'Kitchen and bathroom remodels, complete interior renovations and structural updates with modern finishes.',
  },
  {
    path: '/plumbing',
    name: 'Plumbing and 24/7 emergency plumbing',
    serviceType: 'Plumbing',
    description:
      'Plumbing repairs and installations, water and drainage systems, and 24/7 emergency call-outs for burst pipes and blocked drains.',
  },
  {
    path: '/tiles',
    name: 'Tiling',
    serviceType: 'Tile installation',
    description: 'Installation of ceramic, porcelain and natural stone tiles for walls and floors.',
  },
];

const SWITZERLAND = { '@type': 'Country', name: 'Switzerland' };

export const businessJsonLd = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['GeneralContractor', 'Plumber'],
      '@id': BUSINESS_ID,
      name: BUSINESS.name,
      alternateName: 'TTS',
      url: SITE_URL,
      logo: BUSINESS.logo,
      image: BUSINESS.image,
      description: BUSINESS.description,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      foundingDate: BUSINESS.foundingDate,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CH',
      },
      areaServed: SWITZERLAND,
      knowsLanguage: ['en', 'de', 'fr'],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: BUSINESS.phone,
          email: BUSINESS.email,
          areaServed: 'CH',
          availableLanguage: ['English', 'German', 'French'],
        },
        {
          '@type': 'ContactPoint',
          contactType: 'emergency',
          name: '24/7 emergency plumbing',
          telephone: BUSINESS.phone,
          areaServed: 'CH',
          availableLanguage: ['English', 'German', 'French'],
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59',
          },
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Renovation, plumbing and tiling services',
        itemListElement: SERVICES.map(service => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            serviceType: service.serviceType,
            description: service.description,
            url: `${SITE_URL}${service.path}`,
          },
        })),
      },
      sameAs: [BUSINESS.instagram],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BUSINESS.name,
      inLanguage: ['en', 'de', 'fr'],
      publisher: { '@id': BUSINESS_ID },
    },
  ],
});

export const serviceJsonLd = (path: string) => {
  const service = SERVICES.find(s => s.path === path);
  if (!service) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    url: `${SITE_URL}${service.path}`,
    provider: { '@id': BUSINESS_ID },
    areaServed: SWITZERLAND,
    availableLanguage: ['English', 'German', 'French'],
  };
};
