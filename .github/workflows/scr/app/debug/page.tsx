"use client";

import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

export default function DebugPage() {
  const { user, login, register, logout, isLoading } = useAuth();

  const handleTestLogin = async () => {
    console.log('Testing login...');
    const success = await login('test@example.com', 'password');
    console.log('Login result:', success);
  };

  const handleTestRegister = async () => {
    console.log('Testing register...');
    const success = await register('Test User', 'test@example.com', 'password');
    console.log('Register result:', success);
  };

  const handleClearStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Authentication Debug Page</h1>
        
        <div className="space-y-6">
          {/* Current State */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-black mb-4">Current State</h2>
            <div className="space-y-2">
              <p><strong>User:</strong> {user ? JSON.stringify(user, null, 2) : 'null'}</p>
              <p><strong>Loading:</strong> {isLoading.toString()}</p>
              <p><strong>LocalStorage User:</strong> {localStorage.getItem('foodlify_user') || 'null'}</p>
              <p><strong>LocalStorage Token:</strong> {localStorage.getItem('foodlify_token') || 'null'}</p>
            </div>
          </div>

          {/* Test Actions */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-black mb-4">Test Actions</h2>
            <div className="space-x-4">
              <Button onClick={handleTestLogin} disabled={isLoading}>
                Test Login
              </Button>
              <Button onClick={handleTestRegister} disabled={isLoading}>
                Test Register
              </Button>
              <Button onClick={logout} disabled={isLoading}>
                Logout
              </Button>
              <Button onClick={handleClearStorage} variant="outline">
                Clear Storage & Reload
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-black mb-4">Navigation</h2>
            <div className="space-x-4">
              <Button onClick={() => window.location.href = '/'} variant="outline">
                Go to Homepage
              </Button>
              <Button onClick={() => window.location.href = '/dashboard'} variant="outline">
                Go to Dashboard
              </Button>
              <Button onClick={() => window.location.href = '/login'} variant="outline">
                Go to Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
