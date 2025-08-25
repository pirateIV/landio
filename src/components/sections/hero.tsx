import React from "react";
import { IconChevronDown } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../partials/social-links";
import Button from "../ui/button";

export default function HeroSection() {
	return (
		<section id="hero" className="relative overflow-hidden bg-black-base py-20">
			<div className="relative z-10 flex flex-col items-center gap-11 px-10 pt-40 pb-5">
				{/* Logo */}
				<div className="size-24 flex-none">
					<div className="shadow-blue-1 size-full rounded-2xl p-2.5">
						<div className="shadow-blue-2 size-full rounded-[calc(var(--radius-lg)+2px)] p-4">
							<div className="relative inset-0 flex size-full rotate-90">
								<div className="absolute">
									<Image src="logo-icon.svg" className="size-full object-center" width="74" height="74" alt="logo" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-6">
					<div className="flex flex-col items-center gap-4 text-center">
						{/* Headline section */}
						<div className="mx-auto flex max-w-[936px] flex-col items-center gap-4">
							<div className="flex items-center gap-2.5 px-3 py-2">
								<div className="inline-flex size-3 items-center justify-center">
									<div className="size-[7px] rounded-full bg-[#94d1ff]"></div>
								</div>
								<p className="text-sm font-medium text-light-blue">NEW GEN AI AUTOMATION PARTNER</p>
							</div>

							<h1 className="text-5xl md:text-[4rem] xl:text-[80px] leading-[1.2em] font-medium -tracking-[0.02em]">
								<span className="inline-block bg-[radial-gradient(99%_86%_at_50%_50%,#d5dbe6_28%,#04070d_100%)] bg-clip-text text-transparent">
									Automate Smarter. Grow Faster. <span className="font-instr italic">With AI.</span>
								</span>
							</h1>

							<p className="text-light-blue">AI Automation for Modern Businesses Made Simple</p>
						</div>
					</div>

					<div className="flex flex-col items-center justify-center">
						{/* CTA button */}
						<Button>Book A Free Call</Button>
					</div>
					{/* Social Links */}
					<SocialLinks />
				</div>

				{/* Founder note link */}
				<div className="flex items-center justify-center">
					<Link href="#founder-note">
						<IconChevronDown size="25" />
					</Link>
				</div>
			</div>

			{/* Design elements */}
			<div className="pointer-events-none *:absolute">
				<div className="inset-0 z-1 bg-[radial-gradient(75%_64%_at_50%_50%,rgba(255,255,255,0)_17.5%,rgb(4,7,13)_100%)]" />
				<div className="inset-[0_0_-140px] opacity-40 grayscale-[1]">
					<video loop playsInline autoPlay className="size-full cursor-auto bg-transparent object-cover">
						<source src="videos/background.mp4" type="video/mp4" />
					</video>
				</div>
				<div className="right-0 bottom-0 left-0 z-1 h-1 rounded-[10px] bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-light-blue-transparent)_0%,var(--color-black-base)_100%)]" />
				<div className="-bottom-[249px] left-[calc(793px/2)] z-1 h-[499px] w-[793px] rotate-[13deg] bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-light-blue-muted)_0%,rgba(4,7,13,0)_100%)] opacity-10" />
				<div className="inset-0 z-3"></div>
			</div>
		</section>
	);
}
