import React from "react";
import { IconPhone } from "@tabler/icons-react";
import Faqs from "@/components/sections/faqs";
import { Container, Header, Heading } from "@/components/ui/blocks";
import { HeadingProps } from "@/types";

const headingProps: HeadingProps = {
	text: "Reach Us",
	italicText: "Anytime",
	description: "Have questions or need help? We’re here for you",
	badgeText: "Contact",
	badgeIcon: IconPhone,
};

export default function ContactPage() {
	return (
		<>
			<Container variant="container">
				<Header>
					<Heading {...headingProps} />
				</Header>
			</Container>
			<Faqs />
		</>
	);
}
