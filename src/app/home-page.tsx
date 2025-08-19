"use client";

import Navigation from "@/layout/navigation";
import HeroSection from "@/components/sections/hero";
import FounderNote from "@/components/sections/founder-note";
import Benefits from "@/components/sections/benefits";
import Overlay from "@/components/ui/overlay";

export const HomePage = () => {
	return (
		<div className="relative">
			<Navigation />
			<HeroSection />
			<Overlay />
			<FounderNote />
			<Benefits />
			{/* <div className="relative h-40 bg-black w-full"></div> */}
		</div>
	);
};

