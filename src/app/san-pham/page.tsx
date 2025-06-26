"use client";

import { useState } from "react";

export default function Products() {
	const [searchQuery, setSearchQuery] = useState("");
	const [activeCategory, setActiveCategory] = useState("all");

	// Danh sách sản phẩm nổi bật
	const featuredProducts = [
		{
			id: 1,
			name: "Thức ăn hạt Royal Canin cho chó",
			price: "350.000đ",
			originalPrice: "420.000đ",
			image:
				"https://readdy.ai/api/search-image?query=Premium%20dog%20food%20bag%20with%20royal%20canin%20logo%20on%20a%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high%20resolution%2C%20minimalist%20style%2C%20clear%20packaging%20details&width=300&height=300&seq=1&orientation=squarish",
		},
		{
			id: 2,
			name: "Vòng cổ thú cưng cao cấp",
			price: "120.000đ",
			originalPrice: "150.000đ",
			image:
				"https://readdy.ai/api/search-image?query=Elegant%20pet%20collar%20with%20metal%20buckle%20on%20a%20clean%20white%20background%2C%20premium%20quality%20leather%20material%2C%20detailed%20craftsmanship%2C%20minimalist%20product%20photography%2C%20high%20resolution&width=300&height=300&seq=2&orientation=squarish",
		},
		{
			id: 3,
			name: "Snack thưởng cho mèo vị cá ngừ",
			price: "85.000đ",
			originalPrice: "100.000đ",
			image:
				"https://readdy.ai/api/search-image?query=Cat%20treats%20package%20with%20tuna%20flavor%2C%20colorful%20packaging%20with%20cat%20image%2C%20on%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high%20resolution%2C%20clear%20packaging%20details&width=300&height=300&seq=3&orientation=squarish",
		},
		{
			id: 4,
			name: "Đồ chơi chuột giả cho mèo",
			price: "65.000đ",
			originalPrice: "80.000đ",
			image:
				"https://readdy.ai/api/search-image?query=Toy%20mouse%20for%20cats%20with%20realistic%20fur%20texture%2C%20on%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high%20resolution%2C%20showing%20details%20and%20materials&width=300&height=300&seq=4&orientation=squarish",
		},
		{
			id: 5,
			name: "Pate cao cấp cho chó vị thịt bò",
			price: "45.000đ",
			originalPrice: "55.000đ",
			image:
				"https://readdy.ai/api/search-image?query=Premium%20beef%20flavored%20dog%20pate%20in%20can%2C%20on%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high%20resolution%2C%20clear%20packaging%20details%20with%20beef%20imagery&width=300&height=300&seq=5&orientation=squarish",
		},
		{
			id: 6,
			name: "Bát ăn đôi cho thú cưng",
			price: "130.000đ",
			originalPrice: "160.000đ",
			image:
				"https://readdy.ai/api/search-image?query=Double%20pet%20food%20bowl%20with%20stainless%20steel%20inserts%20and%20non-slip%20base%2C%20on%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high%20resolution%2C%20showing%20practical%20design&width=300&height=300&seq=6&orientation=squarish",
		},
		{
			id: 7,
			name: "Xương gặm sạch răng cho chó",
			price: "75.000đ",
			originalPrice: "90.000đ",
			image:
				"https://readdy.ai/api/search-image?query=Dental%20chew%20bone%20for%20dogs%2C%20textured%20surface%20for%20teeth%20cleaning%2C%20on%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high%20resolution%2C%20showing%20texture%20details&width=300&height=300&seq=7&orientation=squarish",
		},
		{
			id: 8,
			name: "Lược chải lông cho thú cưng",
			price: "95.000đ",
			originalPrice: "120.000đ",
			image:
				"https://readdy.ai/api/search-image?query=Pet%20grooming%20brush%20with%20ergonomic%20handle%20and%20fine%20bristles%2C%20on%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high%20resolution%2C%20showing%20design%20details&width=300&height=300&seq=8&orientation=squarish",
		},
	];

	// Danh sách sản phẩm bán chạy
	const bestSellingProducts = [
		{
			id: 9,
			name: "Thức ăn hạt Whiskas cho mèo",
			price: "280.000đ",
			originalPrice: "320.000đ",
			image:
				"https://readdy.ai/api/search-image?query=Whiskas%20cat%20food%20bag%20with%20colorful%20packaging%20and%20cat%20image%2C%20on%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high%20resolution%2C%20clear%20packaging%20details&width=300&height=300&seq=9&orientation=squarish",
		},
		{
			id: 10,
			name: "Nhà vệ sinh cho mèo có mái che",
			price: "450.000đ",
			originalPrice: "520.000đ",
			image:
				"https://readdy.ai/api/search-image?query=Covered%20cat%20litter%20box%20with%20door%20flap%2C%20modern%20design%2C%20on%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high%20resolution%2C%20showing%20practical%20features&width=300&height=300&seq=10&orientation=squarish",
		},
		{
			id: 11,
			name: "Dây dắt chó có đệm tay cầm",
			price: "110.000đ",
			originalPrice: "135.000đ",
			image:
				"https://readdy.ai/api/search-image?query=Dog%20leash%20with%20padded%20handle%20and%20reflective%20stitching%2C%20durable%20nylon%20material%2C%20on%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high%20resolution&width=300&height=300&seq=11&orientation=squarish",
		},
		{
			id: 12,
			name: "Snack que cho chó vị thịt gà",
			price: "95.000đ",
			originalPrice: "115.000đ",
			image:
				"https://readdy.ai/api/search-image?query=Chicken%20flavored%20stick%20treats%20for%20dogs%20in%20packaging%2C%20on%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high%20resolution%2C%20clear%20packaging%20with%20chicken%20imagery&width=300&height=300&seq=12&orientation=squarish",
		},
	];

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Main Banner */}
			<div className="relative h-[500px] overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-transparent z-10"></div>
				<img
					src="https://readdy.ai/api/search-image?query=Adorable%20golden%20retriever%20puppy%20and%20tabby%20kitten%20playing%20together%20with%20pet%20toys%20and%20accessories%2C%20surrounded%20by%20premium%20pet%20food%20packages%2C%20bright%20and%20cheerful%20atmosphere%2C%20soft%20gradient%20background%20that%20transitions%20from%20light%20pink%20to%20white%2C%20professional%20pet%20photography&width=1440&height=500&seq=13&orientation=landscape"
					alt="Banner thú cưng"
					className="absolute inset-0 w-full h-full object-cover object-top"
				/>
				<div className="container mx-auto px-4 h-full relative z-20">
					<div className="flex flex-col justify-center h-full max-w-lg">
						<h2 className="text-4xl font-bold text-gray-800 mb-4">
							Chăm sóc thú cưng của bạn với những sản phẩm tốt nhất
						</h2>
						<p className="text-lg text-gray-700 mb-6">
							Khám phá bộ sưu tập đa dạng các sản phẩm chất lượng cao dành cho
							thú cưng yêu quý của bạn.
						</p>
						<button className="bg-primary text-white py-3 px-8 rounded-full font-medium hover:bg-pink-600 transition duration-300 ease-in-out shadow-lg !rounded-button cursor-pointer whitespace-nowrap w-fit">
							Mua ngay
						</button>
					</div>
				</div>
			</div>

			{/* Categories Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
						Danh mục sản phẩm
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Category 1 */}
						<div className="bg-gray-50 rounded-xl overflow-hidden shadow-md transition duration-300 ease-in-out hover:shadow-lg cursor-pointer">
							<div className="h-64 overflow-hidden">
								<img
									src="https://readdy.ai/api/search-image?query=Various%20premium%20pet%20food%20bags%20and%20cans%20arranged%20in%20an%20attractive%20display%2C%20high%20quality%20dog%20and%20cat%20food%20products%20with%20nutritional%20information%20visible%2C%20clean%20white%20background%20with%20soft%20shadows%2C%20professional%20product%20photography&width=400&height=300&seq=14&orientation=landscape"
									alt="Thức ăn thú cưng"
									className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-800 mb-2">
									Thức ăn
								</h3>
								<p className="text-gray-600 mb-4">
									Thức ăn chất lượng cao, đầy đủ dinh dưỡng cho thú cưng của
									bạn.
								</p>
								<button className="text-primary font-medium flex items-center cursor-pointer whitespace-nowrap">
									Xem thêm <i className="fas fa-arrow-right ml-2"></i>
								</button>
							</div>
						</div>

						{/* Category 2 */}
						<div className="bg-gray-50 rounded-xl overflow-hidden shadow-md transition duration-300 ease-in-out hover:shadow-lg cursor-pointer">
							<div className="h-64 overflow-hidden">
								<img
									src="https://readdy.ai/api/search-image?query=Collection%20of%20stylish%20pet%20accessories%20including%20collars%2C%20leashes%2C%20bowls%2C%20and%20grooming%20tools%20arranged%20aesthetically%2C%20premium%20quality%20materials%20with%20modern%20design%2C%20clean%20white%20background%20with%20soft%20shadows%2C%20professional%20product%20photography&width=400&height=300&seq=15&orientation=landscape"
									alt="Phụ kiện thú cưng"
									className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-800 mb-2">
									Phụ kiện
								</h3>
								<p className="text-gray-600 mb-4">
									Đa dạng phụ kiện thời trang và tiện ích cho thú cưng.
								</p>
								<button className="text-primary font-medium flex items-center cursor-pointer whitespace-nowrap">
									Xem thêm <i className="fas fa-arrow-right ml-2"></i>
								</button>
							</div>
						</div>

						{/* Category 3 */}
						<div className="bg-gray-50 rounded-xl overflow-hidden shadow-md transition duration-300 ease-in-out hover:shadow-lg cursor-pointer">
							<div className="h-64 overflow-hidden">
								<img
									src="https://readdy.ai/api/search-image?query=Variety%20of%20pet%20treats%20and%20snacks%20in%20colorful%20packaging%2C%20including%20dental%20chews%2C%20jerky%20treats%2C%20and%20biscuits%20for%20dogs%20and%20cats%2C%20appetizing%20presentation%2C%20clean%20white%20background%20with%20soft%20shadows%2C%20professional%20product%20photography&width=400&height=300&seq=16&orientation=landscape"
									alt="Snack thú cưng"
									className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-800 mb-2">Snack</h3>
								<p className="text-gray-600 mb-4">
									Các loại bánh thưởng, snack thơm ngon cho thú cưng.
								</p>
								<button className="text-primary font-medium flex items-center cursor-pointer whitespace-nowrap">
									Xem thêm <i className="fas fa-arrow-right ml-2"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Products */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="flex justify-between items-center mb-12">
						<h2 className="text-3xl font-bold text-gray-800">
							Sản phẩm nổi bật
						</h2>
						<div className="flex space-x-4">
							<button className="bg-white text-gray-800 border border-gray-300 rounded-full py-2 px-6 hover:bg-gray-100 transition duration-300 ease-in-out !rounded-button cursor-pointer whitespace-nowrap">
								<i className="fas fa-filter mr-2"></i> Lọc
							</button>
							<button className="bg-white text-gray-800 border border-gray-300 rounded-full py-2 px-6 hover:bg-gray-100 transition duration-300 ease-in-out !rounded-button cursor-pointer whitespace-nowrap">
								<i className="fas fa-sort mr-2"></i> Sắp xếp
							</button>
						</div>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
						{featuredProducts.map((product) => (
							<div
								key={product.id}
								className="bg-white rounded-xl overflow-hidden shadow-md transition duration-300 ease-in-out hover:shadow-lg"
							>
								<div className="relative h-64 overflow-hidden">
									<img
										src={product.image}
										alt={product.name}
										className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 h-14">
										{product.name}
									</h3>
									<div className="flex items-center mb-4">
										<div className="text-yellow-400 flex mr-2">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star-half-alt"></i>
										</div>
										<span className="text-gray-500 text-sm">(4.5)</span>
									</div>
									<div className="flex items-center justify-between">
										<div>
											<span className="text-lg font-bold text-primary">
												{product.price}
											</span>
											<span className="text-sm text-gray-500 line-through ml-2">
												{product.originalPrice}
											</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="flex justify-center mt-12">
						<button className="bg-primary text-white py-3 px-8 rounded-full font-medium hover:bg-orange-600 transition duration-300 ease-in-out shadow-md !rounded-button cursor-pointer whitespace-nowrap">
							Xem tất cả sản phẩm
						</button>
					</div>
				</div>
			</section>

			{/* Promotion Banner */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="relative rounded-2xl overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50 z-10"></div>
						<img
							src="https://readdy.ai/api/search-image?query=Happy%20dog%20and%20cat%20playing%20with%20toys%2C%20surrounded%20by%20pet%20care%20products%2C%20vibrant%20and%20colorful%20scene%20with%20pet%20accessories%2C%20clean%20modern%20background%20with%20soft%20pink%20gradient%2C%20professional%20pet%20photography%20with%20high%20contrast%20and%20vivid%20colors&width=1200&height=400&seq=17&orientation=landscape"
							alt="Khuyến mãi đặc biệt"
							className="w-full h-80 object-cover object-top"
						/>
						<div className="absolute inset-0 z-20 flex items-center">
							<div className="container mx-auto px-4">
								<div className="max-w-lg">
									<h2 className="text-3xl font-bold text-white mb-4">
										Khuyến mãi đặc biệt
									</h2>
									<p className="text-white text-lg mb-6">
										Giảm giá lên đến 30% cho tất cả các sản phẩm thú cưng. Chỉ
										áp dụng đến hết ngày 30/06/2025!
									</p>
									<button className="bg-white text-primary py-3 px-8 rounded-full font-medium hover:bg-gray-100 transition duration-300 ease-in-out shadow-lg !rounded-button cursor-pointer whitespace-nowrap">
										Mua ngay
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Best Selling Products */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-gray-800 mb-12">
						Sản phẩm bán chạy
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
						{bestSellingProducts.map((product) => (
							<div
								key={product.id}
								className="bg-white rounded-xl overflow-hidden shadow-md transition duration-300 ease-in-out hover:shadow-lg"
							>
								<div className="relative h-64 overflow-hidden">
									<img
										src={product.image}
										alt={product.name}
										className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105"
									/>
									<div className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
										Bán chạy
									</div>
								</div>
								<div className="p-6">
									<h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 h-14">
										{product.name}
									</h3>
									<div className="flex items-center mb-4">
										<div className="text-yellow-400 flex mr-2">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
										</div>
										<span className="text-gray-500 text-sm">(5.0)</span>
									</div>
									<div className="flex items-center justify-between">
										<div>
											<span className="text-lg font-bold text-primary">
												{product.price}
											</span>
											<span className="text-sm text-gray-500 line-through ml-2">
												{product.originalPrice}
											</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
