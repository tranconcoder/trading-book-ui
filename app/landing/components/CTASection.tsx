import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-teal-400/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Sẵn sàng để <br />
            <span className="text-emerald-200">trao đổi sách?</span>
          </h2>
          <p className="text-lg lg:text-xl text-emerald-100 font-medium leading-relaxed max-w-2xl mx-auto">
            Tham gia cộng đồng sinh viên VLUTE ngay hôm nay. Đăng nhập chỉ
            với một click và bắt đầu trao đổi giáo trình.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/login"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-emerald-700 font-bold text-lg rounded-2xl hover:bg-emerald-50 transition-all duration-500 shadow-2xl shadow-emerald-900/30 hover:-translate-y-1"
            >
              Đăng nhập ngay
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
