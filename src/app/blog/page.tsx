import React from "react";
import { IconScript } from "@tabler/icons-react";
import Image from "next/image";
import { Container, Content, Header, Heading } from "@/components/ui/blocks";
import Card from "@/components/ui/card";
import { HeadingProps } from "@/types";
import { blogs } from "./blogs";

export const headingProps: HeadingProps = {
	text: "Latest News",
	italicText: "Articles",
	description: "Stay up to date with the latest improvements and new features",
	badgeText: "Blog Posts",
	badgeIcon: IconScript,
};

export default function BlogPage() {
	return (
		<Container className="!px-4.5 !pt-30 !pb-20 md:!px-10 md:!pt-40 md:!pb-30">
			<Header>
				<Heading {...headingProps} />
			</Header>

			<Content className="grid gap-13.5 md:grid-cols-[repeat(2,minmax(50px,1fr))]">
				{blogs.map((blog, idx) => (
					<Card key={idx} className="border px-6 py-8 md:px-11 md:py-12" container>
						<div className="flex flex-col gap-7.5">
							<div className="flex flex-col gap-5">
								<div className="flex items-center justify-between">
									<div className="rounded-md bg-dark-gray px-5 py-1.5 font-medium inset-shadow-[0px_2px_1px_0px] inset-shadow-[#cfe7ff33]">
										{blog.tag}
									</div>
									<div className="text-sm opacity-50">{blog.date}</div>
								</div>
								<div className="space-y-4">
									<h3 className="text-[calc(var(--text-2xl)-2px)] leading-[120%] font-medium tracking-tight lg:text-[calc(var(--text-3xl)-2px)]">
										{blog.title}
									</h3>
									<p className="line-clamp-2 text-light-blue-muted">{blog.description}</p>
								</div>
							</div>
							<div className="relative aspect-[2.15/1] overflow-hidden rounded-lg border border-light-blue-transparent">
								<div className="absolute inset-px">
									<Image
										src={blog.image}
										className="size-full object-cover"
										sizes="calc(max(max((min(min(max(100vw - 80px, 1px), 1100px), 1200px) - 54px) / 2, 50px) - 2px, 1px) - 88px)"
										fill
										alt=""
									/>
								</div>
							</div>
						</div>
					</Card>
				))}
			</Content>
		</Container>
	);
}
