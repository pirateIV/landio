import React from "react";
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconUsersGroup, type TablerIcon } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import type { SectionHeadingProps, SocialLinkProps } from "@/types";
import { Container, Content, Header, Heading } from "../section";
import Card from "../ui/card";
import IconBadge from "../ui/icon-badge";

const team = [
	{
		name: "Ikta Sollork",
		role: "Founder / Data Analyst",
		image: "avatar-02.png",
		width: 1792,
		height: 2688
	},
	{
		name: "Gwen chase",
		role: "AI Strategist",
		image: "avatar-03.png",
		width: 1792,
		height: 2688
	},
	{
		name: "James Bond",
		role: "Automation Engineer",
		image: "avatar-04.jpg",
		width: 1984,
		height: 1893
	},
	{
		name: "Jan Wink",
		role: "Integration Specialist",
		image: "avatar-06.png",
		width: 1792,
		height: 2688
	},
	{
		name: "Jenny Will",
		role: "SEO / Others",
		image: "avatar-05.png",
		width: 1920,
		height: 2400
	},
	{
		name: "Lilli Math",
		role: "Client Manager",
		image: "avatar-07.jpg",
		width: 1536,
		height: 1536
	},
];

const headingProps: SectionHeadingProps = {
	text: "Get to Know",
	italicText: "Us",
	description: "Everything you need to collaborate, create, and scale, all in one place.",
	badgeText: "Our Amazing Team",
	badgeIcon: IconUsersGroup,
};

const socials: SocialLinkProps = [
	{ website: "https://x.com", icon: IconBrandX },
	{ website: "https://instagram.com", icon: IconBrandInstagram },
	{ website: "https://linkedin.com", icon: IconBrandLinkedin },
];

export default function Team() {
	return (
		<Container className="md:*:max-w-202.5 md:*:lg:max-w-300" id="team">
			<Header>
				<Heading {...headingProps} />
			</Header>

			<Content>
				<div className="flex flex-wrap justify-center gap-6 min-[39.75rem]:gap-2 md:gap-6">
					{team.map((member) => (
						<Card key={member.name} className="w-full max-w-150 min-w-75 p-8" container>
							<div className="flex w-full max-w-full items-center justify-center gap-6">
								<div className="flex-1 space-y-4">
									<div className="space-y-2">
										<p className="text-lg leading-tight font-medium">{member.name}</p>
										<p className="text-sm opacity-60">{member.role}</p>
									</div>
									<div className="flex items-center gap-3">
										{socials.map((link, index) => (
											<Link key={index} href={link.website}>
												<IconBadge size="18" icon={link.icon} />
											</Link>
										))}
									</div>
								</div>
								<div className="size-full flex-[1_0_0px] aspect-[1.08/1]">
									<div className="relative flex items-center justify-center h-full overflow-hidden rounded-lg">
										<Image
											width={member.width}
											height={member.height}
											className="object-cover object-center"
											src={`/images/${member.image}`}
											alt={`${member.name} profile image`}
											sizes="max((max(min(min(min(100vw, 810px) - 80px, 1200px), 600px), 300px) - 89px) / 2, 1px)"
										/>
									</div>
								</div>
							</div>
						</Card>
					))}
				</div>
			</Content>
		</Container>
	);
}
