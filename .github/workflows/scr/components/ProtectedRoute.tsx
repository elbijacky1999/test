"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'manager' | 'staff' | 'customer';
  requireAdmin?: boolean;
}

export function ProtectedRoute({ children, requiredRole, requireAdmin = false }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Wait until loading is complete
    if (isLoading) return;

    // If no user, redirect to login
    if (!user) {
      console.log('No user found, redirecting to login...');
      router.push('/login');
      return;
    }

    // Check for role requirements
    if (requireAdmin && user.role !== 'admin') {
      console.log('Access denied: Admin role required');
      router.push('/unauthorized');
      return;
    }

    if (requiredRole && user.role !== requiredRole) {
      console.log(`Access denied: ${requiredRole} role required, but user has ${user.role} role`);
      router.push('/unauthorized');
      return;
    }
  }, [user, isLoading, requiredRole, requireAdmin, router]);

  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If no user after loading, don't render anything (redirect will happen)
  if (!user) {
    return null;
  }

  // Check role-based access
  if (requireAdmin && user.role !== 'admin') {
    return null; // Will redirect in useEffect
  }

  if (requiredRole && user.role !== requiredRole) {
    return null; // Will redirect in useEffect
  }

  // User is authenticated and authorized, render the protected content
  return <>{children}</>;
}
