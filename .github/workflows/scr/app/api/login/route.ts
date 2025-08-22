import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    if (typeof email !== 'string' || typeof password !== 'string') {
      return NextResponse.json(
        { message: 'Invalid input format' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Find user by email in database
    // 2. Compare password hashes
    // 3. Generate JWT token
    // 4. Return success response with token

    // For demo purposes, we'll simulate a successful login with role-based users
    console.log('Login attempt:', { email });

    // Simulate user authentication with different roles
    let mockUser;
    
    if (email === 'admin@foodlify.com' && password === 'admin123') {
      // Admin user
      mockUser = {
        id: 1,
        name: 'Foodlify Admin',
        email: email,
        role: 'admin' as const,
        createdAt: new Date().toISOString()
      };
    } else if (email === 'manager@foodlify.com' && password === 'manager123') {
      // Manager user
      mockUser = {
        id: 2,
        name: 'Restaurant Manager',
        email: email,
        role: 'manager' as const,
        createdAt: new Date().toISOString()
      };
    } else if (email === 'nguynthnh1011@gmail.com') {
      // Existing user - make them a manager
      mockUser = {
        id: 3,
        name: 'Nguyễn Đức Thịnh',
        email: email,
        role: 'manager' as const,
        createdAt: new Date().toISOString()
      };
    } else {
      // Regular customer
      mockUser = {
        id: Math.floor(Math.random() * 1000) + 4,
        name: email.split('@')[0],
        email: email,
        role: 'customer' as const,
        createdAt: new Date().toISOString()
      };
    }

    // Validate the created user object
    if (!mockUser.id || !mockUser.name || !mockUser.email || !mockUser.role) {
      return NextResponse.json(
        { message: 'Failed to create user object' },
        { status: 500 }
      );
    }

    // Simulate JWT token (in real app, use proper JWT library)
    const mockToken = 'mock-jwt-token-' + Date.now();

    return NextResponse.json(
      { 
        message: 'Login successful',
        user: mockUser,
        token: mockToken
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
