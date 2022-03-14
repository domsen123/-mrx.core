import { doRequest, useStore } from '@mrx/helper';
import type { SignInDto, SignInResponse } from '../contracts';
import { toSignInRequest } from '../contracts';
import type { IAuth, ISession } from '../types';
import { PluginEndpoint } from '../types';

export class AuthClientService {
  SignIn = async (dto: SignInDto, additional?: any): Promise<void> => {
    const store = useStore();
    const { auth, session } = await doRequest<SignInResponse>({
      method: 'POST',
      url: PluginEndpoint.SIGN_IN,
      data: toSignInRequest(dto, additional),
    });
    store.setItem<IAuth>('currentUser', auth);
    store.setItem<ISession>('currentSession', session);
  };

  SignUp = async () => {};
  SignOut = async () => {};
  Details = async () => {
    await doRequest({
      method: 'GET',
      url: PluginEndpoint.DETAILS,
    });
  };

  ResetPassword = async () => {};
}
