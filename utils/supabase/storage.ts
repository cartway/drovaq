import { createClient } from './client';
import { FileExtension } from './types';

export const STORAGE_BUCKET = {
  PAYMENT_PROOF: process.env.NEXT_PUBLIC_PAYMENT_PROOF!,
  USER_DOCS: process.env.NEXT_PUBLIC_USER_DOCS!,
} as const;

type BucketTypes = (typeof STORAGE_BUCKET)[keyof typeof STORAGE_BUCKET];

export const uploadImage = async (
  file: File | FileExtension,
  bucket: BucketTypes
) => {
  const supabase = createClient();
  const fileName = `${bucket}_${Date.now()}_${file.name}`;

  const { error } = await supabase.storage.from(bucket).upload(fileName, file);

  if (error) {
    throw new Error('Error uploading file: ' + error.message);
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from(bucket).getPublicUrl(fileName);

  return publicUrl;
};
