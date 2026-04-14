"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Facebook, Instagram } from "@thesvg/react";

const footerLinks = {
  shop: [
    { name: "Tranh Thêu Tay", href: "/san-pham" },
    { name: "Phụ Kiện Thêu", href: "/phu-kien" },
    { name: "Khóa Học Online", href: "/khoa-hoc" },
    { name: "Khung Tranh", href: "/phu-kien" },
  ],
  support: [
    { name: "Hướng Dẫn Mua Hàng", href: "#" },
    { name: "Chính Sách Đổi Trả", href: "#" },
    { name: "Vận Chuyển & Giao Hàng", href: "#" },
    { name: "Câu Hỏi Thường Gặp", href: "#" },
  ],
  company: [
    { name: "Về Chúng Tôi", href: "/gioi-thieu" },
    { name: "Câu Chuyện Thương Hiệu", href: "/gioi-thieu" },
    { name: "Liên Hệ", href: "/lien-he" },
    { name: "Tuyển Dụng", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1c1917] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="text-xl font-serif mb-2">Đăng Ký Nhận Tin</h3>
              <p className="text-sm text-white/60">Nhận thông tin về sản phẩm mới và ưu đãi đặc biệt</p>
            </div>
            <div className="flex gap-3 max-w-md w-full lg:w-auto">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#b45309]"
              />
              <button className="px-6 py-3 bg-white text-[#1c1917] text-sm font-medium hover:bg-[#b45309] hover:text-white transition-colors">
                Đăng Ký
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-center lg:text-left">
              <div className="text-xl font-serif text-white tracking-wide">
                TRANH THÊU TAY
              </div>
              <div className="text-[10px] tracking-[0.3em] text-white/60 uppercase">
                Hằng Khoa
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Kế thừa tinh hoa nghề thêu truyền thống, mang đến những tác phẩm nghệ thuật độc đáo và ý nghĩa. Mỗi đường kim mũi chỉ đều chứa đựng tâm huyết và kỹ nghệ.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#b45309] hover:text-[#b45309] transition-colors">
                <Facebook width={16} height={16} variant="mono" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#b45309] hover:text-[#b45309] transition-colors">
                <Instagram width={16} height={16} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="mb-5 text-xs font-medium tracking-[0.2em] uppercase text-white/80">
              Cửa Hàng
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#b45309] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="mb-5 text-xs font-medium tracking-[0.2em] uppercase text-white/80">
              Hỗ Trợ
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#b45309] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xs font-medium tracking-[0.2em] uppercase text-white/80">
              Liên Hệ
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#b45309] mt-0.5" />
                <span className="text-sm text-white/60">0982 581 222</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#b45309] mt-0.5" />
                <span className="text-sm text-white/60">info@hoathuong.vn</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-[#b45309] mt-0.5" />
                <span className="text-sm text-white/60">
                  Cũ Văn, Thái Nguyên, Việt Nam
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © 2024 Tranh Thêu Tay Hằng Khoa. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">
                Chính sách bảo mật
              </Link>
              <Link href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
