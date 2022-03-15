import { uuid } from '@mrx/helper';
import { createClientToken, decodeClientToken } from '@mrx/helper/serverUtils';
import type { SignInDto, SignUpDto } from '../contracts';
import type { IAuth, ISession } from '../types';

const adminUuid = uuid();

const DB_USERS = [
  {
    uuid: adminUuid,
    username: 'admin',
    password: 'pass4word',
  },
];

const DB_PROFILES = [
  {
    uuid: adminUuid,
    firstname: 'Dominic',
    lastname: 'Marx',
  },
];

let ACTIVE_SESSIONS: { auth: IAuth; session: ISession }[] = [];

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

  public SignUp = async (
    dto: SignUpDto,
  ): Promise<{ auth: IAuth; session: ISession }> => {
    const { firstname, lastname, username, password } = dto;

    const exists = DB_USERS.find((u) => u.username === username);
    // eslint-disable-next-line no-throw-literal
    if (exists) throw { statusCode: 409, message: 'User already exists!' };

    const auth: IAuth = { username, uuid: uuid() };
    DB_USERS.push({ ...auth, password });
    DB_PROFILES.push({
      uuid: auth.uuid,
      firstname,
      lastname,
    });

    const token = createClientToken(auth, this.secure_string, this.maxAge);
    const session = {
      token,
      refresh_token: uuid(),
      maxAge: this.maxAge,
    };
    ACTIVE_SESSIONS.push({ auth, session });
    return { auth, session };
  };

  public SignOut = async (token: string) => {
    ACTIVE_SESSIONS = ACTIVE_SESSIONS.filter((s) => s.session.token !== token);
  };

  public Details = (token: string) => {
    const _t = decodeClientToken<IAuth>(token, this.secure_string);
    return {
      uuid: _t.uuid,
      username: _t.username,
    };
  };

  public ResetPassword = async () => {};
}
