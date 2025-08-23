import React from "react";
import { IconUsersGroup } from "@tabler/icons-react";
import type { SectionHeadingProps } from "@/types";
import { SectionContainer, SectionHeader, SectionHeading } from "../section";

const headingProps: SectionHeadingProps = {
	text: "Get to Know",
	italicText: "Us",
	description: "Get to Know",
	badgeText: "Our Amazing Team",
	badgeIcon: IconUsersGroup,
};

export default function Team() {
	return (
		<SectionContainer>
			<SectionHeader>
				<SectionHeading {...headingProps} />
			</SectionHeader>
		</SectionContainer>
	);
}
