import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout/Layout";

export const metadata: Metadata = {
  title: {
    default: "NextMart",
    template: "NextMart | %s"
  },
};

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
