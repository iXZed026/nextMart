import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout/Layout";

export const metadata: Metadata = {
  title: {
    default: "NextMart",
    template: "NextMart | %s"
  },
  icons: "/images/next_mart-logo.png",
  openGraph: {
    title: "NextMart | Modern E-commerce App",
    description: "Buy your favorite products with ease – powered by Next.js and MongoDB.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "NextMart",
    images: [
      {
        url: "/images/next_mart-logo.png",
        width: 630,
        height: 630,
        alt: "NextMart Banner",
      },
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html >
  );
}
