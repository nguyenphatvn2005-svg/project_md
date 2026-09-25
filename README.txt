CORNESS — FINAL FIX
===================

Mục tiêu:
- Giữ nguyên giao diện, màu sắc, bố cục, nội dung, Three.js, animation và logic JavaScript hiện có.
- Chỉ sửa lỗi HTML/validator và các liên kết điều hướng rõ ràng.

Đã sửa:
1. Thêm <title> cho toàn bộ 9 trang.
2. Bổ sung thuộc tính alt cho các ảnh đang chỉ có data-alt.
3. Chuẩn hóa SVG viewbox -> viewBox.
4. Bổ sung type="button" cho các button còn thiếu.
5. Nối các liên kết data-path:
   - Khám Phá -> index.html
   - Trải Nghiệm & Workshop -> experience.html
   - AI Studio & Kể Chuyện -> ai-studio.html
   - Sản Phẩm Của Bạn -> my-product.html
   - Cửa Hàng & Tác Động -> shop.html
6. Đổi trang chính từ index(1).html thành index.html trong bộ xuất.

Đã kiểm tra:
- 9/9 file: đúng 1 <!doctype html>, 1 <html>, 1 <body>.
- Không có ID trùng.
- Không còn ảnh thiếu alt.
- Không còn button thiếu type.
- Không còn data-path href="#".
- Không có liên kết .html nội bộ bị thiếu file.
- CSS inline không có lỗi parse.
- JavaScript inline 9/9 file qua node --check.

Lưu ý:
- Website dùng Tailwind CDN, Google Fonts, Google-hosted images và Three.js CDN nên cần Internet để hiển thị đầy đủ.
- Mở cả thư mục bằng VS Code và chạy index.html bằng Live Server.
