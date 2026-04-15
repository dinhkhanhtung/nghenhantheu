# Checklist Rà Soát UX/UI - Frontend & Admin

## 📱 Frontend - Mobile

### ✅ Navigation
- [x] Header: Logo không xuống dòng
- [x] Header: Search + User icon sát nhau
- [x] Header: Không trùng lặp Cart với bottom bar
- [x] Bottom bar: 5 tab cân đối (Trang chủ, Shop, Giỏ, Mẫu thêu, Tin tức)
- [x] Bottom bar: Đã xóa Tài khoản (đã chuyển lên header)

### ✅ Trang Chủ
- [x] Slider: Icon không che chữ (đã di chuyển xuống dưới trên mobile)
- [x] Stats: Hiển thị 1 hàng trên mobile

### ✅ Trang Sản Phẩm
- [x] Filter: Không bị xuống dòng (flex-nowrap + overflow-x-auto)
- [x] Product detail: Shipping info không bị xuống dòng
- [x] Product detail: Variants selection hiển thị đúng

### ✅ Trang Phụ Kiện
- [x] Đã thêm bộ lọc (search + category filter)
- [x] Padding: Giảm từ 140px xuống 100px

### ✅ Trang Tài Nguyên
- [x] Filter: Không bị xuống dòng (flex-nowrap + overflow-x-auto)

### ✅ Trang Đăng Nhập/Đăng Ký
- [x] Padding: Giảm từ 140px xuống 100px (không cần cuộn nhiều)

### ✅ Footer
- [x] Social media: Đầy đủ (Facebook, Instagram, YouTube, TikTok, Twitter)
- [x] Floating contact: Đã đổi sang trái, BackToTop sang phải

---

## 💻 Frontend - Desktop

### ✅ Navigation
- [x] Header: Mega menu hoạt động đúng
- [x] Header: Tất cả icon hiển thị (Search, Wishlist, User, Cart)
- [x] Links: Ẩn/hiện theo module settings (Khóa học, Tài nguyên, Blog)

### ✅ Responsive
- [x] Breakpoint lg: 1024px hoạt động đúng
- [x] Grid layout: grid-cols-2 mobile → 3 tablet → 4 desktop

---

## 🔧 Admin Panel - Mobile

### ⚠️ Cần Kiểm Tra
- [ ] Sidebar: Có menu hamburger không?
- [ ] Tables: Có scroll ngang không?
- [ ] Forms: Inputs có đủ rộng không?
- [ ] Modals: Có bị che phần nào không?

---

## 🔧 Admin Panel - Desktop

### ✅ Layout
- [x] Sidebar: 3 nhóm (Đào tạo, Sản phẩm, Cài đặt)
- [x] Navigation: Hover effects hoạt động đúng
- [x] Tables: Responsive với scroll

### ✅ Forms
- [x] Product modal: Thuộc tính variants/custom attributes
- [x] Website Settings: Tab Tính năng (bật/tắt modules)
- [x] API Settings: Firebase, ImgBB config

---

## 🎨 UI/UX Issues Đã Sửa

| Issue | Trạng thái | File |
|-------|-----------|------|
| Logo header xuống dòng mobile | ✅ Sửa | Header.tsx |
| User icon trùng lặp | ✅ Sửa | MobileBottomBar.tsx |
| Icon slider che chữ | ✅ Sửa | HeroBanner.tsx |
| Filter xuống dòng | ✅ Sửa | tai-nguyen/page.tsx |
| Shipping info xuống dòng | ✅ Sửa | san-pham/[id]/page.tsx |
| Padding đăng nhập quá lớn | ✅ Sửa | dang-nhap/page.tsx |
| Phụ kiện thêu thiếu bộ lọc | ✅ Sửa | phu-kien/page.tsx |
| Stats xuống dòng mobile | ✅ Sửa | khoa-hoc/page.tsx |
| Chat & BackToTop đè nhau | ✅ Sửa | FloatingContactBar.tsx, BackToTop.tsx |

---

## 🚀 Cần Làm Tiếp (Nếu có)

### Admin Mobile
- [ ] Thêm menu hamburger cho sidebar
- [ ] Optimize tables cho mobile (horizontal scroll)
- [ ] Optimize forms cho mobile (full width inputs)

### Performance
- [ ] Lazy load images
- [ ] Optimize bundle size
- [ ] Add loading skeletons

### Accessibility
- [ ] ARIA labels cho buttons
- [ ] Keyboard navigation
- [ ] Screen reader support

---

*Last updated: April 15, 2026*
