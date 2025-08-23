import React from "react";
import type { Icon, IconProps } from "@tabler/icons-react";

export type ParentProps = React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>;

/* ========== SHARED TYPES ============= */
export type SectionHeadingProps = {
	badgeIcon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
	badgeText: string;
	description: string;
	italicText: string;
	text: string;
};
