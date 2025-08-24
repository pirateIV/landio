"use client";

import Benefits from "@/components/sections/benefits/benefits";
import Comparison from "@/components/sections/comparison";
import Faqs from "@/components/sections/faqs";
import Features from "@/components/sections/features";
import FounderNote from "@/components/sections/founder-note";
import HeroSection from "@/components/sections/hero";
import Process from "@/components/sections/process";
import Services from "@/components/sections/services/services";
import Team from "@/components/sections/team";
import Overlay from "@/components/ui/overlay";
import Footer from "@/layout/footer";
import Navigation from "@/layout/navigation";

export const HomePage = () => {
	return (
		<div className="relative">
			<Navigation />
			<HeroSection />
			<FounderNote />
			<Benefits />
			<Services />
			<Features />
			<Process />
			<Faqs />
			<Comparison />
			<Team />
			<Footer />

			{/* Overlay */}
			<Overlay />
		</div>
	);
};
