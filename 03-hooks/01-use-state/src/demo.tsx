import React from "react";

interface Props {
  onReset: () => void;
}

const ResetValue: React.FC<Props> = React.memo((props) => {
  console.log(
    "Hey I'am only rendered the first time, check React.memo + callback"
  );

  return <button onClick={props.onReset}>Reset value</button>;
});

export const MyComponent = () => {
  const [username, setUsername] = React.useState("John");
  const [lastname, setLastname] = React.useState("Doe");

  //useCallback carga la función cuando se carga el DOM
  // y la cachea, así que no la repinta cada vez que se
  // llama al componente.
  const resetNameCallback = React.useCallback(() => {
    setUsername("");
  }, []);

  return (
    <>
      <h3>
        {username} {lastname}
      </h3>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input value={lastname} onChange={(e) => setLastname(e.target.value)} />
      <ResetValue onReset={resetNameCallback}>Reset name</ResetValue>
    </>
  );
};
