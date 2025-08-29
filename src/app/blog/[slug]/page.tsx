import Link from "next/link";
import { Content } from "@/components/ui/blocks";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const { default: Blog } = await import(`@/mdx/${slug}.mdx`);

	return (
		<div className="relative w-full bg-black-base !px-4.5 !pt-30 !pb-20 md:!px-10 md:!pt-40 md:!pb-30">
			<Content className="mx-auto max-w-275">
				<div className="px-25">
					<div className="mb-4">
						<Link href="/blog" className="space-1 rounded-lg border border-light-blue-transparent bg-dark-gray px-5 py-2">
							<span>&larr;</span> <span>Back To All Blogs</span>
						</Link>
					</div>
					<Blog />
				</div>
			</Content>

			<div className="absolute right-0 bottom-0 left-0 z-1 h-1 rounded-[10px] bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-light-blue-transparent)_0%,var(--color-black-base)_100%)]" />
			<div className="pointer-events-none absolute -bottom-[249px] left-[calc(50%-(793px/2))] z-1 h-[499px] w-[793px] rotate-13 bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-light-blue-muted)_0%,rgba(4,7,13,0)_100%)] opacity-10" />
		</div>
	);
}

export const dynamicParams = false;
