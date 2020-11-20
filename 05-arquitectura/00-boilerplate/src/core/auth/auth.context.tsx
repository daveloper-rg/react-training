import React from 'react';
import { UserSession, createEmptyUserSession } from './auth.model';

interface Context extends UserSession {
  setUserSession: (userSession: UserSession) => void;
}

const noUserLogin = 'no user login';

export const AuthContext = React.createContext<Context>({
  username: noUserLogin,
  setUserSession: () => console.warn('AuthContext forgot app provider?'),
});

export const AuthProvider: React.FC = props => {
  const { children } = props;
  const [userSession, setUserSession] = React.useState<UserSession>(
    createEmptyUserSession()
  );

  return (
    <AuthContext.Provider
      value={{ username: userSession.username, setUserSession }}
    >
      {children}
    </AuthContext.Provider>
  );
};
