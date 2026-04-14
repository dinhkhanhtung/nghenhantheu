import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Admin Dashboard - Tranh Thêu Tay Hằng Khoa",
  description: "Quản lý website bán tranh thêu tay",
};

// Admin root layout - children will be rendered by nested layouts
export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} font-sans antialiased bg-[#f5f5f4]`}>
        {children}
      </body>
    </html>
  );
}
