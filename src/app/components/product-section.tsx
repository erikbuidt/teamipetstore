"use client";

import FadeInStaggered from "@/components/custom/fade-in";
import { useState } from "react";

const PetProductsSection = () => {
	const [activeFilter, setActiveFilter] = useState("all");

	const products = [
		{
			id: 1,
			name: "Royal Canin Medium Adult",
			category: "food",
			petType: "Chó",
			petTypeColor: "primary",
			description: "Thức ăn hạt khô cho chó trưởng thành giống vừa, 10kg",
			price: "1.250.000đ",
			image:
				"https://readdy.ai/api/search-image?query=Premium%20dog%20food%20package%20by%20Royal%20Canin%20on%20clean%20white%20background.%20Professional%20product%20photography%20with%20clear%20branding.%20High-quality%20packaging%20design.%20Nutritious%20dry%20dog%20food%20visible.%20Clean%2C%20commercial%20product%20shot%20with%20soft%20shadows&width=500&height=400&seq=5&orientation=landscape",
		},
		{
			id: 2,
			name: "Whiskas Adult",
			category: "food",
			petType: "Mèo",
			petTypeColor: "secondary",
			description: "Thức ăn hạt khô cho mèo trưởng thành, vị cá biển, 7kg",
			price: "850.000đ",
			image:
				"https://readdy.ai/api/search-image?query=Premium%20cat%20food%20package%20by%20Whiskas%20on%20clean%20white%20background.%20Professional%20product%20photography%20with%20clear%20branding.%20High-quality%20packaging%20design.%20Nutritious%20dry%20cat%20food%20visible.%20Clean%2C%20commercial%20product%20shot%20with%20soft%20shadows&width=500&height=400&seq=6&orientation=landscape",
		},
		{
			id: 3,
			name: "Vòng cổ da cao cấp",
			category: "accessories",
			petType: "Chó",
			petTypeColor: "primary",
			description: "Vòng cổ da thật, khóa kim loại cao cấp, size M",
			price: "450.000đ",
			image:
				"https://readdy.ai/api/search-image?query=Stylish%20pet%20collar%20on%20clean%20white%20background.%20Professional%20product%20photography.%20Premium%20leather%20dog%20collar%20with%20metal%20buckle.%20High-quality%20craftsmanship%20visible.%20Clean%2C%20commercial%20product%20shot%20with%20soft%20shadows&width=500&height=400&seq=7&orientation=landscape",
		},
		{
			id: 4,
			name: "Ổ nằm mèo",
			category: "accessories",
			petType: "Mèo",
			petTypeColor: "secondary",
			description: "Ổ nằm mềm mại, chất liệu nhung cao cấp, size M",
			price: "550.000đ",
			image:
				"https://readdy.ai/api/search-image?query=Comfortable%20pet%20bed%20on%20clean%20white%20background.%20Professional%20product%20photography.%20Soft%2C%20plush%20cat%20bed%20in%20pastel%20color.%20High-quality%20fabric%20visible.%20Clean%2C%20commercial%20product%20shot%20with%20soft%20shadows&width=500&height=400&seq=8&orientation=landscape",
		},
		{
			id: 5,
			name: "Hill's Puppy",
			category: "food",
			petType: "Chó",
			petTypeColor: "primary",
			description: "Thức ăn hạt khô cho chó con, giàu canxi, 5kg",
			price: "950.000đ",
			image:
				"https://readdy.ai/api/search-image?query=Premium%20puppy%20food%20package%20by%20Hills%20on%20clean%20white%20background.%20Professional%20product%20photography%20with%20clear%20branding.%20High-quality%20packaging%20design.%20Nutritious%20dry%20puppy%20food%20visible.%20Clean%2C%20commercial%20product%20shot%20with%20soft%20shadows&width=500&height=400&seq=9&orientation=landscape",
		},
		{
			id: 6,
			name: "Kong Classic",
			category: "accessories",
			petType: "Chó",
			petTypeColor: "primary",
			description: "Đồ chơi cao su bền chắc, size L",
			price: "350.000đ",
			image:
				"https://readdy.ai/api/search-image?query=Durable%20dog%20toy%20on%20clean%20white%20background.%20Professional%20product%20photography.%20Kong%20rubber%20toy%20in%20red%20color.%20High-quality%20material%20visible.%20Clean%2C%20commercial%20product%20shot%20with%20soft%20shadows&width=500&height=400&seq=10&orientation=landscape",
		},
		{
			id: 7,
			name: "Royal Canin Kitten",
			category: "food",
			petType: "Mèo",
			petTypeColor: "secondary",
			description: "Thức ăn hạt khô cho mèo con dưới 12 tháng tuổi, 4kg",
			price: "750.000đ",
			image:
				"https://readdy.ai/api/search-image?query=Premium%20kitten%20food%20package%20by%20Royal%20Canin%20on%20clean%20white%20background.%20Professional%20product%20photography%20with%20clear%20branding.%20High-quality%20packaging%20design.%20Nutritious%20dry%20kitten%20food%20visible.%20Clean%2C%20commercial%20product%20shot%20with%20soft%20shadows&width=500&height=400&seq=11&orientation=landscape",
		},
		{
			id: 8,
			name: "Áo len cho chó",
			category: "accessories",
			petType: "Chó",
			petTypeColor: "primary",
			description: "Áo len giữ ấm mùa đông, chất liệu mềm mại, size S",
			price: "280.000đ",
			image:
				"https://readdy.ai/api/search-image?query=Stylish%20pet%20clothing%20on%20clean%20white%20background.%20Professional%20product%20photography.%20Cute%20dog%20sweater%20in%20pastel%20color.%20High-quality%20fabric%20visible.%20Clean%2C%20commercial%20product%20shot%20with%20soft%20shadows&width=500&height=400&seq=12&orientation=landscape",
		},
	];

	const brands = [
		"Royal Canin",
		"SmartHeart",
		"Pedigree",
		"Whiskas",
		"Hill's",
		"Kong",
	];

	const filteredProducts = products.filter((product) => {
		if (activeFilter === "all") return true;
		return product.category === activeFilter;
	});

	const handleAddToCart = (productId) => {
		// Add your cart logic here
		console.log(`Added product ${productId} to cart`);
	};

	const FilterButton = ({ filter, label, isActive, onClick }) => (
		<button
			onClick={onClick}
			className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
				isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-200"
			}`}
		>
			{label}
		</button>
	);

	const ProductCard = ({ product }) => (
		<div className="bg-white rounded-lg shadow-md overflow-hidden">
			<img
				src={product.image}
				alt={product.name}
				className="w-full h-56 object-cover object-top"
			/>
			<div className="p-4">
				<div className="flex justify-between items-start mb-2">
					<h3 className="font-bold text-gray-900">{product.name}</h3>
					<span
						className={`text-xs font-medium px-2 py-1 rounded ${
							product.petTypeColor === "primary"
								? "bg-blue-100 text-blue-800"
								: "bg-purple-100 text-purple-800"
						}`}
					>
						{product.petType}
					</span>
				</div>
				<p className="text-gray-600 text-sm mb-4">{product.description}</p>
				<div className="flex justify-between items-center">
					<span className="font-bold text-blue-600 text-lg">
						{product.price}
					</span>
					<button
						onClick={() => handleAddToCart(product.id)}
						className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all"
						aria-label={`Add ${product.name} to cart`}
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.8 3.2M7 13l2.7-3.8M16 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);

	return (
		<section id="products" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-16">
					<FadeInStaggered>
						<h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
							Thức Ăn & Phụ Kiện
						</h2>
					</FadeInStaggered>
					<FadeInStaggered>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Chúng tôi cung cấp các sản phẩm chất lượng cao từ các thương hiệu
							uy tín trên thế giới.
						</p>
						<div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
					</FadeInStaggered>
				</div>

				{/* Brands Section */}
				<div className="mb-16">
					<FadeInStaggered>
						<h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
							Thương Hiệu Đối Tác
						</h3>
					</FadeInStaggered>
					<FadeInStaggered>
						<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
							{brands.map((brand, index) => (
								<div
									key={index}
									className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-center hover:shadow-md transition-shadow"
								>
									<span className="font-bold text-gray-700">{brand}</span>
								</div>
							))}
						</div>
					</FadeInStaggered>
				</div>

				{/* Product Categories */}
				<div>
					{/* Filter Buttons */}
					<div className="flex justify-center mb-8">
						<FadeInStaggered>
							<div className="inline-flex bg-gray-100 rounded-full p-1">
								<FilterButton
									filter="all"
									label="Tất cả"
									isActive={activeFilter === "all"}
									onClick={() => setActiveFilter("all")}
								/>
								<FilterButton
									filter="food"
									label="Thức ăn"
									isActive={activeFilter === "food"}
									onClick={() => setActiveFilter("food")}
								/>
								<FilterButton
									filter="accessories"
									label="Phụ kiện"
									isActive={activeFilter === "accessories"}
									onClick={() => setActiveFilter("accessories")}
								/>
							</div>
						</FadeInStaggered>
					</div>

					{/* Products Grid */}
					<FadeInStaggered>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{filteredProducts.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					</FadeInStaggered>
				</div>
			</div>
		</section>
	);
};

export default PetProductsSection;
