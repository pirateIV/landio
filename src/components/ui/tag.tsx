import React from "react";
import { ParentProps } from "@/types";

export default function Tag({ children, ...props }: ParentProps) {
	return (
		<div
			className="flex items-center justify-center px-6 gap-4 [&_div]:h-px [&_div]:w-[69px] [&_div]:from-white [&_div]:to-black-base [&_div]:opacity-50"
			{...props}
		>
			<div className="bg-gradient-to-l" />
			<p className="italic text-nowrap">{children}</p>
			<div className="bg-gradient-to-r" />
		</div>
	);
}
