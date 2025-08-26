import Benefits from "@/components/sections/benefits/benefits";
import Comparison from "@/components/sections/comparison";
import Cta from "@/components/sections/cta";
import Faqs from "@/components/sections/faqs";
import Features from "@/components/sections/features";
import FounderNote from "@/components/sections/founder-note";
import HeroSection from "@/components/sections/hero";
import Integrations from "@/components/sections/integrations";
import Pricing from "@/components/sections/pricing";
import Process from "@/components/sections/process";
import Reviews from "@/components/sections/reviews";
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
			<Integrations />
			<Reviews />
			<Pricing />
			<Faqs />
			<Comparison />
			<Team />
			<Cta />
			<Footer />

			{/* Overlay */}
			<Overlay />
		</div>
	);
};
