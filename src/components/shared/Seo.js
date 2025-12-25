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
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="GitHub Community SRM" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content={themeColor} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="OSSome Hacks 3.0" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:alt" content="OSSome Hacks 3.0 Banner" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:creator" content="@githubsrm" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
