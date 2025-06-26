import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nunito, Pacifico } from "next/font/google"; // ✅ Add this
import "./globals.css";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const nunito = Nunito({
	variable: "--font-nunito",
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	display: "swap",
});

const pacifico = Pacifico({
	variable: "--font-pacifico",
	subsets: ["latin"],
	weight: ["400"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Dịch Vụ Spa, Khách Sạn, Phụ Kiện Thú Cưng Quận 7 | Tea Mi Pet Store",
	openGraph: {},
	authors: [
		{
			name: "Tea Mi Pet Store",
			url: "https://teamipetstore.com",
		},
	],
	alternates: {
		canonical: "https://teamipetstore.com",
	},
	publisher: "Tea Mi Pet Store",
	robots: "index, follow",
	keywords:
		"pet store, cửa hàng thú cưng, spa chó mèo, khách sạn thú cưng, Tea Mi Pet Store, phụ kiện thú cưng Quận 7",
	description:
		"Tea Mi Pet Store cung cấp spa, khách sạn, chăm sóc thú cưng và phụ kiện cho chó mèo tại Quận 7.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="vi">
			<link rel="url" href="https://teamipetstore.com" />
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<body
				className={`${nunito.variable} ${pacifico.variable} bg-white text-gray-800`}
			>
				<Header />
				<main className="">{children}</main>
				<Footer />
			</body>
			<GoogleAnalytics gaId="G-P34LKJ0J8X" />
			<script
				src="//code.tidio.co/cfpjadkapvmjrjm165pll9vbrgr9wxwv.js"
				async
			></script>
		</html>
	);
}
