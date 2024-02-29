export const extractOauthToken = (hash: string) => {
  const tokenStart = hash.indexOf('=');
  const tokenEnd = hash.indexOf('&');
  const token = hash.slice(tokenStart + 1, tokenEnd);
  return token;
};
