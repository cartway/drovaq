import { SupabaseJWTPayload } from '@repo/ui/services';
import { createClientServer, updateSession } from '@repo/ui/utils';
import { jwtDecode } from 'jwt-decode';
import { NextResponse, type NextRequest } from 'next/server';

export async function proxy(request: NextRequest) {
  const supabase = await createClientServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const pathname = request.nextUrl.pathname;

  const authRoutes = ['/auth/login', '/auth/signup', '/auth/forgot-password'];

  if (session) {
    const { user_role } = jwtDecode<SupabaseJWTPayload>(session.access_token);

    const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

    if (isAuthRoute) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = '/';
      return NextResponse.redirect(redirectUrl);
    }

    if (
      (pathname.startsWith('/rider') && user_role !== 'rider') ||
      (pathname.startsWith('/customer') && user_role !== 'customer') ||
      (pathname.startsWith('/vendor') && user_role !== 'vendor') ||
      (pathname.startsWith('/admin') && user_role !== 'admin') ||
      (pathname.startsWith('/superadmin') && user_role !== 'superadmin')
    ) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = '/';
      return NextResponse.redirect(redirectUrl);
    }
  }

  if (!session) {
    if (
      pathname.startsWith('/dashboard') ||
      pathname.startsWith('/rider') ||
      pathname.startsWith('/customer') ||
      pathname.startsWith('/vendor') ||
      pathname.startsWith('/admin') ||
      pathname.startsWith('/superadmin')
    ) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = '/';
      return NextResponse.redirect(redirectUrl);
    }
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

// import { SupabaseJWTPayload } from '@repo/ui/services';
// import { createClientServer, updateSession } from '@repo/ui/utils';
// import { jwtDecode } from 'jwt-decode';
// import { NextResponse, type NextRequest } from 'next/server';

// export async function proxy(request: NextRequest) {
//   const supabase = await createClientServer();
//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   if (session) {
//     const { user_role } = jwtDecode<SupabaseJWTPayload>(session.access_token);
//     if (
//       request.nextUrl.pathname.startsWith('/auth/login') ||
//       request.nextUrl.pathname.startsWith('/auth/signup') ||
//       // request.nextUrl.pathname.startsWith('/discovery') ||
//       // request.nextUrl.pathname.startsWith("/vendor/onboarding") ||
//       // request.nextUrl.pathname.startsWith("/vendor/sign-up") ||
//       request.nextUrl.pathname.startsWith('auth/forgot-password') ||
//       request.nextUrl.pathname === '/'
//     ) {
//       const redirectUrl = request.nextUrl.clone();
//       // Redirect to dashboard or landing page if accessing an auth route with a session
//       if (user_role === 'rider') {
//         redirectUrl.pathname = '/rider/home';
//       } else if (user_role === 'customer') {
//         redirectUrl.pathname = '/customer/home';
//       } else if (user_role === 'vendor') {
//         redirectUrl.pathname = '/vendor/home';
//       } else {
//         redirectUrl.pathname = '/dashboard';
//       }
//       return NextResponse.redirect(redirectUrl);
//     }

//     if (
//       (request.nextUrl.pathname.startsWith('/rider') &&
//         user_role !== 'rider') ||
//       (request.nextUrl.pathname.startsWith('/customer') &&
//         user_role !== 'customer') ||
//       (request.nextUrl.pathname.startsWith('/vendor') && user_role !== 'vendor')
//     ) {
//       const redirectUrl = request.nextUrl.clone();
//       redirectUrl.pathname = '/'; // Redirect back to Home
//       return NextResponse.redirect(redirectUrl);
//     }
//   }
//   if (!session) {
//     if (
//       request.nextUrl.pathname.startsWith('/dashboard') ||
//       request.nextUrl.pathname.startsWith('/rider') ||
//       request.nextUrl.pathname.startsWith('/customer') ||
//       request.nextUrl.pathname.startsWith('/vendor')
//     ) {
//       const redirectUrl = request.nextUrl.clone();
//       redirectUrl.pathname = '/';
//       return NextResponse.redirect(redirectUrl);
//     }
//   }

//   return await updateSession(request);
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
//      * Feel free to modify this pattern to include more paths.
//      */
//     '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
//   ],
// };
