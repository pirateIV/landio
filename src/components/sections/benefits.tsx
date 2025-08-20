import React from "react";
import { IconSparkles } from "@tabler/icons-react";
import Badge from "../ui/badge";

const cards = [
	{ title: "Real-Time Intelligience", description: "Access accurate, real-time data to drive smarter decisions" },
	{ title: "Measurable Impact", description: "Track performance, uncover insights, and achieve data-backed growth" },
	{ title: "Seamless Integration", description: "Connect tools, teams, and workflows with intelligent automation" },
];

const Card = ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) => {
	return (
		<div className="relative h-[374px] min-w-[300px] flex flex-[1_0_0px] rounded-[20px] border border-b-0 border-light-blue-transparent bg-black-base inset-shadow-[0px_2px_1px_0px] inset-shadow-[#cfe7ff33]">
			{children}
			<div className="flex flex-col items-center gap-1.5 p-[30px] mt-auto">
				<h3 className="text-xl">{title}</h3>
				<p className="text-light-blue opacity-60">{description}</p>
			</div>
		</div>
	);
};

export default function Benefits() {
	return (
		<section id="benefits" className="px-10 py-[100px] text-center">
			<div className="mx-auto flex max-w-[1200px] flex-col gap-11">
				<div className="mx-auto flex max-w-[640px] flex-col items-center gap-2.5">
					<Badge text="Benefits" icon={IconSparkles} />
					<h1 className="text-[44px]">
						Why Choose <span className="font-instr italic">Us?</span>
					</h1>
					<p className="text-light-blue">Everything you need to automate, optimize, and scale</p>
				</div>

				<div className="flex w-full flex-wrap items-center gap-[30px]">
					<Card title="Real-Time Intelligience" description="Access accurate, real-time data to drive smarter decisions">
						<div className="size-52 absolute"></div>
					</Card>
					<Card title="Measurable Impact" description="Track performance, uncover insights, and achieve data-backed growth">
						<div></div>
					</Card>
					<Card title="Seamless Integration" description="Connect tools, teams, and workflows with intelligent automation">
						<div></div>
					</Card>
				</div>
			</div>
		</section>
	);
}
