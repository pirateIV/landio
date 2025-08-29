import React from "react";
import { HeadingProps } from "@/types";
import SocialLinks from "../partials/social-links";
import { Container, Content, Heading } from "../ui/blocks";
import Button from "../ui/button";
import Tag from "../ui/tag";

const headingProps: HeadingProps = {
	text: "Ready to Automate Smarter? Let's",
	italicText: "Build Together",
	description: "Schedule a Call and Begin Automating",
	useBadge: false,
};

export default function Cta() {
	return (
		<Container className="text-center *:max-w-310">
			<Content className="max-w-[613px] flex-col items-center justify-center gap-6">
				<div className="flex flex-col items-center gap-4 [&_p]:max-w-3/4">
					<Tag>Reach out anytime</Tag>
					<Heading {...headingProps} />
				</div>
				<Button className="flex max-w-none items-center justify-center">Book A Free Call</Button>
				<SocialLinks />
				<p>landio@support.com</p>
			</Content>
		</Container>
	);
}
