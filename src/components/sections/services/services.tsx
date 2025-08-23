import React from "react";
import { IconServicemark } from "@tabler/icons-react";
import Badge from "../../ui/badge";
import { AiStrategy, CustomAi, Intelligience, Tasks, Workflows } from "./cards";

export default function Services() {
	return (
		<section id="services" className="px-10 py-[100px] bg-black-base">
			<div className="mx-auto flex max-w-[1200px] flex-col gap-11">
				<div className="mx-auto flex max-w-[640px] flex-col items-center gap-2.5 text-center">
					<Badge text="Services" icon={IconServicemark} />
					<h1 className="text-heading-2">
						Smarter Services, <span className="font-instr italic">Built with AI</span>
					</h1>
					<p className="text-light-blue">Everything you need to automate operations, boost productivity</p>
				</div>
				<div className="grid grid-cols-3 grid-rows-2 gap-x-6 gap-y-[30px] *:col-span-1 *:[&:nth-of-type(2)]:col-span-2">
					<Tasks />
					<Workflows />
					<Intelligience />
					<CustomAi />
					<AiStrategy />
				</div>
			</div>
		</section>
	);
}
