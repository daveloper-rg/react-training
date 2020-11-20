import { AuthContext } from 'core/auth';
import { routes } from 'core/router';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { isValidLogin } from './login.api';
import { LoginComponent } from './login.component';
import { Login } from './login.vm';

export const LoginContainer: React.FC = () => {
  const history = useHistory();
  const { setUserSession } = React.useContext(AuthContext);

  const loginSucceeded = (isValid: boolean): void => {
    if (isValid) {
      history.push(routes.submoduleList);
    } else {
      // TODO: replace
      alert('invalid login');
    }
  };

  const handleLogin = (login: Login) => {
    isValidLogin(login.user, login.password).then(result => {
      setUserSession({ username: login.user });
      loginSucceeded(result);
    });
  };

  return (
    <>
      <LoginComponent onLogin={handleLogin} />
    </>
  );
};
