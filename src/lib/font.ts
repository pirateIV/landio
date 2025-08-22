import localFont from "next/font/local";

export const interVar = localFont({
  src: [
    {
      path: "../../public/fonts/InterVariable/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/InterVariable/Inter-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/InterVariable/Inter-SemiBold.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/fonts/InterVariable/Inter-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/InterVariable/Inter-ExtraBold.woff2",
      weight: "800",
      style: "extrabold",
    },
    {
      path: "../../public/fonts/InterVariable/Inter-Black.woff2",
      weight: "900",
      style: "black",
    },
  ],
  variable: "--font-inter",
});