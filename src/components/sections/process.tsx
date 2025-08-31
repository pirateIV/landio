"use client";

import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { IconCube } from "@tabler/icons-react";
import Image from "next/image";
import { HeadingProps } from "@/types";
import { cx } from "@/utils/cx";
import { SectionContainer, SectionHeader, SectionHeading } from "../ui/blocks";
import Card from "../ui/card";

const tabs = [
	{
		name: "Discover & Analyze",
		description:
			"We audit your existing workflows, tools, and customer data to uncover inefficiencies and automation opportunities. Every system is mapped for clarity.",
		image: "/images/process-discover.avif",
	},
	{
		name: "Design & Implement",
		description:
			"We create tailored AI workflows that align with your goals. Our team builds, tests, and deploys smart systems that integrate into your operations seamlessly.",
		image: "/images/process-design.avif",
	},
	{
		name: "Optimize & Scale",
		description:
			"We track key metrics and continuously refine performance using real-time insights. As your business evolves, your automation grows with it.",
		image: "/images/process-scale.avif",
	},
];

const headingProps: HeadingProps = {
	text: "Our Simple &",
	italicText: "Smart Process",
	description: "Everything you need to collaborate, create, and scale, all in one place.",
	badgeIcon: IconCube,
	badgeText: "Process",
};

const TabButton = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<"button">>(function ({ className, ...props }, ref) {
	return <button ref={ref} className={cx("inset-shadow-1 w-full rounded-lg bg-dark-gray p-[13px] text-xs", className)} {...props} />;
});

export default function Process() {
	const [selectedTab, setSelectedTab] = useState(0);
	return (
		<SectionContainer id="process">
			<SectionHeader>
				<SectionHeading {...headingProps} />
			</SectionHeader>

			<Card className="flex-none p-5" container>
				<TabGroup selectedIndex={selectedTab} onChange={setSelectedTab} className="space-y-5">
					<TabList className="flex items-center justify-between gap-3">
						{tabs.map((_, idx) => (
							<Tab key={idx} as={TabButton} className="opacity-50 data-selected:opacity-100">
								STEP {idx + 1}
						</Tab>
						))}
					</TabList>

					<TabPanels className="grid grid-cols-12 items-center gap-[30px]">
						{tabs.map((tab, index) => (
							<TabPanel key={tab.name} className="contents">
								<div className="col-span-7 aspect-[1.3/1] p-3">
									<div className="relative size-[95%] flex-none overflow-visible">
										<div className="relative flex size-full items-center">
											<Image src={tab.image} width="1500" height="1000" alt="optimize and scale illustration" />
										</div>
									</div>
								</div>
								<div className="col-span-5 flex flex-col gap-2.5 p-2.5 pb-5">
									<p className="text-medium-gray">0{index + 1}</p>
									<h3 className="text-lg">{tab.name}</h3>
									<p className="text-light-blue opacity-60">{tab.description}</p>
								</div>
							</TabPanel>
						))}
					</TabPanels>
				</TabGroup>
			</Card>
		</SectionContainer>
	);
}
