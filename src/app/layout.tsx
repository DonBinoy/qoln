import type { Metadata } from "next";
import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "QOLN — Software Development",
  description:
    "Full-stack product engineering agency. We design, architect, and build web applications, mobile apps, APIs, and cloud infrastructure — end to end.",
  keywords: "software development, web development, full-stack, React, Next.js, Node.js, mobile apps, API development",
  openGraph: {
    title: "QOLN — Software Development",
    description: "The New Standard of Digital Products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-white text-[#0A0A0B] selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
