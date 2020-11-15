import React from "react";

export const MyComponent: React.FC = () => {
  const [username, setUsername] = React.useState("John Doe");

  React.useEffect(() => {
    setTimeout(() => {
      setUsername("John");
    }, 2500);
  }, []);

  return (
    <>
      <h4>{username}</h4>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
    </>
  );
};
