	import Link from "next/link";
import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconChevronDown } from "@tabler/icons-react";


export default function SocialLinks() {
	return (
		<div className="flex items-center justify-center gap-6 *:inline-flex">
						<div>
							<Link href="https://x.com" className="p-3 text-light-blue hover:text-blue-50">
								<IconBrandX />
							</Link>
						</div>
						<div className="h-6 w-0.5 bg-gray-800"></div>
						<div>
							<Link href="https://instagram.com" className="p-3 text-light-blue hover:text-blue-50">
								<IconBrandInstagram />
							</Link>
						</div>
						<div className="h-6 w-0.5 bg-gray-800"></div>
						<div>
							<Link href="https://facebook.com" className="p-3 text-light-blue hover:text-blue-50">
								<IconBrandFacebook />
							</Link>
						</div>
					</div>
	)
}
