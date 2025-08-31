import React from "react";
import { IconPhone } from "@tabler/icons-react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import Faqs from "@/components/sections/faqs";
import { SectionContainer, SectionContent, SectionHeader, SectionHeading } from "@/components/ui/blocks";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import IconBadge from "@/components/ui/icon-badge";
import { HeadingProps } from "@/types";

const headingProps: HeadingProps = {
	text: "Reach Us",
	italicText: "Anytime",
	description: "Have questions or need help? We’re here for you",
	badgeText: "Contact",
	badgeIcon: IconPhone,
};

export default function ContactPage() {
	return (
		<>
			<SectionContainer variant="container">
				<SectionHeader>
					<SectionHeading {...headingProps} />
				</SectionHeader>

				<SectionContent className="max-w-250">
					<div className="flex gap-8 *:flex-1">
						<div className="space-y-8">
							<Card container className="p-8">
								<div className="flex flex-col gap-4">
									<div className="flex items-center gap-2.5">
										<IconBadge icon={Icons.Envelope} size="32" />
										<p className="text-xl font-semibold">Email Us</p>
									</div>
									<p className="opacity-80">Facing technical challenges or product concerns? We’re here to assist</p>
									<Link href="mailto:landio@support.com" className="underline">
										landio@support.com
									</Link>
								</div>
							</Card>

							<Card container className="p-8">
								<div className="flex flex-col gap-4">
									<div className="flex items-center gap-2.5">
										<IconBadge icon={Icons.UserContact} size="32" />
										<p className="text-xl font-semibold">Contact Sales</p>
									</div>
									<p className="opacity-80">Let’s collaborate on custom solutions or discuss product insights</p>
									<Link href="https://calendly.com/" className="underline">
										Book a call
									</Link>
								</div>
							</Card>
						</div>

						<Card container className="flex flex-col gap-8">
							<div className="">
								<IconBadge icon={Icons.MicHeadphone} size="32" className="mx-auto w-fit" />
								<p className="text-center text-xl font-semibold">We’d love to help! Let us know how</p>
							</div>

							<form className="space-y-5 [&_input]:text-sm">
								<label className="flex flex-col gap-1">
									<span className="text-sm font-medium opacity-80">Full Name</span>
									<input
										type="text"
										placeholder="Ikta Sollork"
										className="block w-full rounded-lg border border-light-blue-transparent p-3"
									/>
								</label>
								<label className="flex flex-col gap-1">
									<span className="text-sm font-medium opacity-80">Email Address</span>
									<input
										type="text"
										placeholder="landio@support.com"
										className="block w-full rounded-lg border border-light-blue-transparent p-3"
									/>
								</label>
								<label className="flex flex-col gap-1">
									<span className="text-sm font-medium opacity-80">Subject of Interest</span>
									<input
										type="text"
										placeholder="Regarding Product"
										className="block w-full rounded-lg border border-light-blue-transparent p-3"
									/>
								</label>
								<Button className="[&_[data-icon]]:hidden">Send A Message</Button>
							</form>
						</Card>
					</div>
				</SectionContent>
			</SectionContainer>
			<Faqs />
		</>
	);
}
