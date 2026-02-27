"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const menuItems = [
  {
    label: "Tổng quan",
    href: "/dashboard",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "Sách của tôi",
    href: "/dashboard/my-books",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    label: "Tìm kiếm",
    href: "/dashboard/search",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    label: "Tin nhắn",
    href: "/dashboard/messages",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: "Giao dịch",
    href: "/dashboard/transactions",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    label: "Yêu thích",
    href: "/dashboard/favorites",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

const bottomItems = [
  {
    label: "Cài đặt",
    href: "/dashboard/settings",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  const renderItem = (item: (typeof menuItems)[0]) => {
    const active = isActive(item.href);
    return (
      <Link
        key={item.href}
        href={item.href}
        title={collapsed ? item.label : undefined}
        className={`
          group flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold text-sm
          transition-all duration-300 relative
          ${
            active
              ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200"
              : "text-slate-500 hover:bg-emerald-50 hover:text-emerald-700"
          }
          ${collapsed ? "justify-center" : ""}
        `}
      >
        <span className={`flex-shrink-0 transition-transform duration-300 ${active ? "" : "group-hover:scale-110"}`}>
          {item.icon}
        </span>
        {!collapsed && (
          <span className="truncate">{item.label}</span>
        )}
        {/* Tooltip khi collapsed */}
        {collapsed && (
          <span className="absolute left-full ml-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl">
            {item.label}
            <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
          </span>
        )}
      </Link>
    );
  };

  return (
    <aside
      className={`
        h-screen sticky top-0 flex flex-col bg-white border-r border-slate-100
        transition-all duration-300 ease-in-out z-40
        ${collapsed ? "w-[72px]" : "w-[260px]"}
      `}
    >
      {/* Logo */}
      <div className={`flex items-center h-16 border-b border-slate-100 px-4 ${collapsed ? "justify-center" : "gap-3"}`}>
        <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        {!collapsed && (
          <span className="text-lg font-extrabold tracking-tight text-emerald-950 uppercase truncate">
            TradingBook
          </span>
        )}
      </div>

      {/* Menu chính */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {menuItems.map(renderItem)}
      </nav>

      {/* Divider + Menu dưới */}
      <div className="px-3 pb-3 space-y-1">
        <div className="border-t border-slate-100 mb-3" />
        {bottomItems.map(renderItem)}

        {/* Toggle button */}
        <button
          onClick={onToggle}
          className={`
            flex items-center gap-3 w-full px-3 py-2.5 rounded-xl font-semibold text-sm
            text-slate-400 hover:bg-slate-50 hover:text-slate-600
            transition-all duration-300
            ${collapsed ? "justify-center" : ""}
          `}
          title={collapsed ? "Mở rộng" : "Thu gọn"}
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`flex-shrink-0 transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}
          >
            <polyline points="11 17 6 12 11 7" />
            <polyline points="18 17 13 12 18 7" />
          </svg>
          {!collapsed && <span>Thu gọn</span>}
        </button>
      </div>
    </aside>
  );
}
