"use client";

import { useState } from "react";
import { 
  Key, Save, CheckCircle, AlertCircle, Lock, Unlock, Copy,
  Facebook, Image as ImageIcon, Mail, Zap, Settings as SettingsIcon
} from "lucide-react";

export default function APISettingsPage() {
  const [showSecrets, setShowSecrets] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif text-[#1c1917]">Cài đặt API</h1>
          <p className="text-sm text-[#57534e] mt-1">Quản lý các API key và tích hợp dịch vụ bên thứ ba</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#b45309] rounded-lg hover:bg-[#1c1917] transition-colors">
          <Save size={16} /> Lưu cài đặt
        </button>
      </div>

      {/* API Settings */}
      <div className="space-y-6">
        {/* ImgBB API */}
        <div className="bg-white rounded-lg border border-[#e7e5e4] p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#b45309]/10 rounded-lg flex items-center justify-center">
                <ImageIcon size={20} className="text-[#b45309]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1c1917]">ImgBB API</h3>
                <p className="text-sm text-[#57534e]">Dịch vụ lưu trữ hình ảnh</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                <CheckCircle size={10} /> Đã kết nối
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#57534e] mb-2">
                API Key
              </label>
              <div className="relative">
                <input
                  type={showSecrets ? "text" : "password"}
                  defaultValue="a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6"
                  className="w-full px-4 py-2 pr-20 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <button
                    onClick={() => setShowSecrets(!showSecrets)}
                    className="p-1 hover:bg-[#e7e5e4] rounded transition-colors"
                  >
                    {showSecrets ? <Lock size={14} /> : <Unlock size={14} />}
                  </button>
                  <button className="p-1 hover:bg-[#e7e5e4] rounded transition-colors">
                    <Copy size={14} />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#57534e] mb-2">
                API URL
              </label>
              <input
                type="text"
                defaultValue="https://api.imgbb.com/1/upload"
                className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Firebase */}
        <div className="bg-white rounded-lg border border-[#e7e5e4] p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                <Zap size={20} className="text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1c1917]">Firebase</h3>
                <p className="text-sm text-[#57534e]">Database & Authentication</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                <CheckCircle size={10} /> Đã kết nối
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#57534e] mb-2">
                API Key
              </label>
              <input
                type={showSecrets ? "text" : "password"}
                defaultValue="AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#57534e] mb-2">
                Project ID
              </label>
              <input
                type="text"
                defaultValue="hangkhoa-embroidery"
                className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#57534e] mb-2">
                Auth Domain
              </label>
              <input
                type="text"
                defaultValue="hangkhoa-embroidery.firebaseapp.com"
                className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#57534e] mb-2">
                Database URL
              </label>
              <input
                type={showSecrets ? "text" : "password"}
                defaultValue="https://hangkhoa-embroidery-default-rtdb.firebaseio.com"
                className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Facebook API */}
        <div className="bg-white rounded-lg border border-[#e7e5e4] p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1877F2]/10 rounded-lg flex items-center justify-center">
                <Facebook size={20} className="text-[#1877F2]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1c1917]">Facebook API</h3>
                <p className="text-sm text-[#57534e]">Fanpage & Comment Sync</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                <AlertCircle size={10} /> Chưa kết nối
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#57534e] mb-2">
                App ID
              </label>
              <input
                type="text"
                placeholder="123456789012345"
                className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#57534e] mb-2">
                App Secret
              </label>
              <input
                type={showSecrets ? "text" : "password"}
                placeholder="abc123def456"
                className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#57534e] mb-2">
                Page ID
              </label>
              <input
                type="text"
                placeholder="123456789012345"
                className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#57534e] mb-2">
                Page Access Token
              </label>
              <input
                type={showSecrets ? "text" : "password"}
                placeholder="EAAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Email Service */}
        <div className="bg-white rounded-lg border border-[#e7e5e4] p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Mail size={20} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1c1917]">Email Service</h3>
                <p className="text-sm text-[#57534e]">Gửi email thông báo</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                <AlertCircle size={10} /> Chưa kết nối
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#57534e] mb-2">
                Email Provider
              </label>
              <select className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none">
                <option>SendGrid</option>
                <option>Mailgun</option>
                <option>Resend</option>
                <option>SMTP Custom</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#57534e] mb-2">
                  API Key
                </label>
                <input
                  type={showSecrets ? "text" : "password"}
                  placeholder="SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#57534e] mb-2">
                  From Email
                </label>
                <input
                  type="email"
                  placeholder="noreply@hangkhoa.com"
                  className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* AI Image Generator */}
        <div className="bg-white rounded-lg border border-[#e7e5e4] p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <SettingsIcon size={20} className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1c1917]">AI Image Generator</h3>
                <p className="text-sm text-[#57534e]">Tạo ảnh bằng AI (DALL-E, Stable Diffusion)</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                <AlertCircle size={10} /> Chưa kết nối
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#57534e] mb-2">
                Provider
              </label>
              <select className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none">
                <option>OpenAI (DALL-E)</option>
                <option>Stability AI</option>
                <option>Midjourney</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#57534e] mb-2">
                API Key
              </label>
              <input
                type={showSecrets ? "text" : "password"}
                placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-yellow-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-800">Lưu ý bảo mật</h4>
              <p className="text-sm text-yellow-700 mt-1">
                API keys chứa thông tin nhạy cảm. Không chia sẻ với người khác. 
                Thay đổi key định kỳ để bảo mật.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
