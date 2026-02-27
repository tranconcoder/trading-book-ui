import FeatureScreen from "./FeatureScreen";

export default function FeaturesSection() {
  return (
    <div id="features">
      {/* Feature Screen 1: Đăng bán sách */}
      <FeatureScreen
        badge="Đăng bán"
        title="Đăng bán sách cũ"
        titleAccent="chỉ trong vài phút."
        description="Chụp ảnh, đặt giá và đăng tin ngay lập tức. Giáo trình của bạn sẽ tiếp cận hàng trăm sinh viên đang cần."
        highlights={[
          {
            icon: (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            ),
            text: "Chụp ảnh trực tiếp hoặc tải lên từ thư viện",
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            ),
            text: "Đặt giá linh hoạt, hỗ trợ thương lượng",
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            ),
            text: "Tin đăng hiển thị ngay cho sinh viên cùng trường",
          },
        ]}
        imageSrc="/images/feature-post-books.png"
        imageAlt="Đăng bán sách trên TradingBook"
        imagePosition="right"
        accentColor={{
          gradient: "from-emerald-500 to-teal-500",
          badge: "bg-emerald-50 border-emerald-100 text-emerald-600",
          text: "text-emerald-600",
          glow: "bg-emerald-200/40",
          iconBg: "bg-emerald-50 text-emerald-600",
          border: "border-emerald-100/50",
          shadow: "shadow-emerald-100/30",
        }}
      />

      {/* Feature Screen 2: Tìm kiếm */}
      <FeatureScreen
        badge="Tìm kiếm"
        title="Tìm đúng sách cần"
        titleAccent="trong vài giây."
        description="Bộ lọc thông minh theo khoa, ngành, môn học giúp bạn tìm chính xác giáo trình cần mua — không còn lãng phí thời gian."
        highlights={[
          {
            icon: (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
            ),
            text: "Lọc theo khoa, ngành học và môn cụ thể",
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            ),
            text: "Tìm kiếm nhanh bằng tên sách hoặc tác giả",
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            ),
            text: "Lưu sách yêu thích để theo dõi giá",
          },
        ]}
        imageSrc="/images/feature-search-books.png"
        imageAlt="Tìm kiếm giáo trình trên TradingBook"
        imagePosition="left"
        accentColor={{
          gradient: "from-blue-500 to-indigo-500",
          badge: "bg-blue-50 border-blue-100 text-blue-600",
          text: "text-blue-600",
          glow: "bg-blue-200/40",
          iconBg: "bg-blue-50 text-blue-600",
          border: "border-blue-100/50",
          shadow: "shadow-blue-100/30",
        }}
      />

      {/* Feature Screen 3: Chat & Giao dịch */}
      <FeatureScreen
        badge="Giao dịch"
        title="Chat & trao đổi"
        titleAccent="an toàn, tiện lợi."
        description="Nhắn tin trực tiếp, thỏa thuận giá cả và hẹn gặp ngay trong khuôn viên trường. Mọi thứ diễn ra trong một nền tảng."
        highlights={[
          {
            icon: (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            ),
            text: "Chat real-time với người mua/bán",
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            ),
            text: "Xác minh danh tính sinh viên VLUTE",
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ),
            text: "Đánh giá sau giao dịch để xây dựng uy tín",
          },
        ]}
        imageSrc="/images/feature-chat-trade.png"
        imageAlt="Chat và trao đổi sách trên TradingBook"
        imagePosition="right"
        accentColor={{
          gradient: "from-violet-500 to-purple-500",
          badge: "bg-violet-50 border-violet-100 text-violet-600",
          text: "text-violet-600",
          glow: "bg-violet-200/40",
          iconBg: "bg-violet-50 text-violet-600",
          border: "border-violet-100/50",
          shadow: "shadow-violet-100/30",
        }}
      />
    </div>
  );
}
