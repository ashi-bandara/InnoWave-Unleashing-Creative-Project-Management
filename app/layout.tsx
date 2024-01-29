import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InnoWave",
  description: "Riding the tide of innovation, where ideas meet seamless execution...",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "Light-logo.svg",
        href: "/Light-logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/Dark-logo.svg",
        href: "/Dark-logo.svg",
      }
    ]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ConvexClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="InnoWave-theme-2"
            >
              <Toaster position="bottom-center" />
              {children}
            </ThemeProvider>
        </ConvexClientProvider>
        </body>
    </html>
  );
}
