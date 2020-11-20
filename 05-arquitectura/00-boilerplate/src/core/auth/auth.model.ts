export interface UserSession {
  username: string;
}

export const createEmptyUserSession = (): UserSession => ({
  username: '',
});
