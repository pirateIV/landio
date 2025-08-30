import React from "react";
import { Button, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { IconChevronDown, IconHelp } from "@tabler/icons-react";
import { Container, Header, Heading } from "@/components/ui/blocks";
import Card from "@/components/ui/card";
import IconBadge from "@/components/ui/icon-badge";
import type { HeadingProps } from "@/types";
import { faqs } from "./faqs";

const headingProps: HeadingProps = {
	text: "Frequently Asked",
	italicText: "Questions",
	description: "Find quick answers to the most common support questions",
	badgeText: "FAQ's",
	badgeIcon: IconHelp,
};

export default function Faqs() {
	return (
		<Container id="faqs">
			<Header>
				<Heading {...headingProps} />
			</Header>

			<div className="mx-auto max-w-250 w-full">
				<div className="flex w-full flex-row-reverse items-center gap-8 *:max-w-150 max-md:flex-col-reverse md:items-start">
					{/* FAQ Items */}
					<div className="space-y-4 md:flex-[2_0_0px]">
						{faqs.map((faq) => (
							<Disclosure
								key={faq.id}
								as="div"
								className="inset-shadow-2 space-y-2 rounded-[10px] border border-light-blue-transparent p-3 md:px-4 md:py-3"
								id={faq.id}
							>
								<DisclosureButton className="group flex w-full items-center justify-between text-start">
									<span className="text-light-blue max-[27.5rem]:text-[15px]">{faq.question}</span>
									<IconChevronDown size="20" className="text-light-blue group-data-open:rotate-180" />
								</DisclosureButton>
								<DisclosurePanel className="text-light-blue opacity-60 max-[27.5rem]:text-[15px]">{faq.answer}</DisclosurePanel>
							</Disclosure>
						))}
					</div>

					{/* Contact card */}
					<Card className="flex-none p-5 md:flex-[1_0_0px]" container>
						<div className="flex h-full flex-col items-center gap-4 text-center">
							<IconBadge size="32" icon={IconHelp} />
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
			</div>
		</Container>
	);
}
