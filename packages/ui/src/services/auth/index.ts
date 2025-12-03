import { createClient, STORAGE_BUCKET, uploadImage } from '../../utils';
import { SignupPayload, UserRole } from './types';

export const signUp = async (
  payload: SignupPayload,
  role: UserRole,
  redirOrigin: string
) => {
  const supabase = createClient();

  const uploadPromises: Promise<string | undefined>[] = [];

  if (payload.id_document) {
    uploadPromises.push(
      uploadImage(payload.id_document, STORAGE_BUCKET.DROVAC_BUCKET)
    );
  } else {
    uploadPromises.push(Promise.resolve(undefined));
  }

  if (payload.cac_certificate) {
    uploadPromises.push(
      uploadImage(payload.cac_certificate, STORAGE_BUCKET.DROVAC_BUCKET)
    );
  } else {
    uploadPromises.push(Promise.resolve(undefined));
  }

  const [id_document_url, cac_certificate_url] =
    await Promise.all(uploadPromises);

  const { error, data } = await supabase.auth.signUp({
    email: payload.email,
    password: payload.password,
    options: {
      emailRedirectTo: `${redirOrigin}/auth/confirm`,
      data: {
        role,

        first_name: payload.first_name,
        last_name: payload.last_name,
        phone: payload.phone,

        id_type: payload.id_type || null,
        id_document_url: id_document_url || null,
        vehicle_make: payload.vehicle_make || null,
        license_plate_number: payload.license_plate_number || null,

        business_name: payload.business_name || null,
        cac_certificate_url: cac_certificate_url || null,
      },
    },
  });

  // data.user.

  if (error) {
    console.error(error.code + ' ' + error.message);
    throw new Error('Error signing up: ' + error.message);
  } else {
    return data;
  }
};

export const logIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const supabase = createClient();
  const { error, data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error.code + ' ' + error.message);
    throw new Error(error.message);
  }

  return data;
};

export const resendConfirmationEmail = async (email: string) => {
  const supabase = createClient();
  const { error } = await supabase.auth.resend({
    type: 'signup',
    email: email,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/confirm`,
    },
  });
  if (error) {
    console.error('Error resending confirmation email: ' + error.message);
    throw new Error(error.message);
  }
};

export const resetPasswordforEmail = async (
  email: string,
  redirOrigin: string
) => {
  const supabase = createClient();
  const { error, data } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${redirOrigin}`,
  });
  if (error) {
    console.error('Error sending reset email: ' + error.message);
    throw new Error(error.message);
  }

  return data;
};

export const updatePasswordAfterReset = async (password: string) => {
  const supabase = createClient();
  const { error, data } = await supabase.auth.updateUser({ password });
  if (error) {
    console.error('Error setting password: ' + error.message);
    throw new Error(error.message);
  }

  return data;
};
