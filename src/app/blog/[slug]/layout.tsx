import React from "react";
import Link from "next/link";
import { Container, Content } from "@/components/ui/blocks";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return (
		<Container variant="container">
			<Content className="mx-auto max-w-275">
				<div className="px-25">
					<div className="mb-4">
						<Link href="/blog" className="space-1 rounded-lg border border-light-blue-transparent bg-dark-gray px-5 py-2">
							<span>&larr;</span> <span className="text-sm font-medium">Back To All Blogs</span>
						</Link>
					</div>
					<div className="prose-headings:mt-8 prose-headings:font-medium prose-h3:text-[28px] prose-p:text-light-blue-muted">{children}</div>
				</div>
			</Content>
		</Container>
	);
}
