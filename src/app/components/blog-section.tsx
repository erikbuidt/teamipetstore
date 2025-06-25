import FadeInStaggered from "@/components/custom/fade-in";
import Image from "next/image";
import Link from "next/link";

const PetKnowledgeBlog = () => {
	const blogPosts = [
		{
			id: 1,
			image:
				"https://readdy.ai/api/search-image?query=A%20person%20grooming%20a%20small%20dog.%20Professional%20pet%20grooming%20session%20with%20tools%20visible.%20Clean%2C%20bright%20environment.%20Focus%20on%20proper%20technique.%20Educational%20image%20showing%20pet%20care.%20Natural%20lighting&width=600&height=400&seq=16&orientation=landscape",
			alt: "Cách chăm sóc lông cho chó",
			category: "Chăm sóc",
			categoryStyle: "bg-primary bg-opacity-10 text-white",
			date: "25/06/2025",
			title: "5 Bước chăm sóc lông cho chó tại nhà đúng cách",
			description:
				"Hướng dẫn chi tiết cách chăm sóc lông cho chó tại nhà đảm bảo lông luôn mềm mượt và sạch sẽ.",
			link: "https://readdy.ai/home/19ecda16-b980-4952-beb3-cd8e038b7512/d2607ce0-c3fb-4701-b280-d951303f35d5",
		},
		{
			id: 2,
			image:
				"https://readdy.ai/api/search-image?query=A%20variety%20of%20healthy%20pet%20food%20options%20arranged%20neatly.%20Different%20types%20of%20premium%20dog%20and%20cat%20food.%20Educational%20image%20about%20pet%20nutrition.%20Clean%2C%20bright%20product%20photography.%20Focus%20on%20healthy%20ingredients&width=600&height=400&seq=17&orientation=landscape",
			alt: "Dinh dưỡng cho thú cưng",
			category: "Dinh dưỡng",
			categoryStyle: "bg-secondary bg-opacity-10 text-secondary",
			date: "22/06/2025",
			title: "Dinh dưỡng cân bằng cho thú cưng theo từng giai đoạn",
			description:
				"Tìm hiểu về nhu cầu dinh dưỡng của thú cưng ở các giai đoạn khác nhau và cách xây dựng chế độ ăn hợp lý.",
			link: "https://readdy.ai/home/19ecda16-b980-4952-beb3-cd8e038b7512/d2607ce0-c3fb-4701-b280-d951303f35d5",
		},
		{
			id: 3,
			image:
				"https://readdy.ai/api/search-image?query=A%20person%20playing%20with%20a%20cat%20using%20interactive%20toys.%20Educational%20image%20showing%20proper%20pet%20enrichment.%20Clean%2C%20bright%20home%20environment.%20Focus%20on%20pet-owner%20bonding.%20Natural%20lighting&width=600&height=400&seq=18&orientation=landscape",
			alt: "Hoạt động cho mèo",
			category: "Hoạt động",
			categoryStyle: "bg-primary bg-opacity-10 text-white",
			date: "18/06/2025",
			title: "10 Hoạt động giúp mèo vận động và phát triển trí tuệ",
			description:
				"Khám phá các hoạt động thú vị giúp mèo vận động, giảm stress và phát triển trí tuệ tốt hơn.",
			link: "https://readdy.ai/home/19ecda16-b980-4952-beb3-cd8e038b7512/d2607ce0-c3fb-4701-b280-d951303f35d5",
		},
	];

	return (
		<section id="blog" className="py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<FadeInStaggered>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Kiến Thức Thú Cưng
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Cập nhật những kiến thức hữu ích về chăm sóc và nuôi dưỡng thú
							cưng.
						</p>

						<div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
					</FadeInStaggered>
				</div>
				<FadeInStaggered>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogPosts.map((post) => (
							<div
								key={post.id}
								className="bg-white rounded-lg shadow-md overflow-hidden"
							>
								<div className="relative w-full">
									<img
										src={post.image}
										alt={post.alt}
										className="object-cover object-top"
									/>
								</div>

								<div className="p-6">
									<div className="flex items-center mb-4">
										<span
											className={`${post.categoryStyle} text-xs font-medium px-3 py-1 rounded-full mr-2`}
										>
											{post.category}
										</span>
										<span className="text-gray-500 text-sm">{post.date}</span>
									</div>

									<h3 className="font-bold text-xl mb-2">{post.title}</h3>

									<p className="text-gray-600 mb-4">{post.description}</p>

									<Link
										href={post.link}
										className="text-primary font-medium flex items-center hover:underline"
									>
										Đọc thêm
										<i className="ri-arrow-right-line ml-1"></i>
									</Link>
								</div>
							</div>
						))}
					</div>
				</FadeInStaggered>
				<FadeInStaggered>
					<div className="text-center mt-12">
						<Link
							href="#"
							className="inline-block bg-white text-primary border-2 border-primary px-8 py-3 rounded-button font-medium hover:bg-primary hover:text-white transition-all whitespace-nowrap"
						>
							Xem tất cả bài viết
						</Link>
					</div>
				</FadeInStaggered>
			</div>
		</section>
	);
};

export default PetKnowledgeBlog;
