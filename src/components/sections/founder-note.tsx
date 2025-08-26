import React from "react";
import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import { SectionContainer } from "../section";
import Badge from "../ui/badge";

export default function FounderNote() {
	return (
		<SectionContainer className="*:items-center *:justify-center" id="founder-note">
			<div className="z-2 mx-auto flex w-full max-w-[744px] flex-col items-center justify-center gap-6">
				<Badge text="We analyze your data" icon={IconStarFilled} />

				<h1 className="text-center text-2xl text-medium-gray md:text-[2rem] text-balance">
					We find what to <span className="font-instr text-light-blue italic">automate</span>, who your users are &
					how AI can optimize your <span className="font-instr text-light-blue italic">workflow</span>. Best part is we also build and launch{" "}
					<span className="font-instr text-light-blue italic">real solutions</span>
					<span className="italic">"</span>.
				</h1>

				<div className="flex items-center gap-4">
					<div className="size-7 rounded-full *:rounded-full">
						<Image src="/images/avatar-01.jpg" width="4000" height="4000" sizes="28px" alt="avatar" />
					</div>
					<p>Co-founder & AI Strategy Lead</p>
				</div>
			</div>
		</SectionContainer>
	);
}
