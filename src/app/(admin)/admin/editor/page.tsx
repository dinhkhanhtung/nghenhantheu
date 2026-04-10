"use client";

import { useState } from "react";
import { 
  Bold, Italic, Underline, List, ListOrdered, 
  AlignLeft, AlignCenter, AlignRight, Image as ImageIcon,
  Link, Code, Quote, Heading1, Heading2, Heading3,
  Undo, Redo, Save, Send, Clock, Sparkles, Share2,
  X, Upload, Grid, Search
} from "lucide-react";

export default function EditorPage() {
  const [activeTab, setActiveTab] = useState<"editor" | "media" | "ai" | "schedule" | "share">("editor");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="min-h-screen bg-[#fffbf5]">
      {/* Header */}
      <div className="bg-white border-b border-[#e7e5e4] sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#1c1917]">Trình Soạn Thảo</h1>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-[#57534e] hover:text-[#b45309] transition-colors">
                Lưu nháp
              </button>
              <button className="px-6 py-2 bg-[#b45309] text-white rounded-lg hover:bg-[#92400e] transition-colors">
                Đăng bài
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-[#e7e5e4] p-4 sticky top-20">
              <h2 className="text-sm font-semibold text-[#57534e] mb-4 uppercase tracking-wider">
                Công cụ
              </h2>
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("editor")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "editor"
                      ? "bg-[#b45309] text-white"
                      : "text-[#57534e] hover:bg-[#e7e5e4]"
                  }`}
                >
                  <EditIcon size={18} />
                  <span>Soạn thảo</span>
                </button>
                <button
                  onClick={() => setActiveTab("media")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "media"
                      ? "bg-[#b45309] text-white"
                      : "text-[#57534e] hover:bg-[#e7e5e4]"
                  }`}
                >
                  <ImageIcon size={18} />
                  <span>Kho ảnh</span>
                </button>
                <button
                  onClick={() => setActiveTab("ai")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "ai"
                      ? "bg-[#b45309] text-white"
                      : "text-[#57534e] hover:bg-[#e7e5e4]"
                  }`}
                >
                  <Sparkles size={18} />
                  <span>AI viết hộ</span>
                </button>
                <button
                  onClick={() => setActiveTab("schedule")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "schedule"
                      ? "bg-[#b45309] text-white"
                      : "text-[#57534e] hover:bg-[#e7e5e4]"
                  }`}
                >
                  <Clock size={18} />
                  <span>Hẹn giờ</span>
                </button>
                <button
                  onClick={() => setActiveTab("share")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "share"
                      ? "bg-[#b45309] text-white"
                      : "text-[#57534e] hover:bg-[#e7e5e4]"
                  }`}
                >
                  <Share2 size={18} />
                  <span>Chia sẻ</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg border border-[#e7e5e4] p-6">
              {/* Tab Content */}
              {activeTab === "editor" && (
                <div className="space-y-6">
                  {/* Title Input */}
                  <div>
                    <input
                      type="text"
                      placeholder="Tiêu đề bài viết..."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full text-3xl font-bold text-[#1c1917] placeholder-[#a8a29e] border-0 focus:outline-none focus:ring-0"
                    />
                  </div>

                  {/* Toolbar */}
                  <div className="border-y border-[#e7e5e4] py-3">
                    <div className="flex flex-wrap items-center gap-1">
                      <div className="flex items-center gap-1 pr-3 border-r border-[#e7e5e4]">
                        <button className="p-2 hover:bg-[#e7e5e4] rounded transition-colors" title="Đỏ mực">
                          <Bold size={18} />
                        </button>
                        <button className="p-2 hover:bg-[#e7e5e4] rounded transition-colors" title="In nghiêng">
                          <Italic size={18} />
                        </button>
                        <button className="p-2 hover:bg-[#e7e5e4] rounded transition-colors" title="Gạch chân">
                          <Underline size={18} />
                        </button>
                      </div>
                      <div className="flex items-center gap-1 px-3 border-r border-[#e7e5e4]">
                        <button className="p-2 hover:bg-[#e7e5e4] rounded transition-colors" title="H1">
                          <Heading1 size={18} />
                        </button>
                        <button className="p-2 hover:bg-[#e7e5e4] rounded transition-colors" title="H2">
                          <Heading2 size={18} />
                        </button>
                        <button className="p-2 hover:bg-[#e7e5e4] rounded transition-colors" title="H3">
                          <Heading3 size={18} />
                        </button>
                      </div>
                      <div className="flex items-center gap-1 px-3 border-r border-[#e7e5e4]">
                        <button className="p-2 hover:bg-[#e7e5e4] rounded transition-colors" title="Danh sách">
                          <List size={18} />
                        </button>
                        <button className="p-2 hover:bg-[#e7e5e4] rounded transition-colors" title="Danh sách số">
                          <ListOrdered size={18} />
                        </button>
                      </div>
                      <div className="flex items-center gap-1 px-3 border-r border-[#e7e5e4]">
                        <button className="p-2 hover:bg-[#e7e5e4] rounded transition-colors" title="Căn trái">
                          <AlignLeft size={18} />
                        </button>
                        <button className="p-2 hover:bg-[#e7e5e4] rounded transition-colors" title="Căn giữa">
                          <AlignCenter size={18} />
                        </button>
                        <button className="p-2 hover:bg-[#e7e5e4] rounded transition-colors" title="Căn phải">
                          <AlignRight size={18} />
                        </button>
                      </div>
                      <div className="flex items-center gap-1 px-3 border-r border-[#e7e5e4]">
                        <button className="p-2 hover:bg-[#e7e5e4] rounded transition-colors" title="Link">
                          <Link size={18} />
                        </button>
                        <button className="p-2 hover:bg-[#e7e5e4] rounded transition-colors" title="Ảnh">
                          <ImageIcon size={18} />
                        </button>
                        <button className="p-2 hover:bg-[#e7e5e4] rounded transition-colors" title="Code">
                          <Code size={18} />
                        </button>
                        <button className="p-2 hover:bg-[#e7e5e4] rounded transition-colors" title="Trích dẫn">
                          <Quote size={18} />
                        </button>
                      </div>
                      <div className="flex items-center gap-1 pl-3">
                        <button className="p-2 hover:bg-[#e7e5e4] rounded transition-colors" title="Hoàn tác">
                          <Undo size={18} />
                        </button>
                        <button className="p-2 hover:bg-[#e7e5e4] rounded transition-colors" title="Làm lại">
                          <Redo size={18} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Editor Content Area */}
                  <div className="min-h-[500px]">
                    <textarea
                      placeholder="Nội dung bài viết..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="w-full h-full min-h-[500px] text-[#1c1917] placeholder-[#a8a29e] border-0 focus:outline-none focus:ring-0 resize-none"
                    />
                  </div>
                </div>
              )}

              {activeTab === "media" && (
                <div className="space-y-6">
                  {/* Upload Area */}
                  <div className="border-2 border-dashed border-[#e7e5e4] rounded-lg p-8 text-center hover:border-[#b45309] transition-colors cursor-pointer">
                    <Upload className="mx-auto mb-4 text-[#57534e]" size={48} />
                    <p className="text-[#57534e] mb-2">Kéo thả ảnh vào đây hoặc click để tải lên</p>
                    <p className="text-sm text-[#a8a29e]">JPG, PNG, WebP (tối đa 5MB)</p>
                  </div>

                  {/* Media Library */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-[#1c1917]">Kho ảnh</h3>
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a8a29e]" size={16} />
                          <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            className="pl-10 pr-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none text-sm"
                          />
                        </div>
                        <button className="p-2 hover:bg-[#e7e5e4] rounded transition-colors">
                          <Grid size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="relative group">
                          <div className="aspect-square bg-[#e7e5e4] rounded-lg overflow-hidden">
                            <img
                              src={`https://images.unsplash.com/photo-1578301978693-85fa9c0320b${i}?w=300&q=80`}
                              alt={`Image ${i}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                            <button className="p-2 bg-white rounded hover:bg-[#fffbf5] transition-colors">
                              <ImageIcon size={16} />
                            </button>
                            <button className="p-2 bg-white rounded hover:bg-[#fffbf5] transition-colors">
                              <X size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "ai" && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-[#b45309]/10 to-[#fffbf5] rounded-lg p-6 border border-[#b45309]/20">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#b45309] rounded-lg">
                        <Sparkles className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#1c1917] mb-2">AI viết hộ</h3>
                        <p className="text-sm text-[#57534e] mb-4">
                          Nhập chủ đề hoặc ý tưởng, AI sẽ giúp bạn viết nội dung bài viết.
                        </p>
                        <textarea
                          placeholder="Ví dụ: Viết bài về cách thêu hoa sen cho người mới bắt đầu..."
                          className="w-full p-4 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none resize-none h-32"
                        />
                        <button className="mt-3 px-6 py-2 bg-[#b45309] text-white rounded-lg hover:bg-[#92400e] transition-colors flex items-center gap-2">
                          <Sparkles size={16} />
                          Viết nội dung
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* AI Suggestions */}
                  <div>
                    <h3 className="font-semibold text-[#1c1917] mb-4">Gợi ý nhanh</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Viết bài hướng dẫn thêu cơ bản",
                        "Tạo mô tả sản phẩm",
                        "Viết SEO meta description",
                        "Tạo câu hỏi Q&A",
                        "Viết caption Facebook",
                        "Tóm tắt bài viết"
                      ].map((suggestion, i) => (
                        <button
                          key={i}
                          className="p-3 border border-[#e7e5e4] rounded-lg hover:border-[#b45309] hover:bg-[#b45309]/5 transition-colors text-left text-sm"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "schedule" && (
                <div className="space-y-6">
                  <div className="bg-[#fffbf5] rounded-lg p-6 border border-[#e7e5e4]">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#b45309] rounded-lg">
                        <Clock className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#1c1917] mb-2">Hẹn giờ đăng</h3>
                        <p className="text-sm text-[#57534e] mb-4">
                          Thiết lập thời gian tự động đăng bài viết lên website và mạng xã hội.
                        </p>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-[#57534e] mb-2">
                              Ngày đăng
                            </label>
                            <input
                              type="date"
                              className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#57534e] mb-2">
                              Giờ đăng
                            </label>
                            <input
                              type="time"
                              className="w-full px-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none"
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="checkbox" id="auto-publish" className="rounded border-[#e7e5e4]" />
                            <label htmlFor="auto-publish" className="text-sm text-[#57534e]">
                              Tự động đăng khi đến giờ
                            </label>
                          </div>
                        </div>

                        <button className="mt-4 px-6 py-2 bg-[#b45309] text-white rounded-lg hover:bg-[#92400e] transition-colors flex items-center gap-2">
                          <Clock size={16} />
                          Lên lịch
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Scheduled Posts */}
                  <div>
                    <h3 className="font-semibold text-[#1c1917] mb-4">Bài viết đã lên lịch</h3>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white border border-[#e7e5e4] rounded-lg p-4 flex items-center justify-between">
                          <div>
                            <p className="font-medium text-[#1c1917]">Bài viết mẫu {i}</p>
                            <p className="text-sm text-[#57534e]">Đăng vào 15/04/2026 lúc 09:00</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-[#e7e5e4] rounded transition-colors">
                              <Clock size={16} />
                            </button>
                            <button className="p-2 hover:bg-[#e7e5e4] rounded transition-colors">
                              <X size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "share" && (
                <div className="space-y-6">
                  <div className="bg-[#fffbf5] rounded-lg p-6 border border-[#e7e5e4]">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#b45309] rounded-lg">
                        <Share2 className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#1c1917] mb-2">Chia sẻ lên mạng xã hội</h3>
                        <p className="text-sm text-[#57534e] mb-4">
                          Tự động chia sẻ bài viết lên Fanpage Facebook và các nền tảng khác.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 bg-white border border-[#e7e5e4] rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">f</span>
                              </div>
                              <div>
                                <p className="font-medium text-[#1c1917]">Facebook Fanpage</p>
                                <p className="text-sm text-[#57534e]">Tranh Thêu Tay Hằng Khoa</p>
                              </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" defaultChecked className="sr-only peer" />
                              <div className="w-11 h-6 bg-[#e7e5e4] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#b45309]"></div>
                            </label>
                          </div>

                          <div className="flex items-center justify-between p-4 bg-white border border-[#e7e5e4] rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">IG</span>
                              </div>
                              <div>
                                <p className="font-medium text-[#1c1917]">Instagram</p>
                                <p className="text-sm text-[#57534e]">@hangkhoa.embroidery</p>
                              </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" />
                              <div className="w-11 h-6 bg-[#e7e5e4] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#b45309]"></div>
                            </label>
                          </div>

                          <div className="flex items-center justify-between p-4 bg-white border border-[#e7e5e4] rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">Z</span>
                              </div>
                              <div>
                                <p className="font-medium text-[#1c1917]">Zalo OA</p>
                                <p className="text-sm text-[#57534e]">Official Account</p>
                              </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" />
                              <div className="w-11 h-6 bg-[#e7e5e4] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#b45309]"></div>
                            </label>
                          </div>
                        </div>

                        <button className="mt-4 px-6 py-2 bg-[#b45309] text-white rounded-lg hover:bg-[#92400e] transition-colors flex items-center gap-2">
                          <Send size={16} />
                          Chia sẻ ngay
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Share Templates */}
                  <div>
                    <h3 className="font-semibold text-[#1c1917] mb-4">Mẫu chia sẻ</h3>
                    <div className="space-y-3">
                      {[
                        { name: "Mẫu sản phẩm", desc: "Tập trung vào sản phẩm" },
                        { name: "Mẫu khuyến mãi", desc: "Nhấn mạnh ưu đãi" },
                        { name: "Mẫu chia sẻ kiến thức", desc: "Hướng dẫn và tips" }
                      ].map((template, i) => (
                        <div key={i} className="bg-white border border-[#e7e5e4] rounded-lg p-4 hover:border-[#b45309] transition-colors cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-[#1c1917]">{template.name}</p>
                              <p className="text-sm text-[#57534e]">{template.desc}</p>
                            </div>
                            <button className="text-[#b45309] hover:text-[#92400e] transition-colors">
                              Sử dụng
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper icon component
function EditIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}
