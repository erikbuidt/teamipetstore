import FadeInStaggered from "@/components/custom/fade-in";
import { RiCameraLine, RiCalendarLine } from "react-icons/ri";
export default function SpaHotelSection() {
	return (
		<section className="py-20 bg-secondary bg-opacity-10">
			<div className="container mx-auto px-4">
				<div className="flex flex-col lg:flex-row gap-12">
					{/* Spa Section */}
					<div className="lg:w-1/2">
						<FadeInStaggered>
							<h2 className="text-3xl font-bold mb-6">Dịch Vụ Spa</h2>
							<p className="text-gray-600 mb-8">
								Mang đến trải nghiệm spa cao cấp cho thú cưng của bạn với các
								dịch vụ chăm sóc toàn diện từ các chuyên viên giàu kinh nghiệm.
							</p>
							<div className="bg-white rounded-lg shadow-md p-6 mb-6">
								<img
									src="https://readdy.ai/api/search-image?query=Professional%20dog%20grooming%20session%20in%20a%20modern%20pet%20salon.%20A%20small%20white%20fluffy%20dog%20being%20bathed%20with%20premium%20shampoo.%20Gentle%20handling%20by%20professional%20groomer%20wearing%20uniform.%20Clean%2C%20bright%20environment%20with%20pastel%20color%20scheme.%20High-end%20grooming%20equipment%20visible.%20Warm%2C%20caring%20atmosphere&width=800&height=500&seq=3&orientation=landscape"
									alt="Dịch vụ spa thú cưng"
									className="w-full h-64 object-cover object-top rounded-lg mb-6"
								/>
								<div className="space-y-4">
									{[
										["Tắm gội cơ bản", "200.000đ - 450.000đ"],
										["Cắt tỉa lông", "250.000đ - 550.000đ"],
										["Spa toàn diện", "450.000đ - 850.000đ"],
										["Chăm sóc móng", "100.000đ - 200.000đ"],
										["Massage thư giãn", "150.000đ - 300.000đ"],
									].map(([title, price], idx) => (
										<div
											key={idx}
											className={`flex justify-between items-center ${
												idx < 4 ? "pb-2 border-b border-gray-100" : ""
											}`}
										>
											<span className="font-medium">{title}</span>
											<span className="text-primary font-bold">{price}</span>
										</div>
									))}
								</div>
							</div>
							<a
								href="#booking"
								className="inline-block bg-primary text-white px-8 py-3 rounded-button font-medium hover:bg-opacity-90 transition-all whitespace-nowrap"
							>
								Đặt lịch spa
							</a>
						</FadeInStaggered>
					</div>
					{/* Hotel Section */}
					<div className="lg:w-1/2 mt-12 lg:mt-0">
						<FadeInStaggered delay={200}>
							<h2 className="text-3xl font-bold mb-6">Khách Sạn Thú Cưng</h2>
							<p className="text-gray-600 mb-8">
								Dịch vụ lưu trú cao cấp với phòng riêng, camera giám sát 24/7 và
								chế độ chăm sóc đặc biệt cho thú cưng khi bạn vắng nhà.
							</p>
							<div className="bg-white rounded-lg shadow-md p-6 mb-6">
								<img
									src="https://readdy.ai/api/search-image?query=Modern%20pet%20hotel%20interior%20with%20individual%20comfortable%20pet%20rooms.%20Clean%2C%20spacious%20environment%20with%20soft%20bedding.%20Monitoring%20cameras%20visible.%20Bright%2C%20cheerful%20decor%20with%20pastel%20colors.%20Professional%20staff%20caring%20for%20pets.%20High-quality%20play%20area%20visible.%20Premium%20pet%20care%20facility%20with%20natural%20light&width=800&height=500&seq=4&orientation=landscape"
									alt="Khách sạn thú cưng"
									className="w-full h-64 object-cover object-top rounded-lg mb-6"
								/>
								<div className="space-y-4">
									<div className="flex justify-between items-center pb-2 border-b border-gray-100">
										<div>
											<span className="font-medium">Phòng tiêu chuẩn</span>
											<div className="flex items-center text-xs text-gray-500 mt-1">
												<RiCameraLine className="mr-1" />
												<span>Camera giám sát 24/7</span>
											</div>
										</div>
										<span className="text-primary font-bold">
											300.000đ/ngày
										</span>
									</div>
									<div className="flex justify-between items-center pb-2 border-b border-gray-100">
										<div>
											<span className="font-medium">Phòng VIP</span>
											<div className="flex items-center text-xs text-gray-500 mt-1">
												<RiCameraLine className="mr-1" />
												<span>Camera giám sát 24/7 + Không gian rộng</span>
											</div>
										</div>
										<span className="text-primary font-bold">
											500.000đ/ngày
										</span>
									</div>
									<div className="flex justify-between items-center pb-2 border-b border-gray-100">
										<div>
											<span className="font-medium">Gói tuần</span>
											<div className="flex items-center text-xs text-gray-500 mt-1">
												<RiCalendarLine className="mr-1" />
												<span>Giảm 10% cho lưu trú 7 ngày</span>
											</div>
										</div>
										<span className="text-primary font-bold">Giảm 10%</span>
									</div>
									<div className="flex justify-between items-center">
										<div>
											<span className="font-medium">Gói tháng</span>
											<div className="flex items-center text-xs text-gray-500 mt-1">
												<RiCalendarLine className="mr-1" />
												<span>Giảm 20% cho lưu trú 30 ngày</span>
											</div>
										</div>
										<span className="text-primary font-bold">Giảm 20%</span>
									</div>
								</div>
							</div>
							<a
								href="#booking"
								className="inline-block bg-primary text-white px-8 py-3 rounded-button font-medium hover:bg-opacity-90 transition-all whitespace-nowrap"
							>
								Đặt phòng ngay
							</a>
						</FadeInStaggered>
					</div>
				</div>
			</div>
		</section>
	);
}
