import Link from "next/link";
import { Container, Content } from "@/components/ui/blocks";
import { components } from "@/mdx-components";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const { default: Blog } = await import(`@/mdx/${slug}.mdx`);

	return (
		<Container className="max-w-275 w-full !px-4.5 !pt-30 !pb-20 md:!px-10 md:!pt-40 md:!pb-30">
			<Content>
				<div className="px-25">
					<Link href="/blogs" className="space-1 rounded-lg border border-light-blue-transparent bg-dark-gray px-5 py-2">
						<span>&larr;</span> <span>Back To All Blogs</span>
					</Link>
					<Blog/>
				</div>
			</Content>
		</Container>
	);
}

export const dynamicParams = false;
