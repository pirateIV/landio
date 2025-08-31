import React from "react";
import { cx } from "@/utils/cx";

type CardProps = {
	title?: string;
	description?: string;
	children: React.ReactNode;
	container?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ title, description, container = false, children, className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={cx(
				"relative group flex flex-[1_0_0px] flex-col overflow-hidden rounded-[20px] border border-b-0 border-light-blue-transparent bg-black-base p-7.5 inset-shadow-2",
				className,
			)}
			{...props}
		>
			<React.Fragment>{children}</React.Fragment>
			{!container && (
				<div className="mt-auto flex flex-col gap-1.5 overflow-hidden" data-name="content">
					<h3 className="text-xl font-medium">{title}</h3>
					<p className="text-light-blue opacity-60">{description}</p>
				</div>
			)}

			<div className="absolute pointer-events-none z-1 h-[306px] opacity-10 top-0 right-0 w-[437px] bg-[radial-gradient(50%_50%_at_93.7%_8.1%,var(--color-medium-gray,rgba(184,199,217,0.5))_0%,rgba(4,7,13,0)_100%)]"/>
		</div>
	);
});

export default Card;

Card.displayName = "Card";
export type { CardProps };
