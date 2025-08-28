import React from "react";
import { IconUserCheck } from "@tabler/icons-react";
import type { SectionHeadingProps } from "@/types";
import { SectionContainer, SectionContent, SectionHeader, SectionHeading } from "../section";
import { Icons } from "../icons";

const stories = [
	{
		title: "Max's SaaS Revolution",
		story: "Max, the founder of CloudFlow, implemented AI automation in their processes. This move slashed operational costs by 50% and boosted team productivity by 75%, empowering the company to accelerate growth and expand faster.",
		
	}
]

const headingProps: SectionHeadingProps = {
	text: "Success Stories to",
	italicText: "Inspire",
	description: "Discover how businesses and creators achieve results",
	badgeText: "Our clients",
	badgeIcon: Icons.UserCheck,
};

export default function Stories() {
	return (
		<SectionContainer id="stories">
			<SectionHeader>
				<SectionHeading {...headingProps} />
			</SectionHeader>

			<SectionContent>
				<div className="max-w-186 mx-auto text-center">
					<h2 className="text-[calc(var(--text-3xl)+2px)] text-medium-gray text-balance">
						They took the time to understand our <span className="font-instr text-light-blue italic">challenges</span>, identified our{" "}
						<span className="font-instr text-light-blue italic">target audience</span>, and made our brand shine. Their solutions were very
						effective!
					</h2>
				</div>
			</SectionContent>
		</SectionContainer>
	);
}
