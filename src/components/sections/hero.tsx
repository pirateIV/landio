import React from "react";
import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconChevronDown } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
	return (
		<section id="hero" className="relative bg-[rgb(4,7,13)] py-20">
			<div className="relative z-10 flex flex-col items-center gap-11 px-10 pt-40 pb-5">
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
						<div className="mx-auto flex max-w-[936px] flex-col items-center gap-4">
							<div className="flex items-center gap-2.5 px-3 py-2">
								<div className="inline-flex size-3 items-center justify-center">
									<div className="size-[7px] rounded-full bg-blue-400"></div>
								</div>
								<div className="text-sm">
									<p>NEW GEN AI AUTOMATION PARTNER</p>
								</div>
							</div>

							<h1 className="text-[80px] leading-24 font-medium tracking-[-0.02em]">
								<span className="inline-block bg-[radial-gradient(99%_86%_at_50%_50%,#d5dbe6_28%,#04070d_100%)] bg-clip-text text-transparent">
									Automate Smarter. Grow Faster. <span className="font-[family-name:var(--font-instr)] italic">With AI.</span>
								</span>
							</h1>

							<p>AI Automation for Modern Businesses Made Simple</p>
						</div>
					</div>

					<div className="flex flex-col items-center justify-center">
						<div className="relative">
							<Link href="#" className="group relative flex overflow-hidden rounded-lg bg-white/5 px-7 py-3.5 font-semibold">
								<div className="absolute inset-0 bg-[radial-gradient(25%_50%_at_50%_100%,_white_0%,_transparent_100%)]"></div>
								<div className="absolute inset-0 bg-[radial-gradient(20.7%_50%_at_50%_100%,_white_0%,_transparent_100%)] blur-lg"></div>
								<div className="absolute inset-[2px] rounded-lg bg-gray-950"></div>
								<div className="relative flex items-center gap-1.5">
									Book A Free Call
									<span
										className="h-[23px] w-[22px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
										data-icon="arrow-up-right"
									></span>
								</div>
							</Link>
						</div>
					</div>

					<div className="flex items-center justify-center gap-6 *:inline-flex">
						<div>
							<Link href="https://x.com" className="p-3 text-gray-500 hover:text-gray-200">
								<IconBrandX />
							</Link>
						</div>
						<div className="h-6 w-0.5 bg-gray-800"></div>
						<div>
							<Link href="https://instagram.com" className="p-3 text-gray-500 hover:text-gray-200">
								<IconBrandInstagram />
							</Link>
						</div>
						<div className="h-6 w-0.5 bg-gray-800"></div>
						<div>
							<Link href="https://facebook.com" className="p-3 text-gray-500 hover:text-gray-200">
								<IconBrandFacebook />
							</Link>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center">
					<Link href="#founder-note">
						<IconChevronDown size="25" />
					</Link>
				</div>
			</div>

			<div className="radial-gradient(75%_64%_at_50%_50%,_transparent_17.56756756756757%,rgb(4,7,13)_100%) pointer-events-none absolute"></div>
			<div className="absolute inset-[0_0_-140px] opacity-40 grayscale-[1]">
				<video loop playsInline autoPlay className="size-full cursor-auto bg-transparent object-cover">
					<source src="videos/background.mp4" type="video/mp4" />
				</video>
			</div>
			<div className="absolute right-0 bottom-0 left-0 z-[4] h-1 bg-[radial-gradient(50%_50%_at_50%_50%,_#ffffff12_0%,_#000_100%)]"></div>
			<div className="z-[4] rotate-[13deg] absolute bottom-[-249px] left-[calc(50.02%-793px_/_2] h-[499px] w-[793px] rounded-[10px] bg-[radial-gradient(50%_50%_at_50%_50%,_#ffffff_0%,_#04070d00_100%)] opacity-15"></div>
			<div className="z-[3] absolute inset-0 pointer-events-none"></div>
		</section>
	);
}
