import FadeInStaggered from "@/components/custom/fade-in";
import React from "react";

const TestimonialsSection = () => {
	const testimonials = [
		{
			id: 1,
			name: "Nguyễn Thị Hương",
			rating: 5,
			image:
				"https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20Asian%20woman%20with%20shoulder-length%20black%20hair%2C%20smiling%20warmly%20at%20camera.%20Clean%2C%20simple%20background.%20Natural%20lighting%2C%20professional%20portrait&width=100&height=100&seq=13&orientation=squarish",
			review:
				"Dịch vụ spa tại Tea Mi Pet thực sự tuyệt vời. Bé cún nhà mình sau khi được tắm và cắt tỉa lông trông rất đáng yêu. Nhân viên rất tận tâm và chuyên nghiệp. Sẽ tiếp tục quay lại!",
		},
		{
			id: 2,
			name: "Trần Văn Minh",
			rating: 4.5,
			image:
				"https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20middle-aged%20Asian%20man%20with%20short%20black%20hair%20and%20glasses%2C%20smiling%20confidently%20at%20camera.%20Clean%2C%20simple%20background.%20Natural%20lighting%2C%20professional%20portrait&width=100&height=100&seq=14&orientation=squarish",
			review:
				"Đã sử dụng dịch vụ khách sạn của Tea Mi Pet khi đi công tác xa. Rất yên tâm vì có camera theo dõi 24/7 và nhân viên chăm sóc rất chu đáo. Mèo nhà mình được cho ăn đúng giờ và có không gian riêng thoải mái.",
		},
		{
			id: 3,
			name: "Lê Thị Mai Anh",
			rating: 5,
			image:
				"https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20Asian%20woman%20with%20long%20black%20hair%2C%20smiling%20warmly%20at%20camera.%20Clean%2C%20simple%20background.%20Natural%20lighting%2C%20professional%20portrait&width=100&height=100&seq=15&orientation=squarish",
			review:
				"Thức ăn và phụ kiện tại Tea Mi Pet rất đa dạng và chất lượng. Nhân viên tư vấn rất nhiệt tình giúp mình chọn được loại thức ăn phù hợp với bé mèo. Giá cả hợp lý và dịch vụ giao hàng nhanh chóng.",
		},
	];

	const StarRating = ({ rating }) => {
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;
		const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

		return (
			<div className="flex text-yellow-400">
				{/* Full stars */}
				{[...Array(fullStars)].map((_, index) => (
					<svg
						key={`full-${index}`}
						className="w-5 h-5 fill-current"
						viewBox="0 0 24 24"
					>
						<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
					</svg>
				))}

				{/* Half star */}
				{hasHalfStar && (
					<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
						<defs>
							<linearGradient id="half-star">
								<stop offset="50%" stopColor="currentColor" />
								<stop offset="50%" stopColor="transparent" />
							</linearGradient>
						</defs>
						<path
							fill="url(#half-star)"
							d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
						/>
					</svg>
				)}

				{/* Empty stars */}
				{[...Array(emptyStars)].map((_, index) => (
					<svg
						key={`empty-${index}`}
						className="w-5 h-5 text-gray-300"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
					</svg>
				))}
			</div>
		);
	};

	const TestimonialCard = ({ testimonial }) => (
		<div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105">
			<div className="flex items-center mb-4">
				<img
					src={testimonial.image}
					alt={testimonial.name}
					className="w-12 h-12 rounded-full object-cover object-top mr-4"
				/>
				<div>
					<h4 className="font-bold text-gray-900">{testimonial.name}</h4>
					<StarRating rating={testimonial.rating} />
				</div>
			</div>
			<p className="text-gray-600 leading-relaxed">"{testimonial.review}"</p>
		</div>
	);

	return (
		<section className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-16">
					<FadeInStaggered>
						<h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
							Khách Hàng Nói Gì
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Những đánh giá từ khách hàng đã sử dụng dịch vụ của Tea Mi Pet
							Store.
						</p>
					</FadeInStaggered>
					<div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
				</div>

				{/* Testimonials Grid */}
				<FadeInStaggered>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{testimonials.map((testimonial) => (
							<TestimonialCard key={testimonial.id} testimonial={testimonial} />
						))}
					</div>
				</FadeInStaggered>
			</div>
		</section>
	);
};

export default TestimonialsSection;
