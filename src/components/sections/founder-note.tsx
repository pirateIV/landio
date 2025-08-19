import React from "react";
import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import Badge from "../ui/badge";

export default function FounderNote() {
	return (
		<section className="px-10 py-[100px] text-center" id="founder-note">
			<div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center">
				<div className="z-[2] mx-auto flex w-full max-w-[744px] flex-col items-center justify-center gap-6">
					<Badge text="We analyze your data" icon={IconStarFilled} />

					<h1 className="text-[2rem] text-medium-gray">
						<q>
							We find what to <span className="font-instr text-light-blue italic">automate</span>, who your users are & how AI can optimize your{" "}
							<span className="font-instr text-light-blue italic">workflow</span>. Best part is we also build and launch{" "}
							<span className="font-instr text-light-blue italic">real solutions</span>.
						</q>
					</h1>

					<div className="flex items-center gap-4">
						<div className="size-7 rounded-full *:rounded-full">
							<Image src="/images/avatar-01.jpg" width="4000" height="4000" sizes="28px" alt="avatar" />
						</div>
						<p>Co-founder & AI Strategy Lead</p>
					</div>
				</div>
			</div>
		</section>
	);
}
