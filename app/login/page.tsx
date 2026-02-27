"use client";

import Image from "next/image";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function LoginPage() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <div
      className={`${outfit.className} h-screen w-full flex overflow-hidden bg-white text-slate-900 select-none`}
    >
      {/* Left Side: Branding & Animated Illustration */}
      <div className="hidden lg:flex lg:w-3/5 bg-emerald-50 flex-col justify-between p-12 relative overflow-hidden h-full">
        {/* Decorative Background Elements */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-100 rounded-full blur-[120px] opacity-60 animate-pulse" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-emerald-200/40 rounded-full blur-[100px] opacity-40" />

        {/* Branding */}
        <div className="relative z-20">
          <div className="flex items-center gap-3 mb-10 translate-x-1">
            <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-200 rotate-3 transition-transform hover:rotate-0 duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-3xl font-extrabold tracking-tight text-emerald-950 uppercase">
              TradingBook
            </span>
          </div>

          <div className="max-w-lg space-y-6">
            <h1 className="text-6xl font-black text-emerald-950 leading-[1.1] tracking-tighter">
              Giao dịch <br />
              <span className="text-emerald-600">An toàn</span> & <br />
              <span className="text-emerald-400">Minh bạch.</span>
            </h1>
            <p className="text-xl text-emerald-900/70 font-medium leading-relaxed max-w-sm">
              Nền tảng quản lý danh mục tinh gọn nhất cho sinh viên VLUTE.
            </p>
          </div>
        </div>

        {/* Character Illustration with floating security items */}
        <div className="relative flex-grow flex items-center justify-center">
          <div className="relative w-full h-full max-w-2xl max-h-[550px] animate-float mix-blend-multiply">
            <Image
              src="/images/security-illustration.png"
              alt="Security Login Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Manual Floating Security Elements (SVGs) - Kept for extra premium feel */}
          <div className="absolute top-[20%] right-[15%] w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center text-emerald-500 animate-float-slow z-30">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

            <div className="absolute bottom-[20%] left-[5%] w-14 h-14 bg-emerald-600 rounded-full shadow-emerald-200 shadow-2xl flex items-center justify-center text-white animate-float-reverse">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>

            <div className="absolute top-[40%] left-[-5%] w-12 h-12 bg-emerald-400 rounded-xl shadow-lg flex items-center justify-center text-white animate-float-slow">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>

        {/* Footer info */}
        <div className="relative z-10 flex items-center justify-between font-bold text-xs uppercase tracking-widest text-emerald-800/40">
          <div className="flex items-center gap-4">
            <span>VLUTE Students</span>
            <div className="w-1.5 h-1.5 bg-emerald-300 rounded-full" />
            <span>&copy; 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>Hệ thống bảo mật</span>
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-2/5 flex flex-col items-center justify-center p-8 bg-white h-full">
        <div className="w-full max-w-md space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Sẵn sàng để <br />
              <span className="italic text-emerald-600">Đầu tư?</span>
            </h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Truy cập bằng tài khoản tập trung để bắt đầu hành trình của bạn.
            </p>
          </div>

          <div className="space-y-6">
            <button
              onClick={handleGoogleLogin}
              className="w-full h-16 flex items-center justify-center gap-4 bg-white border-[3px] border-slate-50 rounded-2xl font-bold text-slate-700 transition-all duration-500 hover:border-emerald-500 hover:bg-emerald-50/20 hover:scale-[1.02] shadow-sm hover:shadow-2xl hover:shadow-emerald-100 group"
            >
              <div className="relative w-7 h-7 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>
              <span className="text-xl tracking-tight group-hover:text-emerald-700">Tiếp tục bằng Google</span>
            </button>
          </div>

          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100/50 flex items-start gap-4">
            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex-shrink-0 flex items-center justify-center text-emerald-500">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01" />
              </svg>
            </div>
            <div className="space-y-1">
              <p className="font-bold text-slate-800 text-sm">Xác thực tập trung</p>
              <p className="text-slate-500 text-xs font-medium leading-[1.6]">
                Dành riêng cho sinh viên học viện. Đăng nhập để sử dụng các công cụ giao dịch phân tích cao cấp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
