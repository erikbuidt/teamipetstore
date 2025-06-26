"use client";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);

	const navLinks = [
		{ href: "/", label: "Trang chủ" },
		{ href: "/gioi-thieu", label: "Giới thiệu" },
		{ href: "/dich-vu", label: "Dịch vụ" },
		{ href: "/san-pham", label: "Sản phẩm" },
		{ href: "/blog", label: "Blog" },
		{ href: "/lien-he", label: "Liên hệ" },
	];

	return (
		<header className="fixed w-full bg-white shadow-sm z-50">
			<div className="container mx-auto px-4 py-4 flex items-center justify-between">
				<div className="flex justify-baseline items-center gap-2">
					<img src="/images/logo.png" width={50} height={50} />

					<div className="inline-flex gap-2">
						<a href="/" className="">
							<span className="text-2xl text-primary font-pacifico font-bold">
								Tea Mi
							</span>
							<span className="block text-sm text-black font-bold font-nunito ml-1">
								Pet Store
							</span>
						</a>
					</div>
				</div>

				<nav className="hidden md:flex items-center space-x-8">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="font-medium hover:text-primary transition-colors"
						>
							{link.label}
						</a>
					))}
				</nav>
				<div className="flex items-center space-x-4">
					<a
						href="#booking"
						className="hidden md:block bg-primary text-white px-6 py-2 rounded-button font-medium hover:bg-opacity-90 transition-all whitespace-nowrap"
					>
						Đặt lịch ngay
					</a>
					<button
						onClick={toggleMenu}
						className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700"
					>
						{menuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
					</button>
				</div>
			</div>
			{menuOpen && (
				<div className="md:hidden bg-white shadow-lg absolute w-full">
					<div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="font-medium py-2 hover:text-primary transition-colors"
								onClick={() => setMenuOpen(false)}
							>
								{link.label}
							</a>
						))}
						<a
							href="#booking"
							className="bg-primary text-white px-6 py-2 rounded-button font-medium hover:bg-opacity-90 transition-all text-center whitespace-nowrap"
						>
							Đặt lịch ngay
						</a>
					</div>
				</div>
			)}
		</header>
	);
}
