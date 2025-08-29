import React from "react";
import { IconCheck, IconTag } from "@tabler/icons-react";
import { SectionHeadingProps } from "@/types";
import { Icons } from "../icons";
import { Container, Content, Header, Heading } from "../section";
import Button from "../ui/button";
import Card from "../ui/card";

const pricingPlans = [
	{
		name: "Starter",
		price: "$50",
		features: ["3 Automated Workflows", "Basic AI Assistant Access", "Email + Slack Integration", "Monthly Performance Reports", "Email Support"],
	},
	{
		name: "Pro",
		price: "$90",
		isPopular: true,
		features: [
			"10+ Automated Workflows",
			"Advanced AI Assistant Features",
			"Bi-Weekly Strategy Reviews",
			"CRM + Marketing Tool Integrations",
			"Priority Support",
		],
	},
	{
		name: "Enterprise",
		price: "Custom",
		features: [
			"Unlimited Custom Workflows",
			"Dedicated AI Strategist",
			"API & Private Integrations",
			"Real-Time Performance Dashboards",
			"24/7 Premium Support + SLA",
		],
	},
];

const headingProps: SectionHeadingProps = {
	text: "Flexible Plans for",
	italicText: "Everyone",
	description: "Choose a plan that fits your goals and scale as you grow",
	badgeText: "Pricing",
	badgeIcon: IconTag,
};

export default function Pricing() {
	return (
		<Container>
			<Header>
				<Heading {...headingProps} />
			</Header>

			<Content className="flex-col gap-8">
				<div>
					<div className="inset-shadow-1 mx-auto flex w-full max-w-85 items-center rounded-lg bg-dark-gray p-1 text-sm *:text-sm/5.5">
						<button className="h-9.5 flex-1 rounded-md bg-black-base px-2 py-1.5 font-medium">Monthly</button>
						<button className="inline-flex h-9.5 flex-[1.5] items-center justify-center gap-2 rounded-md font-medium">
							Yearly <span className="rounded-full bg-black-base px-2.5 py-0.5">Save 20%</span>
						</button>
					</div>
				</div>

				<div className="flex flex-wrap items-center justify-center gap-7.5">
					{pricingPlans.map((plan, idx) => (
						<Card key={plan.name} container className="max-w-110 min-w-70 gap-6 px-6 py-8">
							<h3 className="inline-flex items-center gap-2 font-semibold text-white">
								<span>{plan.name}</span>
								{plan.name === "Pro" && (
									<span className="inline-flex items-center gap-2.5 rounded-[22px] bg-black-base px-2 pt-1.25 pb-1.5 text-sm font-medium inset-shadow-[0px_1px_1px_0px] inset-shadow-[#cfe7ff33]">
										<Icons.Fire size="20" /> <span>Popular</span>
									</span>
								)}
							</h3>
							<p className="space-y-1.5 leading-[-0.02em]">
								<span className="text-[calc(var(--text-5xl)-4px)] font-semibold">{plan.price}</span>{" "}
								<span className="text-sm text-light-blue opacity-80">{idx < 2 && "/month"}</span>
							</p>

							<Button className="text-center" shadow={idx === 1}>
								Get Started
							</Button>

							<div className="w-full border-t-[3px] border-dotted border-light-blue-transparent" />

							<ul className="space-y-4">
								{plan.features.map((feature, idx) => (
									<li key={idx} className="inline-flex items-center gap-2">
										<IconCheck size="16" opacity="0.5" /> <p className="opacity-80">{feature}</p>
									</li>
								))}
							</ul>
						</Card>
					))}
				</div>

				<div className="flex items-center justify-center">
					<div className="mx-auto flex max-w-[500px] gap-4 rounded-lg bg-dark-gray px-3 py-1.5">
						<Icons.PalmArrowDown />
						<p className="pe-1.5">We donate 2% of your membership to pediatric wellbeing</p>
					</div>
				</div>
			</Content>
		</Container>
	);
}
