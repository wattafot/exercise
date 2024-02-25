import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "exercise-t-online",
  description: "exercise-t-online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full flex flex-col justify-center p-4 md:p-20 gap-4">
          {children}
        </main>
      </body>
    </html>
  );
}
