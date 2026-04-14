"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus, Search, MoreHorizontal, Edit2, Trash2, Eye,
  Play, Users, Clock, DollarSign, Filter,
  CheckCircle2, XCircle, Lock, Unlock
} from "lucide-react";
import Link from "next/link";

interface Video {
  id: string;
  title: string;
  youtubeId: string;
  duration: string;
  order: number;
  isPublished: boolean;
}

interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  instructor: string;
  level: "beginner" | "intermediate" | "advanced";
  type: "full" | "tip";
  price: number;
  videos: Video[];
  totalStudents: number;
  isPublished: boolean;
  createdAt: string;
}

const mockCourses: Course[] = [
  {
    id: "1",
    title: "Thêu Cơ Bản: Hoa Cúc",
    description: "Khóa học dành cho người mới bắt đầu, học các kỹ thuật thêu cơ bản qua tác phẩm hoa cúc truyền thống.",
    thumbnail: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&q=80",
    instructor: "Cô Hằng Khoa",
    level: "beginner",
    type: "full",
    price: 0,
    videos: [
      { id: "v1", title: "Giới thiệu khóa học", youtubeId: "dQw4w9WgXcQ", duration: "05:30", order: 1, isPublished: true },
      { id: "v2", title: "Chuẩn bị nguyên liệu", youtubeId: "dQw4w9WgXcQ", duration: "08:15", order: 2, isPublished: true },
      { id: "v3", title: "Kỹ thuật đường kim cơ bản", youtubeId: "dQw4w9WgXcQ", duration: "12:45", order: 3, isPublished: true },
    ],
    totalStudents: 156,
    isPublished: true,
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Thêu Nâng Cao: Chim Hạc",
    description: "Học kỹ thuật thêu chi tiết lông chim, tạo độ mềm mại và chuyển động cho tác phẩm.",
    thumbnail: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=400&q=80",
    instructor: "Thầy Minh",
    level: "advanced",
    type: "full",
    price: 1200000,
    videos: [
      { id: "v4", title: "Nghiên cứu hình dáng chim hạc", youtubeId: "dQw4w9WgXcQ", duration: "10:20", order: 1, isPublished: true },
      { id: "v5", title: "Kỹ thuật thêu lông chi tiết", youtubeId: "dQw4w9WgXcQ", duration: "15:30", order: 2, isPublished: true },
    ],
    totalStudents: 89,
    isPublished: true,
    createdAt: "2024-02-20",
  },
  {
    id: "3",
    title: "Mẹo: Cách chọn chỉ phù hợp",
    description: "Hướng dẫn chọn loại chỉ cho từng loại vải và họa tiết thêu.",
    thumbnail: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&q=80",
    instructor: "Cô Hằng Khoa",
    level: "beginner",
    type: "tip",
    price: 99000,
    videos: [
      { id: "v6", title: "Các loại chỉ phổ biến", youtubeId: "dQw4w9WgXcQ", duration: "08:45", order: 1, isPublished: true },
    ],
    totalStudents: 234,
    isPublished: true,
    createdAt: "2024-03-10",
  },
];

const levelLabels = {
  beginner: { label: "Cơ bản", color: "bg-green-100 text-green-700" },
  intermediate: { label: "Trung cấp", color: "bg-yellow-100 text-yellow-700" },
  advanced: { label: "Nâng cao", color: "bg-red-100 text-red-700" },
};

