import React from "react";
import { IconCube } from "@tabler/icons-react";
import { SectionHeadingProps } from "@/types";
import { SectionContainer, SectionContent, SectionHeader, SectionHeading } from "../section";
import Card from "../ui/card";

const headingProps: SectionHeadingProps = {
	text: "All features in",
	italicText: "one place",
	description: "Everything you need to automate operations, boost productivity",
	badgeText: "Features",
	badgeIcon: IconCube,
};

const features = [
	{ name: "Workflow Automation", description: "Automate complex business processes to boost speed, clarity, and efficiency." },
	{ name: "Custom AI Solutions", description: "Build tailored AI systems that align with your business goals and challenges." },
	{ name: "AI Assistant", description: "Deploy intelligent virtual agents to streamline tasks." },
	{ name: "Sales & Marketing", description: "Leverage AI to optimize campaigns, track leads, and personalize outreach." },
	{ name: "Performance Tracking", description: "Track automation results in real time to improve and scale your workflows." },
	{ name: "Seamless Integrations", description: "Connect your tools and apps for smooth, unified AI-powered workflows." },
];

export default function Features() {
	return (
		<SectionContainer>
			<SectionHeader>
				<SectionHeading {...headingProps} />
			</SectionHeader>

			<SectionContent>
				<div className="flex flex-wrap gap-7.5">
					{features.map((feature) => (
						<Card key={feature.name} className="min-w-75 flex-[1_0_0px] text-center">
							<div className="space-y-2.5">
								<p className="text-xl font-medium">{feature.name}</p>
								<p className="opacity-60">{feature.description}</p>
							</div>
						</Card>
					))}
				</div>
			</SectionContent>
		</SectionContainer>
	);
}
