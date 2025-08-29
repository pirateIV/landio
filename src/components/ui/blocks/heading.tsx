import React from "react";
import { Icon123 } from "@tabler/icons-react";
import { SectionHeadingProps } from "@/types";
import Badge from "../badge";

export function Heading({ badgeText, badgeIcon, description, italicText, text, useBadge = true, ...props }: SectionHeadingProps) {
	return (
		<React.Fragment>
			{useBadge && <Badge text={badgeText || ""} icon={badgeIcon || Icon123} />}
			<h1 className="text-[length:calc(var(--spacing)*8)]/[1.2em] text-balance md:text-heading-2">
				{text}{" "}
				<span className="bg-linear-138 from-light-blue via-50% to-black-base to-166% bg-clip-text font-instr text-transparent italic">
					{italicText}
				</span>
			</h1>
			<p className="text-light-blue">{description}</p>
		</React.Fragment>
	);
}
