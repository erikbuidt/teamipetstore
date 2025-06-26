import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nunito, Pacifico } from "next/font/google"; // ✅ Add this
import "./globals.css";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEO from "@/components/custom/seo";

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
	title: "Tea Mi Pet Store",
	openGraph: {},
	authors: [
		{
			name: "Tea Mi Pet Store",
			url: "https://teamipetstore.com",
		},
	],
	publisher: "Tea Mi Pet Store",
	robots: "index, follow",
	keywords:
		"pet store, cửa hàng thú cưng, spa chó mèo, khách sạn thú cưng, Tea Mi Pet Store, phụ kiện thú cưng Quận 7",
	description:
		"Tea Mi Pet Store cung cấp dịch vụ thú cưng quận 7 chuyên nghiệp: spa, khách sạn, chăm sóc, và cửa hàng thú cưng với đa dạng sản phẩm cho chó mèo tại Quận 7.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="vi">
			<link rel="canonical" href="https://teamipetstore.com" />
			<link rel="url" href="https://teamipetstore.com" />

			<body
				className={`${nunito.variable} ${pacifico.variable} bg-white text-gray-800`}
			>
				<Header />
				<main className="">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
