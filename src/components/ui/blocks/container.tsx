import { ParentProps } from "@/types";
import { cx } from "@/utils/cx";

type ContainerProps = ParentProps & { variant?: "container" | "default" };

const variants = {
	default: "px-4.5 py-20 md:px-10 md:py-25",
	container: "px-4.5 pt-30 pb-20 md:px-10 md:pt-40 md:pb-25",
};

export function SectionContainer({ className, children, variant = "default", ...props }: ContainerProps) {
	return (
		<section className={cx("relative z-2 flex h-full flex-1 flex-col overflow-hidden bg-black-base", variants[variant], className)} {...props}>
			<div className="mx-auto flex w-full max-w-300 shrink-0 flex-col gap-11">{children}</div>

			<div className="absolute right-0 bottom-0 left-0 z-1 h-1 rounded-[10px] bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-light-blue-transparent)_0%,var(--color-black-base)_100%)]" />
			<div className="pointer-events-none absolute -bottom-[249px] left-[calc(50%-(793px/2))] z-1 h-[499px] w-[793px] rotate-13 bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-light-blue-muted)_0%,rgba(4,7,13,0)_100%)] opacity-10" />
		</section>
	);
}
