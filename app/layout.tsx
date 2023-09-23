import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StateProvider } from "./contexts/state-context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duolingo Ripoff",
  description: "My amazing duolingo ripoff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <StateProvider>
        <body className={inter.className}>{children}</body>
      </StateProvider>
    </html>
  );
}
