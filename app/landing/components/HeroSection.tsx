import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] bg-teal-200/20 rounded-full blur-3xl animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="relative z-10 space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-emerald-700">
                Dành cho sinh viên VLUTE
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-emerald-950 leading-[1.05] tracking-tighter">
              Trao đổi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Giáo trình
              </span>{" "}
              <br />
              dễ dàng.
            </h1>

            <p className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
              Nền tảng mua bán và trao đổi sách cũ thông minh, nhanh chóng và
              an toàn nhất cho sinh viên Học viện.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/login"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 text-white font-bold text-lg rounded-2xl hover:bg-emerald-700 transition-all duration-500 shadow-xl shadow-emerald-200 hover:shadow-2xl hover:shadow-emerald-300 hover:-translate-y-1"
              >
                Bắt đầu ngay
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
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 font-bold text-lg rounded-2xl border-2 border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300"
              >
                Tìm hiểu thêm
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative animate-scale-in delay-200">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/40 to-teal-200/30 rounded-[3rem] blur-2xl scale-95" />
              <div className="relative bg-gradient-to-br from-emerald-50 to-white rounded-[2.5rem] border border-emerald-100/50 p-6 shadow-2xl shadow-emerald-100/30">
                <Image
                  src="/images/landing-hero.png"
                  alt="Sinh viên trao đổi sách"
                  width={600}
                  height={600}
                  className="w-full h-full object-contain rounded-2xl"
                  priority
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-emerald-500 animate-float border border-emerald-50">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-emerald-600 rounded-full shadow-2xl shadow-emerald-300 flex items-center justify-center text-white animate-float-reverse">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
