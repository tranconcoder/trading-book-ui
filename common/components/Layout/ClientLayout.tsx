'use client';

import { usePathname } from 'next/navigation';
import ReduxProvider from "@/common/redux/provider";
import ProfileInitializer from "@/common/redux/ProfileInitializer";
import Navbar from "@/common/components/Navbar/Navbar";
import React from 'react';

/**
 * Client-side layout wrapper that handles conditional component rendering
 * based on the current route (e.g., hiding Navbar on the login page).
 */
export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Define routes where the global Navbar should be hidden
  const hideNavbarRoutes = ['/login'];
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  return (
    <ReduxProvider>
      <ProfileInitializer>
        {!shouldHideNavbar && <Navbar />}
        <div className={`${!shouldHideNavbar ? 'pt-20' : ''} min-h-screen bg-white`}>
          {children}
        </div>
      </ProfileInitializer>
    </ReduxProvider>
  );
}
