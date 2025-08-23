export function Card ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
	return (
		<div className="inset-shadow-2 relative flex h-[374px] min-w-[300px] flex-[1_0_0px] rounded-[20px] border border-b-0 border-light-blue-transparent bg-black-base">
			{children}
			<div className="mt-auto flex flex-col items-center gap-1.5 p-[30px]">
				<h3 className="text-xl">{title}</h3>
				<p className="text-light-blue opacity-60">{description}</p>
			</div>
		</div>
	);
};