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

export default function Home() {
	return (
		<>
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
