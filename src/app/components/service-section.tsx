import FadeInStaggered from "@/components/custom/fade-in";
import { LuBath, LuBone, LuShirt } from "react-icons/lu";
import { RiHotelLine } from "react-icons/ri";
export default function ServicesSection() {
	const services = [
		{
			title: "Spa Thú Cưng",
			icon: <LuBath className="text-primary" size={20} />,
			desc: "Làm sạch, cắt tỉa lông chuyên nghiệp",
		},
		{
			title: "Khách Sạn",
			icon: <RiHotelLine className="text-primary" size={20} />,
			desc: "Không gian lưu trú tiện nghi và an toàn",
		},
		{
			title: "Thức Ăn",
			icon: <LuBone className="text-primary" size={20} />,
			desc: "Thức ăn dinh dưỡng phù hợp từng giống loài",
		},
		{
			title: "Phụ Kiện",
			icon: <LuShirt className="text-primary" size={20} />,
			desc: "Đa dạng phụ kiện làm đẹp và tiện ích",
		},
	];

	return (
		<section id="services" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4 text-center">
				<FadeInStaggered>
					<h2 className="text-3xl font-bold mb-10">Dịch vụ nổi bật</h2>
				</FadeInStaggered>
				<FadeInStaggered>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						{services.map((s, i) => (
							<div
								key={i}
								className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
							>
								<div className="text-5xl mb-4 flex justify-center">
									<div className="rounded-full p-4 bg-primary/10">{s.icon}</div>
								</div>
								<h3 className="text-xl font-semibold mb-2">{s.title}</h3>
								<p className="text-gray-600">{s.desc}</p>
							</div>
						))}
					</div>
				</FadeInStaggered>
			</div>
		</section>
	);
}
