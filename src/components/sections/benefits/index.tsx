import React from "react";
import { IconSparkles } from "@tabler/icons-react";
import { HeadingProps } from "@/types";
import { Bar, Card } from "./ui/blocks";
import { SectionContainer, SectionHeader, SectionHeading } from "@/components/ui/blocks";

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
		<SectionContainer id="benefits">
			<SectionHeader>
				<SectionHeading {...headingProps} />
			</SectionHeader>

			<div className="flex w-full flex-wrap items-center gap-[30px] text-center">
				<Card title="Real-Time Intelligience" description="Access accurate, real-time data to drive smarter decisions">
					<div className="absolute top-10.5 left-[calc(50%-(208px/2))] size-52 rounded-[100px] bg-linear-to-b from-dark-gray to-transparent to-28% inset-shadow-[0px_2px_0px_0px] inset-shadow-[#cfe7ff26]">
						<div className="absolute top-1/2 left-1/2 h-[87px] w-4 origin-bottom -translate-x-1/2 -translate-y-full -rotate-[68deg] rounded-[100px] bg-dark-gray transition duration-300 group-hover:rotate-12"></div>
						<div className="absolute top-1/2 left-1/2 size-2.25 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#636996] outline-6 outline-black-base"></div>
					</div>
				</Card>
				<Card title="Measurable Impact" description="Track performance, uncover insights, and achieve data-backed growth">
					<div className="absolute -top-[25px] left-[calc(50%-(220px/2))] flex h-[232px] w-[220px] items-end justify-between">
						<Bar className="h-[79px] group-hover:h-[79px]" />
						<Bar className="h-[111px] group-hover:h-[111px]" />
						<Bar className="h-[102px] group-hover:h-[102px]" />
						<Bar className="h-[119px] group-hover:h-[119px]" />
					</div>
				</Card>
				<Card title="Seamless Integration" description="Connect tools, teams, and workflows with intelligent automation">
					<div></div>
				</Card>
			</div>
		</SectionContainer>
	);
}
