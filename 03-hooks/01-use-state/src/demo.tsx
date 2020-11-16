import React from "react";

export const MyComponent = () => {
  const [userInfo, setUserInfo] = React.useState({
    name: "John",
    lastname: "Doe",
  });

  return (
    <>
      <DisplayUsername name={userInfo.name} />
      <input
        value={userInfo.name}
        onChange={(e) =>
          setUserInfo({
            ...userInfo,
            name: e.target.value,
          })
        }
      />
      <input
        value={userInfo.lastname}
        onChange={(e) =>
          setUserInfo({
            ...userInfo,
            lastname: e.target.value,
          })
        }
      />
    </>
  );
};
interface Props {
  name: string;
}
// con ReactMemo si hacemos un cambio en lastname no se ejecuta DisplayUsername
export const DisplayUsername = React.memo((props: Props) => {
  console.log(
    "Hey I'm only rendered the first time, check React.memo + callback"
  );

  return <h3>{props.name}</h3>;
});
