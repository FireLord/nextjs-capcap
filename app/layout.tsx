import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CapCap - Captions For Videos",
  description: "CapCap is a tool that generates captions for videos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
