const stats = [
  { value: "500+", label: "Sinh viên", suffix: "" },
  { value: "1,200+", label: "Sách đã giao dịch", suffix: "" },
  { value: "50+", label: "Môn học", suffix: "" },
  { value: "4.8", label: "Đánh giá trung bình", suffix: "⭐" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-emerald-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl lg:text-5xl font-black text-white tracking-tight">
                {stat.value}
                {stat.suffix && <span className="ml-1">{stat.suffix}</span>}
              </div>
              <div className="text-emerald-300 font-semibold text-sm uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
