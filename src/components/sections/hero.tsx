import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
	return (
		<section id="hero" className="relative pt-20">
			<div className="flex flex-col gap-11 px-10 pt-40 pb-5">
				<div className="flex flex-col gap-6">
					<div className="flex flex-col items-center gap-4 text-center">
						<div className="size-24 flex-none">
							<div className="size-full rounded-2xl p-2.5 shadow shadow-white">
								<div className="size-full rounded-[calc(var(--radius-lg)+2px)] p-4 shadow shadow-white">
									<div className="relative inset-0 flex size-full rotate-90">
										<div className="absolute">
											<Image src="logo-icon.svg" className="size-full object-center" width="74" height="74" alt="logo" />
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="mx-auto flex max-w-[936px] flex-col items-center gap-4">
							<div className="flex items-center gap-2.5 px-3 py-2">
								<div className="inset-[3px] size-3 flex-none rounded-full bg-teal-500"></div>
								<div className="text-sm">
									<p>NEW GEN AI AUTOMATION PARTNER</p>
								</div>
							</div>

							<div className="whitespace-pre-wrap">
								<h1 className="text-[80px] font-medium tracking-tight">
									<span className="transparent bg-clip-text">
										Automate Smarter. Grow Faster. <span>With AI.</span>
									</span>
								</h1>
							</div>
							<div>
								<p>AI Automation for Modern Businesses Made Simple</p>
							</div>
						</div>
					</div>

					<div className="flex flex-col items-center justify-center">
						<div className="relative">
							<Link href="#" className="flex rounded-lg bg-white/5 px-7 py-3.5 font-semibold text-slate-300">
								<div className="absolute inset-0 bg-[radial-gradient(25%_50%_at_50%_100%,_rgb(255,_255,_255)_0%,_rgba(255,_255,_255,_0)_100%)]"></div>
								<div className="absolute inset-0 bg-[radial-gradient(20.7%_50%_at_50%_100%,_rgb(255,_255,_255)_0%,_rgba(255,_255,_255,_0)_100%)] blur-lg"></div>
								<div className="absolute inset-[2px] rounded-lg bg-gray-950"></div>
								<div className="relative flex items-center gap-1.5">
									Book A Free Call <span className="h-[23px] w-[22px]" data-icon="arrow-up-right"></span>
								</div>
							</Link>
						</div>
					</div>

					<div>
						<div>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
