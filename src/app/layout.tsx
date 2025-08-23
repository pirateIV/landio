import type { Metadata, Viewport } from "next";
import { Instrument_Serif } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import {interVar} from "@/lib/font.ts"
import { cx } from "@/utils/cx";

import "@/styles/globals.css";

const instrument = Instrument_Serif({
	subsets: ["latin"],
	weight: ["400"],
	style: ["italic", "normal"],
	display: "swap",
	variable: "--font-instr",
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
			<body className={cx(interVar.className, instrument.variable, "bg-primary text-light-blue antialiased")}>
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
