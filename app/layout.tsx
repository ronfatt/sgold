import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansSc = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "S-Gold | Premium Digital Asset Infrastructure",
  description:
    "A premium investor-facing fintech and web3 infrastructure presentation website for S-Gold.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${notoSansSc.variable} bg-background text-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
