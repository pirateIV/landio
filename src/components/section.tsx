import React from "react";
import { Icon123 } from "@tabler/icons-react";
import { ParentProps, SectionHeadingProps } from "@/types";
import { cx } from "@/utils/cx";
import Badge from "./ui/badge";

export function SectionHeading({ badgeText, badgeIcon, description, italicText, text, useBadge = true, ...props }: SectionHeadingProps) {
	return (
		<React.Fragment>
			{useBadge && <Badge text={badgeText || ""} icon={badgeIcon || Icon123} />}
			<h1 className="text-[length:calc(var(--spacing)*8)]/[1.2em] md:text-heading-2">
				{text}{" "}
				<span className="bg-linear-138 from-light-blue via-50% to-black-base to-166% bg-clip-text font-instr text-transparent italic">
					{italicText}
				</span>
			</h1>
			<p className="text-light-blue">{description}</p>
		</React.Fragment>
	);
}

export function SectionHeader({ children, className, ...props }: ParentProps) {
	return (
		<div className={cx("mx-auto flex max-w-160 flex-col items-center gap-2.5 text-center", className)} {...props}>
			{children}
		</div>
	);
}

export function SectionContent({ className, children, ...props }: ParentProps) {
	return (
		<div className={cx("mx-auto flex w-full *:w-full", className)} {...props}>
			{children}
		</div>
	);
}

export function SectionContainer({ className, children, ...props }: ParentProps) {
	return (
		<section className={cx("relative z-2 overflow-hidden bg-black-base px-4.5 py-20 md:px-10 md:py-25", className)} {...props}>
			<div className="mx-auto flex max-w-300 flex-col gap-11">{children}</div>

			<div className="absolute right-0 bottom-0 left-0 z-1 h-1 rounded-[10px] bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-light-blue-transparent)_0%,var(--color-black-base)_100%)]" />
			<div className="pointer-events-none absolute -bottom-[249px] left-[calc(50%-(793px/2))] z-1 h-[499px] w-[793px] rotate-13 bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-light-blue-muted)_0%,rgba(4,7,13,0)_100%)] opacity-10" />
		</section>
	);
}
