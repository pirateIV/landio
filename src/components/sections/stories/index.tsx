import React from "react";
import Image from "next/image";
import { Icons } from "@/components/icons";
import { SectionContainer, SectionContent, SectionHeader, SectionHeading } from "@/components/ui/blocks";
import Card from "@/components/ui/card";
import { stories } from "@/data/stories";
import type { HeadingProps } from "@/types";

const headingProps: HeadingProps = {
	text: "Success Stories to",
	italicText: "Inspire",
	description: "Discover how businesses and creators achieve results",
	badgeText: "Our clients",
	badgeIcon: Icons.UserCheck,
};

export default function Stories() {
	return (
		<SectionContainer id="stories">
			<SectionHeader>
				<SectionHeading {...headingProps} />
			</SectionHeader>

			<SectionContent className="flex-col gap-11">
				<div className="mx-auto max-w-247.5">
					<div className="pt-25">
						{stories.map((story, idx) => (
							<Card key={idx} className="border-b-1 p-0 pb-10" container>
								<div className="rounded-xl border border-t-0 border-light-blue-muted/20 px-7.5 py-4.5"></div>
								<div className="flex gap-15 px-7.5 pt-7.5">
									<div className="flex-1 space-y-7.5">
										<div className="space-y-3">
											<h3 className="text-[28px]">{story.title}</h3>
											<p className="opacity-60">{story.story}</p>
										</div>
										<div className="flex gap-4 *:flex-1">
											{story.achievements.map((a) => (
												<div key={a.name} className="space-y-3 border border-light-blue-transparent p-5 text-center">
													<p className="text-[32px]">{a.rate}</p>
													<p>{a.name} </p>
												</div>
											))}				
										</div>
									</div>
									<div className="flex-1">
										<Image src={story.image} className="size-full object-cover" width="500" height="500" alt={story.title} />
									</div>
								</div>
							</Card>
						))}
					</div>
				</div>

				<div className="mx-auto max-w-186 text-center">
					<h2 className="text-[calc(var(--text-3xl)+2px)] text-balance text-medium-gray">
						They took the time to understand our <span className="font-instr text-light-blue italic">challenges</span>, identified our{" "}
						<span className="font-instr text-light-blue italic">target audience</span>, and made our brand shine. Their solutions were very
						effective!
					</h2>
				</div>
			</SectionContent>
		</SectionContainer>
	);
}
