import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */

const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
	extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);

