"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'staff' | 'customer';
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing user session on mount
  useEffect(() => {
    const checkAuth = async () => {
      console.log('Checking authentication state...');
      setIsLoading(true);
      
      try {
        const savedUser = localStorage.getItem('foodlify_user');
        const savedToken = localStorage.getItem('foodlify_token');
        
        if (savedUser && savedToken) {
          const parsedUser = JSON.parse(savedUser);
          // Validate the user object has required fields
          if (parsedUser && parsedUser.id && parsedUser.email && parsedUser.role) {
            setUser(parsedUser);
            console.log('User loaded from localStorage:', parsedUser);
          } else {
            console.warn('Invalid user data in localStorage, clearing...');
            localStorage.removeItem('foodlify_user');
            localStorage.removeItem('foodlify_token');
          }
        } else {
          console.log('No saved user found');
        }
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('foodlify_user');
        localStorage.removeItem('foodlify_token');
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      console.log('Attempting login for:', email);
      
      // Validate input
      if (!email || !password) {
        console.error('Email and password are required');
        return false;
      }

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        
        // Validate the response data
        if (data.user && data.user.id && data.user.email && data.user.role && data.token) {
          setUser(data.user);
          localStorage.setItem('foodlify_user', JSON.stringify(data.user));
          localStorage.setItem('foodlify_token', data.token);
          return true;
        } else {
          console.error('Invalid response data structure:', data);
          return false;
        }
      } else {
        const error = await response.json();
        console.error('Login error:', error.message);
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      console.log('Attempting registration for:', email);
      
      // Validate input
      if (!name || !email || !password) {
        console.error('Name, email, and password are required');
        return false;
      }

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);
        
        // Validate the response data
        if (data.user && data.user.id && data.user.name && data.user.email && data.user.role) {
          setUser(data.user);
          localStorage.setItem('foodlify_user', JSON.stringify(data.user));
          localStorage.setItem('foodlify_token', 'mock-token-' + Date.now());
          return true;
        } else {
          console.error('Invalid response data structure:', data);
          return false;
        }
      } else {
        const error = await response.json();
        console.error('Registration error:', error.message);
        return false;
      }
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    console.log('Logging out user...');
    try {
      setUser(null);
      localStorage.removeItem('foodlify_user');
      localStorage.removeItem('foodlify_token');
      console.log('User logged out successfully');
      
      // Use router for navigation instead of direct location change
      // This will be handled by the component using the logout function
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
