const steps = [
  {
    number: "01",
    title: "Đăng nhập",
    description: "Sử dụng tài khoản Google để truy cập nhanh chóng và an toàn.",
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        <polyline points="10 17 15 12 10 7" />
        <line x1="15" y1="12" x2="3" y2="12" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Đăng hoặc Tìm sách",
    description: "Đăng bán sách không cần nữa hoặc tìm kiếm giáo trình cho kỳ tới.",
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Giao dịch",
    description: "Liên hệ, thỏa thuận và hoàn tất trao đổi ngay trong khuôn viên trường.",
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50/80 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100">
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">
              Hướng dẫn
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-emerald-950 tracking-tight">
            Bắt đầu trong{" "}
            <span className="text-emerald-600">3 bước</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Quy trình đơn giản, nhanh gọn để bạn có thể giao dịch ngay lập
            tức.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-emerald-200 to-transparent" />
              )}

              <div className="relative bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 hover:border-emerald-200 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-100/50 hover:-translate-y-2 text-center">
                {/* Step icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl text-white mb-8 shadow-xl shadow-emerald-200 group-hover:shadow-2xl group-hover:shadow-emerald-300 transition-all duration-500 group-hover:scale-110">
                  {step.icon}
                </div>

                {/* Number badge */}
                <div className="absolute top-6 right-8 text-6xl font-black text-slate-50 group-hover:text-emerald-50 transition-colors duration-500 select-none">
                  {step.number}
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
