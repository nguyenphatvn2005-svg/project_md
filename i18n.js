(() => {
  const supported = ["en"];
  const initialTitle = document.title;
  const common = {
    "Xuân Phú • Đồng Nai": { en: "Xuan Phu • Dong Nai", ko: "쑤언푸 • 동나이" },
    "Khám Phá": { en: "Explore", ko: "탐색" },
    "Trải Nghiệm & Workshop": {
      en: "Experiences & Workshops",
      ko: "체험 & 워크숍",
    },
    "AI Studio & Kể Chuyện": {
      en: "AI Studio & Storytelling",
      ko: "AI 스튜디오 & 스토리텔링",
    },
    "Sản Phẩm Của Bạn": { en: "Your Product", ko: "내 제품" },
    "Cửa Hàng & Tác Động": { en: "Shop & Impact", ko: "스토어 & 임팩트" },
    "CORA AI Audio": { en: "CORA AI Audio", ko: "CORA AI 오디오" },
    "Đặt Workshop / Create Story": {
      en: "Book Workshop / Create Story",
      ko: "워크숍 예약 / 스토리 만들기",
    },
    "Trang Chủ": { en: "Home", ko: "홈" },
    "Trải Nghiệm Workshop": { en: "Workshop Experience", ko: "워크숍 체험" },
    "Thời gian thực": { en: "Live", ko: "실시간" },
    "Mặt Trước": { en: "Front", ko: "앞면" },
    "Mặt Sau (Laser ID)": { en: "Back (Laser ID)", ko: "뒷면 (레이저 ID)" },
    "Mặt Sau / QR": { en: "Back / QR", ko: "뒷면 / QR" },
    "Xem Chi Tiết": { en: "View Details", ko: "자세히 보기" },
    "Chọn Mua": { en: "Add to Cart", ko: "구매 선택" },
  };

  const page = {
    "ai-studio.html": {
      "CORNESS — AI Cultural Studio & CORA": {
        en: "CORNESS — AI Cultural Studio & CORA",
        ko: "CORNESS — AI 문화 스튜디오 & CORA",
      },
      "• Đồng Nai Living Heritage": {
        en: "• Dong Nai Living Heritage",
        ko: "• 동나이 살아있는 유산",
      },
      "Giao thoa giữa thuật toán thị giác bản địa và vật liệu sinh học lõi ngô ép nén Xuân Phú. Thiết kế độc bản, định danh vi tế bằng mã laser OCOP.":
        {
          en: "Where local visual intelligence meets compressed Xuan Phu corn-cob biomaterial. Create a one-of-a-kind design identified by a refined OCOP laser code.",
          ko: "지역 시각 지능과 쑤언푸의 압축 옥수수 속대 바이오 소재가 만나는 공간입니다. OCOP 레이저 코드로 식별되는 단 하나의 디자인을 만드세요.",
        },
      "Lõi ngô ép nhiệt cao 140°C": {
        en: "Corn-cob composite pressed at 140°C",
        ko: "140°C 고온 압축 옥수수 속대 소재",
      },
      "Chọn Phôi Ép Lõi Ngô Bản Địa": {
        en: "Choose a Local Corn-Cob Substrate",
        ko: "지역 옥수수 속대 바탕재 선택",
      },
      "Vật liệu 100% phế phẩm nông nghiệp Xuân Phú, kháng nước tự nhiên": {
        en: "100% Xuan Phu agricultural by-product with natural water resistance",
        ko: "쑤언푸 농업 부산물 100%, 천연 발수 특성",
      },
      "Độ dày chuẩn: 8mm - 12mm": {
        en: "Standard thickness: 8–12 mm",
        ko: "표준 두께: 8–12mm",
      },
      "Đế Lót Ly Tròn": { en: "Round Coaster", ko: "원형 코스터" },
      "Kích thước Ø10.5cm": { en: "Size Ø10.5 cm", ko: "크기 Ø10.5cm" },
      "Chịu nhiệt 100°C": { en: "Heat resistant to 100°C", ko: "100°C 내열" },
      "Lót Ấm Trà Vuông": {
        en: "Square Teapot Trivet",
        ko: "사각 티포트 받침",
      },
      "Kích thước 18 x 18cm": { en: "Size 18 × 18 cm", ko: "크기 18 × 18cm" },
      "Khắc rãnh tản nhiệt": {
        en: "Heat-dissipation grooves",
        ko: "방열 홈 가공",
      },
      "Tranh Decor Khối": { en: "Decor Art Panel", ko: "데코 아트 패널" },
      "Kích thước 24 x 32cm": { en: "Size 24 × 32 cm", ko: "크기 24 × 32cm" },
      "Gỗ lõi ngô đúc phẳng": {
        en: "Flat-cast corn composite",
        ko: "평면 성형 옥수수 복합재",
      },
      "Cảm Hứng Văn Hóa & Bản Sắc Di Sản": {
        en: "Cultural Inspiration & Heritage Identity",
        ko: "문화적 영감 & 유산 정체성",
      },
      "Huấn luyện trên kho tàng biểu tượng di sản dân gian Đông Nam Bộ": {
        en: "Inspired by the folk-heritage symbol archive of Southern Vietnam",
        ko: "베트남 남부 민속 유산 상징 아카이브에서 영감을 받음",
      },
      "Hạt Ngô Nảy Mầm Xuân Phú": {
        en: "Xuan Phu Sprouting Corn",
        ko: "쑤언푸 싹트는 옥수수",
      },
      "Điệu Cồng Chiêng Chơro": { en: "Chơro Gong Rhythm", ko: "쩌로 공 리듬" },
      "Dải Phù Sa Sông Đồng Nai": {
        en: "Dong Nai Alluvial Flow",
        ko: "동나이 충적의 흐름",
      },
      "Sắc Men Gốm Cây Mai & Biên Hòa": {
        en: "Cay Mai & Bien Hoa Ceramic Glaze",
        ko: "까이마이 & 비엔호아 도자 유약",
      },
      "Phong Cách Họa Phẩm Thủ Công": {
        en: "Craft Art Style",
        ko: "수공예 아트 스타일",
      },
      "Quy định độ sâu laser và lớp phủ khoáng màu tự nhiên": {
        en: "Controls laser depth and natural mineral-color coating",
        ko: "레이저 깊이와 천연 광물 색상 코팅을 조절합니다",
      },
      "Folkloric Dân Gian": {
        en: "Folkloric Heritage",
        ko: "민속 유산 스타일",
      },
      Contemporary: { en: "Contemporary", ko: "컨템포러리" },
      "Organic Raw Mộc": { en: "Organic Raw", ko: "오가닉 로우" },
      "Gợi ý ngẫu nhiên": { en: "Surprise me", ko: "랜덤 추천" },
      "Tạo Mẫu Phôi Bằng AI CORA (Generate Design)": {
        en: "Generate Design with CORA AI",
        ko: "CORA AI로 디자인 생성",
      },
      "Free Preview": { en: "Free Preview", ko: "무료 미리보기" },
      "Khu Vực Giám Sát Phôi Thực Tế (Live Preview)": {
        en: "Live Substrate Preview",
        ko: "실시간 바탕재 미리보기",
      },
      "100% Upcycled Biomaterial": {
        en: "100% Upcycled Biomaterial",
        ko: "100% 업사이클 바이오 소재",
      },
      "Tái hiện bề mặt xơ lõi ngô nén mật độ cao cùng kỹ thuật khắc men chạm nổi":
        {
          en: "High-density compressed corn-fiber texture with engraved glaze relief",
          ko: "고밀도 압축 옥수수 섬유 질감과 음각 유약 부조 표현",
        },
      "CORA Trợ Lý Văn Hóa": {
        en: "CORA Cultural Assistant",
        ko: "CORA 문화 어시스턴트",
      },
      "Trợ lý AI đồng hành cùng bạn": {
        en: "Your AI creative companion",
        ko: "당신과 함께하는 AI 크리에이티브 동반자",
      },
      "Nhập câu hỏi hoặc mô tả ý tưởng...": {
        en: "Ask a question or describe your idea...",
        ko: "질문하거나 아이디어를 설명하세요...",
      },
      Gửi: { en: "Send", ko: "보내기" },
    },
    "checkout.html": {
      "CORNESS — Thanh Toán Workshop": {
        en: "CORNESS — Workshop Checkout",
        ko: "CORNESS — 워크숍 결제",
      },
      "Thanh Toán An Toàn": { en: "Secure Checkout", ko: "안전 결제" },
      "Bảo mật 256-bit SSL • Cổng Thanh Toán Chuẩn Quốc Gia": {
        en: "256-bit SSL security • National-standard payment gateway",
        ko: "256비트 SSL 보안 • 국가 표준 결제 게이트웨이",
      },
      "Bước 02/02 • Xác Nhận Suất Tham Gia": {
        en: "Step 02/02 • Confirm Your Reservation",
        ko: "2/2단계 • 참가 예약 확인",
      },
      "Thanh Toán & Đóng Góp Sinh Thái": {
        en: "Payment & Eco Contribution",
        ko: "결제 & 생태 기여",
      },
      "Giữ chỗ tự động trong": {
        en: "Reservation held for",
        ko: "예약 유지 시간",
      },
      phút: { en: "minutes", ko: "분" },
      "Workshop Văn Hóa": { en: "Cultural Workshop", ko: "문화 워크숍" },
      "Bản Quyền CORNESS 2026": {
        en: "CORNESS Copyright 2026",
        ko: "CORNESS 저작권 2026",
      },
      "Tự Tay Ép Lõi Ngô & Tạo Tác Lót Ly Di Sản": {
        en: "Press Corn-Cob Composite & Craft a Heritage Coaster",
        ko: "옥수수 속대 압축 & 유산 코스터 만들기",
      },
      "Xưởng Ấp Phú Mỹ, Xã Xuân Phú, Đồng Nai": {
        en: "Phu My Hamlet Workshop, Xuan Phu, Dong Nai",
        ko: "동나이 쑤언푸 푸미 마을 공방",
      },
      "Số lượng đăng ký:": { en: "Participants:", ko: "참가 인원:" },
      "02 Khách": { en: "02 Guests", ko: "2명" },
      "(Người lớn)": { en: "(Adults)", ko: "(성인)" },
      "Đã kèm bảo hộ & nguyên liệu trọn gói": {
        en: "Safety gear & all materials included",
        ko: "보호 장비 및 재료 일체 포함",
      },
      "Thông Tin Người Tham Gia": {
        en: "Participant Information",
        ko: "참가자 정보",
      },
      "Nhận hộ chiếu số tức thì": {
        en: "Receive your digital passport instantly",
        ko: "디지털 패스포트 즉시 발급",
      },
      "Họ và Tên Đại Diện": {
        en: "Primary Guest Name",
        ko: "대표 참가자 이름",
      },
      "Số Điện Thoại Zalo": { en: "Zalo Phone Number", ko: "Zalo 전화번호" },
      "Email Nhận Vé Điện Tử": {
        en: "Email for E-Ticket",
        ko: "전자 티켓 이메일",
      },
      "Vé QR Code và tài liệu chuẩn bị sẽ gửi trực tiếp đến Zalo & Email của bạn sau 10 giây xác thực giao dịch.":
        {
          en: "Your QR ticket and preparation guide will be sent to Zalo and email within 10 seconds after payment verification.",
          ko: "결제 확인 후 10초 이내에 QR 티켓과 준비 안내가 Zalo 및 이메일로 전송됩니다.",
        },
      "Miễn Phí Khắc Laser Cá Nhân Hóa": {
        en: "Complimentary Laser Personalization",
        ko: "무료 레이저 맞춤 각인",
      },
      "Đặc quyền CORNESS": { en: "CORNESS Privilege", ko: "CORNESS 특별 혜택" },
      "Thông điệp khắc nhiệt (Mặt sau tác phẩm)": {
        en: "Laser engraving message (back of artwork)",
        ko: "레이저 각인 문구 (작품 뒷면)",
      },
      "Ví dụ: MINH & AN • 18.05.2026": {
        en: "Example: MINH & AN • 18.05.2026",
        ko: "예: MINH & AN • 18.05.2026",
      },
      "Xem Trước Bản Khắc": { en: "Engraving Preview", ko: "각인 미리보기" },
      "Phương Thức Thanh Toán": { en: "Payment Method", ko: "결제 수단" },
      "Tự động kích hoạt vé": {
        en: "Ticket activates automatically",
        ko: "티켓 자동 활성화",
      },
      "VietQR Chuyển Khoản Tức Thì (Napas 247)": {
        en: "VietQR Instant Bank Transfer (Napas 247)",
        ko: "VietQR 즉시 계좌이체 (Napas 247)",
      },
      "Khuyên Dùng": { en: "Recommended", ko: "추천" },
      "0đ Phụ Phí": { en: "No Fee", ko: "수수료 0원" },
      "Ví Điện Tử (MoMo, ZaloPay, Apple Pay)": {
        en: "E-Wallet (MoMo, ZaloPay, Apple Pay)",
        ko: "전자지갑 (MoMo, ZaloPay, Apple Pay)",
      },
      "Tóm Tắt Thanh Toán": { en: "Payment Summary", ko: "결제 요약" },
      "Tác Động Sinh Thái": { en: "Eco Impact", ko: "생태 임팩트" },
      "Tổng Thanh Toán": { en: "Total Payment", ko: "총 결제 금액" },
      "Xác Nhận & Thanh Toán": { en: "Confirm & Pay", ko: "확인 & 결제" },
    },
    "index.html": {
      "CORNESS — Khám Phá & Di Sản Văn Hóa Xuân Phú": {
        en: "CORNESS — Explore Xuan Phu Cultural Heritage",
        ko: "CORNESS — 쑤언푸 문화유산 탐색",
      },
      "Hồ Sơ Di Sản Thực Địa • Mã Lưu Trữ XP-DN-2025": {
        en: "Field Heritage Archive • Record XP-DN-2025",
        ko: "현장 유산 아카이브 • 기록 XP-DN-2025",
      },
      "Xuân Phú • Đồng Nai • Việt Nam": {
        en: "Xuan Phu • Dong Nai • Vietnam",
        ko: "쑤언푸 • 동나이 • 베트남",
      },
      "Kinh Tế Tuần Hoàn Nông Nghiệp Bản Địa": {
        en: "Local Agricultural Circular Economy",
        ko: "지역 농업 순환경제",
      },
      "TỪ LÕI NGÔ BỎ ĐI": {
        en: "FROM DISCARDED CORN COBS",
        ko: "버려진 옥수수 속대에서",
      },
      "ĐẾN TẠO TÁC DI SẢN": { en: "TO HERITAGE CRAFT", ko: "유산 공예품으로" },
      "Hecta Vùng Nguyên Liệu": {
        en: "Hectares of Sourcing Area",
        ko: "원료 재배지 헥타르",
      },
      "Sinh Khối Thuần Khiết": { en: "Pure Biomass", ko: "순수 바이오매스" },
      "Ký Ức Đất Bazan": {
        en: "Years of Basalt-Land Memory",
        ko: "현무암 대지의 기억",
      },
      "Khám Phá Vòng Tuần Hoàn": {
        en: "Explore the Circular Journey",
        ko: "순환 여정 탐색",
      },
      "Hành Trình Tái Sinh": { en: "Regeneration Journey", ko: "재생 여정" },
      "Tuần Hoàn 5 Bước": {
        en: "5-Step Circular Process",
        ko: "5단계 순환 공정",
      },
      "VÒNG ĐỜI THỨ HAI": { en: "THE SECOND LIFE", ko: "두 번째 생명" },
      "Tuyển Chọn Lõi Tươi": {
        en: "Select Fresh Cobs",
        ko: "신선한 속대 선별",
      },
      "Phơi Sấy Tự Nhiên": { en: "Natural Sun Drying", ko: "자연 건조" },
      "Nghiền Bio-Fiber": { en: "Bio-Fiber Milling", ko: "바이오 섬유 분쇄" },
      "Ép Nhiệt Sinh Học": { en: "Bio-Thermal Pressing", ko: "바이오 열압축" },
    },
    "experience.html": {
      "CORNESS — Workshop Thủ Công & Hộ Chiếu Du Lịch": {
        en: "CORNESS — Craft Workshop & Travel Passport",
        ko: "CORNESS — 공예 워크숍 & 여행 패스포트",
      },
      "Hôm nay còn 4 chỗ trống cho ca chiều 14:00": {
        en: "4 seats left for today’s 14:00 session",
        ko: "오늘 14:00 세션 잔여 4석",
      },
      "Giảm thiểu 100% rác thải nông nghiệp tại nguồn": {
        en: "100% reduction of agricultural waste at source",
        ko: "농업 폐기물 발생원 100% 감축",
      },
      "Thời lượng: 2.5 Giờ": {
        en: "Duration: 2.5 Hours",
        ko: "소요 시간: 2.5시간",
      },
      "Đặt Chỗ Trải Nghiệm Ngay": {
        en: "Book Your Experience",
        ko: "체험 예약하기",
      },
      "Xem 5 Chặng Trải Nghiệm": {
        en: "View the 5 Experience Stages",
        ko: "5단계 체험 보기",
      },
      "Dẫn dắt bởi Nghệ nhân": { en: "Guided by Artisan", ko: "장인과 함께" },
      "Tác phẩm mang về": {
        en: "Take-home Creation",
        ko: "완성 작품 가져가기",
      },
      "Hành trình 150 phút giác quan": {
        en: "150-minute sensory journey",
        ko: "150분 감각 여정",
      },
      "Lộ Trình Trải Nghiệm Tinh Hoa": {
        en: "Signature Experience Journey",
        ko: "시그니처 체험 여정",
      },
      "Đặt Chỗ Trực Tuyến": { en: "Online Booking", ko: "온라인 예약" },
      "Chọn Lịch & Cá Nhân Hóa Buổi Chế Tác": {
        en: "Choose a Schedule & Personalize Your Craft Session",
        ko: "일정 선택 & 공예 세션 맞춤화",
      },
    },
    "my-product.html": {
      "CORNESS — Sản Phẩm Của Bạn & Kỷ Ước Di Sản": {
        en: "CORNESS — Your Product & Heritage Memory",
        ko: "CORNESS — 내 제품 & 유산의 기억",
      },
      "Workshop #04 • Đã Sở Hữu": {
        en: "Workshop #04 • Owned",
        ko: "워크숍 #04 • 소유 완료",
      },
      "Riêng Tư": { en: "Private", ko: "비공개" },
      "Công Khai": { en: "Public", ko: "공개" },
      "Xoay 360°": { en: "Rotate 360°", ko: "360° 회전" },
      "Cấu Trúc Bề Mặt": { en: "Surface Structure", ko: "표면 구조" },
      "Lõi ngô ép mịn": {
        en: "Fine-pressed corn cob",
        ko: "미세 압축 옥수수 속대",
      },
      "Độ Dày Nén": { en: "Compressed Thickness", ko: "압축 두께" },
      "Chịu Nhiệt Độ": { en: "Heat Resistance", ko: "내열 온도" },
      "Di Sản Văn Hóa & Tái Sinh Phụ Phẩm": {
        en: "Cultural Heritage & By-product Regeneration",
        ko: "문화유산 & 부산물 재생",
      },
      "Thời Gian Hoàn Tất": { en: "Completed On", ko: "완성일" },
      "Xuất Xứ Sinh Thái": { en: "Eco Origin", ko: "생태 원산지" },
      "Nghệ Nhân Hướng Dẫn": { en: "Guiding Artisan", ko: "지도 장인" },
      "Mở Museum Passport": {
        en: "Open Museum Passport",
        ko: "뮤지엄 패스포트 열기",
      },
      "Nghe Thuyết Minh Cora (2:14)": {
        en: "Listen to CORA Narration (2:14)",
        ko: "CORA 해설 듣기 (2:14)",
      },
      "Chỉ Số Sinh Thái & Đo Lường Xanh": {
        en: "Eco Metrics & Green Measurement",
        ko: "생태 지표 & 그린 측정",
      },
      "Đóng Góp Tuần Hoàn Của Minh": {
        en: "Minh’s Circular Contribution",
        ko: "민의 순환 기여",
      },
      "Hành Trình Tái Sinh 5 Bước": {
        en: "5-Step Regeneration Journey",
        ko: "5단계 재생 여정",
      },
    },
    "shop.html": {
      "CORNESS — Cửa Hàng Tạo Tác & Tác Động Bền Vững": {
        en: "CORNESS — Craft Store & Sustainable Impact",
        ko: "CORNESS — 공예 스토어 & 지속가능한 임팩트",
      },
      "Hệ Sinh Thái Thủ Công Tuần Hoàn • Xuân Phú": {
        en: "Circular Craft Ecosystem • Xuan Phu",
        ko: "순환 공예 생태계 • 쑤언푸",
      },
      "Bộ Sưu Tập Tạo Tác Di Sản & Đo Lường Sinh Thái": {
        en: "Heritage Craft Collection & Eco Measurement",
        ko: "유산 공예 컬렉션 & 생태 측정",
      },
      "Bảng Đo Lường Tác Động Xuân Phú • Niên Vụ 2025": {
        en: "Xuan Phu Impact Dashboard • 2025 Season",
        ko: "쑤언푸 임팩트 대시보드 • 2025 시즌",
      },
      "Khí quyển sạch": { en: "Cleaner Air", ko: "깨끗한 대기" },
      "Sinh kế nông hộ": { en: "Farmer Livelihoods", ko: "농가 생계" },
      "Bảo tồn bản sắc": { en: "Heritage Preservation", ko: "정체성 보존" },
      "Sinh khối tái sinh": {
        en: "Regenerated Biomass",
        ko: "재생 바이오매스",
      },
      "Tạo Tác Chọn Lọc": { en: "Curated Crafts", ko: "엄선 공예품" },
      "Tác Phẩm Thủ Công Từ Vỏ Bắp Ép Ép Tự Nhiên": {
        en: "Handcrafted Pieces from Naturally Pressed Corn Fiber",
        ko: "천연 압축 옥수수 섬유 수공예품",
      },
      "Sắp xếp:": { en: "Sort:", ko: "정렬:" },
      "Bán Chạy Nhất": { en: "Best Selling", ko: "베스트셀러" },
      "Tác Động Giảm Thải": {
        en: "Waste-Reduction Impact",
        ko: "폐기물 감축 임팩트",
      },
      "Giá niêm yết": { en: "List Price", ko: "판매가" },
    },
    "digital-pass.html": {
      "CORNESS — Vé Điện Tử & Hộ Chiếu Vào Xưởng": {
        en: "CORNESS — Digital Ticket & Workshop Passport",
        ko: "CORNESS — 디지털 티켓 & 공방 패스포트",
      },
      "XÁC NHẬN HOÀN TẤT": { en: "CONFIRMED", ko: "확인 완료" },
      "Đã gửi bản sao tới minh.le@gmail.com": {
        en: "A copy was sent to minh.le@gmail.com",
        ko: "minh.le@gmail.com 으로 사본을 보냈습니다",
      },
      "In vé nhanh": { en: "Quick Print", ko: "빠른 인쇄" },
      "HỘ CHIẾU THỦ CÔNG • CORNESS ARTISAN PASS": {
        en: "CRAFT PASSPORT • CORNESS ARTISAN PASS",
        ko: "공예 패스포트 • CORNESS ARTISAN PASS",
      },
      "HẸN GẶP BẠN GIỮA BÃI NGÔ XUÂN PHÚ,": {
        en: "SEE YOU IN THE CORN FIELDS OF XUAN PHU,",
        ko: "쑤언푸 옥수수밭에서 만나요,",
      },
      "TRẠNG THÁI: CHÍNH THỨC": { en: "STATUS: CONFIRMED", ko: "상태: 확정" },
      "Hạng Vé: Workshop Di Sản": {
        en: "Ticket: Heritage Workshop",
        ko: "티켓: 유산 워크숍",
      },
      "02 Người Tham Dự": { en: "02 Participants", ko: "참가자 2명" },
      "Đã Bao Gồm Lót Ly Mang Về": {
        en: "Take-home Coaster Included",
        ko: "코스터 작품 포함",
      },
      "NGÀY THAM GIA": { en: "EVENT DATE", ko: "참가일" },
      "KHUNG GIỜ KHỞI HÀNH": { en: "SESSION TIME", ko: "세션 시간" },
      "VỊ TRÍ BÀN THAO TÁC": { en: "WORKSTATION", ko: "작업대 위치" },
      "ĐỊA ĐIỂM XƯỞNG THỰC ĐỊA": {
        en: "WORKSHOP LOCATION",
        ko: "현장 공방 위치",
      },
      "NGƯỜI ĐỨNG TÊN": { en: "PRIMARY GUEST", ko: "대표 참가자" },
      "MÃ VÀO CỔNG KHU VỰC": { en: "ENTRY GATE CODE", ko: "입장 게이트 코드" },
      "Thêm vào Apple / Google Wallet": {
        en: "Add to Apple / Google Wallet",
        ko: "Apple / Google Wallet에 추가",
      },
      "Tải PDF": { en: "Download PDF", ko: "PDF 다운로드" },
      "In Kỷ Niệm": { en: "Print Keepsake", ko: "기념 인쇄" },
      "KẾT QUẢ HÀNH ĐỘNG XANH": {
        en: "GREEN ACTION RESULT",
        ko: "그린 액션 결과",
      },
      "TÁC ĐỘNG BỀN VỮNG BẠN VỪA GIEO MẦM": {
        en: "THE SUSTAINABLE IMPACT YOU JUST PLANTED",
        ko: "당신이 방금 심은 지속가능한 임팩트",
      },
    },
  };

  function currentPage() {
    const name = location.pathname.split("/").pop();
    return name || "index.html";
  }

  function dictionaries() {
    return { ...common, ...(page[currentPage()] || {}) };
  }

  const originals = new Map();
  const attrOriginals = new WeakMap();

  function normalize(s) {
    return s.replace(/\s+/g, " ").trim();
  }

  function translateTextNode(node, lang, dict) {
    const parent = node.parentElement;
    if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName))
      return;
    const raw = node.nodeValue;
    const norm = normalize(raw);
    if (!norm || norm === "|") return;
    if (!originals.has(node)) originals.set(node, norm);
    const original = originals.get(node);
    const entry = dict[original];
    let value = original;
    if (lang !== "vi" && entry && entry[lang]) value = entry[lang];
    const leading = raw.match(/^\s*/)?.[0] || "";
    const trailing = raw.match(/\s*$/)?.[0] || "";
    node.nodeValue = leading + value + trailing;
  }

  function translateAttributes(el, lang, dict) {
    const attrs = ["placeholder", "title", "aria-label"];
    let stored = attrOriginals.get(el);
    if (!stored) {
      stored = {};
      attrOriginals.set(el, stored);
    }
    attrs.forEach((attr) => {
      if (!el.hasAttribute(attr)) return;
      if (!(attr in stored)) stored[attr] = normalize(el.getAttribute(attr));
      const original = stored[attr];
      const entry = dict[original];
      el.setAttribute(
        attr,
        lang !== "vi" && entry?.[lang] ? entry[lang] : original,
      );
    });
  }
  function applyLanguage() {
    const lang = "en";
    const dict = dictionaries();

    // Website chỉ sử dụng English
    document.documentElement.lang = "en";

    // Dịch toàn bộ text trong body
    document.querySelectorAll("body *").forEach((el) => {
      [...el.childNodes]
        .filter((node) => node.nodeType === Node.TEXT_NODE)
        .forEach((node) => {
          translateTextNode(node, lang, dict);
        });

      // Dịch placeholder, title, aria-label
      translateAttributes(el, lang, dict);
    });

    // Dịch title của trang
    const titleEntry = dict[initialTitle];

    if (titleEntry?.en) {
      document.title = titleEntry.en;
    }

    // Thông báo cho các script khác nếu cần
    window.dispatchEvent(
      new CustomEvent("corness:languagechange", {
        detail: { lang: "en" },
      }),
    );
  }
  function init() {
    applyLanguage();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
