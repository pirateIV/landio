import React, { PropsWithChildren } from "react";
import type { Icon, IconProps } from "@tabler/icons-react";
import { cx } from "@/utils/cx";
import Badge from "./ui/badge";

export type SectionHeadingProps = {
	badgeIcon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
	badgeText: string;
	description: string;
	italicText: string;
	text: string;
};

export type SectionContainerProps = {
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

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

export function SectionHeader({ children, ...props }: PropsWithChildren) {
	return (
		<div className="mx-auto flex max-w-[640px] flex-col items-center gap-2.5 text-center" {...props}>
			{children}
		</div>
	);
}

export function SectionContainer({ className, children, ...props }: SectionContainerProps) {
	return (
		<section className={cx("bg-black-base px-10 py-[100px]", className)} {...props}>
			<div className="mx-auto flex max-w-[1200px] flex-col gap-11">{children}</div>
		</section>
	);
}
