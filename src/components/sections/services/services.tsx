import React from "react";
import { IconServicemark } from "@tabler/icons-react";
import { SectionContainer, SectionHeader, SectionHeading } from "@/components/ui/blocks";
import { HeadingProps } from "@/types";
import { AiStrategy, CustomAi, Intelligience, Tasks, Workflows } from "./cards";

const headingProps: HeadingProps = {
	text: "Smarter Services,",
	italicText: "Built with AI",
	badgeIcon: IconServicemark,
	badgeText: "Services",
	description: "Everything you need to automate operations, boost productivity",
};

export default function Services() {
	return (
		<SectionContainer id="services">
			<SectionHeader>
				<SectionHeading {...headingProps} />
			</SectionHeader>
			<div className="grid grid-cols-3 grid-rows-2 gap-x-6 gap-y-[30px] *:col-span-1 *:[&:nth-of-type(2)]:col-span-2">
				<Tasks />
				<Workflows />
				<Intelligience />
				<CustomAi />
				<AiStrategy />
			</div>
		</SectionContainer>
	);
}
