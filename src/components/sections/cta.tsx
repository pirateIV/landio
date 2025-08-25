import React from "react";
import { SectionHeadingProps } from "@/types";
import SocialLinks from "../partials/social-links";
import { SectionContainer, SectionContent, SectionHeading } from "../section";
import Button from "../ui/button";
import Tag from "../ui/tag";

const headingProps: SectionHeadingProps = {
	text: "Ready to Automate Smarter? Let's",
	italicText: "Build Together",
	description: "Schedule a Call and Begin Automating",
	useBadge: false,
};

export default function Cta() {
	return (
		<SectionContainer className="text-center *:max-w-[1240px]">
			<SectionContent className="max-w-[613px] flex-col items-center justify-center gap-6">
				<div className="space-y-4">
					<Tag>Reach out anytime</Tag>
					<SectionHeading {...headingProps} />
				</div>
				<SocialLinks />
				<Button className="flex max-w-none items-center justify-center">Book A Free Call</Button>
				<p>landio@support.com</p>
			</SectionContent>
		</SectionContainer>
	);
}
