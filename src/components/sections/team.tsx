import React from "react";
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconUsersGroup, type TablerIcon } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import type { SectionHeadingProps } from "@/types";
import { SectionContainer, SectionContent, SectionHeader, SectionHeading } from "../section";
import Card from "../ui/card";
import IconBadge from "../ui/icon-badge";

const team = [
	{
		name: "Ikta Sollork",
		role: "Founder / Data Analyst",
		image: "avatar-02.png",
	},
	{
		name: "Gwen chase",
		role: "AI Strategist",
		image: "avatar-03.png",
	},
	{
		name: "James Bond",
		role: "Automation Engineer",
		image: "avatar-04.jpg",
	},
	{
		name: "Jenny Will",
		role: "SEO / Others",
		image: "avatar-05.png",
	},
	{
		name: "Jan Wink",
		role: "Integration Specialist",
		image: "avatar-06.png",
	},
	{
		name: "Lilli Math",
		role: "Client Manager",
		image: "avatar-07.jpg",
	},
];

const headingProps: SectionHeadingProps = {
	text: "Get to Know",
	italicText: "Us",
	description: "Everything you need to collaborate, create, and scale, all in one place.",
	badgeText: "Our Amazing Team",
	badgeIcon: IconUsersGroup,
};

const socials: { website: string; icon: TablerIcon }[] = [
	{ website: "https://x.com", icon: IconBrandX },
	{ website: "https://instagram.com", icon: IconBrandInstagram },
	{ website: "https://linkedin.com", icon: IconBrandLinkedin },
];

export default function Team() {
	return (
		<SectionContainer aria-label="About us" id="team">
			<SectionHeader>
				<SectionHeading {...headingProps} />
			</SectionHeader>

			<SectionContent>
				<div className="flex h-min flex-wrap items-center justify-center gap-[30px]">
					{team.map((member) => (
						<Card key={member.name} className="max-w-[600px] min-w-[300px] p-8" container>
							<div className="flex flex-[1_0_0px] items-center justify-between gap-[25px] *:w-1/2">
								<div className="space-y-6">
									<div className="space-y-2">
										<p className="leading-[1.2em]">{member.name}</p>
										<p className="text-xs opacity-60">{member.role}</p>
									</div>
									<div className="flex items-center gap-2">
										{socials.map((social, index) => (
											<Link key={index} href={social.website}>
												<IconBadge size="16" icon={social.icon} />
											</Link>
										))}
									</div>
								</div>
								<div className="rounded-lg">
									<Image
										width="145"
										height="133"
										className="aspect-square rounded-lg object-cover"
										src={`/images/${member.image}`}
										alt={`${member.name} profile image`}
									/>
								</div>
							</div>
						</Card>
					))}
				</div>
			</SectionContent>
		</SectionContainer>
	);
}
