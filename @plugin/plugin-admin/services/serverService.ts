import { uuid } from '@mrx/helper';
import { createClientToken, decodeClientToken } from '@mrx/helper/serverUtils';
import type { SignInDto } from '../contracts';
import type { IAuth, ISession } from '../types';

const DB_USERS = [
  {
    uuid: uuid(),
    username: 'admin',
    password: 'pass4word',
  },
];

const ACTIVE_SESSIONS: { auth: IAuth; session: ISession }[] = [];

export class AuthServerService {
  constructor(private secure_string: string, private maxAge: number = 3600) {}

  public SignIn = async (
    dto: SignInDto,
  ): Promise<{ auth: IAuth; session: ISession }> => {
    const { username, password } = dto;

    const exists = DB_USERS.find((u) => u.username === username);
    // eslint-disable-next-line no-throw-literal
    if (!exists) throw { statusCode: 404, message: 'User not exists!' };

    const match = exists.password === password;
    // eslint-disable-next-line no-throw-literal
    if (!match) throw { statusCode: 400, message: 'Passwords not match' };

    const auth: IAuth = JSON.parse(JSON.stringify(exists));
    Reflect.deleteProperty(auth, 'password');

    const token = createClientToken(auth, this.secure_string, this.maxAge);
    const session = {
      token,
      refresh_token: uuid(),
      maxAge: this.maxAge,
    };

    ACTIVE_SESSIONS.push({ auth, session });
    return { auth, session };
  };

  public SignUp = async () => {};
  public SignOut = async () => {};
  public Details = (token: string) => {
    const _t = decodeClientToken<IAuth>(token, this.secure_string);
    return {
      uuid: _t.uuid,
      username: _t.username,
    };
  };

  public ResetPassword = async () => {};
}
