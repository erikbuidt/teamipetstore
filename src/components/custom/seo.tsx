import Head from "next/head";

interface SEOProps {
	title?: string;
	description?: string;
	keywords?: string;
	image?: string;
	url?: string;
}

const defaultTitle = "Team iPetStore";
const defaultDescription = "Your one-stop pet care and product destination.";
const defaultKeywords =
	"pet, pet store, dog, cat, pet care, grooming, spa, hotel";
const defaultImage = "/public/images/logo.png";
const defaultUrl = "https://www.teamipetstore.com";

export default function SEO({
	title = defaultTitle,
	description = defaultDescription,
	keywords = defaultKeywords,
	image = defaultImage,
	url = defaultUrl,
}: SEOProps) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta
				property="og:image:alt"
				content="Team iPetStore - Dịch vụ thú cưng quận 7, cửa hàng thú cưng uy tín"
			/>
			<meta property="og:url" content={url} />
			<meta property="og:type" content="website" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<link rel="canonical" href={url} />
		</Head>
	);
}
