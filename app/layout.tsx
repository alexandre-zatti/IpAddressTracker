import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import ToastProvider from "@/app/contexts/ToastProvider";

const rubik = Rubik({subsets: ["latin"], weight: ["400", "500", "600", "700", "800"]});

export const metadata: Metadata = {
  title: "Ip Adress Tracker",
  description: "Stylish way to track IP's",
};


export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={rubik.className}>
    <ToastProvider>
      {children}
    </ToastProvider>
    </body>
    </html>
  );
}
