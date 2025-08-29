import React from "react";
import { IconSparkles } from "@tabler/icons-react";
import { Container, Header, Heading } from "@/components/ui/blocks";
import { Card } from "./card";
import { HeadingProps } from "@/types";

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

const headingProps: HeadingProps = {
	text: "Why Choose",
	italicText: "Us?",
	description: "Everything you need to automate, optimize, and scale",
	badgeText: "Benefits",
	badgeIcon: IconSparkles,
};

export default function Benefits() {
	return (
		<Container id="benefits">
			<Header>
				<Heading {...headingProps} />
			</Header>

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
		</Container>
	);
}
