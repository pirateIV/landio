import React from "react";
import { IconBrandDribbble, IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/config";
import { SocialLinkProps } from "@/types";

const footerLinks = [
	{ name: "Services", href: Routes.services },
	{ name: "Process", href: Routes.process },
	{ name: "Pricing", href: Routes.pricing },
	{ name: "Blog", href: Routes.blog },
	{ name: "Contact", href: Routes.contact },
];

const socialLinks: SocialLinkProps = [
	{ website: "https://x.com/home", icon: IconBrandX },
	{ website: "https://facebook.com", icon: IconBrandFacebook },
	{ website: "https://instagram.com", icon: IconBrandInstagram },
	{ website: "https://dribbble.com", icon: IconBrandDribbble },
];

export default function Footer() {
	return (
		<footer className="relative z-2 flex items-center justify-center bg-black-base px-5 py-15 text-sm lg:p-15">
			<div className="h-min w-full max-w-310">
				<div className="flex w-full flex-col gap-8">
					<div className="flex flex-col gap-10">
						<div className="flex justify-between gap-10 max-md:order-1 max-md:flex-col md:items-center md:gap-0">
							<Image src="/logo.svg" width="163" height="62" alt="Logo" />
							<div className="flex items-center gap-4">
								{socialLinks.map((link, index) => (
									<Link key={index} href={link.website} className="p-2 opacity-50 transition-opacity duration-300 hover:opacity-100">
										<link.icon size="24" />
									</Link>
								))}
							</div>
						</div>
						<nav className="max-md:order-0">
							<ul className="flex gap-6 max-md:flex-col md:items-center md:gap-8">
								{footerLinks.map((link) => (
									<li key={link.name} className="inline-flex text-light-blue-muted transition-colors duration-300 hover:text-light-blue">
										<Link href={link.href} className="w-full py-1.5 font-medium md:py-0">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
					<div className="h-px bg-light-blue-transparent" />
					<div className="flex justify-between max-md:flex-col max-md:gap-8 md:items-center">
						<p>&copy; {new Date().getFullYear()} Landio Template</p>
						<div className="flex justify-between gap-8 max-md:flex-col md:items-center">
							<p>
								Made by&nbsp;
								<Link href="https://x.com/framebase" className="text-light-blue-muted transition-colors duration-300 hover:text-light-blue">
									Framebase
								</Link>
							</p>
							<p>landio@support.com</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
