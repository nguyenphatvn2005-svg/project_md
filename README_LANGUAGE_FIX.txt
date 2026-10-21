CORNESS — Language Switch Fix

Đã sửa:
- Thanh VN | EN | KO trên header hoạt động thật sự.
- Click để đổi ngôn ngữ giao diện chính.
- Lưu lựa chọn bằng localStorage khi chuyển trang.
- Cập nhật thuộc tính <html lang>.
- Có trạng thái active cho ngôn ngữ đang chọn.
- Hỗ trợ keyboard Enter/Space.
- Không đụng vào bộ chọn ngôn ngữ hướng dẫn workshop trong experience.html.
- Không sửa ID, src hình ảnh, Three.js hoặc logic JavaScript cũ.

File mới:
- i18n.js

Các trang đã kích hoạt:
- index.html
- experience.html
- ai-studio.html
- my-product.html
- shop.html
- checkout.html
- digital-pass.html

Lưu ý:
- Hai trang viewer3d chỉ là canvas 3D, không có header nên không cần language switch.
