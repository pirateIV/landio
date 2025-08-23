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
				"relative flex flex-[1_0_0px] flex-col overflow-hidden rounded-[20px] border border-b-0 border-light-blue-transparent bg-black-base p-[30px] inset-shadow-2",
				className,
			)}
			{...props}
		>
			<React.Fragment>{children}</React.Fragment>
			{!container && (
				<div className="mt-auto flex flex-col gap-1.5">
					<h3 className="text-xl font-medium">{title}</h3>
					<p className="text-light-blue opacity-60">{description}</p>
				</div>
			)}
		</div>
	);
});

export default Card;

Card.displayName = "Card";
export type { CardProps };
