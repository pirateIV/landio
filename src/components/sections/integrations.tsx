import React from "react";
import {
	IconBrandChrome,
	IconBrandFacebook,
	IconBrandFramer,
	IconBrandInstagram,
	IconBrandNotion,
	IconBrandPaypal,
	IconBrandPinterest,
	IconBrandStackshare,
	IconBrandX,
	IconStack2,
} from "@tabler/icons-react";
import { SectionHeadingProps } from "@/types";
import { SectionContainer, SectionContent, SectionHeader, SectionHeading } from "../section";

const headingProps: SectionHeadingProps = {
	text: "Seamless",
	italicText: "Integrations",
	description: "Interact with all your favorite software without unnecessary fuss",
	badgeText: "Integrations",
	badgeIcon: IconStack2,
};

const logos = [
	{ name: "Facebook", icon: IconBrandFacebook },
	{ name: "Pinterest", icon: IconBrandPinterest },
	{ name: "Framer", icon: IconBrandFramer },
	{ name: "X", icon: IconBrandX },
	{ name: "Facebook", icon: IconBrandFacebook },
	{ name: "Chrome", icon: IconBrandChrome },
	{ name: "Instagram", icon: IconBrandInstagram },
	{ name: "Stackshare", icon: IconBrandStackshare },
	{ name: "Paypal", icon: IconBrandPaypal },
	{ name: "Notion", icon: IconBrandNotion },
];

export default function Integrations() {
	return (
		<SectionContainer>
			<SectionHeader>
				<SectionHeading {...headingProps} />
			</SectionHeader>

			<SectionContent></SectionContent>
		</SectionContainer>
	);
}
