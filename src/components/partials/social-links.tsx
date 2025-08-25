import { IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";
import Link from "next/link";

export default function SocialLinks() {
	return (
		<div className="flex items-center justify-center gap-6 *:inline-flex">
			<div>
				<Link href="https://x.com" className="p-3 text-light-blue opacity-50 hover:opacity-100 transition-opacity duration-300">
					<IconBrandX />
				</Link>
			</div>
			<div className="h-6 w-0.5 bg-light-blue-transparent flex-none shrink-0"></div>
			<div>
				<Link href="https://instagram.com" className="p-3 text-light-blue opacity-50 hover:opacity-100 transition-opacity duration-300">
					<IconBrandInstagram />
				</Link>
			</div>
			<div className="h-6 w-0.5 bg-light-blue-transparent flex-none shrink-0"></div>
			<div>
				<Link href="https://facebook.com" className="p-3 text-light-blue opacity-50 hover:opacity-100 transition-opacity duration-300">
					<IconBrandFacebook />
				</Link>
			</div>
		</div>
	);
}
