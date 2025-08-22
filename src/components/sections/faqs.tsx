import React, { useState } from "react";
import { IconCircleLetterQ, IconMessage, IconQuestionMark } from "@tabler/icons-react";
import { InfoCircle, MessageCircle01 } from "@untitledui/icons";
import SectionContainer from "../section-container";
import Badge from "../ui/badge";
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

export default function Faqs() {
	const [openItems, setOpenItems] = useState<string[]>([]);

	const toggleItem = (itemId: string) => {
		setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]));
	};

	return (
		<SectionContainer>
			<div className="mx-auto flex max-w-[640px] flex-col items-center gap-2.5 text-center">
				<Badge text="Process" icon={IconMessage} />
				<h1 className="text-[44px]">
					Frequently Asked <span className="font-instr italic">Questions</span>
				</h1>
				<p className="text-light-blue">Find quick answers to the most common support questions</p>
			</div>

			<div className="mx-auto flex max-w-[1000px] w-full gap-8 *:max-w-[600px] *:w-full">
				{/* More Questions */}
				<Card className="p-5 flex-[1_0_0px]" container>
					<div className="flex flex-col items-center gap-4 text-center">
						<div className="rounded-lg bg-black-base p-3 inset-shadow-[0px_1px_1px_0px] inset-shadow-[#cfe7ff33]">
							<IconCircleLetterQ size="24" />
						</div>
						<div className="space-y-2.5">
							<h3 className="text-xl font-medium">Still Have Questions?</h3>
							<p className="text-light-blue opacity-60">Still have questions? Feel free to get in touch with us today!</p>
						</div>
						<div>
							<button>
								<div data-icon="arrow-up-right" />
								<span>Ask a Question</span>
							</button>
						</div>
					</div>

				</Card>
					<div className="space-y-4 flex-[2_0_0px]">
						{faqs.map((faq) => (
							<div></div>
						))}
					</div>
			</div>
		</SectionContainer>
	);
}

//  inset;
