import React from "react";
import { cx } from "@/utils/cx";

type ContainerProps = {
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function SectionContainer({ className, children, ...props }: ContainerProps) {
	return (
		<section className={cx("bg-black-base px-10 py-[100px]", className)} {...props}>
			<div className="mx-auto flex max-w-[1200px] flex-col gap-11">{children}</div>
		</section>
	);
}
