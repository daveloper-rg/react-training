import React, { useCallback } from "react";
import { Link, useHistory } from "react-router-dom";

interface UserContext {
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  setLogged: (value: boolean) => void;
  logged: boolean;
}

const CredentialContext = React.createContext<UserContext>({
  username: "",
  setUsername: (value: string) => {},
  password: "",
  setPassword: (value: string) => {},
  setLogged: (value: boolean) => {},
  logged: false,
});

export const CredentialProvider: React.FC = (props) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [logged, setLogged] = React.useState(false);

  return (
    <CredentialContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        logged,
        setLogged,
      }}
    >
      {props.children}
    </CredentialContext.Provider>
  );
};

const validCredentials = (username, password): boolean => {
  return username === "admin" && password === "test";
};

export const LoginPage: React.FC = () => {
  const history = useHistory();
  const credentialContext = React.useContext(CredentialContext);

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    credentialContext.setLogged(true);

    if (validCredentials(credentialContext.username, credentialContext.password)) {
      history.push("/list");
    } else {
      credentialContext.setLogged(false);
      alert("User / password not valid, psst... admin / test");
    }
  };

  const hideForm =
  validCredentials(credentialContext.username, credentialContext.password) &&
    credentialContext.logged;

    return (
      <>
      {hideForm ?
        <>
          <h3>Hello: {credentialContext.username}</h3>
          <Link to="/list">Navigate to detail page</Link>
        </>
      :
        <form onSubmit={handleNavigation}>
          <h2>Hello from login page !</h2>
          <div>
            <div>
              <label>Username: </label>
              <input
                value={credentialContext.username}
                onChange={(e) => credentialContext.setUsername(e.target.value)}
              />
            </div>
            <div>
              <label>Password: </label>
              <input
                type="password"
                value={credentialContext.password}
                onChange={(e) => credentialContext.setPassword(e.target.value)}
              ></input>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      }
      </>
    );

  
};
