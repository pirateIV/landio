import { ParentProps } from "@/types";
import { cx } from "@/utils/cx";

export function Content({ className, children, ...props }: ParentProps) {
	return (
		<div className={cx("mx-auto flex w-full *:w-full", className)} {...props}>
			{children}
		</div>
	);
}
