"use client";

import Image from "next/image";
import Link from "next/link";
import { Be_Vietnam_Pro } from "next/font/google";
import { authConfig } from "@/common/configs";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function LoginPage() {
  const handleGoogleLogin = () => {
    window.location.href = authConfig.googleOauth.loginUrl;
  };

  return (
    <div
      className={`${beVietnamPro.className} h-screen w-full flex overflow-hidden bg-white text-slate-900 select-none`}
    >
      {/* Left Side: Branding & Animated Illustration */}
      <div className="hidden lg:flex lg:w-3/5 bg-[#ffffff] flex-col justify-between p-12 relative overflow-hidden h-full border-r border-slate-50">
        {/* Branding */}
        <div className="relative z-20 animate-slide-in-left">
          <Link href="/" className="flex items-center gap-3 mb-10 translate-x-1 group w-fit">
              <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-200 rotate-3 transition-transform hover:rotate-0 duration-500 overflow-hidden">
                <Image
                  src="/icons/login/logo.svg"
                  alt="TradingBook Logo"
                  width={28}
                  height={28}
                  priority
                />
              </div>
              <span className="text-3xl font-extrabold tracking-tight text-emerald-950 uppercase group-hover:text-emerald-700 transition-colors duration-300">
                TradingBook
              </span>
            </Link>

          <div className="max-w-lg space-y-6 animate-fade-in-up delay-100">
            <h1 className="text-6xl font-black text-emerald-950 leading-[1.1] tracking-tighter">
              Mua bán <br />
              <span className="text-emerald-600">Sách cũ</span> & <br />
              <span className="text-emerald-400">Giáo trình.</span>
            </h1>
            <p className="text-xl text-emerald-900/70 font-medium leading-relaxed max-w-sm">
              Nền tảng trao đổi giáo trình tinh gọn nhất cho sinh viên VLUTE.
            </p>
          </div>
        </div>

        {/* Character Illustration with floating security items */}
        <div className="relative flex-grow flex items-center justify-center animate-scale-in delay-300">
          <div className="relative w-full h-full max-w-2xl max-h-[550px] animate-float bg-white">
            <Image
              src="/images/security-illustration-ultra.png"
              alt="Trading Books Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Manual Floating Security Elements (SVGs) - Kept for extra premium feel */}
          <div className="absolute top-[20%] right-[15%] w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center text-emerald-50 animate-float-slow z-30 border border-emerald-50 overflow-hidden">
            <Image
              src="/icons/login/lock.svg"
              alt="Lock Icon"
              width={28}
              height={28}
            />
          </div>

            <div className="absolute bottom-[20%] left-[5%] w-14 h-14 bg-emerald-600 rounded-full shadow-emerald-200 shadow-2xl flex items-center justify-center text-white animate-float-reverse overflow-hidden">
              <Image
                src="/icons/login/shield.svg"
                alt="Shield Icon"
                width={28}
                height={28}
              />
            </div>

            <div className="absolute top-[40%] left-[-5%] w-12 h-12 bg-emerald-400 rounded-xl shadow-lg flex items-center justify-center text-white animate-float-slow overflow-hidden">
              <Image
                src="/icons/login/user.svg"
                alt="User Icon"
                width={24}
                height={24}
              />
            </div>
          </div>

        {/* Footer info */}
        <div className="relative z-10 flex items-center justify-between font-bold text-xs uppercase tracking-widest text-emerald-800/40 animate-fade-in-up delay-500">
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
      <div className="w-full lg:w-2/5 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-emerald-50/80 via-slate-50 to-teal-50/60 h-full relative overflow-hidden">
        {/* Subtle decorative orb */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-teal-100/30 rounded-full blur-3xl" />
        <div className="w-full max-w-md space-y-12 animate-fade-in-up">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Sẵn sàng để <br />
              <span className="italic text-emerald-600">Mua bán?</span>
            </h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Truy cập bằng tài khoản tập trung để bắt đầu trao đổi sách.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in-up delay-200">
            <button
              onClick={handleGoogleLogin}
              className="w-full h-16 flex items-center justify-center gap-4 bg-white border-[3px] border-emerald-100/60 rounded-2xl font-bold text-slate-700 transition-all duration-500 hover:border-emerald-500 hover:bg-white hover:scale-[1.02] shadow-lg shadow-emerald-100/30 hover:shadow-2xl hover:shadow-emerald-200/40 group"
            >
              <div className="relative w-7 h-7 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
                <Image
                  src="/icons/login/google.svg"
                  alt="Google Icon"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-xl tracking-tight group-hover:text-emerald-700">Tiếp tục bằng Google</span>
            </button>
          </div>

          <div className="p-6 bg-white/70 backdrop-blur-sm rounded-3xl border border-emerald-100/40 flex items-start gap-4 animate-fade-in-up delay-500 shadow-sm">
            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex-shrink-0 flex items-center justify-center text-emerald-500 overflow-hidden">
              <Image
                src="/icons/login/alert.svg"
                alt="Alert Icon"
                width={22}
                height={22}
              />
            </div>
            <div className="space-y-1">
              <p className="font-bold text-slate-800 text-sm">Xác thực tập trung</p>
              <p className="text-slate-500 text-xs font-medium leading-[1.6]">
                Dành riêng cho sinh viên học viện. Đăng nhập để kết nối và trao đổi giáo trình với bạn bè.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
