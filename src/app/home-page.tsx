import Benefits from "@/components/sections/benefits/benefits";
import Comparison from "@/components/sections/comparison";
import Cta from "@/components/sections/cta";
import Faqs from "@/components/sections/faqs";
import Features from "@/components/sections/features/features";
import FounderNote from "@/components/sections/founder-note";
import Hero from "@/components/sections/hero";
import Integrations from "@/components/sections/integrations";
import Pricing from "@/components/sections/pricing";
import Process from "@/components/sections/process";
import Reviews from "@/components/sections/reviews";
import Services from "@/components/sections/services/services";
import Stories from "@/components/sections/stories";
import Team from "@/components/sections/team";

export const HomePage = () => {
	return (
		<div className="relative">
			<Hero />
			<FounderNote />
			<Benefits />
			<Services />
			<Features />
			<Process />
			<Stories />
			<Integrations />
			<Reviews />
			<Pricing />
			<Faqs />
			<Comparison />
			<Team />
			<Cta />
		</div>
	);
};
