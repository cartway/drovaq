import { createClientServer } from '@repo/ui/utils';
import { type EmailOtpType } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
// The client you created from the Server-Side Auth instructions

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get('token_hash');
  const type = searchParams.get('type') as EmailOtpType | null;
  const next = searchParams.get('next') ?? '/';
  const redirectTo = request.nextUrl.clone();
  redirectTo.pathname = next;

  if (token_hash && type) {
    const supabase = await createClientServer();
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });
    if (!error) {
      return NextResponse.redirect(redirectTo);
    }
  }

  // return the user to an error page with some instructions
  // redirectTo.pathname = "/auth-error"; // uncomment this line to redirect to an error page, was temp commented out due to Cloudflare interractive challenge causing issues with email verification
  return NextResponse.redirect(redirectTo);
};
