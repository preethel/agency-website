import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Agency Website - Transforming Ideas into Digital Reality",
  description: "We build cutting-edge web applications, AI solutions, and SaaS platforms. Expert team specializing in Full-Stack Development, AI/ML, and Cloud Solutions.",
  keywords: ["web development", "AI solutions", "SaaS platforms", "full-stack development", "fintech", "cloud solutions"],
  authors: [{ name: "Agency Team" }],
  openGraph: {
    title: "Agency Website - Transforming Ideas into Digital Reality",
    description: "We build cutting-edge web applications, AI solutions, and SaaS platforms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agency Website - Transforming Ideas into Digital Reality",
    description: "We build cutting-edge web applications, AI solutions, and SaaS platforms",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#1e293b",
              color: "#fff",
            },
            success: {
              iconTheme: {
                primary: "#10b981",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
