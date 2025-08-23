import React from "react";
import { Button, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { IconChevronDown, IconHelp } from "@tabler/icons-react";
import {SectionContainer, SectionHeader, SectionHeading, SectionHeadingProps } from "../section";
import Card from "../ui/card";

type FaqItem = {
	id: string;
	question: string;
	answer: string;
};

const faqs: FaqItem[] = [
	{
		id: "automation-types",
		question: "What types of processes can you automate?",
		answer: "We specialize in automating repetitive workflows across operations, marketing, sales, and customer support using AI and custom logic.",
	},
	{
		id: "technical-knowledge",
		question: "Do I need technical knowledge to use your service?",
		answer: "Not at all. Our team handles the setup, integration, and optimization. You just focus on your goals — we’ll automate the rest.",
	},
	{
		id: "integrations",
		question: "Can you integrate with our existing tools?",
		answer: "Yes! We support integrations with CRMs, project management tools, communication apps, and more — tailored to your stack.",
	},
	{
		id: "implementation-time",
		question: "How long does the implementation take?",
		answer: "Most clients see their first automation live within 1–2 weeks, depending on complexity and the number of workflows.",
	},
	{
		id: "security-compliance",
		question: "Is your AI secure and compliant?",
		answer: "Absolutely. We use enterprise-grade security practices and ensure compliance with major data privacy standards like GDPR.",
	},
];

const headingProps: SectionHeadingProps = {
	text: "Frequently Asked",
	italicText: "Questions",
	description: "Find quick answers to the most common support questions",
	badgeText: "FAQ's",
	badgeIcon: IconHelp,
};

export default function Faqs() {
	return (
		<SectionContainer id="faqs">
			<SectionHeader>
				<SectionHeading {...headingProps} />
			</SectionHeader>

			<div className="mx-auto flex w-full max-w-[1000px] flex-row-reverse items-start gap-8 *:w-full *:max-w-[600px]">
				{/* FAQ Items */}
				<div className="flex-[2_0_0px] space-y-4">
					{faqs.map((faq) => (
						<Disclosure key={faq.id} as="div" className="inset-shadow-2 space-y-2 rounded-[10px] px-4 py-3" id={faq.id}>
							<DisclosureButton className="group flex w-full items-center justify-between">
								<span className="text-light-blue">{faq.question}</span>
								<IconChevronDown size="20" className="text-light-blue group-data-open:rotate-180" />
							</DisclosureButton>
							<DisclosurePanel className="text-light-blue opacity-60">{faq.answer}</DisclosurePanel>
						</Disclosure>
					))}
				</div>

				{/* Contact card */}
				<Card className="h-min flex-[1_0_0px] p-5" container>
					<div className="flex flex-col items-center gap-4 text-center">
						<div className="inset-shadow-1 rounded-lg bg-black-base p-3">
							<IconHelp size="32" />
						</div>
						<div className="space-y-2.5">
							<h3 className="text-xl font-medium">Still Have Questions?</h3>
							<p className="text-light-blue opacity-60">Still have questions? Feel free to get in touch with us today!</p>
						</div>
						<div>
							<Button className="flex items-center gap-1.5 rounded-lg border border-light-blue-transparent bg-gradient-to-b from-light-blue-transparent to-dark-gray px-5 py-2 text-sm">
								<div className="size-5 text-white" data-icon="arrow-up-right" />
								<span>Ask a Question</span>
							</Button>
						</div>
					</div>
				</Card>
			</div>
		</SectionContainer>
	);
}
