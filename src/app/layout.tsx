import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const instrument = Instrument_Serif({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
	variable: "--font-instr",
	style: "italic",
});

export const metadata: Metadata = {
	title: "Landio",
	description: "Automate Smarter. Grow Faster. With AI.",
	openGraph: {
		type: "website",
		title: "Landio - AI Agency & Landing Page Template",
		url: "https://landio.vercel.app",
		description:
			"Supercharge your startup’s growth with Landio—the ultimate Framer template for AI-powered SaaS businesses. Discover real-time trends, decode user insights with accuracy, and make smarter, data-driven decisions.",
	},
	twitter: {
		card: "summary_large_image",
		title: "Landio - AI Agency & Landing Page Template",
		description:
			"Supercharge your startup’s growth with Landio—the ultimate Framer template for AI-powered SaaS businesses. Discover real-time trends, decode user insights with accuracy, and make smarter, data-driven decisions.",
	},
	icons: {
		icon: [{ url: "/favicon/icon.svg" }, { url: "/favicon/icon-dark.svg", media: "(prefers-color-scheme: dark)" }],
	},
};

export const viewport: Viewport = {
	themeColor: "#7f56d9",
	colorScheme: "light dark",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cx(inter.className, instrument.variable, "bg-primary antialiased")}>
				<RouteProvider>
					<Theme>
						<main>
							<div className="min-h-screen">{children}</div>
						</main>
					</Theme>
				</RouteProvider>
			</body>
		</html>
	);
}
