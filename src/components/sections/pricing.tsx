import React from "react";
import { IconTag } from "@tabler/icons-react";
import { SectionHeadingProps } from "@/types";
import { SectionContainer, SectionContent, SectionHeader, SectionHeading } from "../section";

const headingProps: SectionHeadingProps = {
	text: "Flexible Plans for",
	italicText: "Everyone",
	description: "Choose a plan that fits your goals and scale as you grow",
	badgeText: "Pricing",
	badgeIcon: IconTag,
};

export default function Pricing() {
	return (
		<SectionContainer>
			<SectionHeader>
				<SectionHeading {...headingProps} />
			</SectionHeader>

			<SectionContent>
				<div>
					<div className="inset-shadow-1 w-full max-w-85 mx-auto rounded-lg bg-dark-gray p-1 text-sm">
						<button className="h-9.5 px-2 py-1.5 bg-black-base">Monthly</button>
						<button>
							Yearly <span>Save 20%</span>
						</button>
					</div>
				</div>
			</SectionContent>
		</SectionContainer>
	);
}
