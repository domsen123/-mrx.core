import { doRequest, useStore } from '@mrx/helper';
import type {
  SignInDto,
  SignInResponse,
  SignUpDto,
  SignUpResponse,
} from '../contracts';
import { toSignInRequest, toSignUpRequest } from '../contracts';
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
    // store.setItem<ISession>('currentSession', session);
  };

  SignUp = async (dto: SignUpDto, additional?: any) => {
    const store = useStore();
    const { auth, session } = await doRequest<SignUpResponse>({
      method: 'POST',
      url: PluginEndpoint.SIGN_UP,
      data: toSignUpRequest(dto, additional),
    });
    store.setItem<IAuth>('currentUser', auth);
    // store.setItem<ISession>('currentSession', session);
  };

  SignOut = async () => {
    const store = useStore();
    await doRequest<SignUpResponse>({
      method: 'GET',
      url: PluginEndpoint.SIGN_OUT,
    });
    store.removeItem('currentUser');
    // store.removeItem('currentSession');
  };

  Details = async () => {
    const store = useStore();
    const auth = await doRequest<IAuth>({
      method: 'GET',
      url: PluginEndpoint.DETAILS,
    });
    store.setItem<IAuth>('currentUser', auth);
  };

  ResetPassword = async () => {};
}
