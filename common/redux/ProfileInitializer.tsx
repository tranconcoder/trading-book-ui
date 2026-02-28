'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/common/redux/hooks';
import { fetchProfile } from '@/common/redux/features/user/userSlice';

/**
 * Component that initializes the user profile on application mount.
 * Dispatches the fetchProfile thunk to synchronize user state with the backend.
 */
export default function ProfileInitializer({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return <>{children}</>;
}
