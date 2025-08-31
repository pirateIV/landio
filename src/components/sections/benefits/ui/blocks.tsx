import { cx } from "@/utils/cx";

export function Bar({ className }: { className?: string }) {
	return (
		<div
			className={cx("w-[43px] rounded-lg bg-dark-gray inset-shadow-[0px_2px_1px_0px] inset-shadow-[#cfe7ff26] transition duration-300", className)}
		></div>
	);
}

export function Card({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
	return (
		<div className="group inset-shadow-2 relative flex h-[374px] min-w-[300px] flex-[1_0_0px] rounded-[20px] border border-light-blue-transparent bg-black-base">
			{children}
			<div className="mt-auto flex flex-col items-center gap-1.5 p-[30px]">
				<h3 className="text-xl">{title}</h3>
				<p className="text-light-blue opacity-60">{description}</p>
			</div>

			<div className="pointer-events-none absolute top-0 right-0 z-1 h-[306px] w-[437px] bg-[radial-gradient(50%_50%_at_93.7%_8.1%,var(--color-medium-gray,rgba(184,199,217,0.5))_0%,rgba(4,7,13,0)_100%)] opacity-10" />
		</div>
	);
}
