"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, ShoppingBag, BookOpen, Users,
  FileText, Settings, BarChart3, Layers, Image as ImageIcon
} from "lucide-react";

const menuItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Sản phẩm", icon: ShoppingBag },
  { href: "/admin/courses", label: "Khóa học & Video", icon: BookOpen },
  { href: "/admin/orders", label: "Đơn hàng", icon: Layers },
  { href: "/admin/posts", label: "Bài viết", icon: FileText },
  { href: "/admin/media", label: "Thư viện", icon: ImageIcon },
  { href: "/admin/users", label: "Người dùng", icon: Users },
  { href: "/admin/analytics", label: "Thống kê", icon: BarChart3 },
  { href: "/admin/settings", label: "Cài đặt", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-[#e7e5e4] min-h-screen fixed left-0 top-0 z-40">
      {/* Logo */}
      <div className="p-6 border-b border-[#e7e5e4]">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#b45309] rounded-lg flex items-center justify-center">
            <span className="text-white font-serif text-lg">K</span>
          </div>
          <div>
            <h1 className="font-serif text-[#1c1917] font-medium">Admin Panel</h1>
            <p className="text-xs text-[#57534e]">Tranh Thêu Tay</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-[#b45309]/10 text-[#b45309] font-medium"
                  : "text-[#57534e] hover:bg-[#f5f5f4]"
              }`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#e7e5e4]">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-[#57534e] hover:text-[#b45309] transition-colors"
        >
          <span>←</span>
          <span>Về trang chủ</span>
        </Link>
      </div>
    </aside>
  );
}
