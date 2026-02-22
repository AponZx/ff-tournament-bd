import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const { data: { session } } = await supabase.auth.getSession();

  const isAuthRoute = req.nextUrl.pathname.startsWith('/login') || 
                      req.nextUrl.pathname.startsWith('/signup') ||
                      req.nextUrl.pathname.startsWith('/reset-password');

  // If user is NOT logged in, and trying to access anything other than login/signup, kick them out
  if (!session && !isAuthRoute && !req.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // If user IS logged in, and tries to go to login page, send them to homepage
  if (session && isAuthRoute) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
