import React from "react";
import type { IconProps, TablerIcon } from "@tabler/icons-react";
import { cx } from "@/utils/cx";

type IconBadgeProps = {
	icon: TablerIcon;
} & IconProps;

export default function IconBadge({ icon: Icon, className, ...props }: IconBadgeProps) {
	return (
		<div className={cx("inset-shadow-1 p-3 flex items-center justify-center rounded-lg bg-black-base", className)}>
			<Icon {...props} />
		</div>
	);
}
