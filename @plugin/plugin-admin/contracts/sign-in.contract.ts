import type { IAuth, ISession } from '../types';

export interface SignInDto {
  username: string;
  password: string;
}

export interface SignInRequest {
  dtoSignIn: SignInDto;
  additional?: any;
}

export interface SignInResponse {
  auth: IAuth;
  session: ISession;
}

export const toSignInRequest = (
  dto: SignInDto,
  additional?: any,
): SignInRequest => ({
  dtoSignIn: dto,
  additional,
});
