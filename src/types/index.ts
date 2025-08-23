import React from "react";
import type { TablerIcon } from "@tabler/icons-react";

export type ParentProps = React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>;

/* ========== SHARED TYPES ============= */
export type SectionHeadingProps = {
	badgeIcon: TablerIcon;
	badgeText: string;
	description: string;
	italicText: string;
	text: string;
};
