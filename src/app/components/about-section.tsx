import FadeInStaggered from "@/components/custom/fade-in";
import {
	RiCalendarLine,
	RiUserSmileLine,
	RiTeamLine,
	RiAwardLine,
} from "react-icons/ri";
export default function AboutSection() {
	const stats = [
		{
			icon: <RiCalendarLine className="text-primary" />,
			value: "4+",
			label: "Năm kinh nghiệm",
		},
		{
			icon: <RiUserSmileLine className="text-primary" />,
			value: "300+",
			label: "Khách hàng hài lòng",
		},
		{
			icon: <RiTeamLine className="text-primary" />,
			value: "2+",
			label: "Chuyên viên",
		},
		{
			icon: <RiAwardLine className="text-primary" />,
			value: "15+",
			label: "Giải thưởng",
		},
	];

	return (
		<section id="about" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<FadeInStaggered>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Về Tea Mi Pet Store
						</h2>
					</FadeInStaggered>

					<div className="w-20 h-1 bg-primary mx-auto"></div>
				</div>
				<div className="flex flex-col md:flex-row items-center gap-12">
					<div className="md:w-1/2">
						<FadeInStaggered direction="fade-right">
							<h3 className="text-2xl font-bold mb-4">
								Chúng tôi yêu thương thú cưng như bạn
							</h3>
							<p className="mb-6">
								Tea Mi Pet được thành lập vào năm 2024 với mục tiêu mang đến
								dịch vụ chăm sóc thú cưng chất lượng cao tại Quận 7. Với đội ngũ
								nhân viên giàu kinh nghiệm và yêu thương thú cưng, chúng tôi cam
								kết mang đến trải nghiệm tuyệt vời cho bé cưng của bạn.
							</p>
							<p className="mb-8">
								Sứ mệnh của Tea Mi Pet là tạo ra một không gian an toàn, thoải
								mái và vui vẻ cho thú cưng, nơi các beá được chăm sóc như thành
								viên trong gia đình.
							</p>
							<div className="grid grid-cols-2 gap-6">
								{stats.map((stat, i) => (
									<div key={i} className="flex items-center">
										<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
											{stat.icon}
										</div>
										<div>
											<h4 className="font-bold text-xl">{stat.value}</h4>
											<p className="text-gray-600">{stat.label}</p>
										</div>
									</div>
								))}
							</div>
						</FadeInStaggered>
					</div>
					<div className="md:w-1/2 mt-8 md:mt-0">
						<FadeInStaggered direction="fade-left">
							<img
								src="https://readdy.ai/api/search-image?query=Professional%20pet%20grooming%20salon%20with%20staff%20in%20uniform%20caring%20for%20dogs.%20Modern%2C%20clean%20interior%20with%20high-end%20equipment.%20Soft%20pastel%20colors%2C%20bright%20lighting.%20Happy%20pets%20being%20groomed.%20Shelves%20with%20premium%20grooming%20products%20visible%20in%20background.%20Warm%2C%20welcoming%20atmosphere&width=800&height=600&seq=2&orientation=landscape"
								alt="Đội ngũ Tea Mi Pet"
								className="rounded-lg shadow-lg w-full h-auto object-cover object-top"
							/>
						</FadeInStaggered>
					</div>
				</div>
			</div>
		</section>
	);
}
