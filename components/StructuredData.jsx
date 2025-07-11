export default function StructuredData({ type, data }) {
  let structuredData = {};

  switch (type) {
    case 'organization':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        "name": "3A Lending LLC",
        "alternateName": "3A Lending",
        "url": "https://www.3alending.com",
        "logo": "https://www.3alending.com/images/3A_Logo.jpg",
        "description": "Expert commercial lending and SBA loans for small businesses in Northeast Indiana",
        "areaServed": {
          "@type": "State",
          "name": "Indiana",
          "containsPlace": [
            {
              "@type": "City",
              "name": "Fort Wayne"
            },
            {
              "@type": "AdministrativeArea", 
              "name": "Northeast Indiana"
            }
          ]
        },
        "knowsAbout": [
          "SBA 504 Loans",
          "SBA 7(a) Loans",
          "Commercial Real Estate Loans",
          "Equipment Financing",
          "Business Lines of Credit",
          "Business Acquisition Loans"
        ],
        "sameAs": [
          "https://www.facebook.com/3alending",
          "https://www.linkedin.com/company/3a-lending",
          "https://twitter.com/3alending"
        ]
      };
      break;

    case 'breadcrumb':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": data.items.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      };
      break;

    case 'faqPage':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.questions.map(q => ({
          "@type": "Question",
          "name": q.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": q.answer
          }
        }))
      };
      break;

    case 'service':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": data.name,
        "provider": {
          "@type": "FinancialService",
          "name": "3A Lending LLC"
        },
        "areaServed": {
          "@type": "State",
          "name": "Indiana"
        },
        "description": data.description,
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": data.rate,
            "priceCurrency": "USD"
          }
        }
      };
      break;

    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}