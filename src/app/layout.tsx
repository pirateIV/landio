import type { Metadata, Viewport } from "next";
import { Instrument_Serif } from "next/font/google";
import Overlay from "@/components/ui/overlay";
import Footer from "@/layout/footer";
import Navigation from "@/layout/navigation";
import { interVar } from "@/lib/font";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";

const instrument = Instrument_Serif({
	subsets: ["latin"],
	weight: ["400"],
	style: ["italic", "normal"],
	display: "swap",
	variable: "--font-instr",
});

export const metadata: Metadata = {
	title: "Landio - AI Agency & Landing Page Template",
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
		icon: [{ url: "/favicon/icon-dark.svg", media: "(prefers-color-scheme: dark)" }, { url: "/favicon/icon.svg" }],
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
			<body className={cx(interVar.className, instrument.variable, "bg-primary relative text-light-blue antialiased")}>
				<main className="relative flex min-h-screen flex-col">
					<Navigation />
					<div className="flex h-full flex-1 flex-col">{children}</div>
					<Footer />
				</main>
				<Overlay />
			</body>
		</html>
	);
}
