import React from "react";
import type { IconProps, UniversalIcon } from "@/types";
import { cx } from "@/utils/cx";

interface BadgeProps {
	text: string;
	icon?: UniversalIcon;
}

export default function Badge({ text, icon }: BadgeProps) {
	const renderIcon = () => {
		if (!icon) return null;

		// If it's already a React element, just render it
		if (React.isValidElement(icon)) {
			return React.cloneElement(icon as React.ReactElement<IconProps>, {
				size: 16,
				className: "text-light-blue",
			});
		}

		// If it's a component (TablerIcon or other), create an element from it
		const IconComponent = icon as React.ComponentType<IconProps>;
		return <IconComponent size={16} className="text-light-blue" />;
	};

	return (
		<div className="flex items-center gap-2 rounded-full border border-light-blue-transparent px-3 py-1.5">
			<span className="badge-icon">{renderIcon()}</span>
			<span className="badge-text text-xs uppercase">{text}</span>
		</div>
	);
}
