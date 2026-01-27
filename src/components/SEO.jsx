import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical, ogType, ogImage }) => {
    const siteName = "TravelSmith";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const defaultDesc = "TravelSmith is one of the finest Destination Management Company for Goa and India, providing expert ground handling, cruise services, and MICE management.";

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDesc} />
            {keywords && <meta name="keywords" content={keywords} />}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDesc} />
            <meta property="og:type" content={ogType || "website"} />
            {ogImage && <meta property="og:image" content={ogImage} />}

            {/* Twitter */}
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDesc} />
        </Helmet>
    );
};

export default SEO;
