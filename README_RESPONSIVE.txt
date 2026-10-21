CORNESS — Responsive Rebuild
============================

Bản này được làm lại responsive theo hướng mobile-first nhưng giữ nguyên chức năng hiện có.

Thay đổi chính
- Header desktop giữ nguyên phong cách glass; tablet/mobile dùng chiều cao riêng.
- Thêm hamburger menu cho màn hình dưới 1280px.
- Mobile drawer có đầy đủ 5 trang chính, nút đặt workshop và VN / EN / KO.
- Language switch hiện tại tiếp tục dùng i18n.js và localStorage.
- Mobile: header 64px; tablet: 72px; desktop: 80px.
- Typography headline được scale lại theo viewport 320–767px.
- Giảm padding/gap desktop trên mobile để nội dung thoáng nhưng không lãng phí diện tích.
- AI Studio: substrate/style/motif chuyển 1 cột trên điện thoại, Live Preview co hợp lý, CORA dùng chiều cao theo 100dvh.
- Checkout: bỏ sticky trên tablet/mobile, card form + payment + laser preview co lại đúng màn hình.
- Product 3D: viewer dùng kích thước fluid trên mobile.
- Hero media/card cao cố định được giới hạn lại trên điện thoại.
- Footer và các nhóm CTA wrap đúng ở màn hình nhỏ.
- Hỗ trợ prefers-reduced-motion.

File mới
- responsive.css
- responsive.js

File giữ nguyên chức năng
- i18n.js
- viewer3d-product.html
- viewer3d-secondary.html

Kiểm tra tĩnh
- 9 HTML parse được.
- Không có duplicate ID.
- Inline JavaScript của tất cả trang qua node --check.
- responsive.js và i18n.js qua node --check.
- responsive.css parse không có lỗi cú pháp.

Chạy
Mở toàn bộ thư mục bằng VS Code và chạy index.html bằng Live Server.
Không tách riêng file HTML vì responsive.css, responsive.js và i18n.js là file dùng chung.
