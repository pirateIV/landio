"use client";

import Benefits from "@/components/sections/benefits/benefits";
import Faqs from "@/components/sections/faqs";
import Features from "@/components/sections/features";
import FounderNote from "@/components/sections/founder-note";
import HeroSection from "@/components/sections/hero";
import Process from "@/components/sections/process";
import Services from "@/components/sections/services/services";
import Overlay from "@/components/ui/overlay";
import Navigation from "@/layout/navigation";

export const HomePage = () => {
	return (
		<div className="relative">
			<Navigation />
			<HeroSection />
			<Overlay />
			<FounderNote />
			<Benefits />
			<Services />
			<Features />
			<Process />
			<Faqs />
			{/* <div className="relative h-40 bg-black w-full"></div> */}
		</div>
	);
};
