"use client";

import React, { useState } from "react";
import { IconSparkles } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Routes } from "@/config";
import { cx } from "@/utils/cx";

const navLinks = [
	{ name: "Services", href: Routes.services },
	{ name: "Process", href: Routes.process },
	{ name: "Pricing", href: Routes.pricing },
	{ name: "Blog", href: Routes.blog },
	{ name: "Contact", href: Routes.contact },
];

export default function Navigation() {
	const [menuToggled, setMenuToggled] = useState(false);

	return (
		<div className="fixed inset-x-0 top-0 z-50 h-auto flex-none">
			<header
				className={cx(
					"flex flex-col gap-2 border-b-2 border-light-blue-transparent bg-dark-transparent px-4.5 backdrop-blur-md will-change-transform lg:gap-0 lg:px-10 lg:pb-0",
					menuToggled && "pb-8",
				)}
			>
				<div className="mx-auto flex h-16 w-full max-w-[1350px] flex-nowrap items-center justify-between">
					<div className="inline-flex">
						<Link href={Routes.home} className="h-[39px] w-[103px]">
							<Image width="163" height="62" src="/logo.svg" alt="logo" />
						</Link>
					</div>
					<nav className="relative hidden size-min flex-none items-center gap-3 rounded-[100px] border border-light-blue-transparent px-3 py-1.5 lg:flex">
						{navLinks.map((link) => (
							<div key={link.name} className="inline-flex opacity-75 transition-opacity duration-300 hover:opacity-100">
								<Link href={link.href} className="px-3 py-1.5 text-sm font-medium text-slate-300">
									{link.name}
								</Link>
							</div>
						))}
					</nav>
					<div>
						<div className="hidden lg:inline-flex">
							<Link
								href={Routes.home}
								className="inline-flex gap-1.5 rounded-lg border border-light-blue-transparent bg-gradient-to-b from-dark-gray to-light-blue-transparent px-5 py-2 text-sm text-white backdrop-blur-[5px]"
							>
								<IconSparkles size="20" />
								<span>Get Template</span>
							</Link>
						</div>
						<motion.button
							className="group inline-flex size-[1.875rem] items-center justify-center rounded-lg p-[3px] text-white hover:bg-dark-gray focus:bg-dark-gray lg:hidden"
							aria-pressed={menuToggled}
							onClick={() => setMenuToggled(!menuToggled)}
							whileTap={{ scale: 0.9 }}
						>
							<span className="sr-only">Menu</span>
							<motion.div animate={menuToggled ? { rotate: 90 } : { rotate: 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
								<Icons.Menu />
							</motion.div>
						</motion.button>
					</div>
				</div>

				<AnimatePresence>
					{menuToggled && (
						<motion.div
							initial={{
								opacity: 0,
								height: 0,
								width: 0,
								filter: "blur(20px)",
							}}
							animate={{
								opacity: 1,
								height: "auto",
								width: "100%",
								filter: "blur(0px)",
							}}
							exit={{
								opacity: 0,
								height: 0,
								filter: "blur(20px)",
							}}
							transition={{
								duration: 0.45,
								ease: "easeInOut",
							}}
							className="space-y-2 overflow-hidden"
						>
							<nav className="relative flex flex-col gap-2 px-3 py-1.5 lg:hidden">
								{navLinks.map((link) => (
									<motion.div
										key={link.name}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 0.75, x: 0 }}
										whileHover={{ opacity: 1 }}
										transition={{ duration: 0.2 }}
										className="inline-flex transition-opacity duration-300"
									>
										<Link href={link.href} className="w-full px-3 py-1.5 text-sm font-medium text-white">
											{link.name}
										</Link>
									</motion.div>
								))}
							</nav>
							<motion.div
								className="lg:hidden"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1, duration: 0.2 }}
							>
								<Link
									href={Routes.home}
									className="inline-flex gap-1.5 rounded-lg border border-light-blue-transparent bg-gradient-to-b from-dark-gray to-light-blue-transparent px-5 py-2 text-sm text-white backdrop-blur-[5px]"
								>
									<IconSparkles size="20" />
									<span>Get Template</span>
								</Link>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</header>
		</div>
	);
}
