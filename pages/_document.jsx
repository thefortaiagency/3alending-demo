import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "3A Lending LLC",
    "description": "Expert commercial lending and SBA loans for small businesses nationwide. Fast approvals, competitive rates, and personalized digital service across all 50 states.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.079273",
      "longitude": "-85.139351"
    },
    "url": "https://www.3alending.com",
    "telephone": "+1-260-123-4567",
    "priceRange": "$$$",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "United States",
      "description": "Serving businesses in all 50 states"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Commercial Lending Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "SBA 504 Loans",
          "description": "Low down payment commercial real estate and equipment financing nationwide"
        },
        {
          "@type": "Service", 
          "name": "SBA 7(a) Loans",
          "description": "Versatile business loans for working capital and acquisitions across America"
        },
        {
          "@type": "Service",
          "name": "Commercial Real Estate Loans",
          "description": "Financing for commercial properties nationwide"
        },
        {
          "@type": "Service",
          "name": "Equipment Financing",
          "description": "Business equipment loans for small businesses across the USA"
        },
        {
          "@type": "Service",
          "name": "Business Lines of Credit",
          "description": "Flexible working capital solutions for businesses nationwide"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ]
  };

  return (
    <Html lang="en">
      <Head>
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Geographic targeting */}
        <meta name="geo.region" content="US-IN" />
        <meta name="geo.placename" content="Fort Wayne" />
        <meta name="geo.position" content="41.079273;-85.139351" />
        <meta name="ICBM" content="41.079273, -85.139351" />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="3A Lending LLC" />
        <meta name="publisher" content="3A Lending LLC" />
        <meta name="copyright" content="3A Lending LLC" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="local" />
        
        {/* Open Graph defaults */}
        <meta property="og:site_name" content="3A Lending LLC" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card defaults */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@3alending" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}