import React from "react";
import { IconCube } from "@tabler/icons-react";
import { HeadingProps } from "@/types";
import { Icons } from "../../icons";
import { SectionContainer, SectionContent, SectionHeader, SectionHeading } from "@/components/ui/blocks";
import Card from "../../ui/card";

const headingProps: HeadingProps = {
	text: "All features in",
	italicText: "one place",
	description: "Everything you need to automate operations, boost productivity",
	badgeText: "Features",
	badgeIcon: IconCube,
};

const features = [
	{
		name: "Workflow Automation",
		description: "Automate complex business processes to boost speed, clarity, and efficiency.",
		icons: { icon1: Icons.ArrowCircle, icon2: Icons.Brain },
	},
	{
		name: "Custom AI Solutions",
		description: "Build tailored AI systems that align with your business goals and challenges.",
		icons: { icon1: Icons.Sliders, icon2: Icons.Gears },
	},
	{
		name: "AI Assistant",
		description: "Deploy intelligent virtual agents to streamline tasks.",
		icons: { icon1: Icons.Robot, icon2: Icons.Sparkles },
	},
	{
		name: "Sales & Marketing",
		description: "Leverage AI to optimize campaigns, track leads, and personalize outreach.",
		icons: { icon1: Icons.ArrowsOut, icon2: Icons.PieChartSlice },
	},
	{
		name: "Performance Tracking",
		description: "Track automation results in real time to improve and scale your workflows.",
		icons: { icon1: Icons.TrendingUp, icon2: Icons.BarGraph },
	},
	{
		name: "Seamless Integrations",
		description: "Connect your tools and apps for smooth, unified AI-powered workflows.",
		icons: { icon1: Icons.Plug, icon2: Icons.Database },
	},
];

export default function Features() {
	return (
		<SectionContainer id="features">
			<SectionHeader>
				<SectionHeading {...headingProps} />
			</SectionHeader>

			<SectionContent>
				<div className="flex flex-wrap gap-7.5">
					{features.map((feature) => (
						<Card
							key={feature.name}
							title={feature.name}
							description={feature.description}
							className="min-w-75 flex-[1_0_0px] gap-6.25 text-center data-name=content:gap-2.5"
						>
							<div className="inset-shadow-1 relative h-40 overflow-hidden rounded-lg border border-light-blue-transparent">
								<div className="absolute top-1/2 left-1/2 flex -translate-1/2 cursor-grab items-center gap-2.5 rounded-lg bg-dark-gray p-3 inset-shadow-[0px_1px_1px_0px] inset-shadow-[#cfe7ff33] [&_[data-icon]]:opacity-50 [&_svg]:opacity-50">
									<feature.icons.icon1 />
									<div className="h-9.5 w-px bg-light-blue-transparent" />
									<feature.icons.icon2 />
								</div>
								<div className="pointer-events-none absolute top-0 right-0 z-1 h-76.5 w-109.25 bg-[radial-gradient(50%_50%_at_93.7%_8.1%,var(--color-medium-gray,#b8c7d9)_0%,#04070d00_100%)] opacity-10" />
							</div>
						</Card>
					))}
				</div>
			</SectionContent>
		</SectionContainer>
	);
}
