import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    // Basic validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
      return NextResponse.json(
        { message: 'Invalid input format' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    if (name.length < 2) {
      return NextResponse.json(
        { message: 'Name must be at least 2 characters long' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Check if user already exists
    // 2. Hash the password
    // 3. Save user to database
    // 4. Return success response

    // For demo purposes, we'll just return a success response
    console.log('Registration attempt:', { name, email });

    // Simulate user creation with role-based assignment
    let userRole: 'admin' | 'manager' | 'staff' | 'customer' = 'customer';
    
    // Assign roles based on email patterns or specific users
    if (email === 'admin@foodlify.com') {
      userRole = 'admin';
    } else if (email === 'manager@foodlify.com' || email === 'nguynthnh1011@gmail.com') {
      userRole = 'manager';
    } else if (email.includes('staff') || email.includes('employee')) {
      userRole = 'staff';
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      role: userRole,
      createdAt: new Date().toISOString()
    };

    // Validate the created user object
    if (!newUser.id || !newUser.name || !newUser.email || !newUser.role) {
      return NextResponse.json(
        { message: 'Failed to create user object' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'User registered successfully',
        user: newUser
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