export default function CoursesAdminPage() {
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  const [filter, setFilter] = useState<"all" | "full" | "tip">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const filteredCourses = courses.filter((course) => {
    const matchesFilter = filter === "all" || course.type === filter;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleDeleteCourse = (courseId: string) => {
    if (confirm("Bạn có chắc muốn xóa khóa học này?")) {
      setCourses(courses.filter((c) => c.id !== courseId));
    }
  };

  const handleTogglePublish = (courseId: string) => {
    setCourses(courses.map((c) =>
      c.id === courseId ? { ...c, isPublished: !c.isPublished } : c
    ));
  };

  const totalVideos = courses.reduce((sum, c) => sum + c.videos.length, 0);
  const totalStudents = courses.reduce((sum, c) => sum + c.totalStudents, 0);
  const paidCourses = courses.filter((c) => c.price > 0).length;

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-serif text-[#1c1917]">Quản lý Khóa học</h1>
          <p className="text-sm text-[#57534e] mt-1">
            Quản lý video, khóa học và nội dung học tập
          </p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#b45309] text-white rounded-lg hover:bg-[#92400e] transition-colors text-sm font-medium"
        >
          <Plus size={18} />
          Thêm khóa học
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg border border-[#e7e5e4]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[#57534e] uppercase tracking-wider">Tổng khóa học</p>
              <p className="text-2xl font-medium text-[#1c1917] mt-1">{courses.length}</p>
            </div>
            <div className="w-10 h-10 bg-[#b45309]/10 rounded-lg flex items-center justify-center">
              <Play size={20} className="text-[#b45309]" />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-[#e7e5e4]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[#57534e] uppercase tracking-wider">Tổng video</p>
              <p className="text-2xl font-medium text-[#1c1917] mt-1">{totalVideos}</p>
            </div>
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
              <Clock size={20} className="text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-[#e7e5e4]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[#57534e] uppercase tracking-wider">Học viên</p>
              <p className="text-2xl font-medium text-[#1c1917] mt-1">{totalStudents}</p>
            </div>
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
              <Users size={20} className="text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-[#e7e5e4]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[#57534e] uppercase tracking-wider">Khóa học trả phí</p>
              <p className="text-2xl font-medium text-[#1c1917] mt-1">{paidCourses}</p>
            </div>
            <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
              <DollarSign size={20} className="text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === "all"
                ? "bg-[#1c1917] text-white"
                : "bg-white text-[#57534e] border border-[#e7e5e4] hover:bg-[#f5f5f4]"
            }`}
          >
            Tất cả
          </button>
          <button
            onClick={() => setFilter("full")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === "full"
                ? "bg-[#1c1917] text-white"
                : "bg-white text-[#57534e] border border-[#e7e5e4] hover:bg-[#f5f5f4]"
            }`}
          >
            Khóa học đầy đủ
          </button>
          <button
            onClick={() => setFilter("tip")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === "tip"
                ? "bg-[#1c1917] text-white"
                : "bg-white text-[#57534e] border border-[#e7e5e4] hover:bg-[#f5f5f4]"
            }`}
          >
            Tips & Tricks
          </button>
        </div>
        <div className="flex-1 relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#57534e]"
          />
          <input
            type="text"
            placeholder="Tìm kiếm khóa học..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-[#e7e5e4] rounded-lg focus:border-[#b45309] focus:outline-none text-sm"
          />
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg border border-[#e7e5e4] overflow-hidden group"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="p-3 bg-white rounded-full hover:bg-[#b45309] hover:text-white transition-colors"
                >
                  <Play size={24} />
                </button>
              </div>
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 text-xs font-medium rounded ${levelLabels[course.level].color}`}>
                  {levelLabels[course.level].label}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 text-xs font-medium rounded ${
                  course.type === "tip" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"
                }`}>
                  {course.type === "tip" ? "Tip" : "Khóa học"}
                </span>
              </div>
              {!course.isPublished && (
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-600">
                    Nháp
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-medium text-[#1c1917] mb-2 line-clamp-2">
                {course.title}
              </h3>
              <p className="text-sm text-[#57534e] mb-3 line-clamp-2">
                {course.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-[#57534e] mb-4">
                <span className="flex items-center gap-1">
                  <Play size={12} />
                  {course.videos.length} video
                </span>
                <span className="flex items-center gap-1">
                  <Users size={12} />
                  {course.totalStudents} học viên
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {course.videos.reduce((sum, v) => {
                    const [min] = v.duration.split(":").map(Number);
                    return sum + min;
                  }, 0)} phút
                </span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#e7e5e4]">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-[#1c1917]">
                    {course.price === 0 ? "Miễn phí" : `${(course.price / 1000).toFixed(0)}K`}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleTogglePublish(course.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      course.isPublished
                        ? "text-green-600 hover:bg-green-50"
                        : "text-gray-400 hover:bg-gray-50"
                    }`}
                    title={course.isPublished ? "Đang công khai" : "Đang ẩn"}
                  >
                    {course.isPublished ? <Unlock size={16} /> : <Lock size={16} />}
                  </button>
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="p-2 text-[#57534e] hover:bg-[#f5f5f4] rounded-lg transition-colors"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDeleteCourse(course.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-[#e7e5e4]">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-medium text-[#1c1917]">{selectedCourse.title}</h2>
                    <p className="text-sm text-[#57534e] mt-1">{selectedCourse.videos.length} video • {selectedCourse.totalStudents} học viên</p>
                  </div>
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="p-2 hover:bg-[#f5f5f4] rounded-lg transition-colors"
                  >
                    <XCircle size={20} />
                  </button>
                </div>
              </div>
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="space-y-4">
                  {selectedCourse.videos.map((video, index) => (
                    <div
                      key={video.id}
                      className="flex items-center gap-4 p-3 bg-[#f5f5f4] rounded-lg"
                    >
                      <div className="w-8 h-8 bg-[#b45309] text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[#1c1917] text-sm">{video.title}</h4>
                        <div className="flex items-center gap-3 text-xs text-[#57534e] mt-1">
                          <span>ID: {video.youtubeId}</span>
                          <span>•</span>
                          <span>{video.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {video.isPublished ? (
                          <CheckCircle2 size={16} className="text-green-600" />
                        ) : (
                          <Lock size={16} className="text-gray-400" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Video Form */}
                <div className="mt-6 pt-6 border-t border-[#e7e5e4]">
                  <h3 className="font-medium text-[#1c1917] mb-4">Thêm video mới</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <input
                      type="text"
                      placeholder="Tiêu đề video"
                      className="px-3 py-2 border border-[#e7e5e4] rounded-lg text-sm focus:border-[#b45309] focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="YouTube ID (vd: dQw4w9WgXcQ)"
                      className="px-3 py-2 border border-[#e7e5e4] rounded-lg text-sm focus:border-[#b45309] focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Thời lượng (vd: 10:30)"
                      className="px-3 py-2 border border-[#e7e5e4] rounded-lg text-sm focus:border-[#b45309] focus:outline-none"
                    />
                  </div>
                  <button className="mt-3 px-4 py-2 bg-[#b45309] text-white rounded-lg text-sm hover:bg-[#92400e] transition-colors">
                    Thêm video
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Course Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsAddModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-[#e7e5e4]">
                <h2 className="text-lg font-medium text-[#1c1917]">Thêm khóa học mới</h2>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#1c1917] mb-2">Tiêu đề</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-[#e7e5e4] rounded-lg text-sm focus:border-[#b45309] focus:outline-none"
                    placeholder="Vd: Thêu Cơ Bản: Hoa Cúc"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1c1917] mb-2">Mô tả</label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-[#e7e5e4] rounded-lg text-sm focus:border-[#b45309] focus:outline-none"
                    placeholder="Mô tả ngắn về khóa học..."
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1c1917] mb-2">Loại</label>
                    <select className="w-full px-3 py-2 border border-[#e7e5e4] rounded-lg text-sm focus:border-[#b45309] focus:outline-none">
                      <option value="full">Khóa học đầy đủ</option>
                      <option value="tip">Tips & Tricks</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1c1917] mb-2">Cấp độ</label>
                    <select className="w-full px-3 py-2 border border-[#e7e5e4] rounded-lg text-sm focus:border-[#b45309] focus:outline-none">
                      <option value="beginner">Cơ bản</option>
                      <option value="intermediate">Trung cấp</option>
                      <option value="advanced">Nâng cao</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1c1917] mb-2">Giá (VNĐ)</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-[#e7e5e4] rounded-lg text-sm focus:border-[#b45309] focus:outline-none"
                      placeholder="0 = Miễn phí"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1c1917] mb-2">Giảng viên</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-[#e7e5e4] rounded-lg text-sm focus:border-[#b45309] focus:outline-none"
                      placeholder="Tên giảng viên"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1c1917] mb-2">Link thumbnail</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-[#e7e5e4] rounded-lg text-sm focus:border-[#b45309] focus:outline-none"
                    placeholder="https://..."
                  />
                  <p className="text-xs text-[#57534e] mt-1">
                    💡 Tip: Upload ảnh lên imgbb.com rồi copy link trực tiếp
                  </p>
                </div>
              </div>
              <div className="p-6 border-t border-[#e7e5e4] flex justify-end gap-3">
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 border border-[#e7e5e4] rounded-lg text-sm hover:bg-[#f5f5f4] transition-colors"
                >
                  Hủy
                </button>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-[#b45309] text-white rounded-lg text-sm hover:bg-[#92400e] transition-colors"
                >
                  Tạo khóa học
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
