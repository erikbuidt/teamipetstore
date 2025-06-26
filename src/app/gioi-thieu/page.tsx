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
							Giới thiệu về Pet Paradise
						</h1>
						<p className="text-xl leading-relaxed">
							Pet Paradise là cửa hàng thú cưng hiện đại và thân thiện, chuyên
							cung cấp các dịch vụ chăm sóc thú cưng cao cấp. Chúng tôi cam kết
							mang đến trải nghiệm tốt nhất cho thú cưng của bạn.
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
								<i className="fas fa-eye text-2xl text-[#FF9776]"></i>
							</div>
							<h3 className="text-2xl font-bold mb-4">Tầm nhìn</h3>
							<p className="text-gray-700">
								Trở thành chuỗi cửa hàng thú cưng hàng đầu Việt Nam, mang đến
								dịch vụ chất lượng cao và trải nghiệm tuyệt vời.
							</p>
						</div>
						{/* Mission Card */}
						<div className="bg-[#FFE5D9] rounded-lg p-8 transform hover:scale-105 transition-transform duration-300 shadow-lg">
							<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
								<i className="fas fa-star text-2xl text-[#FF9776]"></i>
							</div>
							<h3 className="text-2xl font-bold mb-4">Sứ mệnh</h3>
							<p className="text-gray-700">
								Cung cấp dịch vụ Spa, thức ăn, phụ kiện, khách sạn thú cưng chất
								lượng cao, đảm bảo sự hài lòng tuyệt đối.
							</p>
						</div>
						{/* Values Card */}
						<div className="bg-[#D4F0E2] rounded-lg p-8 transform hover:scale-105 transition-transform duration-300 shadow-lg">
							<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
								<i className="fas fa-heart text-2xl text-[#FF9776]"></i>
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
						Tại sao chọn Pet Paradise?
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
									<i className="fas fa-medal text-[#FF9776] text-xl"></i>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">Chuyên môn cao</h3>
									<p className="text-gray-600">
										Đội ngũ nhân viên được đào tạo chuyên nghiệp, có nhiều năm
										kinh nghiệm trong lĩnh vực chăm sóc thú cưng.
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-[#D4F0E2] rounded-full flex items-center justify-center flex-shrink-0">
									<i className="fas fa-heart text-[#FF9776] text-xl"></i>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Chăm sóc tận tâm
									</h3>
									<p className="text-gray-600">
										Chúng tôi đối xử với thú cưng của bạn như thành viên trong
										gia đình, đảm bảo sự thoải mái và an toàn tuyệt đối.
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-[#FFE5D9] rounded-full flex items-center justify-center flex-shrink-0">
									<i className="fas fa-star text-[#FF9776] text-xl"></i>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Dịch vụ cao cấp
									</h3>
									<p className="text-gray-600">
										Cung cấp đầy đủ các dịch vụ từ spa, khách sạn đến các sản
										phẩm chất lượng cao dành cho thú cưng.
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-[#D4F0E2] rounded-full flex items-center justify-center flex-shrink-0">
									<i className="fas fa-clock text-[#FF9776] text-xl"></i>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">Phục vụ 24/7</h3>
									<p className="text-gray-600">
										Luôn sẵn sàng phục vụ mọi lúc mọi nơi, đáp ứng mọi nhu cầu
										chăm sóc thú cưng của bạn.
									</p>
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
						Không gian Pet Paradise
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
