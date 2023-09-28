import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {StateProvider} from "./contexts/state-context";
import "./globals.css";
import React, {ReactNode} from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duolingo Ripoff",
  description: "My amazing duolingo ripoff",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Duolingo Ripoff</title>
      </head>
      <StateProvider>
        <body className={inter.className}>{children}</body>
      </StateProvider>
    </html>
  );
}
