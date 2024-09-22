import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserratFont = localFont({
  src: "../public/font/montserrat_font.ttf"
});

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
      <body className={`${montserratFont.className} antialiased bg-neutral-900`}>
        {children}
      </body>
    </html>
  );
}
