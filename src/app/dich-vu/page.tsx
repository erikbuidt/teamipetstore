"use client";

import { useState } from "react";
import { IoMdCut, IoMdHome } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
export default function Service() {
	const [activeTab, setActiveTab] = useState<string>("all");

	return (
		<>
			{/* Hero Section */}
			<section
				className="relative h-[500px] bg-cover bg-center"
				style={{
					backgroundImage: `url(https://readdy.ai/api/search-image?query=luxurious%2520pet%2520spa%2520with%2520professional%2520groomer%2520working%2520on%2520a%2520fluffy%2520dog%252C%2520modern%2520interior%2520with%2520soft%2520lighting%252C%2520premium%2520equipment%252C%2520and%2520elegant%2520decor.%2520The%2520space%2520features%2520warm%2520colors%252C%2520wood%2520accents%252C%2520and%2520a%2520serene%2520atmosphere&width=1440&height=500&seq=10&orientation=landscape)`,
				}}
			>
				<div className="absolute inset-0 bg-black bg-opacity-50"></div>
				<div className="container mx-auto px-6 relative h-full flex items-center">
					<div className="text-white max-w-2xl">
						<h1 className="text-5xl font-bold mb-6">
							Dịch vụ của Tea Mi Pet Store
						</h1>
						<p className="text-xl leading-relaxed">
							Chúng tôi cung cấp các dịch vụ chăm sóc thú cưng cao cấp, được
							thiết kế riêng để đáp ứng nhu cầu của từng thú cưng. Với đội ngũ
							chuyên nghiệp và trang thiết bị hiện đại, Tea Mi Pet Store cam kết
							mang đến trải nghiệm tốt nhất cho thú cưng của bạn.
						</p>
					</div>
				</div>
			</section>

			{/* Services Categories */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold text-center mb-12">
						Các dịch vụ của chúng tôi
					</h2>

					<div className="flex justify-center mb-10">
						<div className="inline-flex bg-gray-100 rounded-full p-1">
							<button
								onClick={() => setActiveTab("all")}
								className={`px-6 py-2 rounded-full text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer ${activeTab === "all" ? "bg-[#FF9776] text-white" : "text-gray-700"}`}
							>
								Tất cả
							</button>
							<button
								onClick={() => setActiveTab("spa")}
								className={`px-6 py-2 rounded-full text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer ${activeTab === "spa" ? "bg-[#FF9776] text-white" : "text-gray-700"}`}
							>
								Spa & Làm đẹp
							</button>
							<button
								onClick={() => setActiveTab("hotel")}
								className={`px-6 py-2 rounded-full text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer ${activeTab === "hotel" ? "bg-[#FF9776] text-white" : "text-gray-700"}`}
							>
								Khách sạn
							</button>

							<button
								onClick={() => setActiveTab("transport")}
								className={`px-6 py-2 rounded-full text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer ${activeTab === "transport" ? "bg-[#FF9776] text-white" : "text-gray-700"}`}
							>
								Đưa đón
							</button>
						</div>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{/* Spa & Grooming */}
						{(activeTab === "all" || activeTab === "spa") && (
							<div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
								<div className="h-64 overflow-hidden">
									<img
										src="https://readdy.ai/api/search-image?query=professional%2520pet%2520groomer%2520giving%2520a%2520fluffy%2520dog%2520a%2520haircut%2520in%2520a%2520luxury%2520pet%2520salon%2520with%2520modern%2520equipment%252C%2520soft%2520lighting%252C%2520and%2520elegant%2520decor.%2520The%2520groomer%2520is%2520using%2520premium%2520tools%2520and%2520products%2520in%2520a%2520clean%2520environment&width=400&height=300&seq=11&orientation=landscape"
										alt="Spa và làm đẹp"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2">Spa và Làm đẹp</h3>
									<p className="text-gray-600 mb-4">
										Dịch vụ cắt tỉa lông, tắm, massage và chăm sóc toàn diện cho
										thú cưng của bạn.
									</p>
									<div className="flex justify-between items-center">
										<span className="text-[#FF9776] font-semibold">
											Từ 200.000đ
										</span>
										<button className="bg-[#FF9776] text-white px-4 py-2 rounded-lg !rounded-button whitespace-nowrap cursor-pointer hover:bg-[#FF8666] transition-colors">
											Đặt lịch
										</button>
									</div>
								</div>
							</div>
						)}

						{/* Pet Hotel */}
						{(activeTab === "all" || activeTab === "hotel") && (
							<div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
								<div className="h-64 overflow-hidden">
									<img
										src="https://readdy.ai/api/search-image?query=luxury%2520pet%2520hotel%2520room%2520with%2520comfortable%2520beds%252C%2520toys%252C%2520and%2520modern%2520amenities.%2520The%2520room%2520features%2520soft%2520lighting%252C%2520pastel%2520colors%252C%2520wooden%2520elements%252C%2520and%2520a%2520homey%2520atmosphere%2520for%2520pets%2520to%2520feel%2520relaxed%2520and%2520safe&width=400&height=300&seq=12&orientation=landscape"
										alt="Khách sạn thú cưng"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2">Khách sạn Thú cưng</h3>
									<p className="text-gray-600 mb-4">
										Không gian nghỉ dưỡng sang trọng, an toàn với đầy đủ tiện
										nghi cho thú cưng.
									</p>
									<div className="flex justify-between items-center">
										<span className="text-[#FF9776] font-semibold">
											Từ 100.000đ/ngày
										</span>
										<button className="bg-[#FF9776] text-white px-4 py-2 rounded-lg !rounded-button whitespace-nowrap cursor-pointer hover:bg-[#FF8666] transition-colors">
											Đặt lịch
										</button>
									</div>
								</div>
							</div>
						)}

						{/* Pet Transport */}
						{(activeTab === "all" || activeTab === "transport") && (
							<div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
								<div className="h-64 overflow-hidden">
									<img
										src="https://readdy.ai/api/search-image?query=modern%2520pet%2520transport%2520van%2520with%2520comfortable%2520pet%2520carriers%2520inside.%2520The%2520vehicle%2520is%2520clean%252C%2520air-conditioned%252C%2520and%2520equipped%2520with%2520safety%2520features.%2520A%2520professional%2520handler%2520is%2520carefully%2520placing%2520a%2520dog%2520in%2520a%2520carrier%2520with%2520gentle%2520care&width=400&height=300&seq=15&orientation=landscape"
										alt="Dịch vụ đưa đón"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2">Dịch vụ Đưa đón</h3>
									<p className="text-gray-600 mb-4">
										Dịch vụ đưa đón thú cưng tận nơi, an toàn và tiện lợi cho
										chủ nhân bận rộn.
									</p>
									<div className="flex justify-between items-center">
										<span className="text-[#FF9776] font-semibold">
											Miễn phí trong bán kính 5km
										</span>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</section>

			{/* Service Details Section */}
			<section className="py-16 bg-[#FFF8F5]">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold text-center mb-12">
						Chi tiết dịch vụ
					</h2>

					{/* Spa & Grooming Details */}
					{(activeTab === "all" || activeTab === "spa") && (
						<div className="mb-16">
							<div className="flex items-center mb-6">
								<div className="w-12 h-12 bg-[#FFE5D9] rounded-full flex items-center justify-center mr-4">
									<IoMdCut />
								</div>
								<h3 className="text-2xl font-bold">Spa và Làm đẹp</h3>
							</div>

							<div className="grid md:grid-cols-2 gap-8 mb-8">
								<div>
									<p className="text-gray-700 mb-6">
										Dịch vụ spa và làm đẹp của Tea Mi Pet Store mang đến trải
										nghiệm thư giãn và làm đẹp toàn diện cho thú cưng của bạn.
										Đội ngũ nhân viên được đào tạo chuyên nghiệp sẽ chăm sóc thú
										cưng với sự tận tâm và kỹ lưỡng nhất.
									</p>
									<ul className="space-y-3">
										<li className="flex items-center gap-2">
											<CiCircleCheck className="text-primary" />
											<span>
												Sử dụng sản phẩm cao cấp, an toàn cho da và lông
											</span>
										</li>
										<li className="flex items-center gap-2">
											<CiCircleCheck className="text-primary" />
											<span>
												Không gian riêng tư, thoải mái cho từng thú cưng
											</span>
										</li>
										<li className="flex items-center gap-2">
											<CiCircleCheck className="text-primary" />
											<span>Tư vấn kiểu tỉa lông phù hợp với từng giống</span>
										</li>
										<li className="flex items-center gap-2">
											<CiCircleCheck className="text-primary" />
											<span>
												Massage thư giãn giúp kích thích tuần hoàn máu
											</span>
										</li>
									</ul>
								</div>
								<div>
									<img
										src="https://readdy.ai/api/search-image?query=close%2520up%2520of%2520professional%2520pet%2520groomer%2520giving%2520a%2520small%2520dog%2520a%2520haircut%2520with%2520scissors%2520in%2520a%2520luxury%2520pet%2520salon.%2520The%2520groomer%2520is%2520wearing%2520professional%2520attire%2520and%2520using%2520high-end%2520grooming%2520tools%2520with%2520gentle%2520care&width=500&height=350&seq=16&orientation=landscape"
										alt="Spa chi tiết"
										className="w-full h-full object-cover rounded-lg shadow-lg"
									/>
								</div>
							</div>

							<div className="bg-white rounded-lg shadow-md overflow-hidden">
								<div className="overflow-x-auto">
									<table className="w-full">
										<thead className="bg-[#FF9776] text-white">
											<tr>
												<th className="py-3 px-4 text-left">Gói dịch vụ</th>
												<th className="py-3 px-4 text-left">Mô tả</th>
												<th className="py-3 px-4 text-left">Thời gian</th>
												<th className="py-3 px-4 text-left">Giá</th>
												<th className="py-3 px-4 text-center">Đặt lịch</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-gray-200">
											<tr>
												<td className="py-4 px-4 font-medium">Gói Cơ bản</td>
												<td className="py-4 px-4">
													Tắm, sấy khô, vệ sinh tai, cắt móng
												</td>
												<td className="py-4 px-4">60 phút</td>
												<td className="py-4 px-4 font-medium">
													200.000đ - 400.000đ
												</td>
												<td className="py-4 px-4 text-center">
													<button className="bg-[#FF9776] text-white px-3 py-1 rounded !rounded-button whitespace-nowrap cursor-pointer hover:bg-[#FF8666] transition-colors">
														Đặt ngay
													</button>
												</td>
											</tr>
											<tr>
												<td className="py-4 px-4 font-medium">Gói Cao cấp</td>
												<td className="py-4 px-4">
													Tắm, sấy khô, vệ sinh tai, cắt móng, cắt tỉa lông
												</td>
												<td className="py-4 px-4">90 phút</td>
												<td className="py-4 px-4 font-medium">
													350.000đ - 650.000đ
												</td>
												<td className="py-4 px-4 text-center">
													<button className="bg-[#FF9776] text-white px-3 py-1 rounded !rounded-button whitespace-nowrap cursor-pointer hover:bg-[#FF8666] transition-colors">
														Đặt ngay
													</button>
												</td>
											</tr>
											<tr>
												<td className="py-4 px-4 font-medium">Gói VIP</td>
												<td className="py-4 px-4">
													Tắm, sấy khô, vệ sinh tai, cắt móng, cắt tỉa lông,
													massage, dưỡng lông
												</td>
												<td className="py-4 px-4">120 phút</td>
												<td className="py-4 px-4 font-medium">
													500.000đ - 800.000đ
												</td>
												<td className="py-4 px-4 text-center">
													<button className="bg-[#FF9776] text-white px-3 py-1 rounded !rounded-button whitespace-nowrap cursor-pointer hover:bg-[#FF8666] transition-colors">
														Đặt ngay
													</button>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					)}

					{/* Pet Hotel Details */}
					{(activeTab === "all" || activeTab === "hotel") && (
						<div className="mb-16">
							<div className="flex items-center mb-6">
								<div className="w-12 h-12 bg-[#D4F0E2] rounded-full flex items-center justify-center mr-4">
									<IoMdHome />
								</div>
								<h3 className="text-2xl font-bold">Khách sạn Thú cưng</h3>
							</div>

							<div className="grid md:grid-cols-2 gap-8 mb-8">
								<div>
									<p className="text-gray-700 mb-6">
										Khách sạn thú cưng của Tea Mi Pet Store là nơi lý tưởng để
										thú cưng của bạn nghỉ ngơi khi bạn đi xa. Chúng tôi cung cấp
										không gian rộng rãi, thoáng mát với đầy đủ tiện nghi và chế
										độ chăm sóc 24/7.
									</p>
									<ul className="space-y-3">
										<li className="flex items-center gap-2">
											<CiCircleCheck className="text-primary" />
											<span>
												Phòng riêng biệt, rộng rãi với điều hòa nhiệt độ
											</span>
										</li>
										<li className="flex items-center gap-2">
											<CiCircleCheck className="text-primary" />
											<span>Khu vui chơi chung cho thú cưng giao lưu</span>
										</li>
										<li className="flex items-center gap-2">
											<CiCircleCheck className="text-primary" />
											<span>Chế độ ăn uống được cá nhân hóa</span>
										</li>
										<li className="flex items-center gap-2">
											<CiCircleCheck className="text-primary" />
											<span>Báo cáo tình trạng thú cưng hàng ngày</span>
										</li>
									</ul>
								</div>
								<div>
									<img
										src="https://readdy.ai/api/search-image?query=interior%2520of%2520a%2520luxury%2520pet%2520hotel%2520room%2520with%2520comfortable%2520pet%2520beds%252C%2520toys%252C%2520feeding%2520stations%252C%2520and%2520modern%2520amenities.%2520The%2520room%2520features%2520soft%2520lighting%252C%2520pastel%2520colors%252C%2520and%2520a%2520homey%2520atmosphere&width=500&height=350&seq=17&orientation=landscape"
										alt="Khách sạn chi tiết"
										className="w-full h-full object-cover rounded-lg shadow-lg"
									/>
								</div>
							</div>

							<div className="bg-white rounded-lg shadow-md overflow-hidden">
								<div className="overflow-x-auto">
									<table className="w-full">
										<thead className="bg-[#FF9776] text-white">
											<tr>
												<th className="py-3 px-4 text-left">Loại phòng</th>
												<th className="py-3 px-4 text-left">Tiện nghi</th>
												<th className="py-3 px-4 text-left">Kích thước</th>
												<th className="py-3 px-4 text-left">Giá/ngày</th>
												<th className="py-3 px-4 text-center">Đặt lịch</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-gray-200">
											<tr>
												<td className="py-4 px-4 font-medium">
													Phòng Tiêu chuẩn
												</td>
												<td className="py-4 px-4">
													Giường, bát ăn, đồ chơi cơ bản
												</td>
												<td className="py-4 px-4">2m² - 3m²</td>
												<td className="py-4 px-4 font-medium">350.000đ</td>
												<td className="py-4 px-4 text-center">
													<button className="bg-[#FF9776] text-white px-3 py-1 rounded !rounded-button whitespace-nowrap cursor-pointer hover:bg-[#FF8666] transition-colors">
														Đặt ngay
													</button>
												</td>
											</tr>
											<tr>
												<td className="py-4 px-4 font-medium">Phòng Deluxe</td>
												<td className="py-4 px-4">
													Giường cao cấp, đồ chơi, webcam theo dõi
												</td>
												<td className="py-4 px-4">4m² - 5m²</td>
												<td className="py-4 px-4 font-medium">500.000đ</td>
												<td className="py-4 px-4 text-center">
													<button className="bg-[#FF9776] text-white px-3 py-1 rounded !rounded-button whitespace-nowrap cursor-pointer hover:bg-[#FF8666] transition-colors">
														Đặt ngay
													</button>
												</td>
											</tr>
											<tr>
												<td className="py-4 px-4 font-medium">Phòng VIP</td>
												<td className="py-4 px-4">
													Giường cao cấp, TV, đồ chơi đa dạng, webcam, dịch vụ
													spa hàng ngày
												</td>
												<td className="py-4 px-4">6m² - 8m²</td>
												<td className="py-4 px-4 font-medium">800.000đ</td>
												<td className="py-4 px-4 text-center">
													<button className="bg-[#FF9776] text-white px-3 py-1 rounded !rounded-button whitespace-nowrap cursor-pointer hover:bg-[#FF8666] transition-colors">
														Đặt ngay
													</button>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					)}
				</div>
			</section>

			{/* Booking Form Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-6">
					<div className="max-w-4xl mx-auto bg-[#FFE5D9] rounded-xl shadow-lg overflow-hidden">
						<div className="md:flex">
							<div className="md:w-1/2 p-8">
								<h2 className="text-2xl font-bold mb-6">Đặt lịch dịch vụ</h2>
								<form className="space-y-4">
									<div>
										<label className="block text-gray-700 mb-2">
											Chọn dịch vụ
										</label>
										<div className="relative">
											<select className="w-full p-3 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF9776]">
												<option value="">Chọn dịch vụ</option>
												<option value="spa">Spa và Làm đẹp</option>
												<option value="hotel">Khách sạn Thú cưng</option>
												<option value="medical">Dịch vụ Y tế</option>
												<option value="training">Huấn luyện Thú cưng</option>
												<option value="transport">Dịch vụ Đưa đón</option>
											</select>
											<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
												<FaChevronDown />
											</div>
										</div>
									</div>

									<div className="grid grid-cols-2 gap-4">
										<div>
											<label className="block text-gray-700 mb-2">Ngày</label>
											<input
												type="date"
												className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9776]"
											/>
										</div>
										<div>
											<label className="block text-gray-700 mb-2">Giờ</label>
											<input
												type="time"
												className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9776]"
											/>
										</div>
									</div>

									<div>
										<label className="block text-gray-700 mb-2">
											Thông tin thú cưng
										</label>
										<textarea
											className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9776] h-24"
											placeholder="Tên, giống, tuổi, cân nặng, và các thông tin đặc biệt khác"
										></textarea>
									</div>

									<div>
										<label className="block text-gray-700 mb-2">
											Họ và tên
										</label>
										<input
											type="text"
											className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9776]"
											placeholder="Nguyễn Văn A"
										/>
									</div>

									<div>
										<label className="block text-gray-700 mb-2">
											Số điện thoại
										</label>
										<input
											type="tel"
											className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9776]"
											placeholder="0123 456 789"
										/>
									</div>

									<button
										type="submit"
										className="w-full bg-[#FF9776] text-white py-3 px-6 rounded-lg !rounded-button whitespace-nowrap cursor-pointer hover:bg-[#FF8666] transition-colors font-medium"
									>
										Đặt lịch ngay
									</button>
								</form>
							</div>
							<div className="md:w-1/2 relative">
								<img
									src="https://readdy.ai/api/search-image?query=happy%2520dog%2520getting%2520groomed%2520at%2520a%2520luxury%2520pet%2520salon%2520with%2520a%2520professional%2520groomer.%2520The%2520dog%2520looks%2520relaxed%2520and%2520content%2520while%2520receiving%2520premium%2520care%2520in%2520a%2520modern%2520facility%2520with%2520soft%2520lighting%2520and%2520elegant%2520decor&amp;width=500&amp;height=600&amp;seq=18&amp;orientation=portrait"
									alt="Đặt lịch dịch vụ"
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
									<div className="text-white text-center p-6">
										<h3 className="text-2xl font-bold mb-2">
											Chăm sóc tận tâm
										</h3>
										<p className="text-lg">
											Thú cưng của bạn xứng đáng được hưởng những điều tốt nhất
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
