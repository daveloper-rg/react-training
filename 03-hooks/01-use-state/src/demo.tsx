import React from "react";

export const MyChildComponent = () => {
  React.useEffect(() => {
    console.log("El componente se acaba de montar en el dom");

    return () => console.log("** ME DESMONTAN !!***");
  }, []);

  return <h4>Hello from Child component</h4>;
};

export const MyComponent: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      {visible && <MyChildComponent />}
      <button onClick={() => setVisible(!visible)}>
        Toggle Child component visibility
      </button>
    </>
  );
};
