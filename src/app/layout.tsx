import type { Metadata } from "next";
import { Be_Vietnam_Pro, Noto_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import ClientLayout from "@/components/ClientLayout";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam",
});

const notoSans = Noto_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Tên Thương Hiệu - Website bán hàng & khóa học",
  description: "Mô tả về sản phẩm và dịch vụ của bạn. Có thể tùy chỉnh trong Admin Dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${beVietnamPro.variable} ${notoSans.variable} font-sans antialiased`} suppressHydrationWarning>
        <Providers>
          <ClientLayout>
            {children}
          </ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
