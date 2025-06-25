import Image from "next/image";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import ServicesSection from "./components/service-section";
import SpaHotelSection from "./components/spa-hotel.section";
import ProductsSection from "./components/product-section";
import TestimonialsSection from "./components/testimonial-section";
import BlogSection from "./components/blog-section";
import BookingSection from "./components/booking-section";
import PetKnowledgeBlog from "./components/blog-section";
import SEO from "@/components/custom/seo";

export default function Home() {
	return (
		<>
			<SEO
				title="Dịch vụ thú cưng quận 7 | Cửa hàng thú cưng uy tín tại Quận 7"
				description="Team iPetStore cung cấp dịch vụ thú cưng quận 7 chuyên nghiệp: spa, khách sạn, chăm sóc, và cửa hàng thú cưng với đa dạng sản phẩm cho chó mèo tại Quận 7."
				keywords="Dịch vụ thú cưng quận 7, quận 7, cửa hàng thú cưng, spa thú cưng, khách sạn thú cưng, chăm sóc thú cưng, pet shop quận 7"
			/>
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<SpaHotelSection />
			<ProductsSection />
			<TestimonialsSection />
			<PetKnowledgeBlog />
			<BookingSection />
		</>
	);
}
