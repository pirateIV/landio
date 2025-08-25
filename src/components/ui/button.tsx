import React from "react";
import Link from "next/link";
import { ParentProps } from "@/types";
import { cx } from "@/utils/cx";

export default function Button({ className, children, ...props }: ParentProps) {
	return (
		<div className={cx("relative", className)} {...props}>
			<Link href="#" className="group relative flex rounded-lg bg-white/5 px-7 py-3.5 font-semibold">
				<div className="bg-[radial-gradient(25%_50%_at_50%_100%,#ffffff_0%,#ffffff00_100%)] absolute inset-0" />
				<div className="bg-[radial-gradient(20.7%_50%_at_50%_100%,#ffffff_0%,#ffffff00_100%)] absolute inset-0 blur-lg z-0" />
				<div className="absolute inset-[2px] rounded-lg bg-black-base" />
				<div className="relative flex items-center gap-1.5">
					{children}
					<span
						className="h-[23px] w-[22px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						data-icon="arrow-up-right"
					></span>
				</div>
			</Link>
		</div>
	);
}
