type FaqItem = {
	id: string;
	question: string;
	answer: string;
};

export const faqs: FaqItem[] = [
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
