import { ParentProps } from "@/types";
import { cx } from "@/utils/cx";

export function Header({ children, className, ...props }: ParentProps) {
	return (
		<div className={cx("mx-auto flex max-w-160 flex-col items-center gap-2.5 text-center", className)} {...props}>
			{children}
		</div>
	);
}