import React from "react";
import { DivProps, IconProps } from "@/types";

// prettier-ignore
export const Icons = {
	Menu: () => (
		<svg width="20" height="20" className="pointer-events-none size-5 fill-current *:origin-center *:transition-all *:duration-300" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="2" y="9" rx="1" className="-translate-y-1 group-aria-[pressed=true]:translate-y-0 group-aria-[pressed=true]:rotate-45" /><rect width="20" height="2" y="9" rx="1" className="translate-y-1 group-aria-[pressed=true]:translate-y-0 group-aria-[pressed=true]:-rotate-45" /></svg>
	),
	ArrowCircle: ({ size="40", ...props} : IconProps) => (
		<svg role="presentation" fill="currentColor" viewBox="0 0 24 24" width={size} height={size} {...props}><use href="#1283949305"></use></svg>
	),
	ArrowGraphUp: ({ size="40", ...props} : IconProps) => (
		<svg role="presentation" fill="currentColor" viewBox="0 0 24 24" width={size} height={size} {...props}><use href="#800733362"></use></svg>	),
	Robot: ({ size="40", ...props} : IconProps) => (
		<svg role="presentation" fill="currentColor" viewBox="0 0 24 24" width={size} height={size} {...props}><use href="#1652061477"></use></svg>
	),
	TrendingUp: ({ size="40", ...props} : IconProps) => (
		<svg role="presentation" fill="currentColor" viewBox="0 0 24 24" width={size} height={size} {...props}><use href="#800733362"></use></svg>
	),
	BarGraph: ({ size="40", ...props} : IconProps) => (
		<svg role="presentation" fill="currentColor" viewBox="0 0 24 24" width={size} height={size} {...props}><use href="#1074007029"></use></svg>	
	),
	Sparkles: ({ size="40", ...props} : IconProps) => (
		<svg role="presentation" fill="currentColor" viewBox="0 0 24 24" width={size} height={size} {...props}><use href="#1529132500"></use></svg>	
	),
	Gears: ({ size="40", ...props} : IconProps) => (
		<svg role="presentation" fill="currentColor" viewBox="0 0 24 24" width={size} height={size} {...props}><use href="#993309406"></use></svg>
	),
	Brain: ({ size="40", ...props} : IconProps) => (
		<svg role="presentation" fill="currentColor" viewBox="0 0 24 24" width={size} height={size} {...props}><use href="#2518789663"></use></svg>
	),
	Sliders: ({ ...props} : DivProps) => (
		<div {...props} className="size-10" data-icon="sliders"/>
	),
	ArrowsOut: ({ ...props} : DivProps) => (
		<div {...props} className="size-10" data-icon="arrows-out"/>
	),
	PieChartSlice: ({ ...props} : DivProps) => (
		<div {...props} className="size-10" data-icon="pie-chart-slice"/>
	),
	Database: ({ ...props} : DivProps) => (
		<div {...props} className="size-10" data-icon="database"/>
	),
	Plug: ({ ...props} : DivProps) => (
		<div {...props} className="size-10" data-icon="plug"/>
	),
	
}

// role="presentation" fill="currentColor" viewBox="0 0 24 24" width={size} height={size} {...props}
