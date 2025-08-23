import React from "react";
import Badge from "../ui/badge";
import { IconCube } from "@tabler/icons-react";

export default function Features() {
	return (
		<section id="features" className="bg-black-base px-10 py-[100px]">
			<div className="mx-auto flex max-w-[1200px] flex-col gap-11">
				<div className="mx-auto flex max-w-[640px] flex-col items-center gap-2.5 text-center">
					<Badge text="Services" icon={IconCube} />
					<h1 className="text-heading-2">
						Smarter Services, <span className="font-instr italic">Built with AI</span>
					</h1>
					<p className="text-light-blue">Everything you need to automate operations, boost productivity</p>
				</div>
				
			</div>
		</section>
	);
}
