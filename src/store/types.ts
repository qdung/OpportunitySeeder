export interface IAppState {
  isSignIn: boolean;
  user: IUser;
}

export interface IUser {
  email: string;
  name: string;
  avatarUrl: string;
  accessToken?: string;
}
