import { FaArrowsToEye } from "react-icons/fa6";
import { FaStar, FaHeart, FaMedal, FaBath } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
export default function AboutUs() {
	return (
		<>
			<section
				className="relative h-[600px] bg-cover bg-center"
				style={{
					backgroundImage: `url(https://readdy.ai/api/search-image?query=modern%20luxurious%20pet%20store%20interior%20with%20warm%20lighting%2C%20glass%20walls%2C%20wooden%20elements%2C%20and%20minimal%20design.%20The%20space%20features%20elegant%20display%20areas%20for%20pet%20products%20and%20a%20welcoming%20atmosphere%20with%20soft%20pastel%20colors&width=1440&height=600&seq=1&orientation=landscape)`,
				}}
			>
				<div className="absolute inset-0 bg-black bg-opacity-50"></div>
				<div className="container mx-auto px-6 relative h-full flex items-center">
					<div className="text-white max-w-2xl">
						<h1 className="text-5xl font-bold mb-6">
							Giới thiệu về Tea Mi Pet Store
						</h1>
						<p className="text-xl leading-relaxed">
							Tea Mi Pet Store là cửa hàng thú cưng hiện đại và thân thiện,
							chuyên cung cấp các dịch vụ chăm sóc thú cưng cao cấp. Chúng tôi
							cam kết mang đến trải nghiệm tốt nhất cho thú cưng của bạn.
						</p>
					</div>
				</div>
			</section>
			{/* Vision Mission Values Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-6">
					<div className="grid md:grid-cols-3 gap-8">
						{/* Vision Card */}
						<div className="bg-[#D4F0E2] rounded-lg p-8 transform hover:scale-105 transition-transform duration-300 shadow-lg">
							<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
								<FaArrowsToEye />
							</div>
							<h3 className="text-2xl font-bold mb-4">Tầm nhìn</h3>
							<p className="text-gray-700">
								Trở thành cửa hàng thú cưng uy tín hàng đầu Quận 7, mang đến
								dịch vụ chất lượng cao và trải nghiệm tuyệt vời cho thú cưng của
								bạn
							</p>
						</div>
						{/* Mission Card */}
						<div className="bg-[#FFE5D9] rounded-lg p-8 transform hover:scale-105 transition-transform duration-300 shadow-lg">
							<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
								<FaStar />
							</div>
							<h3 className="text-2xl font-bold mb-4">Sứ mệnh</h3>
							<p className="text-gray-700">
								Sứ mệnh của Tea Mi Pet là tạo ra một không gian an toàn, thoải
								mái và vui vẻ cho thú cưng, nơi các bé được chăm sóc như thành
								viên trong gia đình.
							</p>
						</div>
						{/* Values Card */}
						<div className="bg-[#D4F0E2] rounded-lg p-8 transform hover:scale-105 transition-transform duration-300 shadow-lg">
							<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
								<FaHeart />
							</div>
							<h3 className="text-2xl font-bold mb-4">Giá trị cốt lõi</h3>
							<p className="text-gray-700">
								Tận tâm – Chuyên nghiệp – An toàn – Thấu hiểu
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* Why Choose Us Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold text-center mb-12">
						Tại sao chọn Tea Mi Pet Store?
					</h2>
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="relative h-[500px]">
							<img
								src="https://readdy.ai/api/search-image?query=professional%20pet%20care%20specialist%20interacting%20with%20happy%20dogs%20in%20a%20modern%20luxurious%20facility%2C%20showing%20genuine%20care%20and%20attention%2C%20warm%20lighting%20and%20high%20end%20equipment%20visible%20in%20background&width=600&height=500&seq=5&orientation=portrait"
								alt="Professional Pet Care"
								className="w-full h-full object-cover rounded-lg shadow-xl"
							/>
						</div>
						<div className="space-y-8">
							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-[#FFE5D9] rounded-full flex items-center justify-center flex-shrink-0">
									<FaMedal />
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Professional Pet Care
									</h3>
									<p className="text-gray-600">
										Đội ngũ nhân viên được đào tạo chuyên nghiệp, có nhiều năm
										kinh nghiệm trong lĩnh vực chăm sóc thú cưng.
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-[#D4F0E2] rounded-full flex items-center justify-center flex-shrink-0">
									<FaHeart />
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Chăm sóc tận tâm
									</h3>
									<p className="text-gray-600">
										Xem thú cưng của khách như con mình, đảm bảo sự thoải mái và
										an toàn tuyệt đối. Giá cả hợp lý Giá TỐT NHẤT trong khu vực
										quận 7.
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-[#FFE5D9] rounded-full flex items-center justify-center flex-shrink-0">
									<FaStar />
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">Giá cả hợp lý</h3>
									<p className="text-gray-600">
										Giá TỐT NHẤT trong khu vực quận 7.
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-[#D4F0E2] rounded-full flex items-center justify-center flex-shrink-0">
									<MdOutlineLocalShipping />
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Miễn phí đưa đón
									</h3>
									<p className="text-gray-600">
										Miễn phí đưa đón trong bán kính 3km.
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-[#D4F0E2] rounded-full flex items-center justify-center flex-shrink-0">
									<FaBath />
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Dịch vụ Spa Grooming
									</h3>
									<p className="text-gray-600">Spa tắm vệ sinh 12 bước</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Gallery Section */}
			<section className="py-20 bg-[#FFF8F5]">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold text-center mb-12">
						Không gian Tea Mi Pet Store
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="rounded-lg overflow-hidden shadow-lg">
							<img
								src="https://readdy.ai/api/search-image?query=modern%20pet%20grooming%20service%20with%20professional%20groomer%20working%20on%20a%20small%20dog%20in%20a%20luxurious%20salon%20setting%20with%20high%20end%20equipment%20and%20warm%20lighting&width=400&height=300&seq=2&orientation=landscape"
								alt="Pet Grooming"
								className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
							/>
							<div className="p-4 bg-white">
								<h3 className="font-semibold text-lg mb-2">Dịch vụ Spa</h3>
								<p className="text-gray-600">
									Chăm sóc và làm đẹp chuyên nghiệp
								</p>
							</div>
						</div>
						<div className="rounded-lg overflow-hidden shadow-lg">
							<img
								src="https://readdy.ai/api/search-image?query=luxury%20pet%20hotel%20room%20interior%20with%20comfortable%20bed%2C%20toys%2C%20and%20modern%20amenities%2C%20featuring%20warm%20lighting%20and%20pastel%20color%20scheme&width=400&height=300&seq=3&orientation=landscape"
								alt="Pet Hotel"
								className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
							/>
							<div className="p-4 bg-white">
								<h3 className="font-semibold text-lg mb-2">
									Khách sạn thú cưng
								</h3>
								<p className="text-gray-600">Không gian thoải mái, an toàn</p>
							</div>
						</div>
						<div className="rounded-lg overflow-hidden shadow-lg">
							<img
								src="https://readdy.ai/api/search-image?query=premium%20pet%20store%20interior%20with%20high%20end%20products%20display%2C%20featuring%20natural%20wood%20shelving%2C%20ambient%20lighting%2C%20and%20modern%20design%20elements&width=400&height=300&seq=4&orientation=landscape"
								alt="Pet Store"
								className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
							/>
							<div className="p-4 bg-white">
								<h3 className="font-semibold text-lg mb-2">Cửa hàng</h3>
								<p className="text-gray-600">Sản phẩm chất lượng cao</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
