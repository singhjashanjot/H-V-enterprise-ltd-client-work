'use server';

// We just securely pass the key to the client. 
// The actual submission will happen from the user's browser to bypass Cloudflare.
export async function getWeb3FormsKey() {
  return process.env.WEB3FORMS_ACCESS_KEY;
}
