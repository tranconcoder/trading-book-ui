'use client';

import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/common/redux/hooks";
import { logout } from "@/common/redux/features/user/userSlice";
import { useState, useEffect } from "react";

/**
 * A premium, responsive Navbar component.
 * Features glassmorphism effects and dynamic user profile display.
 */
export default function Navbar() {
  const { userInfo } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b 
        ${isScrolled 
          ? "bg-white/90 backdrop-blur-xl border-slate-200 shadow-sm py-2" 
          : "bg-white/70 backdrop-blur-lg border-transparent py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200 transition-transform group-hover:scale-110 duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-black tracking-tight text-emerald-950 uppercase hidden sm:block">
              TradingBook
            </span>
          </Link>

          {/* User Section */}
          <div className="flex items-center gap-4">
            {userInfo ? (
              <div className="relative">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center gap-2 p-1.5 rounded-full hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200"
                >
                  <div className="w-9 h-9 rounded-full bg-emerald-100 border border-emerald-200 overflow-hidden shadow-inner flex items-center justify-center">
                    {userInfo.avatar ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img 
                        src={userInfo.avatar as string} 
                        alt={String(userInfo.name || "User Avatar")} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-emerald-700 font-bold text-sm">
                        {String((userInfo.firstName as string)?.[0] || 'U')}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-semibold text-slate-700 hidden md:block">
                    {String(userInfo.firstName || 'User')}
                  </span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" 
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className={`text-slate-400 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in duration-200 origin-top-right">
                    <div className="px-4 py-3 bg-slate-50/50 border-b border-slate-100">
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Đang đăng nhập</p>
                      <p className="text-sm font-bold text-slate-900 truncate">{String(userInfo.email || "")}</p>
                    </div>
                    <div className="p-2">
                       <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 rounded-xl hover:bg-slate-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
                        Trang cá nhân
                      </Link>
                      <button 
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50 transition-colors mt-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
                        Đăng xuất
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="px-6 py-2 bg-emerald-600 text-white font-bold text-sm rounded-xl hover:bg-emerald-700 transition-all duration-300 shadow-md shadow-emerald-100 hover:shadow-lg hover:-translate-y-0.5"
              >
                Đăng nhập
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
