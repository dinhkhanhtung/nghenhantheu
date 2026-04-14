import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import AdminSidebar from "@/components/admin/AdminSidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Admin Dashboard - Tranh Thêu Tay Hằng Khoa",
  description: "Quản lý website bán tranh thêu tay",
};

// Admin layout - KHÔNG có Header/Footer của trang web chính
export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} font-sans antialiased bg-[#f5f5f4]`}>
        <div className="flex min-h-screen">
          <AdminSidebar />
          <main className="flex-1 ml-64">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
