import React from "react";
import { IconSparkles } from "@tabler/icons-react";
import { SectionContainer, SectionHeader, SectionHeading, SectionHeadingProps } from "@/components/section";
import { Card } from "./card";

// const cards = [
// 	{
// 		title: "Real-Time Intelligience",
// 		description: "Access accurate, real-time data to drive smarter decisions",
// 	},
// 	{
// 		title: "Measurable Impact",
// 		description: "Track performance, uncover insights, and achieve data-backed growth",
// 	},
// 	{
// 		title: "Seamless Integration",
// 		description: "Connect tools, teams, and workflows with intelligent automation",
// 	},
// ];

const headingProps: SectionHeadingProps = {
	text: "Why Choose",
	italicText: "Us?",
	description: "Everything you need to automate, optimize, and scale",
	badgeText: "Benefits",
	badgeIcon: IconSparkles,
};

export default function Benefits() {
	return (
		<SectionContainer id="benefits">
			<SectionHeader>
				<SectionHeading {...headingProps} />
			</SectionHeader>

			<div className="flex w-full flex-wrap items-center gap-[30px]">
				<Card title="Real-Time Intelligience" description="Access accurate, real-time data to drive smarter decisions">
					<div className="absolute size-52"></div>
				</Card>
				<Card title="Measurable Impact" description="Track performance, uncover insights, and achieve data-backed growth">
					<div></div>
				</Card>
				<Card title="Seamless Integration" description="Connect tools, teams, and workflows with intelligent automation">
					<div></div>
				</Card>
			</div>
		</SectionContainer>
	);
}
