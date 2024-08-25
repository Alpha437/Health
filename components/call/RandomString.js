export default function genRandomString(number) {
  const chars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const charLength = chars.length;
  let result = '';
  for (let i = 0; i < number; i++) {
    result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}
