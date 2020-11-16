import React from "react";

export const useWithRef = function <T>(initialValue: T) {
  const [state, setInternalState] = React.useState(initialValue);
  const ref = React.useRef(initialValue);

  const setState = (value: T) => {
    ref.current = value;
    setInternalState(value);
  };

  return [state, setState, ref] as const;
};

export const MyComponent: React.FC = () => {
  const [message, setMessage] = React.useState("initial message");
  const [seconds, setSeconds, secondsRef] = useWithRef(0);

  React.useEffect(() => {
    setTimeout(() => {
      console.log(seconds);
      setSeconds(1);
    }, 1000);

    setTimeout(() => {
      setMessage(`Total seconds: ${secondsRef.current}`);
    }, 2000);
  }, []);

  return (
    <>
      <h3>{message}</h3>
      <h4>{seconds}</h4>
    </>
  );
};
