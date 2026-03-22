import Head from 'next/head';

export default function Seo({
    title = "OSSome Hacks 3.0 | National Level Hackathon by GitHub Community SRM",
    description = "Unleash your creativity at OSSome Hacks 3.0! A National-level hackathon by GitHub Community SRM at SRMIST Chennai. Compete for massive prizes, connect with experts, and build the future in GenAI, Web3, HealthTech, and more. Register Today!",
    keywords = "Hackathon, SRM, GitHub Community SRM, Open Source, Coding, Innovation, OSSome Hacks, SRMIST, Student Hackathon India, Chennai Hackathon, Coding Competition, Prize Pool, Mentorship, GenAI, Web3, EdTech, HealthTech, FinTech, Hackathon 2026",
    image = "/socialFrame.png",
    url = "https://ossomehacks.githubsrmist.in"
}) {
    const siteTitle = title;
    const themeColor = "#1a6953";

    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="GitHub Community SRM" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content={themeColor} />
            
            {/* PWA & Mobile Tags */}
            <meta name="application-name" content="OSSome Hacks 3.0" />
            <meta name="apple-mobile-web-app-title" content="OSSome Hacks 3.0" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />

            {/* Canonical Link */}
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="OSSome Hacks 3.0" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:alt" content="OSSome Hacks 3.0 Banner" />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:creator" content="@githubsrm" />
            <meta property="twitter:site" content="@githubsrm" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            <link rel="icon" href="/favicon.ico" />

            {/* JSON-LD Structured Data for Event */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Event",
                        "name": "OSSome Hacks 3.0",
                        "startDate": "2026-04-10T09:00",
                        "endDate": "2026-04-11T18:00",
                        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                        "eventStatus": "https://schema.org/EventScheduled",
                        "location": {
                            "@type": "Place",
                            "name": "SRM Institute of Science and Technology",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Mahatma Gandhi Rd, Potheri, SRM Nagar, Kattankulathur",
                                "addressLocality": "Chennai",
                                "postalCode": "603203",
                                "addressRegion": "Tamil Nadu",
                                "addressCountry": "IN"
                            }
                        },
                        "image": [
                            url + image
                        ],
                        "description": description,
                        "offers": {
                            "@type": "Offer",
                            "url": url,
                            "price": "0",
                            "priceCurrency": "INR",
                            "availability": "https://schema.org/InStock",
                            "validFrom": "2026-03-01T00:00"
                        },
                        "organizer": {
                            "@type": "Organization",
                            "name": "GitHub Community SRM",
                            "url": "https://www.githubsrmist.in/"
                        }
                    })
                }}
            />
        </Head>
    );
}
