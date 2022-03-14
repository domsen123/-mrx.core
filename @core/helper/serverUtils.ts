import fs from 'fs';
import jwt from 'jsonwebtoken';

// Create a Client Token
export const createClientToken = (
  payload: any,
  secret: string,
  maxAge: number,
) => {
  const toSign = {
    ...payload,
    maxAge,
  };
  return jwt.sign(toSign, secret, { expiresIn: maxAge });
};

// Decode a Client Token
export const decodeClientToken = <T>(token: string, secret: string): T => {
  return jwt.verify(token, secret) as T;
};

interface Imp<T = void> {
  default: T;
  [key: string]: any;
}
export const importIfExists = async <T = void>(
  path: string,
): Promise<Imp<T> | undefined> => {
  if (fs.existsSync(path)) {
    return await import(path);
  }
};
