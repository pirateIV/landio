import React from "react";
import type { TablerIcon } from "@tabler/icons-react";

export type ParentProps = React.PropsWithChildren & DivProps;

export type DivProps = React.HTMLAttributes<HTMLDivElement>;
export type IconProps = React.SVGProps<SVGSVGElement> & { size?: string | number };

/* ========== SHARED TYPES ============= */

export type SocialLinkProps = { website: string; icon: TablerIcon }[];

export type SectionHeadingProps = {
	badgeIcon?: TablerIcon | React.JSX.Element;
	badgeText?: string;
	description: string;
	italicText: string;
	text: string;
	useBadge?: boolean;
} & DivProps;
