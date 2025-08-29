import React from "react";
import type { Icon, IconProps } from "@tabler/icons-react";

interface BadgeProps {
	text: string;
	icon: any;
}

export default function Badge({ text, icon: Icon }: BadgeProps) {
	return (
		<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-light-blue-transparent">
			<span className="badge-icon text-light-blue">
				<Icon size="16"/>
			</span>
			<span className="badge-text text-xs uppercase">{text}</span>
		</div>
	);
}
