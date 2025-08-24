import React from "react";
import type { TablerIcon, IconProps as TablerIconProps } from "@tabler/icons-react";

type IconProps = {
	icon: TablerIcon;
} & TablerIconProps;

export default function Icon({ icon: Icon, ...props }: IconProps) {
	return <Icon {...props} />;
}
