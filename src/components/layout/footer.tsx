import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white pt-16 pb-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
					<div>
						<a
							href="#"
							className="text-3xl font-['Pacifico'] text-white mb-6 block"
						>
							Tea Mi Pet
						</a>
						<p className="text-gray-300 mb-6">
							Thiên đường cho thú cưng của bạn với dịch vụ chăm sóc chuyên
							nghiệp và đầy yêu thương.
						</p>
						<div className="flex space-x-4">
							<a
								href="#"
								className="w-10 h-10 bg-gray-500 bg-opacity-10 rounded-full flex items-center justify-center hover:bg-primary transition-all"
							>
								<FaFacebook className="text-white" />
							</a>
							<a
								href="#"
								className="w-10 h-10 bg-gray-500 bg-opacity-10 rounded-full flex items-center justify-center hover:bg-primary transition-all"
							>
								<FaInstagram className="text-white" />
							</a>
							<a
								href="#"
								className="w-10 h-10 bg-gray-500 bg-opacity-10 rounded-full flex items-center justify-center hover:bg-primary transition-all"
							>
								<FaTiktok className="text-white" />
							</a>
						</div>
					</div>

					<div>
						<h3 className="text-xl font-bold mb-6">Liên kết nhanh</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="#home"
									className="text-gray-300 hover:text-primary transition-colors"
								>
									Trang chủ
								</a>
							</li>
							<li>
								<a
									href="#about"
									className="text-gray-300 hover:text-primary transition-colors"
								>
									Giới thiệu
								</a>
							</li>
							<li>
								<a
									href="#services"
									className="text-gray-300 hover:text-primary transition-colors"
								>
									Dịch vụ
								</a>
							</li>
							<li>
								<a
									href="#products"
									className="text-gray-300 hover:text-primary transition-colors"
								>
									Sản phẩm
								</a>
							</li>
							<li>
								<a
									href="#blog"
									className="text-gray-300 hover:text-primary transition-colors"
								>
									Blog
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="text-gray-300 hover:text-primary transition-colors"
								>
									Liên hệ
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-bold mb-6">Dịch vụ</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-primary transition-colors"
								>
									Spa thú cưng
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-primary transition-colors"
								>
									Khách sạn thú cưng
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-primary transition-colors"
								>
									Cắt tỉa lông
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-primary transition-colors"
								>
									Thức ăn thú cưng
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-primary transition-colors"
								>
									Phụ kiện thú cưng
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-primary transition-colors"
								>
									Tư vấn dinh dưỡng
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-bold mb-6">Đăng ký nhận tin</h3>
						<p className="text-gray-300 mb-4">
							Đăng ký để nhận thông tin khuyến mãi và kiến thức chăm sóc thú
							cưng mới nhất.
						</p>
						<div className="mb-4">
							<div className="flex">
								<input
									type="email"
									placeholder="Email của bạn"
									className="px-4 py-3 rounded-l-lg rounded-r-none border-none w-full text-gray-800 focus:outline-none"
								/>
								<button className="bg-primary text-white px-4 rounded-r-lg rounded-l-none hover:bg-opacity-90 transition-all whitespace-nowrap">
									Đăng ký
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-700 pt-8">
					<p className="text-center text-gray-400">
						© 2025 Tea Mi Pet. Tất cả quyền được bảo lưu.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
