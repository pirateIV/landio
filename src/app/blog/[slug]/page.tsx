export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const { default: Blog } = await import(`@/mdx/${slug}.mdx`);

	return <Blog />;
}

export const dynamicParams = false;
