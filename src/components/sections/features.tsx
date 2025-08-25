import React from "react";
import { IconCube } from "@tabler/icons-react";
import { SectionHeadingProps } from "@/types";
import { SectionContainer, SectionHeader, SectionHeading } from "../section";

const headingProps: SectionHeadingProps = {
	text: "All features in",
	italicText: "one place",
	description: "Everything you need to automate operations, boost productivity",
	badgeText: "Features",
	badgeIcon: IconCube,
};

export default function Features() {
	return (
		<SectionContainer>
			<SectionHeader>
				<SectionHeading {...headingProps} />
			</SectionHeader>
		</SectionContainer>
	);
}
