import React from "react";
import { IconSparkles } from "@tabler/icons-react";
import Badge from "../ui/badge";

const cards = [
	{ title: "Real-Time Intelligience", description: "Access accurate, real-time data to drive smarter decisions" },
	{ title: "Measurable Impact", description: "Track performance, uncover insights, and achieve data-backed growth" },
	{ title: "Seamless Integration", description: "Connect tools, teams, and workflows with intelligent automation" },
];

export default function Benefits() {
	return (
		<section id="benefits" className="text-center">
			<div className="flex flex-col items-center">
				<div>
					<Badge text="Benefits" icon={IconSparkles} />
				</div>

				<h1 className="text-[44px]">Why Choose Us?</h1>
				<p>Everything you need to automate, optimize, and scale</p>
			</div>
		</section>
	);
}
