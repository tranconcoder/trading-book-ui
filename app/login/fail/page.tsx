"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Be_Vietnam_Pro } from "next/font/google";
import { Suspense } from "react";
import Image from "next/image";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function LoginFailContent() {
  const searchParams = useSearchParams();
  const errorCode = searchParams.get("error") ?? "";
  const rawMessage = searchParams.get("message") ?? "";
  let errorMessage = "Quá trình xác thực bằng Google không thành công. Vui lòng thử lại.";

  if (rawMessage) {
    try {
      // Decode Base64 to a binary string
      const binaryString = atob(rawMessage);
      // Convert binary string to a byte array (Uint8Array)
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      // Decode the UTF-8 bytes into a proper string
      errorMessage = new TextDecoder().decode(bytes);
    } catch (e) {
      console.error("Base64 decoding failed:", e);
      // Fallback if the string is not valid Base64
      errorMessage = rawMessage;
    }
  }

  return (
    <div
      className={`${beVietnamPro.className} h-screen w-full flex overflow-hidden bg-white text-slate-900 select-none`}
    >
      {/* Left Side: Branding */}
      <div className="hidden lg:flex lg:w-3/5 bg-white flex-col justify-between p-12 relative overflow-hidden h-full border-r border-slate-50">
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
            <h1 className="text-5xl font-black text-emerald-950 leading-[1.1] tracking-tighter">
              Dành riêng cho <br />
              <span className="text-emerald-600">sinh viên</span> <br />
              <span className="text-emerald-400">VLUTE.</span>
            </h1>
            <p className="text-xl text-emerald-900/70 font-medium leading-relaxed max-w-sm">
              Quá trình xác thực không thành công. Vui lòng kiểm tra lại tài khoản và thử lại.
            </p>
          </div>
        </div>

        {/* Decorative error circle */}
        <div className="relative flex-grow flex items-center justify-center animate-scale-in delay-300">
          <div className="relative w-72 h-72 flex items-center justify-center">
            <div className="absolute inset-0 bg-red-50 rounded-full animate-pulse opacity-60" />
            <div className="absolute inset-8 bg-red-100/60 rounded-full" />
            <div className="relative z-10 w-28 h-28 bg-red-500 rounded-full flex items-center justify-center shadow-2xl shadow-red-200 overflow-hidden">
              <Image
                src="/icons/login/error.svg"
                alt="Error Icon"
                width={56}
                height={56}
              />
            </div>
            {errorCode && (
              <div className="absolute -top-4 -right-4 bg-slate-900 text-white text-xs font-mono font-bold px-3 py-1.5 rounded-full shadow-lg animate-float">
                {errorCode}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between font-bold text-xs uppercase tracking-widest text-emerald-800/40 animate-fade-in-up delay-500">
          <div className="flex items-center gap-4">
            <span>VLUTE Students</span>
            <div className="w-1.5 h-1.5 bg-emerald-300 rounded-full" />
            <span>&copy; 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            <span>Xác thực thất bại</span>
          </div>
        </div>
      </div>

      {/* Right Side: Error Info */}
      <div className="w-full lg:w-2/5 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-red-50/60 via-slate-50 to-orange-50/40 h-full relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-red-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-orange-100/30 rounded-full blur-3xl" />

        <div className="w-full max-w-md space-y-10 animate-fade-in-up">
          {/* Error badge */}
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-600 text-sm font-bold uppercase tracking-widest">
              Xác thực thất bại
            </span>
          </div>

          {/* Error heading */}
          <div className="space-y-2">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Đăng nhập thất bại
            </h2>
          </div>

          {/* Error code + message */}
          {errorCode && (
            <div className="p-5 bg-slate-900 rounded-2xl border border-slate-800 font-mono space-y-3">
              <div>
                <p className="text-slate-500 text-xs mb-1 uppercase tracking-widest">
                  Mã lỗi
                </p>
                <p className="text-emerald-400 text-sm font-bold">{errorCode}</p>
              </div>
              <div className="border-t border-slate-700 pt-3">
                <p className="text-slate-500 text-xs mb-1 uppercase tracking-widest font-sans">
                  Chi tiết
                </p>
                <p className="text-red-400 text-sm font-sans font-medium leading-relaxed">
                  {errorMessage}
                </p>
              </div>
            </div>
          )}

          {/* Action */}
          <div className="space-y-4 animate-fade-in-up delay-200">
            <button
              onClick={() => { window.location.href = "http://localhost:3000/auth/google"; }}
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
              <span className="text-xl tracking-tight group-hover:text-emerald-700">
                Tiếp tục bằng Google
              </span>
            </button>

            <p className="text-center text-sm text-slate-400 font-medium">
              Bạn cần hỗ trợ?{" "}
              <a
                href="mailto:support@vlute.edu.vn"
                className="text-emerald-600 font-semibold hover:underline"
              >
                Liên hệ bộ phận IT
              </a>
            </p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default function LoginFailPage() {
  return (
    <Suspense>
      <LoginFailContent />
    </Suspense>
  );
}
