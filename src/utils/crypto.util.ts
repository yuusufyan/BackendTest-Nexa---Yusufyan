import crypto from 'crypto';

const AES_KEY = 'nexatest'.padEnd(16); // AES-128
const IV = Buffer.alloc(16); // 16 byte nol

export function decryptAESFromHex(buffer: Buffer): string {
  try {
    const decipher = crypto.createDecipheriv('aes-128-cbc', AES_KEY, IV);
    let decrypted = decipher.update(buffer, undefined, 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  } catch (err) {
    console.error('❌ Gagal decrypt:', err.message);
    return '';
  }
}
