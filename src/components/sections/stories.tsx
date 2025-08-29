import React from "react";
import { IconUserCheck } from "@tabler/icons-react";
import type { SectionHeadingProps } from "@/types";
import { Icons } from "../icons";
import { Container, Content, Header, Heading } from "../section";

const stories = [
	{
		title: "Max's SaaS Revolution",
		story: "Max, the founder of CloudFlow, implemented AI automation in their processes. This move slashed operational costs by 50% and boosted team productivity by 75%, empowering the company to accelerate growth and expand faster.",
		image: "/images/max-saas.jpg",
		achievements: [
			{ name: " increase in ROI", rate: "60%" },
			{ name: "bost in revenue", rate: "45%" },
		],
		quote: "They took the time to understand our challenges, identified our target audience, and made our brand shine. Their solutions were very effective!",
	},
	{
		title: "Emily's E-commerce Success",
		story: "Emily, the CEO of BloomTech, transformed their marketing efforts using AI-powered tools. This shift resulted in a 60% increase in ROI and a 45% improvement in customer personalization, leading to a surge in brand loyalty",
		image: "/images/max-saas.jpg",
		achievements: [
			{ name: "growth in sales", rate: "70%" },
			{ name: "rise in engagement", rate: "50%" },
		],
		quote: "They grasped our pain points, knew exactly who we needed to reach, and helped us stand out. Their solutions delivered real, impactful results!",
	},
	{
		title: "Sophia's Retail Breakthrough",
		story: "Sophia, the marketing lead at Trendify, used AI-driven analytics to dive deep into customer behavior. The insights led to a 40% increase in engagement and a 30% rise in repeat purchases, creating long-term customer relationships.",
		image: "/images/max-saas.jpg",
		achievements: [
			{ name: "gain in retention", rate: "40%" },
			{ name: "surge in profit", rate: "50%" },
		],
		quote: "They listened to our needs, focused on our audience, and gave our brand a competitive edge. Their approach was strategic and highly effective!",
	},
];

const headingProps: SectionHeadingProps = {
	text: "Success Stories to",
	italicText: "Inspire",
	description: "Discover how businesses and creators achieve results",
	badgeText: "Our clients",
	badgeIcon: Icons.UserCheck,
};

export default function Stories() {
	return (
		<Container id="stories">
			<Header>
				<Heading {...headingProps} />
			</Header>

			<Content>
				<div className="mx-auto max-w-186 text-center">
					<h2 className="text-[calc(var(--text-3xl)+2px)] text-balance text-medium-gray">
						They took the time to understand our <span className="font-instr text-light-blue italic">challenges</span>, identified our{" "}
						<span className="font-instr text-light-blue italic">target audience</span>, and made our brand shine. Their solutions were very
						effective!
					</h2>
				</div>
			</Content>
		</Container>
	);
}
