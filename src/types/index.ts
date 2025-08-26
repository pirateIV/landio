import React from "react";
import type { TablerIcon } from "@tabler/icons-react";

export type ParentProps = React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>;

/* ========== SHARED TYPES ============= */

export type SocialLinkProps = { website: string; icon: TablerIcon }[];

export type SectionHeadingProps = {
	badgeIcon?: TablerIcon;
	badgeText?: string;
	description: string;
	italicText: string;
	text: string;
	useBadge?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
