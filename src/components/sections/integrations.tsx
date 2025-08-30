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
import Marquee from "react-fast-marquee";
import { HeadingProps } from "@/types";
import { Container, Content, Header, Heading } from "../ui/blocks";
import Card from "../ui/card";

const headingProps: HeadingProps = {
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
		<Container id="integrations">
			<Header>
				<Heading {...headingProps} />
			</Header>

			<Content>
				<Card container>
					<Marquee>
						{logos.map((logo) => (
							<div className="mx-7.5">
								<logo.icon size="40" />
							</div>
						))}
					</Marquee>
				</Card>
			</Content>
		</Container>
	);
}
