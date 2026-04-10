"use client";

import { useState } from "react";
import { 
  Globe, Phone, Mail, MapPin, Clock, Save, Upload,
  Image as ImageIcon, Palette, Layout, Settings as SettingsIcon
} from "lucide-react";

export default function WebsiteSettingsPage() {
  const [activeTab, setActiveTab] = useState<"general" | "contact" | "seo" | "appearance">("general");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif text-[#1c1917]">Cài đặt Website</h1>
          <p className="text-sm text-[#57534e] mt-1">Cấu hình thông tin và cài đặt chung cho website</p>
        </div>
      </div>

      {/* Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-[#e7e5e4] p-4 sticky top-24">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("general")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "general"
                    ? "bg-[#b45309] text-white"
                    : "text-[#57534e] hover:bg-[#e7e5e4]"
                }`}
              >
                <Globe size={18} />
                <span>Thông tin chung</span>
              </button>
              <button
                onClick={() => setActiveTab("contact")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "contact"
                    ? "bg-[#b45309] text-white"
                    : "text-[#57534e] hover:bg-[#e7e5e4]"
                }`}
              >
                <Phone size={18} />
                <span>Liên hệ</span>
              </button>
              <button
                onClick={() => setActiveTab("seo")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "seo"
                    ? "bg-[#b45309] text-white"
                    : "text-[#57534e] hover:bg-[#e7e5e4]"
                }`}
              >
                <Layout size={18} />
                <span>SEO</span>
              </button>
              <button
                onClick={() => setActiveTab("appearance")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "appearance"
                    ? "bg-[#b45309] text-white"
                    : "text-[#57534e] hover:bg-[#e7e5e4]"
                }`}
              >
                <Palette size={18} />
                <span>Giao diện</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg border border-[#e7e5e4] p-6">
            {activeTab === "general" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-[#e7e5e4]">
                  <Globe size={20} className="text-[#b45309]" />
                  <h3 className="font-semibold text-[#1c1917]">Thông tin chung</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#57534e] mb-2">
                      Tên website
                    </label>
                    <input
                      type="text"
                      defaultValue="Tranh Thêu Tay Hằng Khoa"
                      className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#57534e] mb-2">
                      Slogan
                    </label>
                    <input
                      type="text"
                      defaultValue="Kế thừa tinh hoa nghề thêu truyền thống"
                      className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#57534e] mb-2">
                    Mô tả website
                  </label>
                  <textarea
                    defaultValue="Website bán tranh thêu tay và các sản phẩm thêu truyền thống. Kế thừa tinh hoa nghề thêu, mang đến những tác phẩm nghệ thuật độc đáo."
                    rows={3}
                    className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#57534e] mb-2">
                      Logo
                    </label>
                    <div className="border-2 border-dashed border-[#e7e5e4] rounded-lg p-4 text-center hover:border-[#b45309] transition-colors cursor-pointer">
                      <Upload size={24} className="mx-auto mb-2 text-[#57534e]" />
                      <p className="text-sm text-[#57534e]">Click để tải logo</p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#57534e] mb-2">
                      Favicon
                    </label>
                    <div className="border-2 border-dashed border-[#e7e5e4] rounded-lg p-4 text-center hover:border-[#b45309] transition-colors cursor-pointer">
                      <ImageIcon size={24} className="mx-auto mb-2 text-[#57534e]" />
                      <p className="text-sm text-[#57534e]">Click để tải favicon</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-[#e7e5e4]">
                  <Phone size={20} className="text-[#b45309]" />
                  <h3 className="font-semibold text-[#1c1917]">Thông tin liên hệ</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#57534e] mb-2">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      defaultValue="0982581222"
                      className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#57534e] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="contact@hangkhoa.com"
                      className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#57534e] mb-2">
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    defaultValue="Xóm Hằng Khoa, Cũ Văn, Phú Lương, Thái Nguyên, Việt Nam"
                    className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#57534e] mb-2">
                      Zalo
                    </label>
                    <input
                      type="text"
                      defaultValue="0982581222"
                      className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#57534e] mb-2">
                      Facebook
                    </label>
                    <input
                      type="text"
                      defaultValue="https://facebook.com/tranhhangkhoa"
                      className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#57534e] mb-2">
                    Giờ làm việc
                  </label>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[#57534e]" />
                    <input
                      type="text"
                      defaultValue="Thứ 2 - Chủ nhật: 8:00 - 20:00"
                      className="flex-1 px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#57534e] mb-2">
                    Google Maps URL
                  </label>
                  <input
                    type="text"
                    placeholder="https://maps.google.com/..."
                    className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
                  />
                </div>
              </div>
            )}

            {activeTab === "seo" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-[#e7e5e4]">
                  <Layout size={20} className="text-[#b45309]" />
                  <h3 className="font-semibold text-[#1c1917]">Cài đặt SEO</h3>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#57534e] mb-2">
                    Meta Title mặc định
                  </label>
                  <input
                    type="text"
                    defaultValue="Tranh Thêu Tay Hằng Khoa - Nghệ thuật thêu truyền thống"
                    className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
                  />
                  <p className="text-xs text-[#57534e] mt-1">Tối đa 60 ký tự</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#57534e] mb-2">
                    Meta Description mặc định
                  </label>
                  <textarea
                    defaultValue="Kế thừa tinh hoa nghề thêu truyền thống, mang đến những tác phẩm nghệ thuật độc đáo và ý nghĩa."
                    rows={3}
                    className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none resize-none"
                  />
                  <p className="text-xs text-[#57534e] mt-1">Tối đa 160 ký tự</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#57534e] mb-2">
                    Keywords
                  </label>
                  <input
                    type="text"
                    defaultValue="tranh thêu tay, tranh thêu truyền thống, tranh thêu hoa sen, tranh thêu giá rẻ"
                    className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#57534e] mb-2">
                    Google Analytics ID
                  </label>
                  <input
                    type="text"
                    placeholder="UA-XXXXXXXXX-X"
                    className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#57534e] mb-2">
                    Google Search Console Verification
                  </label>
                  <input
                    type="text"
                    placeholder="Google Site Verification code"
                    className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
                  />
                </div>
              </div>
            )}

            {activeTab === "appearance" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-[#e7e5e4]">
                  <Palette size={20} className="text-[#b45309]" />
                  <h3 className="font-semibold text-[#1c1917]">Giao diện</h3>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#57534e] mb-2">
                    Màu chính
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      defaultValue="#b45309"
                      className="w-12 h-10 rounded border border-[#e7e5e4]"
                    />
                    <input
                      type="text"
                      defaultValue="#b45309"
                      className="flex-1 px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#57534e] mb-2">
                    Màu nền
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      defaultValue="#fffbf5"
                      className="w-12 h-10 rounded border border-[#e7e5e4]"
                    />
                    <input
                      type="text"
                      defaultValue="#fffbf5"
                      className="flex-1 px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#57534e] mb-2">
                    Font chính
                  </label>
                  <select className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none">
                    <option>Inter</option>
                    <option>Roboto</option>
                    <option>Open Sans</option>
                    <option>Lato</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#fffbf5] rounded-lg">
                  <div>
                    <p className="font-medium text-[#1c1917]">Maintenance Mode</p>
                    <p className="text-sm text-[#57534e]">Tắt website để bảo trì</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-[#e7e5e4] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#b45309]"></div>
                  </label>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="pt-6 border-t border-[#e7e5e4] flex justify-end">
              <button className="flex items-center gap-2 px-6 py-2 bg-[#b45309] text-white rounded-lg hover:bg-[#92400e] transition-colors">
                <Save size={16} />
                Lưu cài đặt
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
