import React from "react";
import type { IconProps, TablerIcon } from "@tabler/icons-react";
import { cx } from "@/utils/cx";
import Icon from "./icon";

type IconBadgeProps = {
	icon: TablerIcon;
} & IconProps;

export default function IconBadge({ icon, className, ...props }: IconBadgeProps) {
	return (
		<div className={cx("inset-shadow-1 flex items-center justify-center rounded-lg bg-black-base p-3", className)}>
			<Icon icon={icon} {...props} />
		</div>
	);
}
