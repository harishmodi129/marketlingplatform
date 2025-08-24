'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/lib/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuthStatus } from '@/features/auth/authSlice';

// Loading component for PersistGate
function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading application...</p>
      </div>
    </div>
  );
}

// Component to check auth status after rehydration
function AuthChecker({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check auth status after rehydration
    dispatch(checkAuthStatus());
  }, [dispatch]);

  return <>{children}</>;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <AuthChecker>
          {children}
        </AuthChecker>
      </PersistGate>
    </Provider>
  );
} 