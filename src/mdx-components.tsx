import type { MDXComponents } from "mdx/types";

export const components: MDXComponents = {
	h1: ({children}: {children: React.ReactNode}) => (
		<h1 className="text-[44px] font-medium leading-[120%]">{children}</h1>
	),
	h3: ({children}: {children: React.ReactNode}) => (
		<h3 className="text-[28px] mt-10 font-medium">{children}</h3>
	),
	p: ({children}: {children: React.ReactNode}) => (
		<p className="text-light-blue-muted mt-5">{children}</p>
	)
};

export function useMDXComponents() {
	return components;
}
