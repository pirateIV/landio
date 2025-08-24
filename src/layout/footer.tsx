import React from "react";
import { IconBrandDribbble, IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { SocialLinkProps } from "@/types";

const footerLinks = [
	{ name: "Services", href: "#services" },
	{ name: "Process", href: "#process" },
	{ name: "Pricing", href: "#pricing" },
	{ name: "Blog", href: "blog" },
	{ name: "Contact", href: "contact" },
];

const socialLinks: SocialLinkProps = [
	{ website: "https://x.com/home", icon: IconBrandX },
	{ website: "https://facebook.com", icon: IconBrandFacebook },
	{ website: "https://instagram.com", icon: IconBrandInstagram },
	{ website: "https://dribbble.com", icon: IconBrandDribbble },
];

export default function Footer() {
	return (
		<footer className="flex items-center justify-center p-[calc(var(--spacing)*15)] text-sm">
			<div className="h-min w-full max-w-[1240px]">
				<div className="w-full space-y-8">
					<div className="space-y-10">
						<div className="flex items-center justify-between">
							<Image src="logo.svg" width="163" height="62" alt="Logo" />
							<div className="flex items-center gap-4">
								{socialLinks.map((link, index) => (
									<Link key={index} href={link.website} className="p-2 opacity-50 transition-opacity duration-300 hover:opacity-100">
										<link.icon size="24" />
									</Link>
								))}
							</div>
						</div>
						<nav>
							<ul className="flex items-center gap-8">
								{footerLinks.map((link) => (
									<li key={link.name} className="text-light-blue-muted transition-colors duration-300 hover:text-light-blue">
										<Link href={link.href} className="font-medium">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
					<div className="h-px bg-light-blue-transparent" />
					<div className="flex items-center justify-between">
						<p>&copy; {new Date().getFullYear()} Landio Template</p>
						<div className="flex items-center justify-between gap-8">
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
