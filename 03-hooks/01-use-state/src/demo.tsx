import React from "react";

export const MyComponent = () => {
  const inputEl = React.useRef(null);

  const onButtonClick = () => {
    console.log("YUUUEEEP ! TIIRAAA PATRAS GERVASIO !!!");
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <input type="text" />
      <button onClick={onButtonClick}>Focus the input</button>{" "}
    </>
  );
};
