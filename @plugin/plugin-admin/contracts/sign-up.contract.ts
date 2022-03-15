import type { IAuth, ISession } from '../types';

export interface SignUpDto {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  confirm?: string;
}

export interface SignUpRequest {
  dtoSignUp: SignUpDto;
  additional?: any;
}

export interface SignUpResponse {
  auth: IAuth;
  session: ISession;
}

export const toSignUpRequest = (
  dto: SignUpDto,
  additional?: any,
): SignUpRequest => ({
  dtoSignUp: dto,
  additional,
});
