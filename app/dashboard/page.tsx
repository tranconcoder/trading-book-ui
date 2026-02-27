export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Tổng quan
        </h1>
        <p className="text-slate-500 font-medium mt-1">
          Chào mừng bạn trở lại TradingBook
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Sách đang bán", value: "12", icon: "📚", color: "emerald" },
          { label: "Tin nhắn mới", value: "3", icon: "💬", color: "blue" },
          { label: "Lượt xem hôm nay", value: "48", icon: "👁️", color: "violet" },
          { label: "Giao dịch thành công", value: "7", icon: "✅", color: "amber" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-slate-100 p-5 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <div className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</div>
            <div className="text-sm font-semibold text-slate-400 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Placeholder content */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Hoạt động gần đây</h2>
        <div className="text-slate-400 text-sm font-medium py-8 text-center">
          Chưa có hoạt động nào
        </div>
      </div>
    </div>
  );
}
