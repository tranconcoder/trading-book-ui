export default function Footer() {
  return (
    <footer className="py-12 bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-lg font-extrabold text-white uppercase tracking-tight">
              TradingBook
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm font-semibold">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Hệ thống hoạt động
            </span>
            <span className="text-slate-600">|</span>
            <span>VLUTE Students</span>
            <span className="text-slate-600">|</span>
            <span>&copy; 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
