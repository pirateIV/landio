import React from "react";
import { IconChartPie, IconCheck, IconStack2, IconX } from "@tabler/icons-react";
import Image from "next/image";
import type { SectionHeadingProps } from "@/types";
import { SectionContainer, SectionHeader, SectionHeading } from "../section";
import Card from "../ui/card";

const tables = {
	landio: [
		"Fast setup with ready AI workflows",
		"Built to grow and adapt with you",
		"Real-time, AI-powered analytics",
		"Automates tasks, reducing overhead",
		"Expert support + AI guidance",
	],
	others: [
		"Slower execution and manual setup",
		"Requires manual updates as you scale",
		"Limited or delayed reporting",
		"Higher labor costs, less automation",
		"Generic support or none at all",
	],
};

const headingProps: SectionHeadingProps = {
	text: "Why Choose Us",
	italicText: "Over Others?",
	description: "See how we compare against others in performance, growth",
	badgeText: "Comparison",
	badgeIcon: IconChartPie,
};

export default function Comparison() {
	return (
		<SectionContainer id="section-content">
			<SectionHeader>
				<SectionHeading {...headingProps} />
			</SectionHeader>

			{/* Comparison Tables */}
			<div className="flex items-center gap-4">
				<div className="w-full space-y-2">
					<div className="flex h-[62px] items-center justify-center">
						<div className="h-[39px] w-[103px]">
							<Image width="163" height="62" alt="logo" src="logo.svg" />
						</div>
					</div>
					<Card className="inset-shadow-2" container>
						<ul>
							{tables.landio.map((data, index) => (
								<React.Fragment key={index}>
									<li key={index} className="flex items-center gap-2.5">
										<span>
											<IconCheck size="19" />
										</span>
										<span>{data}</span>
									</li>
									<div className="my-3.5 h-px bg-gradient-to-r from-[#fff0] via-[#ffffff26] to-[#fff0] last:hidden"></div>
								</React.Fragment>
							))}
						</ul>
					</Card>
				</div>

				<div className="w-full space-y-2">
					<div className="flex h-[62px] items-center justify-center gap-2.5">
						<IconStack2 size="24" />
						<span className="font-instr text-2xl italic">Others</span>
					</div>
					<Card className="inset-shadow-2" container>
						<ul className="*:opacity-50 *:first:opacity-70">
							{tables.others.map((data, index) => (
								<React.Fragment key={index}>
									<li key={index} className="flex items-center gap-2.5">
										<span className="opacity-100 brightness-200">
											<IconX size="19" />
										</span>
										<span>{data}</span>
									</li>
									<div className="my-3.5 h-px bg-gradient-to-r from-[#fff0] via-[#ffffff26] to-[#fff0] last:hidden"></div>
								</React.Fragment>
							))}
						</ul>
					</Card>
				</div>
			</div>
		</SectionContainer>
	);
}
