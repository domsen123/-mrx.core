import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { uuid } from '@mrx/helper';
import { JSONFile, Low } from 'lowdb';
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

const ACTIVE_SESSIONS: { auth: IAuth; session: ISession }[] = [];

export class AuthServerService {
  private db: Low<any>;
  constructor(private secure_string: string, private maxAge: number = 3600) {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const dbFile = resolve(__dirname, '../_lowdb/db.json');
    const adapter = new JSONFile(dbFile);
    this.db = new Low(adapter);
  }

  public SignIn = async (
    dto: SignInDto,
  ): Promise<{ auth: IAuth; session: ISession }> => {
    await this.db.read();
    const { username, password } = dto;
    const exists = this.db.data.users.find((u: any) => u.username === username);
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
    this.db.data.sessions.push({ auth, session });
    this.db.write();
    return { auth, session };
  };

  public SignUp = async (
    dto: SignUpDto,
  ): Promise<{ auth: IAuth; session: ISession }> => {
    await this.db.read();

    const { firstname, lastname, username, password } = dto;

    const exists = this.db.data.users.find((u: any) => u.username === username);
    // eslint-disable-next-line no-throw-literal
    if (exists) throw { statusCode: 409, message: 'User already exists!' };

    const auth: IAuth = { username, uuid: uuid() };
    this.db.data.users.push({ ...auth, password });
    this.db.data.profiles.push({
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
    this.db.data.sessions.push({ auth, session });
    this.db.write();
    return { auth, session };
  };

  public SignOut = async (token: string) => {
    await this.db.read();
    this.db.data.sessions = this.db.data.sessions.filter(
      (s: any) => s.session.token !== token,
    );
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
