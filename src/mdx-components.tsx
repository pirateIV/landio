import type { MDXComponents } from "mdx/types";
import { cx } from "./utils/cx";

export const components: MDXComponents = {
	h1: ({ children }: { children: React.ReactNode }) => <h1 className="text-[44px] leading-[120%] font-medium">{children}</h1>,
	h3: ({ children }: { children: React.ReactNode }) => <h3 className="mt-10 text-[28px] font-medium">{children}</h3>,
	p: ({ children, className }: { children: React.ReactNode; className?: string }) => (
		<p className={cx("mt-5 text-light-blue-muted", className)}>{children}</p>
	),
};

export function useMDXComponents() {
	return components;
}
