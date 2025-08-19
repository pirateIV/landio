"use client";

import FounderNote from "@/components/sections/founder-note";
import HeroSection from "@/components/sections/hero";
import Overlay from "@/components/ui/overlay";
import Navigation from "@/layout/navigation";

export const HomePage = () => {
	return (
		<div className="relative">
			<Navigation />
			<HeroSection />
			<Overlay />
			{/* <FounderNote /> */}
			{/* <div className="relative h-40 bg-black w-full"></div> */}
		</div>
	);
};

