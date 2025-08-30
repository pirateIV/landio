import { ParentProps } from "@/types";
import { cx } from "@/utils/cx";

export function Container({ className, children, ...props }: ParentProps) {
	return (
		<section className={cx("relative z-2 flex flex-col flex-1 h-full overflow-hidden bg-black-base px-4.5 py-20 md:px-10 md:py-25", className)} {...props}>
			<div className="mx-auto flex max-w-300 flex-col w-full gap-11 shrink-0">{children}</div>

			<div className="absolute right-0 bottom-0 left-0 z-1 h-1 rounded-[10px] bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-light-blue-transparent)_0%,var(--color-black-base)_100%)]" />
			<div className="pointer-events-none absolute -bottom-[249px] left-[calc(50%-(793px/2))] z-1 h-[499px] w-[793px] rotate-13 bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-light-blue-muted)_0%,rgba(4,7,13,0)_100%)] opacity-10" />
		</section>
	);
}
