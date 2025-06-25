import FadeInStaggered from "@/components/custom/fade-in";

export default function HeroSection() {
	return (
		<section
			id="home"
			className="hero-section min-h-screen pt-24 flex items-center relative"
			style={{
				backgroundImage: `url('/images/download.png')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="gradient-overlay absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
			<div className="container mx-auto px-4 py-16 relative z-10">
				<div className="max-w-xl">
					<FadeInStaggered className="" delay={500}>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
							Thiên đường cho thú cưng của bạn
						</h1>
					</FadeInStaggered>

					<FadeInStaggered className="" delay={500}>
						<p className="text-lg md:text-xl mb-8">
							Chúng tôi cung cấp dịch vụ chăm sóc chuyên nghiệp và đầy yêu
							thương cho người bạn bốn chân của bạn.
						</p>
					</FadeInStaggered>

					<div className="flex flex-col sm:flex-row gap-4">
						<FadeInStaggered direction="fade-right">
							<a
								href="#services"
								className="bg-primary text-white px-8 py-3 rounded-button font-medium hover:bg-opacity-90 transition-all text-center"
							>
								Khám phá dịch vụ
							</a>
						</FadeInStaggered>

						<FadeInStaggered direction="fade-left">
							<a
								href="#booking"
								className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-button font-medium hover:bg-primary hover:text-white transition-all text-center"
							>
								Đặt lịch ngay
							</a>
						</FadeInStaggered>
					</div>
				</div>
			</div>
		</section>
	);
}
