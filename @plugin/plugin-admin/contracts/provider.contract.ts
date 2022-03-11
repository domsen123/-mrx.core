import type { SignInRequest, SignInResponse } from './sign-in.contract';

export interface ClientAuthProvider {}
export interface ServerAuthProvider {
  SignInService: (dto: SignInRequest) => Promise<SignInResponse>;
}
