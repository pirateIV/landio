import React from "react";
import { IconCube } from "@tabler/icons-react";
import Image from "next/image";
import { SectionContainer, SectionHeader, SectionHeading } from "../section";
import Card from "../ui/card";
import { SectionHeadingProps } from "@/types";

const tabs = [
	{
		name: "Discover & Analyze",
		description:
			"We audit your existing workflows, tools, and customer data to uncover inefficiencies and automation opportunities. Every system is mapped for clarity.",
		image: "",
	},
	{
		name: "Design & Implement",
		description:
			"We create tailored AI workflows that align with your goals. Our team builds, tests, and deploys smart systems that integrate into your operations seamlessly.",
		image: "",
	},
	{
		name: "Optimize & Scale",
		description:
			"We track key metrics and continuously refine performance using real-time insights. As your business evolves, your automation grows with it.",
		image: "",
	},
];

const headingProps: SectionHeadingProps = {
	text: "Our Simple &",
	italicText: "Smart Process",
	description: "Everything you need to collaborate, create, and scale, all in one place.",
	badgeIcon: IconCube,
	badgeText: "Process",
};

function TabButton({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex-1 opacity-50 first-of-type:opacity-100">
			<button className="inset-shadow-1 w-full rounded-lg bg-dark-gray p-[13px] text-xs">{children}</button>
		</div>
	);
}

export default function Process() {
	return (
		<SectionContainer id="process">
			<SectionHeader>
				<SectionHeading {...headingProps} />
			</SectionHeader>

			<Card className="flex-none p-5" container>
				<div className="space-y-5">
					<div className="flex items-center justify-between gap-3">
						<TabButton>STEP 1</TabButton>
						<TabButton>STEP 2</TabButton>
						<TabButton>STEP 3</TabButton>
					</div>

					<div className="grid grid-cols-12 items-center gap-[30px]">
						<div className="col-span-7 aspect-[1.3/1] p-3">
							<div className="relative size-[95%] flex-none overflow-visible">
								<div className="relative flex size-full items-center">
									<Image src="/images/process-design.avif" width="1500" height="1000" alt="optimize and scale illustration" />
								</div>
							</div>
						</div>
						<div className="col-span-5 flex flex-col gap-2.5 p-2.5 pb-5">
							<div>01</div>
							<h3 className="text-lg">Optimize & Scale</h3>
							<p className="text-light-blue opacity-60">
								We track key metrics and continuously refine performance using real-time insights. As your business evolves, your automation
								grows with it.
							</p>
						</div>
					</div>
				</div>
			</Card>
		</SectionContainer>
	);
}
