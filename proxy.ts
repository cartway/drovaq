import { jwtDecode } from 'jwt-decode';
import { NextResponse, type NextRequest } from 'next/server';

import { SupabaseJWTPayload } from './services/auth/types';
import { createClient } from './utils/supabase/server';

import { updateSession } from '@/utils/supabase/middleware';

export async function proxy(request: NextRequest) {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    const { user_role } = jwtDecode<SupabaseJWTPayload>(session.access_token);
    if (
      request.nextUrl.pathname.startsWith('/login') ||
      request.nextUrl.pathname.startsWith('/signup') ||
      request.nextUrl.pathname.startsWith('/discovery') ||
      // request.nextUrl.pathname.startsWith("/vendor/onboarding") ||
      // request.nextUrl.pathname.startsWith("/vendor/sign-up") ||
      request.nextUrl.pathname.startsWith('/forgot-password') ||
      request.nextUrl.pathname === '/'
    ) {
      const redirectUrl = request.nextUrl.clone();
      // Redirect to dashboard or landing page if accessing an auth route with a session
      if (user_role === 'rider') {
        redirectUrl.pathname = '/rider/home';
      } else if (user_role === 'customer') {
        redirectUrl.pathname = '/customer/home';
      } else if (user_role === 'vendor') {
        redirectUrl.pathname = '/vendor/home';
      } else {
        redirectUrl.pathname = '/dashboard';
      }
      return NextResponse.redirect(redirectUrl);
    }
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
