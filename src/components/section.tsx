import React from "react";
import { ParentProps, SectionHeadingProps } from "@/types";
import { cx } from "@/utils/cx";
import Badge from "./ui/badge";

export function SectionHeading({ badgeText, badgeIcon, description, italicText, text }: SectionHeadingProps) {
	return (
		<>
			<Badge text={badgeText} icon={badgeIcon} />
			<h1 className="text-heading-2">
				{text} <span className="font-instr italic">{italicText}</span>
			</h1>
			<p className="text-light-blue">{description}</p>
		</>
	);
}

export function SectionHeader({ children, className, ...props }: ParentProps) {
	return (
		<div className={cx("mx-auto flex max-w-[640px] flex-col items-center gap-2.5 text-center", className)} {...props}>
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
		<section className={cx("bg-black-base px-10 py-[100px]", className)} {...props}>
			<div className="mx-auto flex max-w-[1200px] flex-col gap-11">{children}</div>
		</section>
	);
}
