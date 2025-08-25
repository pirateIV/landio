import React from "react";
import { IconHeartFilled } from "@tabler/icons-react";
import { log } from "console";
import Image from "next/image";
import type { SectionHeadingProps } from "@/types";
import { SectionContainer, SectionContent, SectionHeader, SectionHeading } from "../section";
import Card from "../ui/card";

const testimonials = [
	{
		name: "Daniel Kim",
		role: "Operations Lead at Flowbyte",
		image: "avatar-08.jpg",
		review: "Truly impressive. The AI assistant is fast, accurate, and blends into our daily ops without friction.",
	},
	{
		name: "Priya Mehra",
		role: "CTO at Brightstack Labs",
		image: "avatar-09.jpg",
		review: "Game-changer. Automation flows run flawlessly. Our team now focuses only on what really matters.",
	},
	{
		name: "Elena Rodriguez",
		role: "Product Manager at Nexora",
		image: "avatar-11.jpg",
		review: "Smooth setup. Their system replaced three tools. We saw improvements in just the first week.",
	},
	{
		name: "Marcus Thompson",
		role: "Marketing Director at OrbitShift Director",
		image: "avatar-10.jpg",
		review: "Surprisingly simple. The AI adapts quickly. Our campaigns are now running 2x more efficiently.",
	},
	{
		name: "Sarah Wong",
		role: "Analytics Manager at Corelink",
		image: "avatar-12.jpg",
		review: "Huge time-saver. Data is better organized. The insights we get now are actionable and fast.",
	},
	{
		name: "Ravi Shah",
		role: "COO at PixelNest Solutions",
		image: "avatar-13.jpg",
		review: "Very intuitive. No fluff, just performance. Our internal processes finally feel under control.",
	},
];

const headingProps: SectionHeadingProps = {
	text: "Trusted by",
	italicText: "Visionaries",
	description: "Hear from real users who achieved success with our automation",
	badgeText: "Reviews",
	badgeIcon: IconHeartFilled,
};

const logos = ["asterisk.svg", "eooks.svg", "opal.svg", "dune.svg", "oasis.svg"];

export default function Reviews() {
	return (
		<SectionContainer id="reviews">
			<SectionHeader>
				<SectionHeading {...headingProps} />
			</SectionHeader>

			<SectionContent className="flex-col space-y-11">
				<div className="flex flex-wrap items-center gap-[30px]">
					{testimonials.map((reviewer) => (
						<Card key={reviewer.name} className="min-w-[300px] flex-[1_0_0px] rounded-2xl p-0" container>
							<div className="inset-shadow-3 h-min rounded-2xl p-[15px]">
								<div className="flex items-center gap-[15px]">
									<div className="p-2">
										<div className="size-[50px] shrink-0">
											{/* <div className="size-[50px] rounded-lg bg-gray-400"></div> */}
											<Image
												src={`/images/${reviewer.image}`}
												width="50"
												className="size-full rounded-lg object-cover"
												height="50"
												alt={`${reviewer.name} profile image`}
											/>
										</div>
									</div>
									<div>
										<p className="font-medium">{reviewer.name}</p>
										<p className="text-xs opacity-50">{reviewer.role}</p>
									</div>
								</div>
							</div>
							<div className="p-[25px] opacity-80">
								<p>“{reviewer.review}”</p>
							</div>
						</Card>
					))}
				</div>

				{/* Trusted By */}
				<section className="mx-auto flex h-16 w-full max-w-[1100px] items-center overflow-hidden [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)] p-2">
					<ul className="animation-[20s] flex h-[27px] animate-marquee place-items-center justify-center brightness-[.8] duration-[20s] [&_img]:max-w-none [&_li]:mx-[50px]">
						{logos.map((logo, index) => (
							<li key={index} className="relative h-full flex-1 opacity-65">
								<img src={`/images/${logo}`} className="h-full w-auto object-contain" alt="logo" loading="lazy" />
							</li>
						))}
					</ul>
					<ul className="animation-[20s] flex h-[27px] animate-marquee place-items-center justify-center brightness-[.8] duration-[20s] [&_img]:max-w-none [&_li]:mx-[50px]">
						{logos.map((logo, index) => (
							<li key={index} className="relative h-full flex-1 opacity-65">
								<img src={`/images/${logo}`} className="h-full w-auto object-contain" alt="logo" loading="lazy" />
							</li>
						))}
					</ul>
				</section>
			</SectionContent>
		</SectionContainer>
	);
}
