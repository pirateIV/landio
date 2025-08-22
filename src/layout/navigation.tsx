import React from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
	{ name: "Services", href: "#services" },
	{ name: "Process", href: "#process" },
	{ name: "Pricing", href: "#pricing" },
	{ name: "Blog", href: "blog" },
	{ name: "Contact", href: "contact" },
];

export default function Navigation() {
	return (
		<div className="fixed inset-x-0 top-0 z-50 h-auto flex-none">
			<header className="flex h-16 w-full items-center justify-center bg-dark-transparent border-b-2 border-light-blue-transparent backdrop-blur-md will-change-transform">
				<div className="mx-auto flex max-w-[1350px] flex-[1_0_0px] flex-nowrap items-center justify-between px-10">
					<div className="inline-flex">
						<Link href="/#hero" className="h-[39px] w-[103px]">
							<Image width="163" height="62" src="logo.svg" alt="logo" />
						</Link>
					</div>
					<nav className="relative flex size-min flex-none items-center gap-3 rounded-[100px] border border-light-blue-transparent px-3 py-1.5">
						{navLinks.map((link) => (
							<div key={link.name} className="inline-flex transition-opacity duration-300 opacity-75 hover:opacity-100">
								<Link href={`/${link.href}`} className="px-3 py-1.5 text-sm text-slate-300">
									{link.name}
								</Link>
							</div>
						))}
					</nav>
					<div>
						<button>Get Template</button>
					</div>
				</div>
			</header>
		</div>
	);
}
