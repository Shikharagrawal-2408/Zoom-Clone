import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zoom Clone",
  description: "A video conferencing application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
  appearance={{
    options: {
      logoImageUrl: "/icons/yoom-logo.svg",
      logoPlacement: "inside",
      socialButtonsVariant: "iconButton",
    },

    variables: {
      colorPrimary: "#0E78F9",
      colorForeground: "#ffffff",
      colorBackground: "#1c1f2e",
      colorInput: "#252a41",
      colorInputForeground: "#ffffff",
    },
  }}
>
        <body className={`${inter.className} bg-dark-2`}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}