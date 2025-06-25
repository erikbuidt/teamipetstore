"use client";

import { useState } from "react";
import { CiClock1 } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdOutlinePhone } from "react-icons/md";
import { RiCameraLine, RiCalendarLine } from "react-icons/ri";

const BookingSection = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		phone: "",
		email: "",
		service: "",
		petType: "",
		date: "",
		message: "",
	});

	const handleInputChange = (e: any) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
		// You can add your form submission logic here
	};

	const contactInfo = [
		{
			icon: <IoLocationSharp className="text-primary" />,
			title: "Địa chỉ",
			content: "88 đường 11, Tân Kiểng, Quận 7, TP. Hồ Chí Minh",
		},
		{
			icon: <MdOutlinePhone className="text-primary" />,
			title: "Điện thoại",
			content: "0909366197",
		},
		{
			icon: <MdEmail className="text-primary" />,
			title: "Email",
			content: "teamipetstore@gmail.com",
		},
		{
			icon: <CiClock1 className="text-primary" />,
			title: "Giờ mở cửa",
			content: "Thứ 2 - Chủ nhật: 8:00 - 20:00",
		},
	];

	const serviceOptions = [
		{ value: "", label: "Chọn dịch vụ" },
		{ value: "spa", label: "Spa thú cưng" },
		{ value: "hotel", label: "Khách sạn thú cưng" },
		{ value: "grooming", label: "Cắt tỉa lông" },
		{ value: "other", label: "Dịch vụ khác" },
	];

	const petTypeOptions = [
		{ value: "", label: "Chọn loại thú cưng" },
		{ value: "dog", label: "Chó" },
		{ value: "cat", label: "Mèo" },
		{ value: "other", label: "Khác" },
	];

	return (
		<section id="booking" className="py-20 bg-primary/5">
			<div className="container mx-auto px-4">
				<div className="flex flex-col lg:flex-row gap-12">
					{/* Booking Form */}
					<div className="lg:w-1/2">
						<h2 className="text-3xl font-bold mb-6">Đặt Lịch Dịch Vụ</h2>
						<p className="text-gray-600 mb-8">
							Đặt lịch trước để được phục vụ tốt nhất và không phải chờ đợi.
							Chúng tôi sẽ liên hệ xác nhận trong vòng 2 giờ sau khi nhận được
							thông tin.
						</p>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="fullName"
										className="block text-gray-700 font-medium mb-2"
									>
										Họ và tên
									</label>
									<input
										type="text"
										id="fullName"
										name="fullName"
										value={formData.fullName}
										onChange={handleInputChange}
										className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:outline-none"
										placeholder="Nhập họ và tên"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="phone"
										className="block text-gray-700 font-medium mb-2"
									>
										Số điện thoại
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleInputChange}
										className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:outline-none"
										placeholder="Nhập số điện thoại"
										required
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-gray-700 font-medium mb-2"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:outline-none"
									placeholder="Nhập địa chỉ email"
									required
								/>
							</div>

							<div>
								<label
									htmlFor="service"
									className="block text-gray-700 font-medium mb-2"
								>
									Dịch vụ
								</label>
								<div className="relative">
									<select
										id="service"
										name="service"
										value={formData.service}
										onChange={handleInputChange}
										className="w-full px-4 py-3 border border-gray-300 rounded appearance-none focus:border-primary focus:outline-none pr-8"
										required
									>
										{serviceOptions.map((option) => (
											<option key={option.value} value={option.value}>
												{option.label}
											</option>
										))}
									</select>
									<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
										<i className="ri-arrow-down-s-line text-gray-400"></i>
									</div>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="petType"
										className="block text-gray-700 font-medium mb-2"
									>
										Loại thú cưng
									</label>
									<div className="relative">
										<select
											id="petType"
											name="petType"
											value={formData.petType}
											onChange={handleInputChange}
											className="w-full px-4 py-3 border border-gray-300 rounded appearance-none focus:border-primary focus:outline-none pr-8"
											required
										>
											{petTypeOptions.map((option) => (
												<option key={option.value} value={option.value}>
													{option.label}
												</option>
											))}
										</select>
										<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
											<i className="ri-arrow-down-s-line text-gray-400"></i>
										</div>
									</div>
								</div>
								<div>
									<label
										htmlFor="date"
										className="block text-gray-700 font-medium mb-2"
									>
										Ngày đặt lịch
									</label>
									<input
										type="date"
										id="date"
										name="date"
										value={formData.date}
										onChange={handleInputChange}
										className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:outline-none"
										required
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-gray-700 font-medium mb-2"
								>
									Ghi chú
								</label>
								<textarea
									id="message"
									name="message"
									rows={4}
									value={formData.message}
									onChange={handleInputChange}
									className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:outline-none resize-vertical"
									placeholder="Nhập ghi chú hoặc yêu cầu đặc biệt"
								></textarea>
							</div>

							<button
								type="submit"
								className="bg-primary text-white px-8 py-3 rounded-button font-medium hover:bg-opacity-90 transition-all whitespace-nowrap"
							>
								Đặt lịch ngay
							</button>
						</form>
					</div>

					{/* Location Info */}
					<div className="lg:w-1/2 mt-12 lg:mt-0">
						<h2 className="text-3xl font-bold mb-6">Vị Trí Cửa Hàng</h2>
						<p className="text-gray-600 mb-8">
							Ghé thăm cửa hàng của chúng tôi tại địa chỉ dưới đây hoặc liên hệ
							qua các kênh thông tin để được hỗ trợ.
						</p>

						<div className="bg-white rounded-lg shadow-md p-6 mb-8">
							{contactInfo.map((info, index) => (
								<div key={index} className="flex items-center mb-4 last:mb-0">
									<div className="w-12 h-12 bg-primary/5 bg-opacity-10 rounded-full flex items-center justify-center mr-4">
										{info.icon}
									</div>
									<div>
										<h4 className="font-bold">{info.title}</h4>
										<p className="text-gray-600">{info.content}</p>
									</div>
								</div>
							))}
						</div>

						<div className="rounded-lg overflow-hidden shadow-md">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.8443021042112!2d106.7047505761676!3d10.746480489400518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f0027587e51%3A0x5d3087e8c1e850b5!2sTea%20Mi%20Pet%20Store!5e0!3m2!1svi!2s!4v1750869204636!5m2!1svi!2s"
								className="w-full"
								height="450"
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BookingSection;
