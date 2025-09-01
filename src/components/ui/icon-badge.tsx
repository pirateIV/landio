import React from "react";
import type { IconProps, TablerIcon } from "@tabler/icons-react";
import { UniversalIcon } from "@/types";
import { cx } from "@/utils/cx";
import Icon from "./icon";

type IconBadgeProps = {
	icon: UniversalIcon | any;
} & IconProps;

export default function IconBadge({ icon, className, ...props }: IconBadgeProps) {
	return (
		<div className={cx("flex items-center justify-center rounded-lg bg-dark-gray p-3 inset-shadow-[0px_1px_1px_0px] inset-shadow-[#cfe7ff33]", className)}>
			<Icon icon={icon} {...props} />
		</div>
	);
}
