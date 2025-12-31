import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ark8 Space - Designing the Future",
  description: "We craft premium digital experiences, innovative strategies, and pixel-perfect visuals that define your brand. Expert team specializing in Full-Stack Development and Design.",
  keywords: ["web development", "UI/UX design", "Ark8 Space", "digital agency", "branding"],
  authors: [{ name: "Ark8 Space Team" }],
  openGraph: {
    title: "Ark8 Space - Designing the Future",
    description: "We craft premium digital experiences, innovative strategies, and pixel-perfect visuals that define your brand.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ark8 Space - Designing the Future",
    description: "We craft premium digital experiences, innovative strategies, and pixel-perfect visuals that define your brand.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
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
