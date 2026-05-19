import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "./Providers";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoMach - AGV & AMR Solutions",
  description: "Advanced industrial machinery, AGV, and AMR solutions for modern automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning
        className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans")}
      >
        <body className="min-h-full flex flex-col bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)]">
          <Providers>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <footer className="border-t py-8 mt-12 bg-background">
              <div className="container text-center text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} AutoMach Solutions. All rights reserved.</p>
              </div>
            </footer>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
